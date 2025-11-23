import { WebSocket } from "ws"

const c = new WebSocket("ws://localhost:3000")
c.on("open", () => {
    console.log("Connected")
    c.send(JSON.stringify({ code: 1 }))
})

c.on("message", (message) => { console.log(`Recieved`, message.toString()) })
