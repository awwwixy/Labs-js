import { PriorityQueue } from "./priorityQueue.js";

const pq = new PriorityQueue();

pq.enqueue("низький", 1);
pq.enqueue("високий", 10);
pq.enqueue("середній", 5);
pq.enqueue("ще один високий", 10);

console.log("-- peek (без видалення) --");
console.log("highest:", pq.peek("highest"));
console.log("lowest:", pq.peek("lowest"));
console.log("oldest:", pq.peek("oldest"));
console.log("newest", pq.peek("newest"));

console.log("-- dequeue (з видаленням) --");
console.log(pq.dequeue("highest"));
console.log(pq.dequeue("highest"));
console.log(pq.dequeue("oldest"));
console.log(pq.dequeue("newest"));
console.log(pq.dequeue("highest"));
