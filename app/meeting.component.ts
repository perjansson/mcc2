import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Meeting} from './meeting';

@Component({
  selector: 'meeting',
  styles: [`
    .meeting-form .btn {
      margin-right: 5px;
    }
    .alert {
      font-size: 16px;
      margin-bottom: 25px;
    }
   .meeting-cost .alert {
      font-size: 24px;
      margin-top: 25px;
    }
    select.input-xl {
      height: 60px;
      line-height: 60px;
      -webkit-appearance: none;
      -webkit-border-radius: 30px;
    }
    .input-xl {
        height: 60px;
        padding: 12px 18px;
        font-size: 22px;
        line-height: 1.5;
        border-radius: 30px;
    }
    .meeting-control {
      margin-top: 20px;
    }
    .meeting-control .fa {
      font-size: 6em;
    }
  `],
  template: `
    <!--aside>
      <div class="alert alert-danger" role="alert"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>
    </aside-->
    <article>
      <section>
      <form role="form" class="meeting-form">
        <div class="row">
            <div class="form-group col-xs-12 col-sm-4">
              <input id="numberOfAttendees" type="number" class="form-control input-xl" placeholder="Number of attendees">
            </div>
            <div class="form-group col-xs-12 col-sm-4">
              <input id="averageHourlyRate" type="number" class="form-control input-xl" placeholder="Average hourly rate">
            </div>
            <div class="form-group col-xs-12 col-sm-4">
              <select id="currency" class="form-control input-xl" placeholder="Currency"></select>
            </div>
            <div class="form-group col-xs-12 meeting-control text-center">
              <span id="startButton" [hidden]="meeting.isRunning() || meeting.isPaused()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.start()">
                  <i class="fa fa-play"></i>
                </button>
              </span>

              <span id="resumeButton" [hidden]="!meeting.hasStarted() || meeting.isRunning() || meeting.isStopped()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.resume()">
                  <i class="fa fa-play"></i>
                </button>
              </span>

              <span id="pauseButton" [hidden]="!meeting.hasStarted() || meeting.isPaused() || meeting.isStopped()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.pause()">
                  <i class="fa fa-pause"></i>
                </button>
              </span>

              <span id="stopButton" [hidden]="!meeting.hasStarted() || meeting.isStopped()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.stop()">
                  <i class="fa fa-stop"></i>
                </button>
              </span>
            </div>
          </div>
        </form>

        <div class="row meeting-cost animated fadeIn" [hidden]="!meeting.hasStarted()">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <div class="alert alert-info alert-meeting-cost" role="alert"> Meeting cost is <strong>500 BITCOIN</strong></div>
          </div>
        </div>
        </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MeetingComponent implements OnInit {

  private meeting: Meeting;

  constructor() { }

  ngOnInit() {
    this.meeting = new Meeting();
  }

}
