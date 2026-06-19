import { asyncMapCallback, asyncMapPromise } from "./asyncArray.js";

const numbers = [1, 2, 3, 4, 5];
const double = (x) => x * 2;

//Callback
console.log("-- Callback --");
asyncMapCallback(numbers, double, (err, result) => {
  if (err) {
    console.log("Помилка:", err.message);
  } else {
    console.log("Результат:", result);
  }
});

//Promise
async function runPromise() {
  console.log("-- Promice --");
  try {
    const result = await asyncMapPromise(numbers, double);
    console.log("Результат:", result);
  } catch (err) {
    console.log("Помилка:", err.message);
  }
}
runPromise();

//AbortController
async function runAbort() {
  console.log("-- Скасування --");
  const controller = new AbortController();

  setTimeout(() => controller.abort(), 150);

  try {
    const result = await asyncMapPromise(numbers, double, controller.signal);
    console.log("Результат:", result);
  } catch (err) {
    console.log("Перервано:", err.message);
  }
}
runAbort();
