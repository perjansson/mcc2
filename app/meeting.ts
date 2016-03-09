import {Guid} from './guid';

module MeetingStatus {
    export const STARTED = "STARTED";
    export const STOPPED = "STOPPED";
}

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
    this.status = MeetingStatus.STARTED;
  }

  stop() {
    this.status = MeetingStatus.STOPPED;
  }

  reset() {
    this.status = null;
    this.id = Guid.newGuid();
    this.name = null;
    this.currency = 'BTC';
    this.meetingStartTime = null;
    this.meetingStopTime = null;
  }

  isNotStarted() {
    return this.status === null;
  }

  isStarted() {
    return this.status === MeetingStatus.STARTED;
  }

  isStopped() {
    return this.status === MeetingStatus.STOPPED;
  }

  getCost() {
    // TODO
    return 1337;
  }

  getCurrency() {
    return 'SEK';
  }

}
