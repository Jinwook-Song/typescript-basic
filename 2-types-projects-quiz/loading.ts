{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (process: ResourceLoadState) => {
    switch (process.state) {
      case "loading":
        console.log("loading...");
        break;
      case "success":
        console.log(process.response.body);
        break;
      case "fail":
        console.log(process.reason);
        break;
      default:
        throw new Error("unknwon state");
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
