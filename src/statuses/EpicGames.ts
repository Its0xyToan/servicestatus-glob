import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js"
import { ApisBaseUrl } from "../data/ApisBaseUrl.js"
import { SimpleStatus } from "./SimpleStatus.js"
import { Status } from "./Status.js"
import  { type Provider } from "../providers/Provider.js"

class GlobalStatus extends Status {
    private statusProvider: Provider
    constructor() {
        super({ name: "GlobalStatus" })
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.EpicGames })
    }

    async getGameStatus() {
        return await this.statusProvider.getComponents()
    }
}

class FortniteStatus extends SimpleStatus {
    constructor() {
        super({ name: "Fortnite", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class LegoFortniteStatus extends SimpleStatus {
    constructor() {
        super({ name: "LEGO Fortnite", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class FortniteFestivalStatus extends SimpleStatus {
    constructor() {
        super({ name: "Fortnite Festival", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class RocketRacingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Rocket Racing", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class RocketLeagueStatus extends SimpleStatus {
    constructor() {
        super({ name: "Rocket League", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class RocketLeagueSideswipeStatus extends SimpleStatus {
    constructor() {
        super({ name: "Rocket League Sideswipe", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class FallGuysStatus extends SimpleStatus {
    constructor() {
        super({ name: "Fall Guys", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class EpicGamesStoreStatus extends SimpleStatus {
    constructor() {
        super({ name: "Epic Games Store", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class EpicOnlineServicesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Epic Online Services", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class SupportACreatorStatus extends SimpleStatus {
    constructor() {
        super({ name: "Support-A-Creator", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class UnrealEngineStatus extends SimpleStatus {
    constructor() {
        super({ name: "Unreal Engine", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class UEFNStatus extends SimpleStatus {
    constructor() {
        super({ name: "UEFN", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class EpicGamesWebsiteStatus extends SimpleStatus {
    constructor() {
        super({ name: "Epic Games Website", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class TwinmotionCloudStatus extends SimpleStatus {
    constructor() {
        super({ name: "Twinmotion Cloud", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class ArtStationStatus extends SimpleStatus {
    constructor() {
        super({ name: "ArtStation", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class FabStatus extends SimpleStatus {
    constructor() {
        super({ name: "Fab", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class MetaHumanCreatorStatus extends SimpleStatus {
    constructor() {
        super({ name: "MetaHuman Creator", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class QuixelStatus extends SimpleStatus {
    constructor() {
        super({ name: "Quixel", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class RealityScanStatus extends SimpleStatus {
    constructor() {
        super({ name: "RealityScan", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

class SketchfabStatus extends SimpleStatus {
    constructor() {
        super({ name: "Sketchfab", baseUrl: ApisBaseUrl.EpicGames, provider: AtlassianStatusPageProvider })
    }
}

export const EpicGamesStatus = {
    GlobalStatus,
    FortniteStatus,
    LegoFortniteStatus,
    FortniteFestivalStatus,
    RocketRacingStatus,
    RocketLeagueStatus,
    RocketLeagueSideswipeStatus,
    FallGuysStatus,
    EpicGamesStoreStatus,
    EpicOnlineServicesStatus,
    SupportACreatorStatus,
    UnrealEngineStatus,
    UEFNStatus,
    EpicGamesWebsiteStatus,
    TwinmotionCloudStatus,
    ArtStationStatus,
    FabStatus,
    MetaHumanCreatorStatus,
    QuixelStatus,
    RealityScanStatus,
    SketchfabStatus
}