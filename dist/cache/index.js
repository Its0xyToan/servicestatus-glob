const RequestCacheMap = new Map();
const requestCache = {
    get: (url) => {
        const cached = RequestCacheMap.get(url);
        if (!cached || Date.now() > cached.alive)
            return null;
        return cached.value;
    },
    set: (url, value, time) => RequestCacheMap.set(url, { value, alive: Date.now() + (time ?? 10_000) }),
    delete: (url) => RequestCacheMap.delete(url),
};
export const Cache = { requestCache };
