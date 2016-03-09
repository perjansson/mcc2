System.register(['./guid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var guid_1;
    var MeetingStatus, Meeting;
    return {
        setters:[
            function (guid_1_1) {
                guid_1 = guid_1_1;
            }],
        execute: function() {
            (function (MeetingStatus) {
                MeetingStatus.STARTED = "STARTED";
                MeetingStatus.STOPPED = "STOPPED";
            })(MeetingStatus || (MeetingStatus = {}));
            Meeting = (function () {
                function Meeting() {
                    this.currency = 'BTC';
                    this.reset();
                }
                Meeting.prototype.start = function () {
                    this.status = MeetingStatus.STARTED;
                };
                Meeting.prototype.stop = function () {
                    this.status = MeetingStatus.STOPPED;
                };
                Meeting.prototype.reset = function () {
                    this.status = null;
                    this.id = guid_1.Guid.newGuid();
                    this.name = null;
                    this.currency = 'BTC';
                    this.meetingStartTime = null;
                    this.meetingStopTime = null;
                };
                Meeting.prototype.isNotStarted = function () {
                    return this.status === null;
                };
                Meeting.prototype.isStarted = function () {
                    return this.status === MeetingStatus.STARTED;
                };
                Meeting.prototype.isStopped = function () {
                    return this.status === MeetingStatus.STOPPED;
                };
                Meeting.prototype.getCost = function () {
                    // TODO
                    return 1337;
                };
                Meeting.prototype.getCurrency = function () {
                    return 'SEK';
                };
                return Meeting;
            }());
            exports_1("Meeting", Meeting);
        }
    }
});
//# sourceMappingURL=meeting.js.map