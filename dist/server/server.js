import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';
import { setupApi } from "./api/manager.js";
import { setupWss } from "./ws/manager.js";
import { createLogger } from "../logger/logger.js";
export const ApiServer = {
    start: async function () {
        const logger = createLogger({ name: "API" });
        logger.info("Starting Http Server");
        // Http Server
        const app = express();
        const server = http.createServer(app);
        await setupApi(logger, app);
        logger.info("Starting WebSocket Server");
        // WebSocket server
        const wss = new WebSocketServer({ server });
        await setupWss(logger, wss);
        const PORT = process.env.PORT || 3000;
        server.listen(PORT, () => {
            logger.info(`Server listening on port ${PORT}`);
        });
    }
};
