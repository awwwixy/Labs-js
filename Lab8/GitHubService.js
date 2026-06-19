export class GitHubService {
  constructor(client) {
    this.client = client;
  }

  async getUser(username) {
    return this.client.request({
      method: "GET",
      url: `https://api.github.com/users/${username}`,
      headers: {},
    });
  }

  async getRepos(username) {
    return this.client.request({
      method: "GET",
      url: `https://api.github.com/users/${username}/repos`,
      headers: {},
    });
  }
}
