export async function* dataStream(count) {
  for (let i = 1; i <= count; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    yield i;
  }
}

export async function processStream(stream) {
  let sum = 0;
  let count = 0;

  for await (const value of stream) {
    sum += value;
    count++;
  }

  let average = 0;
  if (count > 0) {
    average = sum / count;
  }

  return { sum, count, average };
}

export async function* faultyStream(count, failAt) {
  for (let i = 1; i <= count; i++) {
    if (i === failAt) {
      throw new Error(`Помилка в елементі ${i}`);
    }
    yield i;
  }
}
