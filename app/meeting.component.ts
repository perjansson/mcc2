import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm} from 'angular2/common';
import {Meeting} from './meeting';
import {MeetingStatusComponent} from './meeting-status.component';
import {CurrencyService, Currency} from './currency.service';

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
    .meeting-control {
      margin-top: 5px;
    }
    .meeting-control .fa {
      font-size: 5em;
    }
    .meeting-control .fa-play {
      color: #5cb85c;
    }
    .meeting-control .fa-stop {
      color: #d9534f;
    }
    select.mcc-input {
      height: 45px;
      line-height: 25px;
      -webkit-appearance: none;
      -webkit-border-radius: 30px;
    }
    .mcc-input {
        height: 45px;
        padding: 8px 18px;
        font-size: 16px;
        line-height: 1.5;
        border-radius: 30px;
    }
    @media only screen and (min-width : 480px) {
      select.mcc-input {
        height: 60px;
        line-height: 35px;
      }
      .mcc-input {
          height: 60px;
          padding: 12px 24px;
          font-size: 22px;
      }
      .meeting-control {
        margin-top: 20px;
      }
      .meeting-control .fa {
        font-size: 7em;
      }
    }
  `],
  template: `
    <aside [hidden]=true>
      <div class="alert alert-danger" role="alert"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>
    </aside>
    <article>
      <section>
      <form role="form" class="meeting-form" #meetingForm="ngForm">
        <div class="row">
            <div class="form-group col-xs-12 col-sm-4">
              <input id="numberOfAttendees"
                [(ngModel)]="meeting.numberOfAttendees"
                type="number"
                required
                class="form-control mcc-input"
                placeholder="Number of attendees">
            </div>

            <div class="form-group col-xs-12 col-sm-4">
              <input id="averageHourlyRate"
                [(ngModel)]="meeting.averageHourlyRate"
                type="number"
                required
                class="form-control mcc-input"
                placeholder="Average hourly rate">
            </div>

            <div class="form-group col-xs-12 col-sm-4">
              <select id="currency"
                [ngModel]="meeting.currency.key"
                (change)="onCurrencyChange($event.target.value)"
                required
                class="form-control mcc-input"
                placeholder="Currency">
                <option *ngFor="#currency of currencies" [value]="currency.key">{{currency.name}}</option>
              </select>
            </div>

            <div [hidden]="!meeting.numberOfAttendees || !meeting.averageHourlyRate || !meeting.currency" class="form-group col-xs-12 meeting-control text-center">
              <span id="startButton" [hidden]="meeting.isStarted()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.start()" title="Start">
                  <i class="fa fa-play"></i>
                </button>
              </span>

              <span id="stopButton" [hidden]="meeting.isNotStarted() || meeting.isStopped()" class="animated fadeIn">
                <button class="btn btn-link" (click)="meeting.stop()" title="Stop">
                  <i class="fa fa-stop"></i>
                </button>
              </span>
            </div>
          </div>
        </form>

        <pre [hidden]=true>{{meetingForm.valid | json}}</pre>

        <div class="row meeting-cost animated fadeIn" [hidden]="meeting.isNotStarted()">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <meeting-status [meeting]=meeting></meeting-status>
          </div>
        </div>
        </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MeetingStatusComponent]
})

export class MeetingComponent implements OnInit {

  private meeting: Meeting;
  private currencies: Currency[];

  constructor(private _currencyService: CurrencyService) { }

  ngOnInit() {
    this.meeting = new Meeting();
    this.getCurrencies();
  }

  onCurrencyChange(newCurrencyKey: string) {
    this.meeting.currency = null;
      for (var i = 0; i < this.currencies.length; i++) {
        if (this.currencies[i].key == newCurrencyKey) {
          this.meeting.currency = new Currency(this.currencies[i].key, this.currencies[i].name);
        }
      }
  }

  getCurrencies() {
    this._currencyService.getCurrencies()
      .subscribe(
        currencies => this.currencies = currencies
    );
  }

}
