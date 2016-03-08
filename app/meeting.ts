export class Meeting {
  id: string;
  name: string;
  numberOfAttendees: number;
  averageHourlyRate: number;
  currency: string;
  status: string;
  meetingStartTime: Date;
  meetingStopTime: Date;
  isGoodMeeting: boolean;

  constructor() {
    this.status = 'notStarted';
  }

  start() {
    this.clear();
    this.id = this.generateId();
    this.status = 'running';
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

  clear() {
    this.id = null;
    this.name = null;
    this.meetingStartTime = null;
    this.meetingStopTime = null;
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
