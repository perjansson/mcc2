import {Component, Input} from 'angular2/core';
import {Meeting} from './meeting';

@Component({
  selector: 'meeting-status',
  styles: [`
   .alert-meeting-cost {
      font-size: 24px;
      margin-top: 25px;
      border-radius: 20px;
      cursor: pointer;
    }
   .alert-meeting-cost:hover {
      -moz-box-shadow: 0 0 75px #7EC6DE;
      -webkit-box-shadow: 0 0 75px #7EC6DE;
      box-shadow: 0px 0px 75px #7EC6DE;
    }
   .alert-meeting-cost small {
      font-size: 14px;
      color: lightgray;
    }
  `],
  template: `
    <div class="alert alert-info alert-meeting-cost" role="alert" (click)="onMeetingClick()">
      Meeting cost is <strong>{{meeting.getCost()}} {{meeting.getCurrency()}}</strong>
      <p>
        <small>{{meeting.id}}</small>
      </p>
    </div>
  `
})

export class MeetingStatusComponent {

  @Input() meeting: Meeting;

  constructor() { }

  onMeetingClick() {
    alert('Detail page for a meeting is not implemented yet...');
  }

}
