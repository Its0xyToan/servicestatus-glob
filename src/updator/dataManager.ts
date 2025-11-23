import * as fs from "node:fs/promises"
import logger from "../logger/logger.js"
import path from "node:path"
import { fileURLToPath } from "node:url"

// Helper function to get the current date in YYYY-MM-DD format
function getTodayDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export class DataManager {
    // The queue structure remains the same
    queue: { element: any, prov: string, game: string, isArray: boolean }[] = []

    constructor() {}

    addQueue(element: any, prov: string, game: string, isArray: boolean) {
        this.queue.push({ element, prov, game, isArray })
    }

    // New, optimized push method
    async push() {
        logger.debug("Starting data push process with concurrent writes.")

        // 1. Group queue items by their unique file path
        const groupedData = new Map<string, any[]>();
        const date = getTodayDate();

        for (const item of this.queue) {
            // Incorporate the date into the filename
            const fileName = `${date}.json`;
            // Construct the unique file path
            const dirPath = path.join(path.dirname(fileURLToPath(import.meta.url)), `../../data/${item.prov}/${item.game}`);
            const filePath = path.join(dirPath, fileName);

            if (!groupedData.has(filePath)) {
                groupedData.set(filePath, []);
            }
            // Add the element to the array for that file path
            groupedData.get(filePath)!.push(item.element);
        }

        // Clear the queue after grouping
        this.queue = [];

        // 2. Create an array of promises, one for each unique file to be written
        const writePromises = Array.from(groupedData.entries()).map(async ([filePath, newElements]) => {
            logger.debug(`Processing ${newElements.length} items for file: ${filePath}`);

            let currentJson: { data: any[] } = { data: [] };

            try {
                // Read the file content
                const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
                // Parse only if content exists, otherwise default to empty structure
                currentJson = fileContent ? JSON.parse(fileContent) : { data: [] };
            } catch(e: any) {
                if (e.code === "ENOENT") {
                    // Directory doesn't exist, create it. File will be created on write.
                    logger.debug(`Directory not found for ${filePath}. Creating recursively.`);
                    await fs.mkdir(path.dirname(filePath), { recursive: true });
                } else {
                    // Log other fatal errors and continue to the next file
                    logger.fatal(`Error reading file ${filePath}: ${e}`);
                    return; // Skip writing for this file on read error
                }
            }

            // 3. Append all new data at once (Batch Write)
            currentJson.data.push(...newElements as never[]);

            // 4. Write the entire updated content back
            try {
                await fs.writeFile(filePath, JSON.stringify(currentJson, null, 2), { encoding: 'utf8' });
                logger.debug(`Successfully wrote ${newElements.length} elements to ${filePath}`);
            } catch (e: any) {
                logger.fatal(`Error writing file ${filePath}: ${e}`);
            }
        });

        // 5. Execute all file write operations concurrently
        await Promise.allSettled(writePromises);
        logger.debug("Data push complete.")
    }
}