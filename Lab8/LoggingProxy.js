export class LoggingProxy {
  constructor(client) {
    this.client = client;
  }

  async request(req) {
    console.log(`[LoggingProxy] запит до ${req.url}`);
    const start = Date.now();

    const response = await this.client.request(req);

    const time = Date.now() - start;
    console.log(`[LoggingProxy] відповідь ${response.status} за ${time}мс`);

    return response;
  }
}
