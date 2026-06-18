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

console.log("-- Тест LFU --");

const cube = memoize(
    (x) => {
        console.log("рахую куб", x);
        return x * x * x;
    },
    {maxSize: 2, strategy: "lfu"}
);

cube(1);
cube(1);
cube(1);
cube(2);    
cube(3);
cube(1);
cube(2);

console.log("-- Тест TTL --");

const getTime = memoize(
    (label) => {
        console.log("обчислюю для", label);
        return Date.now();
    },
    { ttl: 1000 }
);

getTime("a");
getTime("a");

setTimeout(() => {
    getTime("a");
    console.log("TTL спрацював");
}, 1500);