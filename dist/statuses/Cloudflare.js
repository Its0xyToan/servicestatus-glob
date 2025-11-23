import { Status } from "./Status.js";
import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { ApisBaseUrl } from "../data/ApisBaseUrl.js";
import { SimpleStatus } from "./SimpleStatus.js";
class GlobalStatus extends Status {
    statusProvider;
    constructor() {
        super({ name: "GlobalStatus" });
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.Cloudflare });
    }
    async getGameStatus() {
        return await this.statusProvider.getComponents();
    }
}
class SitesServicesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Cloudflare Sites and Services", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class AfricaStatus extends SimpleStatus {
    constructor() {
        super({ name: "Africa", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class AsiaStatus extends SimpleStatus {
    constructor() {
        super({ name: "Asia", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class EuropeStatus extends SimpleStatus {
    constructor() {
        super({ name: "Europe", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class LatinAmericaCaribbeanStatus extends SimpleStatus {
    constructor() {
        super({ name: "Latin America & the Caribbean", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class MiddleEastStatus extends SimpleStatus {
    constructor() {
        super({ name: "Middle East", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class NorthAmericaStatus extends SimpleStatus {
    constructor() {
        super({ name: "North America", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
class OceaniaStatus extends SimpleStatus {
    constructor() {
        super({ name: "Oceania", baseUrl: ApisBaseUrl.Cloudflare, provider: AtlassianStatusPageProvider });
    }
}
export const CloudflareStatus = {
    GlobalStatus,
    SitesServicesStatus,
    AfricaStatus,
    AsiaStatus,
    EuropeStatus,
    LatinAmericaCaribbeanStatus,
    MiddleEastStatus,
    NorthAmericaStatus,
    OceaniaStatus,
};
