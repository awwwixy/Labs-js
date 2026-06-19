import { dataStream, processStream, faultyStream } from "./streamProcess.js";

async function runNormal() {
  console.log("-- Обробка потоку --");
  const result = await processStream(dataStream(5));
  console.log("Результат:", result);
}

async function runBig() {
  console.log("-- Великий потік --");
  const result = await processStream(dataStream(100));
  console.log("Оброблено елементів:", result.count);
  console.log("Сума:", result.sum);
}

async function runFaulty() {
  console.log("-- Потік з помилкою --");
  try {
    await processStream(faultyStream(10, 4));
    console.log("Це не виведеться ");
  } catch (err) {
    console.log("Спіймати помилку:", err.message);
  }
}

async function main() {
  await runNormal();
  await runBig();
  await runFaulty();
}
main();
