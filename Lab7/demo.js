import { EventEmitter } from "./events.js";

const bus = new EventEmitter();

console.log("-- Кілька слухачів --");
const listener1 = (data) => console.log("Слухач 1 отримав:", data);
const listener2 = (data) => console.log("Слухач 2 отримав:", data);

bus.on("message", listener1);
bus.on("message", listener2);
bus.emit("message", "привіт");

console.log("-- Після відписки 1 слухача --");
bus.off("message", listener1);
bus.emit("message", "друге повідомлення");

console.log("-- Зламаний слухач --");
bus.on("data", () => {
  throw new Error("слухач зламався");
});
bus.on("data", (data) => console.log("Другий спрацював:", data));
bus.emit("data", 42);

console.log("-- Подія без слухачів --");
bus.emit("unknown", "нічого");
