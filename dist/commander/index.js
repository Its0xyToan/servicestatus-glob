import * as Console from "console-command";
import logger from "../logger/logger.js";
import { ReloadableUpdator } from "../updator/reloadableUpdator.js";
Console.registerCommand(new Console.Command()
    .setExecutor("/reload")
    .setCallback(async (req) => {
    logger.info("Reloading ServiceStatus");
    await ReloadableUpdator.reloadUpdator();
    logger.info("Reloaded ServiceStatus");
}));
export const ConsoleCommands = {
    async start() {
        await Console.listenConsole();
    }
};
