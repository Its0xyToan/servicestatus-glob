import { Game } from "./Game.js";
export class SimpleGame extends Game {
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
