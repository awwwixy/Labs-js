import { memoize } from "./memoize.js";

function slowAdd(a, b) {
    console.log("рахую...");
    return a+b;
}

const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3));
console.log(fastAdd(2, 3));
console.log(fastAdd(5, 7));

console.log("-- Тест LRU --");

const square = memoize(
    (x) => {
        console.log("рахую квадрат", x);
        return x*x;
    },
    { maxSize: 2 }
);

square(1);
square(2); 
square(1); 
square(3); 
square(2); 
square(1); 
