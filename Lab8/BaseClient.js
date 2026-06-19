export class BaseClient {
  async request(req) {
    console.log(`[BaseClient] ${req.method} ${req.url}`);
    console.log(`[BaseClient] заголовки:`, req.headers);

    return {
      status: 200,
      body: { message: "OK", url: req.url },
    };
  }
}
