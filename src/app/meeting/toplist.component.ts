import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm} from 'angular2/common';
import {Meeting} from './meeting';
import {MeetingService} from './meeting.service';

@Component({
  selector: 'meeting',
  styles: [`
    .loader {
      color: #337ab7;
      animation-delay: 0.5s;
      animation-duration: 5s;
    }
    .fa {
      font-size: 7em;
      display: block;
      margin-bottom: 10px;
    }
    .table {
      font-size: 0.8em;
    }
    th, td {
      text-align: left;
    }
    th {
      color: #337ab7;
    }
    td {
      font-size: 0.9em;
    }
  `],
  template: `
    <article>
      <section>
        <div class="row">
          <div class="col-xs-12 loader animated fadeIn" [hidden]=meetings>
            <i class="fa fa-spinner fa-spin"></i> Getting meetings
          </div>
          <div class="col-xs-12 loader animated fadeIn" [hidden]="!meetings || meetings.length">
            <i class="fa fa-frown-o"></i> No meetings found
          </div>
          <div class="col-xs-12" [hidden]="!meetings || !meetings.length">
            <table class="table table-striped table-hover">
              <tr>
                <th width="10%"></th>
                <th width="30%">Number of attendees</th>
                <th width="30%">Average hourly rate</th>
                <th width="30%">Cost</th>
              </tr>
              <tr *ngFor="#meeting of meetings; #i = index">
                <td>{{i+1}}</td>
                <td>{{meeting.numberOfAttendees}}</td>
                <td>{{meeting.averageHourlyRate}}</td>
                <td>{{meeting.cost}} {{meeting.currency.name}}</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TopListComponent implements OnInit {

  private meetings: Meeting[];

  constructor(private meetingService: MeetingService) { }

  ngOnInit() {
    this.getMeetings();
  }

  getMeetings() {
    this.meetingService.findMeetings()
      .subscribe(
      meetings => this.meetings = meetings
      );
  }

}
