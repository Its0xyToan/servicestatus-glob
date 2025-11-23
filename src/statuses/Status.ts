import type { Component } from "../types.js"

export abstract class Status {
    public name: string;
    protected constructor({ name }: { name: string }) {
        this.name = name;
    }

    abstract getGameStatus(): Promise<Component | Component[] | undefined>;
}