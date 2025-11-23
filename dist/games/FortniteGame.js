import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { GameBaseUrl } from "../data/GameBaseUrl.js";
import { SimpleGame } from "./SimpleGame.js";
export class FortniteStatus extends SimpleGame {
    constructor() {
        super({ name: "Fortnite", baseUrl: GameBaseUrl.Fortnite, provider: AtlassianStatusPageProvider });
    }
}
