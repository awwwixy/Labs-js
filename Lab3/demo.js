import { memoize } from "./memoize.js";

function slowAdd(a, b) {
    console.log("рахую...");
    return a+b;
}

const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3));
console.log(fastAdd(2, 3));
console.log(fastAdd(5, 7));