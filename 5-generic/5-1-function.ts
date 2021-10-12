{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number.");
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result);
  checkNotNullBad(null);

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number.");
    }
    return arg;
  }

  // generic
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid argument.");
    }
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
