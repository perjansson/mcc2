import {Injectable} from 'angular2/core';
import {Meeting} from './meeting';

@Injectable()
export class MeetingService {

  private meetings: Meeting[];
  private meeting: Meeting;

  constructor() {
    this.meetings = new Array<Meeting>();
  }

  getOrCreateMeeting() {
    if (!this.meeting) {
      this.meeting = new Meeting();
      this.addMeeting(this.meeting);
    }
    return this.meeting;
  }

  findMeetingById(id: string) {
    return Promise.resolve(this.meetings)
      .then(meetings => meetings.filter(meeting => meeting.id === id)[0]);
  }

  private addMeeting(meeting: Meeting) {
    this.meetings.push(meeting);
  }

}
