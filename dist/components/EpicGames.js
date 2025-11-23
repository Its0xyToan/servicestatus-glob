import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { GameBaseUrl } from "../data/GameBaseUrl.js";
import { SimpleGame } from "./SimpleGame.js";
import { Game } from "./Game.js";
class GlobalStatus extends Game {
    statusProvider;
    constructor() {
        super({ name: "GlobalStatus" });
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: GameBaseUrl.EpicGames });
    }
    async getGameStatus() {
        return await this.statusProvider.getComponents();
    }
}
class FortniteStatus extends SimpleGame {
    constructor() {
        super({ name: "Fortnite", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class LegoFortniteStatus extends SimpleGame {
    constructor() {
        super({ name: "LEGO Fortnite", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class FortniteFestivalStatus extends SimpleGame {
    constructor() {
        super({ name: "Fortnite Festival", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class RocketRacingStatus extends SimpleGame {
    constructor() {
        super({ name: "Rocket Racing", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class RocketLeagueStatus extends SimpleGame {
    constructor() {
        super({ name: "Rocket League", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class RocketLeagueSideswipeStatus extends SimpleGame {
    constructor() {
        super({ name: "Rocket League Sideswipe", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class FallGuysStatus extends SimpleGame {
    constructor() {
        super({ name: "Fall Guys", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class EpicGamesStoreStatus extends SimpleGame {
    constructor() {
        super({ name: "Epic Games Store", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class EpicOnlineServicesStatus extends SimpleGame {
    constructor() {
        super({ name: "Epic Online Services", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class SupportACreatorStatus extends SimpleGame {
    constructor() {
        super({ name: "Support-A-Creator", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class UnrealEngineStatus extends SimpleGame {
    constructor() {
        super({ name: "Unreal Engine", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class UEFNStatus extends SimpleGame {
    constructor() {
        super({ name: "UEFN", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class EpicGamesWebsiteStatus extends SimpleGame {
    constructor() {
        super({ name: "Epic Games Website", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class TwinmotionCloudStatus extends SimpleGame {
    constructor() {
        super({ name: "Twinmotion Cloud", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class ArtStationStatus extends SimpleGame {
    constructor() {
        super({ name: "ArtStation", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class FabStatus extends SimpleGame {
    constructor() {
        super({ name: "Fab", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class MetaHumanCreatorStatus extends SimpleGame {
    constructor() {
        super({ name: "MetaHuman Creator", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class QuixelStatus extends SimpleGame {
    constructor() {
        super({ name: "Quixel", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class RealityScanStatus extends SimpleGame {
    constructor() {
        super({ name: "RealityScan", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
    }
}
class SketchfabStatus extends SimpleGame {
    constructor() {
        super({ name: "Sketchfab", baseUrl: GameBaseUrl.EpicGames, provider: AtlassianStatusPageProvider });
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
};
