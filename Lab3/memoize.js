export function memoize(fn, options = {}) {
    const maxSize = options.maxSize || Infinity;
    const cache = new Map();
    const strategy = options.strategy || "lru";
    const frequency = new Map();

return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
        const value = cache.get(key);
        
        if (strategy === "lfu") {
            frequency.set(key, frequency.get(key) + 1);
        } else {
            cache.delete(key);
            cache.set(key, value);
        }

        return value;
    }

   const result = fn(...args);
   cache.set(key, result);
   frequency.set(key, 1);

   if (cache.size > maxSize) {
    if (strategy === "lfu"){
        let minKey = null
        let minCount = Infinity;
        for (const [k, count] of frequency) {
            if (count < minCount) {
                minCount = count;
                minKey = k;
            }
        }
        cache.delete(minKey);
        frequency.delete(minKey);
    } else {
    const oldestKey = cache.keys().next().value;
    cache.delete(oldestKey);
    frequency.delete(oldestKey);
   }
}

   return result;
  };
}
