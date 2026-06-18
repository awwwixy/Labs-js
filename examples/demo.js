import { dayGenerator, consumeWithTimeout } from "labs-lib";

console.log("=== Demo: dayGenerator ===");

const gen = dayGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log("=== Demo: consumeWithTimeout ===");

const gen2 = dayGenerator();
consumeWithTimeout(gen2, 1);
