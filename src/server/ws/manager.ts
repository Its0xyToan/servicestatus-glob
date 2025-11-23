import type { WebSocketServer } from "ws"
import type { Logger } from "../../logger/logger.js"

export const setupWss = async (logger: Logger, wss: WebSocketServer) => {
    wss.on('connection', (ws) => {
        logger.info('A new client connected');

        ws.on('message', (message) => {
            try {
                const json = JSON.parse(message.toString());
                if(json.code === 1) {
                    ws.send(JSON.stringify({ ok: true, message: "Connected" }));
                }

            } catch {
                ws.send(JSON.stringify({ error: "There was an error while parsing JSON", ok: false }));
            }
        });

        ws.on('close', () => {
            logger.info('A client disconnected');
        });
    });
}