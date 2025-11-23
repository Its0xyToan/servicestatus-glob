import express from "express"
import { allStatuses } from "../../../statuses/index.js"

export function statusesRoute(router: express.Router) {
    router.get('/status/:prov/:service', async (req, res) => {
        const statusProvider = req.params.prov
        const statusObjective = req.params.service

        const prov = Object.entries(allStatuses).find(v => v[0].toLowerCase() === statusProvider.toLowerCase())
        if(!prov) return res.status(404).send("No prov found with inputted prov")

        if(statusObjective.toLowerCase() === "services") {
            return res.status(200).send({ ok: true, data: Object.keys(prov[1]) })
        }

        const serviceClass = Object.entries(prov[1]).find(v => v[0].toLowerCase() === statusObjective.toLowerCase())
        if(!serviceClass) return res.status(404).send("No service found with inputted service, /:prov/services to see all of them")

        const service = new serviceClass[1]()

        const data = await service.getGameStatus()
        res.status(200).send({ ok: true, data })
    })

    return router
}