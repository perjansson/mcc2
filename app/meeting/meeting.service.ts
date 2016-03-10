import {Injectable} from 'angular2/core';
import {Meeting} from './meeting';

@Injectable()
export class MeetingService {

  private meeting: Meeting;

  constructor() {
    this.meeting = new Meeting();
  }

  getMeeting(): Meeting {
    return this.meeting;
  };

}
