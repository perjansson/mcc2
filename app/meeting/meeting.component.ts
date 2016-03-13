import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm} from 'angular2/common';
import {Router} from 'angular2/router';
import {Meeting} from './meeting';
import {MeetingService} from './meeting.service';
import {CurrencyService} from '../currency/currency.service';
import {Currency} from '../currency/currency';
import {MeetingStatusComponent} from './meeting-status.component';
import {ToggleComponent} from '../common/toggle.component';
import {LocationFinderComponent} from '../common/location-finder.component';
import {Location} from '../common/location';

@Component({
  selector: 'meeting',
  styles: [`
    a {
      cursor: pointer;
    }
    .row {
      margin-bottom: 10px;
    }
    .meeting-form .btn {
      margin-right: 5px;
    }
    .alert {
      font-size: 16px;
      margin-bottom: 25px;
    }
    .meeting-optional-info-control {
      font-size: 0.4em;
      margin-bottom: 0;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
    }
    .meeting-optional-info-control .fa {
      font-size: 1.5em;
      color: gray;
      display: block;
    }
    .meeting-optional-info .checkbox-lg {
      width: 30px; height: 30px;
    }
    i:before:hover {
    	text-decoration: none;
    }
    .meeting-cost {
      cursor: pointer;
    }
    .meeting-control button:focus {
      outline:0;
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
    label {
      font-size: 0.5em;
      font-weight: normal;
      margin-top: 15px;
      margin-right: 10px;
    }
    .good-meeting label {
      margin-bottom: 5px;
    }
    .location-finder {
      margin-top: 15px;
    }
    .btn-mcc {
      font-size: 16px;
      padding: 8px 12px;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
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
      .meeting-optional-info-control {
        font-size: 0.7em;
      }
      .meeting-optional-info-control .fa {
        font-size: 3em;
      }
      .meeting-control .fa {
        font-size: 7em;
      }
      label {
        font-size: 0.8em;
      }
      .good-meeting label {
        margin-bottom: 0;
      }
      .location-finder {
        margin-top: 0;
      }
      .btn-mcc {
        font-size: 26px;
        padding: 13px 20px;
        border-radius: 8px;
        margin-left: auto;
        margin-right: auto;
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
          <div class="row meeting-mandatory-info">
            <div class="form-group col-xs-12 col-sm-4">
              <input id="numberOfAttendees"
                [(ngModel)]="meeting.numberOfAttendees"
                type="number"
                min=0
                step="1"
                required
                class="form-control mcc-input"
                placeholder="Number of attendees">
            </div>
            <div class="form-group col-xs-12 col-sm-4">
              <input id="averageHourlyRate"
                [(ngModel)]="meeting.averageHourlyRate"
                type="number"
                min=0
                step="10"
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
          </div>

          <div class="row meeting-optional-info-control animated fadeIn" [hidden]="meeting.isNotStarted() || showOptionalInfo">
            <div class="col-xs-12 text-muted">
              <a (click)="showOptionalInfo=!showOptionalInfo" class="pull-right">Got more info about the meeting?</a>
            </div>
          </div>

          <div class="row meeting-optional-info animated bounceInRight" [hidden]="meeting.isNotStarted() || !showOptionalInfo">
            <div class="form-group col-xs-12 col-sm-4 animated">
              <input id="name"
                [(ngModel)]="meeting.name"
                type="text"
                class="form-control mcc-input"
                placeholder="Meeeting name">
            </div>
            <div class="form-group col-xs-6 col-sm-4 good-meeting">
              <label>Good meeting?</label>
              <toggle (selected)=onGoodMeetingToggle($event)></toggle>
            </div>
            <div class="form-group col-xs-6 col-sm-4 location-finder">
              <location-finder buttonText="Use location?" (onLocationFound)=onMeetingLocationFound($event)></location-finder>
            </div>
          </div>

          <div class="row meeting-control">
            <div [hidden]="!meeting.numberOfAttendees || !meeting.averageHourlyRate || !meeting.currency" class="form-group col-xs-12 text-center animated tada">
              <span id="startButton" [hidden]="meeting.isStarted()">
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

        <div class="row meeting-cost animated bounceInUp" [hidden]="meeting.isNotStarted()">
          <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <meeting-status [meeting]=meeting (selected)=onMeetingSelected($event)></meeting-status>
          </div>
        </div>
      </section>
    </article>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MeetingStatusComponent, ToggleComponent, LocationFinderComponent]
})
export class MeetingComponent implements OnInit {

  private meeting: Meeting;
  private currencies: Currency[];
  private showOptionalInfo: boolean = false;

  constructor(private meetingService: MeetingService, private currencyService: CurrencyService, private router: Router) { }

  ngOnInit() {
    this.meeting = this.meetingService.getOrCreateMeeting();
    this.getCurrencies();
  }

  onMeetingSelected() {
    this.router.navigate(['MeetingDetail', { id: this.meeting.id }]);
  }

  onGoodMeetingToggle(toggleValue: boolean) {
    this.meeting.isGoodMeeting = toggleValue;
  }

  onMeetingLocationFound(location: Location) {
    this.meeting.location = location;
    console.log('onMeetingLocationFound: ' + location);
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
    this.currencyService.getCurrencies()
      .subscribe(
        currencies => this.currencies = currencies.sort((c1, c2): number => c1.name < c2.name ? -1 : 1)
    );
  }

}
