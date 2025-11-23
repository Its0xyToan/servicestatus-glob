import logger from "../logger/logger.js"
import { EpicGamesStatus } from "../statuses/EpicGames.js"
import { DiscordStatus } from "../statuses/Discord.js"
import { CloudflareStatus } from "../statuses/Cloudflare.js"
import { TwitchStatus } from "../statuses/Twitch.js"
import { DataManager } from "./dataManager.js"
import type { Component } from "../types.js"

let updatorId: any

const updatorStatuses = {
    "EpicGames": EpicGamesStatus,
    "Discord": DiscordStatus,
    "Cloudflare": CloudflareStatus,
    "Twitch": TwitchStatus
}

async function updator() {
    const startTime = Date.now()
    logger.info("Fetching data...")
    const entries = Object.entries(updatorStatuses)
    const dataManager = new DataManager()
    for (const entry of entries) {
        const [key, Statuses] = entry
        logger.debug(`Working on ${key}`)
        for (const [ game, StatusClass ] of Object.entries(Statuses)) {
            logger.debug(`- ${game}`)

            const s = new StatusClass()
            const status = await s.getGameStatus() as Component | Component[]

            if(Array.isArray(status)) logger.debug("Array")
            logger.debug("Adding to queue")

            if ("name" in status) {
                dataManager.addQueue({
                    time: Date.now(),
                    status: status.status,
                    components: status?.components?.map((c) => ({
                        name: c.name,
                        status: c.status,
                    }))
                }, key, status.name, true)
            }
        }
    }

    const endTime = Date.now()
    logger.info(`Done fetching for ${dataManager.queue.length} services, took ${endTime - startTime}ms`)

    const startTime2 = Date.now()
    logger.info("Pushing data")
    await dataManager.push()
    const endTime2 = Date.now()
    logger.info(`Done pushing, took ${endTime2 - startTime2}ms`)
}


export const Updator = {
    startUpdator: () => {
        updator()
        updatorId = setInterval(updator, 120_000)
    },
    stopUpdator: () => {
        clearInterval(updatorId)
    },
    action: updator
}
