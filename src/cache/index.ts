const RequestCacheMap = new Map();

const requestCache = {
    get: (url: string) => {
        const cached = RequestCacheMap.get(url);
        if (!cached || Date.now() > cached.alive) return null;
        return cached.value
    },
    set: (url: string, value: any, time?: number) =>
        RequestCacheMap.set(url, { value, alive: Date.now() + (time ?? 10_000) }),
    delete: (url: string) => RequestCacheMap.delete(url),
}

export const Cache = { requestCache }