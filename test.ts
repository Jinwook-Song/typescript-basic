interface TimeManagerInterface {
  now: number;
  prevTimestamp: number | null;
  receivedCount: number;
}

export class TimeManager implements TimeManagerInterface {
  now: number;
  prevTimestamp: number | null;
  receivedCount: number;

  constructor() {
    this.now = Date.now();
    this.prevTimestamp = null;
    this.receivedCount = 0;
  }
}
const timer = new TimeManager();
console.log(timer.now, timer.prevTimestamp, timer.receivedCount);
