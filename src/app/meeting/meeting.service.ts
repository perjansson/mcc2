import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Meeting} from './meeting';

@Injectable()
export class MeetingService {

  static MEETINGS_API: string = 'https://mcc2-backend.herokuapp.com/';

  private meetings: Meeting[];
  private meeting: Meeting;

  constructor(private _http: Http) {
    this.meetings = new Array<Meeting>();
  }

  getOrCreateMeeting() {
    if (!this.meeting) {
      this.meeting = new Meeting();
      this.addMeeting(this.meeting);
    }
    return this.meeting;
  }

  findMeetings() {
    return this._http.get(MeetingService.MEETINGS_API + 'meetings')
      .map((response: Response) => <Meeting[]>response.json())
      .catch(this.handleError);
  }

  saveMeeting(meeting) {
    console.log('saveMeeting', meeting);
    return this._http.post(MeetingService.MEETINGS_API + 'meetings', meeting);
  }

  getMeetingById(id: string) {
    return Promise.resolve(this.meetings)
      .then(meetings => meetings.filter(meeting => meeting.id === id)[0]);
  }

  private addMeeting(meeting: Meeting) {
    this.meetings.push(meeting);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
