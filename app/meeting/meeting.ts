/// <reference path="../../typings/agstopwatch/AGStopWatch.d.ts" />

import {Guid} from '../common/guid';
import {Currency} from '../currency/currency';
import {MeetingLocation} from '../common/meeting-location';
import {AGStopwatch} from '../../node_modules/agstopwatch/agstopwatch';

export class Meeting {

  stopWatch: AGStopwatch;
  id: string;
  status: MeetingStatus = null;
  numberOfAttendees: number;
  averageHourlyRate: number;
  currency: Currency = new Currency('BTC', 'Bitcoin');
  name: string;
  location: MeetingLocation;
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
