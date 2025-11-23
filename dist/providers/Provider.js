export class Provider {
    name;
    cacheTime = 10_000;
    constructor({ name }) {
        this.name = name;
    }
    /**
     * Sets the time in ms of how requests should cache themselves
     * @param ms - The time in ms
     */
    setCacheTime(ms) {
        this.cacheTime = ms;
    }
}
