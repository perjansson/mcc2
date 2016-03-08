System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var MeetingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MeetingComponent = (function () {
                function MeetingComponent() {
                }
                MeetingComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting',
                        styles: ["\n    .alert {\n      font-size: 16px;\n      margin-bottom: 25px;\n    }\n    .alert-meeting-cost {\n      font-size: 24px;\n      margin-top: 25px;\n    }\n    select.input-xl {\n      height: 60px;\n      line-height: 60px;\n    }\n    .input-xl {\n        height: 60px;\n        padding: 12px 18px;\n        font-size: 22px;\n        line-height: 1.5;\n        border-radius: 8px;\n    }\n  "],
                        template: "\n    <!--aside>\n      <div class=\"alert alert-danger\" role=\"alert\"> <strong>Proceed with caution!</strong> Calculating meeting cost should probably only be done in a laid-back way and together with the right people.</div>\n    </aside-->\n    <article>\n      <section>\n      <form role=\"form\">\n        <div class=\"row\">\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <label for=\"numberOfAttendees\">Number of attendees</label>\n              <input id=\"numberOfAttendees\" type=\"number\" class=\"form-control input-xl\" placeholder=\"E.g. 10\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <label for=\"averageHourlyRate\">Average hourly rate</label>\n              <input id=\"averageHourlyRate\" type=\"number\" class=\"form-control input-xl\" placeholder=\"E.g. 150\">\n            </div>\n            <div class=\"form-group col-xs-12 col-sm-4\">\n              <label for=\"currency\">Currency</label>\n              <select id=\"currency\" class=\"form-control input-xl\"></select>\n            </div>\n          </div>\n        </form>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <div class=\"alert alert-info alert-meeting-cost\" role=\"alert\"> Meeting cost is <strong>500 BITCOIN</strong></div>\n          </div>\n        </div>\n        </section>\n    </article>\n  ",
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MeetingComponent);
                return MeetingComponent;
            }());
            exports_1("MeetingComponent", MeetingComponent);
        }
    }
});
//# sourceMappingURL=meeting.component.js.map