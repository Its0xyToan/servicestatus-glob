import { Status } from "./Status.js";
export class SimpleStatus extends Status {
    statusProvider;
    constructor({ name, baseUrl, provider }) {
        super({ name });
        this.statusProvider = new provider({ baseUrl });
    }
    async getGameStatus() {
        const components = await this.statusProvider.getComponents();
        return components.find((c) => c.name === this.name);
    }
}
