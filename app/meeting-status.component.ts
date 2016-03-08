import {Component, Input} from 'angular2/core';
import {Meeting} from './meeting';

@Component({
  selector: 'meeting-status',
  styles: [`
   .alert-meeting-cost {
      font-size: 24px;
      margin-top: 25px;
    }
  `],
  template: `
    <div class="alert alert-info alert-meeting-cost" role="alert"> Meeting cost is <strong>{{meeting.getCost()}} {{meeting.getCurrency()}}</strong></div>
  `
})

export class MeetingStatusComponent {

  @Input() meeting: Meeting;

  constructor() { }

}
