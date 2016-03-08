import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'meeting',
  styles: [`
    .alert {
      font-size: 16px;
      margin-bottom: 25px;
    }
    .alert-meeting-cost {
      font-size: 24px;
      margin-top: 25px;
    }
    select.input-xl {
      height: 60px;
      line-height: 60px;
    }
    .input-xl {
        height: 60px;
        padding: 12px 18px;
        font-size: 22px;
        line-height: 1.5;
        border-radius: 8px;
    }
  `],
  template: `
    <!--aside>
      <div class="alert alert-danger" role="alert"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>
    </aside-->
    <article>
      <section>
      <form role="form">
        <div class="row">
            <div class="form-group col-xs-12 col-sm-4">
              <label for="numberOfAttendees">Number of attendees</label>
              <input id="numberOfAttendees" type="number" class="form-control input-xl" placeholder="E.g. 10">
            </div>
            <div class="form-group col-xs-12 col-sm-4">
              <label for="averageHourlyRate">Average hourly rate</label>
              <input id="averageHourlyRate" type="number" class="form-control input-xl" placeholder="E.g. 150">
            </div>
            <div class="form-group col-xs-12 col-sm-4">
              <label for="currency">Currency</label>
              <select id="currency" class="form-control input-xl"></select>
            </div>
          </div>
        </form>
        <div class="row">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <div class="alert alert-info alert-meeting-cost" role="alert"> Meeting cost is <strong>500 BITCOIN</strong></div>
          </div>
        </div>
        </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MeetingComponent {

  constructor() { }

}
