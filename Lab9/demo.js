import { log } from "./logger.js";

function add(a, b) {
  return a + b;
}

async function fetchUser(id) {
  await new Promise((r) => setTimeout(r, 50));
  return { id, name: "Користувач" };
}

function risky() {
  throw new Error("щось пішло не так");
}

async function main() {
  console.log("=== INFO + sync ===");
  const loggedAdd = log(add, "INFO");
  loggedAdd(2, 3);

  console.log("\n=== DEBUG + async ===");
  const loggedFetch = log(fetchUser, "DEBUG");
  await loggedFetch(42);

  console.log("\n=== ERROR + успіх (нічого не виводиться) ===");
  const loggedAddError = log(add, "ERROR");
  loggedAddError(10, 20);

  console.log("\n=== ERROR + помилка ===");
  const loggedRisky = log(risky, "ERROR");
  try {
    await loggedRisky();
  } catch (err) {
    console.log("Помилку спіймано в main:", err.message);
  }
}
main();
