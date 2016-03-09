export class Meeting {
  id: string;
  name: string;
  numberOfAttendees: number;
  averageHourlyRate: number;
  currency: string = 'BTC';
  status: string;
  meetingStartTime: Date;
  meetingStopTime: Date;
  isGoodMeeting: boolean;

  constructor() {
    this.reset();
  }

  start() {
    this.status = 'started';
  }

  stop() {
    this.status = 'stopped';
  }

  reset() {
    this.status = null;
    this.id = this.generateId();
    this.name = null;
    this.currency = 'BTC';
    this.meetingStartTime = null;
    this.meetingStopTime = null;
  }

  generateId() {
    return 'fakeId';
  }

  isNotStarted() {
    return this.status === null;
  }

  isStarted() {
    return this.status === 'started';
  }

  isStopped() {
    return this.status === 'stopped';
  }

  getCost() {
    // TODO
    return 1337;
  }

  getCurrency() {
    return 'SEK';
  }

}
