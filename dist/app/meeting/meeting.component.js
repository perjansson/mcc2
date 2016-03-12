System.register(['angular2/core', 'angular2/common', 'angular2/router', './meeting.service', '../currency/currency.service', '../currency/currency', './meeting-status.component', './toggle.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, meeting_service_1, currency_service_1, currency_1, meeting_status_component_1, toggle_component_1;
    var MeetingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (meeting_service_1_1) {
                meeting_service_1 = meeting_service_1_1;
            },
            function (currency_service_1_1) {
                currency_service_1 = currency_service_1_1;
            },
            function (currency_1_1) {
                currency_1 = currency_1_1;
            },
            function (meeting_status_component_1_1) {
                meeting_status_component_1 = meeting_status_component_1_1;
            },
            function (toggle_component_1_1) {
                toggle_component_1 = toggle_component_1_1;
            }],
        execute: function() {
            MeetingComponent = (function () {
                function MeetingComponent(meetingService, currencyService, router) {
                    this.meetingService = meetingService;
                    this.currencyService = currencyService;
                    this.router = router;
                    this.showOptionalInfo = false;
                }
                MeetingComponent.prototype.ngOnInit = function () {
                    this.meeting = this.meetingService.getOrCreateMeeting();
                    this.getCurrencies();
                };
                MeetingComponent.prototype.onMeetingSelected = function () {
                    this.router.navigate(['MeetingDetail', { id: this.meeting.id }]);
                };
                MeetingComponent.prototype.onGoodMeetingToggle = function (toggleValue) {
                    this.meeting.isGoodMeeting = toggleValue;
                };
                MeetingComponent.prototype.useLocation = function () {
                };
                MeetingComponent.prototype.onCurrencyChange = function (newCurrencyKey) {
                    this.meeting.currency = null;
                    for (var i = 0; i < this.currencies.length; i++) {
                        if (this.currencies[i].key == newCurrencyKey) {
                            this.meeting.currency = new currency_1.Currency(this.currencies[i].key, this.currencies[i].name);
                        }
                    }
                };
                MeetingComponent.prototype.getCurrencies = function () {
                    var _this = this;
                    this.currencyService.getCurrencies()
                        .subscribe(function (currencies) { return _this.currencies = currencies.sort(function (c1, c2) { return c1.name < c2.name ? -1 : 1; }); });
                };
                MeetingComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting',
                        styles: ["\n    .row {\n      margin-bottom: 20px;\n    }\n    .meeting-form .btn {\n      margin-right: 5px;\n    }\n    .alert {\n      font-size: 16px;\n      margin-bottom: 25px;\n    }\n    .meeting-optional-info-control .fa {\n      font-size: 1.5em;\n      color: gray;\n      display: block;\n    }\n    .meeting-optional-info-control {\n      font-size: 0.6em;\n    }\n    .meeting-optional-info .checkbox-lg {\n      width: 30px; height: 30px;\n    }\n    i:before:hover {\n    \ttext-decoration: none;\n    }\n    .meeting-cost {\n      cursor: pointer;\n    }\n    .meeting-control button:focus {\n      outline:0;\n    }\n    .meeting-control .fa {\n      font-size: 5em;\n    }\n    .meeting-control .fa-play {\n      color: #5cb85c;\n    }\n    .meeting-control .fa-stop {\n      color: #d9534f;\n    }\n    select.mcc-input {\n      height: 45px;\n      line-height: 25px;\n      -webkit-appearance: none;\n      -webkit-border-radius: 30px;\n    }\n    .mcc-input {\n      height: 45px;\n      padding: 8px 18px;\n      font-size: 16px;\n      line-height: 1.5;\n      border-radius: 30px;\n    }\n    label {\n      font-size: 0.5em;\n      font-weight: normal;\n      margin-top: 15px;\n      margin-right: 10px;\n    }\n    .btn-mcc {\n      font-size: 16px;\n      padding: 8px 12px;\n      border-radius: 8px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    @media only screen and (min-width : 480px) {\n      select.mcc-input {\n        height: 60px;\n        line-height: 35px;\n      }\n      .mcc-input {\n          height: 60px;\n          padding: 12px 24px;\n          font-size: 22px;\n      }\n      .meeting-optional-info-control .fa {\n        font-size: 3em;\n      }\n      .meeting-optional-info-control {\n        font-size: 0.8em;\n      }\n      .meeting-control .fa {\n        font-size: 7em;\n      }\n      label {\n        font-size: 0.8em;\n      }\n      .btn-mcc {\n        font-size: 26px;\n        padding: 13px 20px;\n        border-radius: 8px;\n        margin-left: auto;\n        margin-right: auto;\n      }\n    }\n  "],
                        template: "\n    <aside [hidden]=true>\n      <div class=\"alert alert-danger\" role=\"alert\"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>\n    </aside>\n    <article>\n      <section>\n        <form role=\"form\" class=\"meeting-form\" #meetingForm=\"ngForm\">\n          <div class=\"row meeting-mandatory-info\">\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"numberOfAttendees\"\n                [(ngModel)]=\"meeting.numberOfAttendees\"\n                type=\"number\"\n                min=0\n                step=\"1\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Number of attendees\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"averageHourlyRate\"\n                [(ngModel)]=\"meeting.averageHourlyRate\"\n                type=\"number\"\n                min=0\n                step=\"10\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Average hourly rate\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <select id=\"currency\"\n                [ngModel]=\"meeting.currency.key\"\n                (change)=\"onCurrencyChange($event.target.value)\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Currency\">\n                <option *ngFor=\"#currency of currencies\" [value]=\"currency.key\">{{currency.name}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row meeting-optional-info-control animated fadeIn\" [hidden]=\"meeting.isNotStarted() || showOptionalInfo\">\n            <div class=\"col-xs-12 text-muted\">\n              Maybe you would like to tell us a little bit more about the meeting?\n                <button type=\"button\" class=\"btn btn-lg btn-link\" (click)=\"showOptionalInfo=!showOptionalInfo\">\n                  <i class=\"fa fa-thumbs-up\"></i>\n                </button>\n            </div>\n          </div>\n\n          <div class=\"row meeting-optional-info animated bounceInRight\" [hidden]=\"meeting.isNotStarted()\">\n            <div class=\"form-group col-xs-12 col-sm-4\" [hidden]=\"!showOptionalInfo\">\n              <input id=\"name\"\n                [(ngModel)]=\"meeting.name\"\n                type=\"text\"\n                class=\"form-control mcc-input\"\n                placeholder=\"Meeeting name\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\" [hidden]=\"!showOptionalInfo\">\n              <label>Good meeting?</label>\n              <toggle (selected)=onGoodMeetingToggle($event)></toggle>\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\" [hidden]=\"!showOptionalInfo\">\n              <button type=\"button\" class=\"btn btn-warning btn-mcc\" (click)=\"useLocation()\" [disabled]=true>\n                <i class=\"fa fa-location-arrow\"></i> Use location?\n              </button>\n            </div>\n          </div>\n\n          <div class=\"row meeting-control\">\n            <div [hidden]=\"!meeting.numberOfAttendees ||\u00A0!meeting.averageHourlyRate || !meeting.currency\" class=\"form-group col-xs-12 text-center animated tada\">\n              <span id=\"startButton\" [hidden]=\"meeting.isStarted()\">\n                <button class=\"btn btn-link\" (click)=\"meeting.start()\" title=\"Start\">\n                  <i class=\"fa fa-play\"></i>\n                </button>\n              </span>\n              <span id=\"stopButton\" [hidden]=\"meeting.isNotStarted() ||\u00A0meeting.isStopped()\" class=\"animated fadeIn\">\n                <button class=\"btn btn-link\" (click)=\"meeting.stop()\" title=\"Stop\">\n                  <i class=\"fa fa-stop\"></i>\n                </button>\n              </span>\n            </div>\n          </div>\n        </form>\n\n        <div class=\"row meeting-cost animated bounceInUp\" [hidden]=\"meeting.isNotStarted()\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <meeting-status [meeting]=meeting (selected)=onMeetingSelected($event)></meeting-status>\n          </div>\n        </div>\n      </section>\n    </article>\n  ",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, meeting_status_component_1.MeetingStatusComponent, toggle_component_1.ToggleComponent]
                    }), 
                    __metadata('design:paramtypes', [meeting_service_1.MeetingService, currency_service_1.CurrencyService, router_1.Router])
                ], MeetingComponent);
                return MeetingComponent;
            }());
            exports_1("MeetingComponent", MeetingComponent);
        }
    }
});
//# sourceMappingURL=meeting.component.js.map