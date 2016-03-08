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
    this.status = 'notStarted';
  }

  start() {
    this.reStart();
  }

  resume() {
    this.status = 'running';
  }

  pause() {
    this.status = 'paused';
  }

  stop() {
    this.status = 'stopped';
  }

  reStart() {
    this.id = this.generateId();
    this.name = null;
    this.currency = 'BTC';
    this.meetingStartTime = null;
    this.meetingStopTime = null;
    this.status = 'running';
  }

  generateId() {
    return 'fakeId';
  }

  hasStarted() {
    return this.status !== 'notStarted';
  }

  isRunning() {
    return this.status === 'running';
  }

  isPaused() {
    return this.status === 'paused';
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
