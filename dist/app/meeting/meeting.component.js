System.register(['angular2/core', 'angular2/common', './meeting', './meeting-status.component', '../currency/currency.service'], function(exports_1, context_1) {
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
    var core_1, common_1, meeting_1, meeting_status_component_1, currency_service_1;
    var MeetingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (meeting_1_1) {
                meeting_1 = meeting_1_1;
            },
            function (meeting_status_component_1_1) {
                meeting_status_component_1 = meeting_status_component_1_1;
            },
            function (currency_service_1_1) {
                currency_service_1 = currency_service_1_1;
            }],
        execute: function() {
            MeetingComponent = (function () {
                function MeetingComponent(_currencyService) {
                    this._currencyService = _currencyService;
                }
                MeetingComponent.prototype.ngOnInit = function () {
                    this.meeting = new meeting_1.Meeting();
                    this.getCurrencies();
                };
                MeetingComponent.prototype.onCurrencyChange = function (newCurrencyKey) {
                    this.meeting.currency = null;
                    for (var i = 0; i < this.currencies.length; i++) {
                        if (this.currencies[i].key == newCurrencyKey) {
                            this.meeting.currency = new currency_service_1.Currency(this.currencies[i].key, this.currencies[i].name);
                        }
                    }
                };
                MeetingComponent.prototype.getCurrencies = function () {
                    var _this = this;
                    this._currencyService.getCurrencies()
                        .subscribe(function (currencies) { return _this.currencies = currencies.sort(function (c1, c2) { return c1.name < c2.name ? -1 : 1; }); });
                };
                MeetingComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting',
                        styles: ["\n    .meeting-form .btn {\n      margin-right: 5px;\n    }\n    .alert {\n      font-size: 16px;\n      margin-bottom: 25px;\n    }\n    .meeting-cost .alert {\n      font-size: 24px;\n      margin-top: 25px;\n    }\n    .meeting-control {\n      margin-top: 5px;\n    }\n    .meeting-control button:focus {\n      outline:0;\n    }\n    .meeting-control .fa {\n      font-size: 5em;\n    }\n    .meeting-control .fa-play {\n      color: #5cb85c;\n    }\n    .meeting-control .fa-stop {\n      color: #d9534f;\n    }\n    select.mcc-input {\n      height: 45px;\n      line-height: 25px;\n      -webkit-appearance: none;\n      -webkit-border-radius: 30px;\n    }\n    .mcc-input {\n        height: 45px;\n        padding: 8px 18px;\n        font-size: 16px;\n        line-height: 1.5;\n        border-radius: 30px;\n    }\n    @media only screen and (min-width : 480px) {\n      select.mcc-input {\n        height: 60px;\n        line-height: 35px;\n      }\n      .mcc-input {\n          height: 60px;\n          padding: 12px 24px;\n          font-size: 22px;\n      }\n      .meeting-control {\n        margin-top: 15px;\n      }\n      .meeting-control .fa {\n        font-size: 7em;\n      }\n    }\n  "],
                        template: "\n    <aside [hidden]=true>\n      <div class=\"alert alert-danger\" role=\"alert\"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>\n    </aside>\n    <article>\n      <section>\n      <form role=\"form\" class=\"meeting-form\" #meetingForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"numberOfAttendees\"\n                [(ngModel)]=\"meeting.numberOfAttendees\"\n                type=\"number\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Number of attendees\">\n            </div>\n\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"averageHourlyRate\"\n                [(ngModel)]=\"meeting.averageHourlyRate\"\n                type=\"number\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Average hourly rate\">\n            </div>\n\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <select id=\"currency\"\n                [ngModel]=\"meeting.currency.key\"\n                (change)=\"onCurrencyChange($event.target.value)\"\n                required\n                class=\"form-control mcc-input\"\n                placeholder=\"Currency\">\n                <option *ngFor=\"#currency of currencies\" [value]=\"currency.key\">{{currency.name}}</option>\n              </select>\n            </div>\n\n            <div [hidden]=\"!meeting.numberOfAttendees ||\u00A0!meeting.averageHourlyRate || !meeting.currency\" class=\"form-group col-xs-12 meeting-control text-center animated tada\">\n              <span id=\"startButton\" [hidden]=\"meeting.isStarted()\">\n                <button class=\"btn btn-link\" (click)=\"meeting.start()\" title=\"Start\">\n                  <i class=\"fa fa-play\"></i>\n                </button>\n              </span>\n\n              <span id=\"stopButton\" [hidden]=\"meeting.isNotStarted() ||\u00A0meeting.isStopped()\" class=\"animated fadeIn\">\n                <button class=\"btn btn-link\" (click)=\"meeting.stop()\" title=\"Stop\">\n                  <i class=\"fa fa-stop\"></i>\n                </button>\n              </span>\n            </div>\n          </div>\n        </form>\n\n        <pre [hidden]=true>{{meetingForm.valid | json}}</pre>\n\n        <div class=\"row meeting-cost animated bounceInUp\" [hidden]=\"meeting.isNotStarted()\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <meeting-status [meeting]=meeting></meeting-status>\n          </div>\n        </div>\n        </section>\n    </article>\n  ",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, meeting_status_component_1.MeetingStatusComponent]
                    }), 
                    __metadata('design:paramtypes', [currency_service_1.CurrencyService])
                ], MeetingComponent);
                return MeetingComponent;
            }());
            exports_1("MeetingComponent", MeetingComponent);
        }
    }
});
//# sourceMappingURL=meeting.component.js.map