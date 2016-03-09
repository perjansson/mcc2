System.register(['angular2/core', 'angular2/common', './meeting', './meeting-status.component', './currency.service'], function(exports_1, context_1) {
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
                MeetingComponent.prototype.getCurrencies = function () {
                    var _this = this;
                    this._currencyService.getCurrencies()
                        .subscribe(function (currencies) { return _this.currencies = currencies; });
                };
                MeetingComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting',
                        styles: ["\n    .meeting-form .btn {\n      margin-right: 5px;\n    }\n    .alert {\n      font-size: 16px;\n      margin-bottom: 25px;\n    }\n   .meeting-cost .alert {\n      font-size: 24px;\n      margin-top: 25px;\n    }\n    select.input-xl {\n      height: 60px;\n      line-height: 35px;\n      -webkit-appearance: none;\n      -webkit-border-radius: 30px;\n    }\n    .input-xl {\n        height: 60px;\n        padding: 12px 18px;\n        font-size: 22px;\n        line-height: 1.5;\n        border-radius: 30px;\n    }\n    .meeting-control {\n      margin-top: 20px;\n    }\n    .meeting-control .fa {\n      font-size: 6em;\n    }\n  "],
                        template: "\n    <!--aside>\n      <div class=\"alert alert-danger\" role=\"alert\"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>\n    </aside-->\n    <article>\n      <section>\n      <form role=\"form\" class=\"meeting-form\">\n        <div class=\"row\">\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"numberOfAttendees\" [(ngModel)]=\"meeting.numberOfAttendees\" type=\"number\" class=\"form-control input-xl\" placeholder=\"Number of attendees\">\n            </div>\n\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <input id=\"averageHourlyRate\" [(ngModel)]=\"meeting.averageHourlyRate\" type=\"number\" class=\"form-control input-xl\" placeholder=\"Average hourly rate\">\n            </div>\n\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <select id=\"currency\" [(ngModel)]=\"meeting.currency.key\" class=\"form-control input-xl\" placeholder=\"Currency\">\n                <option *ngFor=\"#currency of currencies\" [value]=\"currency.key\">{{currency.name}}</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-xs-12 meeting-control text-center\">\n              <span id=\"startButton\" [hidden]=\"meeting.isStarted()\" class=\"animated fadeIn\">\n                <button class=\"btn btn-link\" (click)=\"meeting.start()\" title=\"Start\">\n                  <i class=\"fa fa-play\"></i>\n                </button>\n              </span>\n\n              <span id=\"stopButton\" [hidden]=\"meeting.isNotStarted() ||\u00A0meeting.isStopped()\" class=\"animated fadeIn\">\n                <button class=\"btn btn-link\" (click)=\"meeting.stop()\" title=\"Stop\">\n                  <i class=\"fa fa-stop\"></i>\n                </button>\n              </span>\n\n              <span id=\"resetButton\" [hidden]=\"meeting.isNotStarted() ||\u00A0meeting.isStarted()\" class=\"animated fadeIn\">\n                <button class=\"btn btn-link\" (click)=\"meeting.reset()\" title=\"Reset\">\n                  <i class=\"fa fa-minus-square\"></i>\n                </button>\n              </span>\n            </div>\n          </div>\n        </form>\n\n        <pre>{{ meeting | json }}</pre>\n\n        <div class=\"row meeting-cost animated fadeIn\" [hidden]=\"meeting.isNotStarted()\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <meeting-status [meeting]=meeting></meeting-status>\n          </div>\n        </div>\n        </section>\n    </article>\n  ",
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