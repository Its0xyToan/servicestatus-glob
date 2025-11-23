import { Status } from "./Status.js"
import type { Provider } from "../providers/Provider.js"
import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js"
import { ApisBaseUrl } from "../data/ApisBaseUrl.js"
import type { Component } from "../types.js"
import { SimpleStatus } from "./SimpleStatus.js"

class GlobalStatus extends Status {
    private statusProvider: Provider
    constructor() {
        super({ name: "GlobalStatus" })
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.Discord })
    }

    async getGameStatus(): Promise<Component[] | undefined> {
        return await this.statusProvider.getComponents()
    }
}

class ApiStatus extends SimpleStatus {
    constructor() {
        super({ name: "API", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class MediaProxyStatus extends SimpleStatus {
    constructor() {
        super({ name: "Media Proxy", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class GatewayStatus extends SimpleStatus {
    constructor() {
        super({ name: "Gateway", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class PushNotificationsStatus extends SimpleStatus {
    constructor() {
        super({ name: "Push Notifications", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class SearchStatus extends SimpleStatus {
    constructor() {
        super({ name: "Search", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class VoiceStatus extends SimpleStatus {
    constructor() {
        super({ name: "Voice", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class ClientStatus extends SimpleStatus {
    constructor() {
        super({ name: "Client", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class ThirdPartyStatus extends SimpleStatus {
    constructor() {
        super({ name: "Third-party", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class ServerWebPagesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Server Web Pages", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class PaymentsStatus extends SimpleStatus {
    constructor() {
        super({ name: "Payments", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

class MarketingSiteStatus extends SimpleStatus {
    constructor() {
        super({ name: "Marketing Site", baseUrl: ApisBaseUrl.Discord, provider: AtlassianStatusPageProvider })
    }
}

export const DiscordStatus = {
    GlobalStatus,
    ApiStatus,
    MediaProxyStatus,
    GatewayStatus,
    PushNotificationsStatus,
    SearchStatus,
    VoiceStatus,
    ClientStatus,
    ThirdPartyStatus,
    ServerWebPagesStatus,
    PaymentsStatus,
    MarketingSiteStatus,
}