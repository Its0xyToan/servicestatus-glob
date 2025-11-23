import { Status } from "./Status.js";
import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { ApisBaseUrl } from "../data/ApisBaseUrl.js";
import { SimpleStatus } from "./SimpleStatus.js";
class GlobalStatus extends Status {
    statusProvider;
    constructor() {
        super({ name: "GlobalStatus" });
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.Twitch });
    }
    async getGameStatus() {
        return await this.statusProvider.getComponents();
    }
}
class LoginStatus extends SimpleStatus {
    constructor() {
        super({ name: "Login", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
class WebStatus extends SimpleStatus {
    constructor() {
        super({ name: "Web", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
class ChatStatus extends SimpleStatus {
    constructor() {
        super({ name: "Chat", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
class VideoWatchingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Video (Watching)", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
class VideoBroadcastingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Video (Broadcasting)", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
class PurchasesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Purchases", baseUrl: ApisBaseUrl.Twitch, provider: AtlassianStatusPageProvider });
    }
}
export const TwitchStatus = {
    GlobalStatus,
    LoginStatus,
    WebStatus,
    ChatStatus,
    VideoWatchingStatus,
    VideoBroadcastingStatus,
    PurchasesStatus,
};
