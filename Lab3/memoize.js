export function memoize(fn) {
    const cache = new Map();
}
return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
        return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
};

function slowAdd(a, b) {
    console.log("рахую...");
    return a+b;
}

const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3));
console.log(fastAdd(2, 3));
console.log(fastAdd(5, 7));