{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network.");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 처리할 수 있는 곳에서 에러 처리하기
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
