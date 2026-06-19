import { BaseClient } from "./BaseClient.js";
import { AuthProxy } from "./AuthProxy.js";
import { LoggingProxy } from "./LoggingProxy.js";
import { GitHubService } from "./GitHubService.js";

async function main() {
  const base = new BaseClient();
  const logged = new LoggingProxy(base);
  const authed = new AuthProxy(logged, "jwt", "me-secret-token");

  console.log("=== Запит getUser ===");
  const user = await github.getUser("octocat");
  console.log("Відповідь:", user.body);

  console.log("\n=== Те саме, але з API Key ===");
  const base2 = new BaseClient();
  const authed2 = new AuthProxy(base2, "apikey", "key-12345");
  const github2 = new GitHubService(authed2);
  await github2.getUser("torvalds");
}

main();
