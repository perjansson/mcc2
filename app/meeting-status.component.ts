import {Component, Input, OnInit} from 'angular2/core';
import {Meeting} from './meeting';

@Component({
  selector: 'meeting-status',
  styles: [`
   .alert-meeting-cost {
      font-size: 24px;
      margin-top: 5px;
      margin-bottom: 20px;
      border-radius: 20px;
      cursor: pointer;
    }
   .alert-meeting-cost:hover {
      -moz-box-shadow: 0 0 150px darkgray;
      -webkit-box-shadow: 0 0 150px darkgray;
      box-shadow: 0px 0px 150px darkgray;
    }
   .alert-meeting-cost small {
      font-size: 14px;
      color: lightgray;
    }
    @media only screen and (min-width : 480px) {
     .alert-meeting-cost {
        font-size: 36px;
        margin-top: 25px;
        margin-bottom: 50px;
      }
    }
  `],
  template: `
    <div class="alert alert-danger alert-meeting-cost" role="alert" (click)="onMeetingClick()">
      Meeting cost is <strong>{{currentMeetingCost}} {{meeting.currency.key}}</strong>
      <p [hidden]=true>
        <small>{{meeting.id}}</small>
      </p>
    </div>
  `
})

export class MeetingStatusComponent implements OnInit {

  @Input() meeting: Meeting;
  currentMeetingCost: String;
  private interval: any;

  constructor() { }

  onMeetingClick() {
    alert('Detail page for a meeting is not implemented yet...');
  }

  ngOnInit() {
    this.interval = setInterval(() => this.currentMeetingCost = this.meeting.getCost(), 100);
  }

}
