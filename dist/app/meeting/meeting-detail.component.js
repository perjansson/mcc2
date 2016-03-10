System.register(['angular2/core', 'angular2/router', 'angular2/common', './meeting.service', './meeting-status.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, meeting_service_1, meeting_status_component_1;
    var MeetingDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (meeting_service_1_1) {
                meeting_service_1 = meeting_service_1_1;
            },
            function (meeting_status_component_1_1) {
                meeting_status_component_1 = meeting_status_component_1_1;
            }],
        execute: function() {
            MeetingDetailComponent = (function () {
                function MeetingDetailComponent(meetingService, routeParams) {
                    this.meetingService = meetingService;
                    this.routeParams = routeParams;
                }
                MeetingDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this.routeParams.get('id');
                    this.meetingService.findMeetingById(id)
                        .then(function (meeting) { return _this.meeting = meeting; });
                };
                MeetingDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'meeting',
                        styles: ["\n  "],
                        template: "\n    <article>\n      <section>\n        <div class=\"row\" class=\"animated flip\">\n          <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3\">\n            <meeting-status *ngIf=meeting [meeting]=meeting></meeting-status>\n          </div>\n          <div [hidden]=true *ngIf=!meeting class=\"alert alert-danger\" role=\"alert\"> <strong>Whoops!</strong> Couldn't find a meeting with that id...</div>\n        </div>\n      </section>\n    </article>\n  ",
                        directives: [common_1.CORE_DIRECTIVES, meeting_status_component_1.MeetingStatusComponent]
                    }), 
                    __metadata('design:paramtypes', [meeting_service_1.MeetingService, router_1.RouteParams])
                ], MeetingDetailComponent);
                return MeetingDetailComponent;
            }());
            exports_1("MeetingDetailComponent", MeetingDetailComponent);
        }
    }
});
//# sourceMappingURL=meeting-detail.component.js.map