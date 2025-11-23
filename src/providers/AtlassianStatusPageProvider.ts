import { Provider } from "./Provider.js"
import axios from "axios"
import { type Component, Statuses } from "../types.js"
import { Cache } from "../cache/index.js"

export class AtlassianStatusPageProvider extends Provider {
    private readonly base: string;

    constructor({ baseUrl }: { baseUrl: string }) {
        super({ name: "AtlassianStatusPage" })
        this.base = baseUrl
    }

    private async call(route: string): Promise<any> {
        const fullRoute = this.base + route
        const hit = Cache.requestCache.get(fullRoute)
        if(hit) return hit

        const request = await axios.get(fullRoute)
        Cache.requestCache.set(fullRoute, request.data, this.cacheTime)

        return request.data
    }

    private serializeStatus(status: string) {
        switch(status) {
            case "operational": return Statuses.Operational;
            case "degraded_performance": return Statuses.Degraded;
            case "partial_outage": return Statuses.PartialOutage;
            case "major_outage": return Statuses.MajorOutage;
            case "under_maintenance": return Statuses.Maintenance
        }

        return status
    }

    private serializeComponents(components: any[]) {
        let c = new Map()

        // 1. Create a Set of all IDs that are children of a group
        const childIds = new Set();
        components.forEach((comp) => {
            if (comp.group && Array.isArray(comp.components)) {
                comp.components.forEach((id: any) => childIds.add(id));
            }
        });

        components.forEach((component: any) => {
            // 2. If this ID exists in the child set, skip it (it will be processed inside its group)
            if (childIds.has(component.id)) {
                return;
            }

            if(component.group) {
                c.set(component.id, {
                    id: component.id,
                    name: component.name,
                    description: component.description,
                    status: this.serializeStatus(component.status),
                    isGroup: true,
                    components: component.components.map((childId: any) => {
                        const childComponent = components.find(a => a.id === childId)

                        if (!childComponent) return null;

                        return {
                            id: childId,
                            name: childComponent.name,
                            description: childComponent.description,
                            status: this.serializeStatus(childComponent.status),
                            isGroup: false,
                        };
                    }).filter((child: any) => child !== null)
                })
            } else {
                c.set(component.id, {
                    id: component.id,
                    name: component.name,
                    description: component.description,
                    status: this.serializeStatus(component.status),
                    isGroup: false
                })
            }
        })

        return Array.from(c.values())
    }

    public async getComponents(): Promise<Component[]> {
        const summary = await this.call("/summary.json")
        return this.serializeComponents(summary.components)
    }
}