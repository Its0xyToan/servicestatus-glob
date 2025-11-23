import logger from "../logger/logger.js"

type UpdatorModule = {
    Updator: {
        startUpdator: () => void;
        stopUpdator: () => void;
        action: () => void;
    };
};

let manager: any

export const ReloadableUpdator = {
    startUpdator: () => {
        manager = startReloadableUpdator("./updator.js")
    },
    reloadUpdator: async () => {
        manager.reload()
    },
    stopUpdator: () => {
        manager.getCurrentUpdator().stopUpdator()
    }
}




/**
 * Creates and starts a dynamically reloadable instance of the Updator module.
 * @param modulePath The path to the compiled Updator module file (e.g., './updator.js').
 */
export function startReloadableUpdator(modulePath: string) {
    let currentUpdator: UpdatorModule['Updator'] | null = null;

    async function reloadUpdatorModule() {
        logger.info("Starting Updator Reload");

        if (currentUpdator && currentUpdator.stopUpdator) {
            currentUpdator.stopUpdator();
            logger.warn("Stopped old Updator interval.");
        }

        const cacheBuster = `?v=${Date.now()}`;
        const moduleUrl = `${modulePath}${cacheBuster}`;

        try {
            const newModule = await import(moduleUrl) as UpdatorModule;

            currentUpdator = newModule.Updator;
            currentUpdator.startUpdator();
            logger.info("New Updator module loaded and started.");

        } catch (error) {
            logger.error("❌ Failed to dynamically load Updator module:", error);
        }
    }

    reloadUpdatorModule();

    return {
        reload: reloadUpdatorModule,
        triggerAction: () => {
            if (currentUpdator && currentUpdator.action) {
                currentUpdator.action();
                console.log("Triggered Updator action.");
            } else {
                console.log("Updator module not yet loaded or missing action.");
            }
        },
        getCurrentUpdator: () => currentUpdator
    };
}