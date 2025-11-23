import { Status } from "./Status.js";
import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { ApisBaseUrl } from "../data/ApisBaseUrl.js";
import { SimpleStatus } from "./SimpleStatus.js";
class GlobalStatus extends Status {
    statusProvider;
    constructor() {
        super({ name: "GlobalStatus" });
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.Roblox });
    }
    async getGameStatus() {
        return await this.statusProvider.getComponents();
    }
}
class UserStatus extends SimpleStatus {
    constructor() {
        super({ name: "User", baseUrl: ApisBaseUrl.Roblox, provider: AtlassianStatusPageProvider });
    }
}
class PlayerStatus extends SimpleStatus {
    constructor() {
        super({ name: "Player", baseUrl: ApisBaseUrl.Roblox, provider: AtlassianStatusPageProvider });
    }
}
class CreatorStatus extends SimpleStatus {
    constructor() {
        super({ name: "Creator", baseUrl: ApisBaseUrl.Roblox, provider: AtlassianStatusPageProvider });
    }
}
export const RobloxStatus = {
    GlobalStatus,
    UserStatus,
    PlayerStatus,
    CreatorStatus,
};
