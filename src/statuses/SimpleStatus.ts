import { Status } from "./Status.js"
import type { Component } from "../types.js"
import type { Provider } from "../providers/Provider.js"

export class SimpleStatus extends Status {
    private statusProvider: Provider
    constructor({ name, baseUrl, provider }: { name: string, baseUrl: string, provider: any }) {
        super({ name });
        this.statusProvider = new provider({ baseUrl })
    }

    async getGameStatus(): Promise<Component | undefined> {
        const components = await this.statusProvider.getComponents()
        return components.find((c) => c.name === this.name)
    }
}