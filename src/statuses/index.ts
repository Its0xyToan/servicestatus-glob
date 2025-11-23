import { CloudflareStatus} from "./Cloudflare.js"
import { DigitalOceanStatus } from "./DigitalOcean.js"
import { DiscordStatus } from "./Discord.js"
import { EpicGamesStatus } from "./EpicGames.js"
import { TwitchStatus } from "./Twitch.js"

export const allStatuses = {
    "Cloudflare": CloudflareStatus,
    "DigitalOcean": DigitalOceanStatus,
    "Discord": DiscordStatus,
    "EpicGames": EpicGamesStatus,
    "Twitch": TwitchStatus,
}