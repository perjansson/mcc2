import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm} from 'angular2/common';
import {Meeting} from './meeting';
import {MeetingService} from './meeting.service';

@Component({
  selector: 'meeting',
  styles: [`
  `],
  template: `
    <article>
      <section>
        <div class="row">
          <div class="col-xs-12">
            Meetings will come...
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
