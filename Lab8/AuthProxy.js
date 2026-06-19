export class AuthProxy {
  constructor(client, type, token) {
    this.client = client;
    this.type = type;
    this.token = token;
  }

  getAuthHeader() {
    if (this.type === "apikey") {
      return { "X-API-Key": this.token };
    }
    if (this.type === "jwt") {
      return { Authorization: "Bearer" + this.token };
    }
    if (this.type === "oauth") {
      return { Authoruzation: "OAuth" + this.token };
    }
    return {};
  }

  async request(req) {
    const authHeader = this.getAuthHeader();
    req = Object.assign({}, req, authHeader);

    return this.client.request(req);
  }
}
