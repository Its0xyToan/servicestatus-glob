import { Status } from "./Status.js";
import { AtlassianStatusPageProvider } from "../providers/AtlassianStatusPageProvider.js";
import { ApisBaseUrl } from "../data/ApisBaseUrl.js";
import { SimpleStatus } from "./SimpleStatus.js";
class GlobalStatus extends Status {
    statusProvider;
    constructor() {
        super({ name: "GlobalStatus" });
        this.statusProvider = new AtlassianStatusPageProvider({ baseUrl: ApisBaseUrl.DigitalOcean });
    }
    async getGameStatus() {
        return await this.statusProvider.getComponents();
    }
}
// --- Global Services Classes ---
class ApiStatus extends SimpleStatus {
    constructor() {
        super({ name: "API", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class BillingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Billing", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class ByoipStatus extends SimpleStatus {
    constructor() {
        super({ name: "BYOIP", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class CloudControlPanelStatus extends SimpleStatus {
    constructor() {
        super({ name: "Cloud Control Panel", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class CloudFirewallStatus extends SimpleStatus {
    constructor() {
        super({ name: "Cloud Firewall", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class CommunityStatus extends SimpleStatus {
    constructor() {
        super({ name: "Community", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class DnsStatus extends SimpleStatus {
    constructor() {
        super({ name: "DNS", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class SupportCenterStatus extends SimpleStatus {
    constructor() {
        super({ name: "Support Center", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class ReservedIpStatus extends SimpleStatus {
    constructor() {
        super({ name: "Reserved IP", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class WwwStatus extends SimpleStatus {
    constructor() {
        super({ name: "WWW", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class GenAiPlatformStatus extends SimpleStatus {
    constructor() {
        super({ name: "GenAI Platform", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
const GlobalServicesStatus = {
    ApiStatus,
    BillingStatus,
    ByoipStatus,
    CloudControlPanelStatus,
    CloudFirewallStatus,
    CommunityStatus,
    DnsStatus,
    SupportCenterStatus,
    ReservedIpStatus,
    WwwStatus,
    GenAiPlatformStatus,
};
// --- Regional Services Classes ---
class AppPlatformStatus extends SimpleStatus {
    constructor() {
        super({ name: "App Platform", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class ContainerRegistryStatus extends SimpleStatus {
    constructor() {
        super({ name: "Container Registry", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class DropletsStatus extends SimpleStatus {
    constructor() {
        super({ name: "Droplets", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class EventProcessingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Event Processing", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class FunctionsStatus extends SimpleStatus {
    constructor() {
        super({ name: "Functions", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class GpuDropletsStatus extends SimpleStatus {
    constructor() {
        super({ name: "GPU Droplets", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class ManagedDatabasesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Managed Databases", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class MonitoringStatus extends SimpleStatus {
    constructor() {
        super({ name: "Monitoring", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class NetworkingStatus extends SimpleStatus {
    constructor() {
        super({ name: "Networking", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class NetworkFileStorageStatus extends SimpleStatus {
    constructor() {
        super({ name: "Network File Storage", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class KubernetesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Kubernetes", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class LoadBalancersStatus extends SimpleStatus {
    constructor() {
        super({ name: "Load Balancers", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class SpacesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Spaces", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class SpacesCdnStatus extends SimpleStatus {
    constructor() {
        super({ name: "Spaces CDN", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class VpcStatus extends SimpleStatus {
    constructor() {
        super({ name: "VPC", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
class VolumesStatus extends SimpleStatus {
    constructor() {
        super({ name: "Volumes", baseUrl: ApisBaseUrl.DigitalOcean, provider: AtlassianStatusPageProvider });
    }
}
const RegionalServicesStatus = {
    AppPlatformStatus,
    ContainerRegistryStatus,
    DropletsStatus,
    EventProcessingStatus,
    FunctionsStatus,
    GpuDropletsStatus,
    ManagedDatabasesStatus,
    MonitoringStatus,
    NetworkingStatus,
    NetworkFileStorageStatus,
    KubernetesStatus,
    LoadBalancersStatus,
    SpacesStatus,
    SpacesCdnStatus,
    VpcStatus,
    VolumesStatus,
};
export const DigitalOceanStatus = {
    GlobalStatus,
    GlobalServicesStatus,
    RegionalServicesStatus,
};
export const NormalizedDigitalOceanStatus = { GlobalStatus, ...GlobalServicesStatus, ...RegionalServicesStatus, };
