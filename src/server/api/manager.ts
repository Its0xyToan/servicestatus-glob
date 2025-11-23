import express, { type Application } from "express"
import type { Logger } from "../../logger/logger.js"
import { statusesRoute } from "./routes/statuses.js"

export const setupApi = async (logger: Logger, app: Application) => {
    app.use(express.json())
    app.use("/api/v1", statusesRoute(express.Router()))
}