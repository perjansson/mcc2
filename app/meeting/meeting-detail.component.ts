import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Meeting} from './meeting';
import {MeetingService} from './meeting.service';
import {MeetingStatusComponent} from './meeting-status.component';

@Component({
  selector: 'meeting',
  styles: [`
  `],
  template: `
    <article>
      <section>
        <div class="row" class="animated flip">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <meeting-status *ngIf=meeting [meeting]=meeting></meeting-status>
          </div>
          <div [hidden]=true *ngIf=!meeting class="alert alert-danger" role="alert"> <strong>Whoops!</strong> Couldn't find a meeting with that id...</div>
        </div>
      </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, MeetingStatusComponent]
})
export class MeetingDetailComponent implements OnInit {

  private meeting: Meeting;

  constructor(private meetingService: MeetingService, private routeParams: RouteParams) { }

  ngOnInit() {
    let id = this.routeParams.get('id');
    this.meetingService.findMeetingById(id)
      .then(meeting => this.meeting = meeting);
  }

}
