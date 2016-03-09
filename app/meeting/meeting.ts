/// <reference path="../../typings/agstopwatch/AGStopWatch.d.ts" />

import {AGStopwatch} from '../../node_modules/agstopwatch/agstopwatch';

const enum MeetingStatus { Started, Stopped };

class Currency {
  key: string;
  name: string;

  constructor(key: string, name: string) {
    this.key = key;
    this.name = name;
  }
}

export class Meeting {
  stopWatch: AGStopwatch;
  id: string;
  numberOfAttendees: number;
  averageHourlyRate: number;
  currency: Currency = new Currency('BTC', 'Bitcoin');
  status: MeetingStatus = null;
  isGoodMeeting: boolean;

  constructor() {
    this.stopWatch = new AGStopwatch();
  }

  start() {
    this.status = MeetingStatus.Started;
    this.id = Guid.newGuid();
    this.stopWatch.start();
  }

  stop() {
    this.status = MeetingStatus.Stopped;
    this.stopWatch.stop();
  }

  isNotStarted() {
    return this.status === null;
  }

  isStarted() {
    return this.status === MeetingStatus.Started;
  }

  isStopped() {
    return this.status === MeetingStatus.Stopped;
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

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
