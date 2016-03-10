import {Component, EventEmitter, Input, Output, OnInit} from 'angular2/core';
import {Meeting} from './meeting';

@Component({
  selector: 'meeting-status',
  styles: [`
   .alert-meeting-cost {
      font-size: 24px;
      margin-top: 5px;
      margin-bottom: 20px;
      border-radius: 20px;
    }
   .alert-meeting-cost small {
      font-size: 14px;
      color: lightgray;
    }
    @media only screen and (min-width : 480px) {
     .alert-meeting-cost {
        font-size: 36px;
        margin-top: 15px;
        margin-bottom: 30px;
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
  @Output() selected = new EventEmitter<Meeting>();

  private currentMeetingCost: String;
  private interval: any;

  constructor() { }

  onMeetingClick() {
    this.selected.emit(this.meeting);
  }

  ngOnInit() {
    this.interval = setInterval(() => this.currentMeetingCost = this.meeting.getCost(), 100);
  }

}
