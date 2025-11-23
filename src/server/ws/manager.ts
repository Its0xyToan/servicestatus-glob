import type { WebSocketServer, WebSocket } from "ws"
import type { Logger } from "../../logger/logger.js"

const connections = new Set<WebSocket>()

export const setupWss = async (logger: Logger, wss: WebSocketServer) => {
    wss.on('connection', (ws) => {
        connections.add(ws)
        logger.debug('A new client connected');

        ws.on('message', (message) => {
            try {
                const json = JSON.parse(message.toString());
                if(json.code === 1) {
                    ws.send(JSON.stringify({ code: 1, ok: true, message: "Connected" }));
                }

            } catch {
                ws.send(JSON.stringify({ code: 0, error: "There was an error while parsing JSON", ok: false }));
            }
        });

        ws.on('close', () => {
            logger.debug('A client disconnected');
        });
    });
}

export const sendGlobalEvent = (event: string, data: any) => {
    connections.forEach((val) => {
        val.send(JSON.stringify({ code: 2, event, data }));
    })
}