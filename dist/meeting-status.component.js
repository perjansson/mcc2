System.register(['angular2/core', './meeting'], function(exports_1, context_1) {
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
    var core_1, meeting_1;
    var MeetingStatusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meeting_1_1) {
                meeting_1 = meeting_1_1;
            }],
        execute: function() {
            MeetingStatusComponent = (function () {
                function MeetingStatusComponent() {
                }
                MeetingStatusComponent.prototype.onMeetingClick = function () {
                    alert('Detail page for a meeting is not implemented yet...');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', meeting_1.Meeting)
                ], MeetingStatusComponent.prototype, "meeting", void 0);
                MeetingStatusComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting-status',
                        styles: ["\n   .alert-meeting-cost {\n      font-size: 24px;\n      margin-top: 25px;\n      border-radius: 20px;\n      cursor: pointer;\n    }\n   .alert-meeting-cost:hover {\n      -moz-box-shadow: 0 0 75px #7EC6DE;\n      -webkit-box-shadow: 0 0 75px #7EC6DE;\n      box-shadow: 0px 0px 75px #7EC6DE;\n    }\n   .alert-meeting-cost small {\n      font-size: 14px;\n      color: lightgray;\n    }\n  "],
                        template: "\n    <div class=\"alert alert-info alert-meeting-cost\" role=\"alert\" (click)=\"onMeetingClick()\">\n      Meeting cost is <strong>{{meeting.getCost()}} {{meeting.getCurrency()}}</strong>\n      <p>\n        <small>{{meeting.id}}</small>\n      </p>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MeetingStatusComponent);
                return MeetingStatusComponent;
            }());
            exports_1("MeetingStatusComponent", MeetingStatusComponent);
        }
    }
});
//# sourceMappingURL=meeting-status.component.js.map