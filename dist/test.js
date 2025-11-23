import { DiscordStatus } from "./statuses/Discord.js";
import { EpicGamesStatus } from "./statuses/EpicGames.js";
import { TwitchStatus } from "./statuses/Twitch.js";
import { NormalizedDigitalOceanStatus } from "./statuses/DigitalOcean.js";
async function testAllStatuses() {
    console.log("🚀 Starting All Status Tests...\n");
    const allEntries = [
        {
            name: "EpicGames",
            entries: Object.entries(EpicGamesStatus)
        },
        {
            name: "Discord",
            entries: Object.entries(DiscordStatus)
        },
        {
            name: "Twitch",
            entries: Object.entries(TwitchStatus)
        },
        {
            name: "DigitalOcean",
            entries: Object.entries(NormalizedDigitalOceanStatus)
        }
    ];
    for (const e of allEntries) {
        const results = [];
        console.log(`${e.name} Status:`);
        for (const [key, GameClass] of e.entries) {
            try {
                // Instantiate the game class
                const gameInstance = new GameClass();
                const gameName = gameInstance.name || key;
                console.log(`Testing ${gameName}...`);
                // Fetch status
                const components = await gameInstance.getGameStatus();
                console.log(components);
                if (Array.isArray(components)) {
                    results.push({
                        name: gameName,
                        status: "All good",
                        components: components.length
                    });
                }
                else {
                    results.push({
                        name: gameName,
                        status: components.status,
                        components: components?.components?.length ?? 0
                    });
                    if (components?.components) {
                        components?.components.forEach((component) => results.push({ name: "|> " + component.name, status: component.status, components: 0 }));
                    }
                }
            }
            catch (error) {
                results.push({
                    name: key,
                    status: `❌ ERROR: ${error instanceof Error ? error.message : String(error)}`,
                    components: 0
                });
            }
        }
        console.log("\n📊 Test Summary:");
        console.table(results);
    }
}
// Run the test
testAllStatuses();
