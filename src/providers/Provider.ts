import type { Component } from "../types.js"

export abstract class Provider {
    public name: string;
    protected cacheTime: number = 10_000;

    protected constructor({ name }: { name: string }) {
        this.name = name
    }

    /**
     * Gets the statuses from the page
     */
    abstract getComponents(): Promise<Component[]>

    /**
     * Sets the time in ms of how requests should cache themselves
     * @param ms - The time in ms
     */
    setCacheTime(ms: number): void {
        this.cacheTime = ms
    }
}