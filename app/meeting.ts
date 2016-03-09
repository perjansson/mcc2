/// <reference path="../typings/agstopwatch/AGStopWatch.d.ts" />

import {Guid} from './guid';
import {Stopwatch} from './stopwatch';

module MeetingStatus {
    export const STARTED = 'STARTED';
    export const STOPPED = 'STOPPED';
}

class Currency {
  key: string;
  name: string;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }
}

export class Meeting {
  stopWatch: Stopwatch;
  id: string;
  numberOfAttendees: number;
  averageHourlyRate: number;
  currency: Currency = new Currency('BTC', 'Bitcoin');
  status: string = null;
  isGoodMeeting: boolean;

  constructor() {
    this.stopWatch = new Stopwatch();
  }

  start() {
    this.status = MeetingStatus.STARTED;
    this.id = Guid.newGuid();
    this.stopWatch.start();
  }

  stop() {
    this.status = MeetingStatus.STOPPED;
    this.stopWatch.stop();
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
    return Math.round(this.getExactMeetingCost()).toFixed(0);
  }

  getExactMeetingCost() {
    return this.getMeetingCostPerSecond() * this.getElapsedTimeInSeconds();
  }

  getMeetingCostPerSecond() {
    return this.numberOfAttendees * (this.averageHourlyRate / 3600);
  }

  getElapsedTimeInSeconds() {
    return this.stopWatch.elapsed / 1000;
  }

}
