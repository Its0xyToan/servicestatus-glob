import logger from "./logger/logger.js";
import { configDotenv } from "dotenv";
import { ConsoleCommands } from "./commander/index.js";
import { ReloadableUpdator } from "./updator/reloadableUpdator.js";
import { ApiServer } from "./server/server.js";
configDotenv();
logger.info("Starting...");
console.log("  ___              _          ___ _        _           \n" +
    " ╱ __│ ___ _ ___ _(_)__ ___  ╱ __│ │_ __ _│ │_ _  _ ___\n" +
    " ╲__ ╲╱ ─_) '_╲ V ╱ ╱ _╱ ─_) ╲__ ╲  _╱ _` │  _│ ││ (_─<\n" +
    " │___╱╲___│_│  ╲_╱│_╲__╲___│ │___╱╲__╲__,_│╲__│╲_,_╱__╱\n" +
    "                                                       ");
async function main() {
    logger.info("Directly starting updator, use `/reload` to reload");
    ReloadableUpdator.startUpdator();
    logger.info("Updator Started");
    logger.info("Starting ConsoleCommands");
    await ConsoleCommands.start();
    logger.info("Started ConsoleCommands");
    logger.info("Starting Api and WebSocket server");
    await ApiServer.start();
    logger.info("Started API Server");
}
main();
