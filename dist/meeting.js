/// <reference path="../typings/agstopwatch/AGStopWatch.d.ts" />
System.register(['./guid', './stopwatch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var guid_1, stopwatch_1;
    var MeetingStatus, Currency, Meeting;
    return {
        setters:[
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (stopwatch_1_1) {
                stopwatch_1 = stopwatch_1_1;
            }],
        execute: function() {
            (function (MeetingStatus) {
                MeetingStatus.STARTED = 'STARTED';
                MeetingStatus.STOPPED = 'STOPPED';
            })(MeetingStatus || (MeetingStatus = {}));
            Currency = (function () {
                function Currency(key, name) {
                    this.key = key;
                    this.name = name;
                }
                return Currency;
            }());
            Meeting = (function () {
                function Meeting() {
                    this.currency = new Currency('BTC', 'Bitcoin');
                    this.status = null;
                    this.stopWatch = new stopwatch_1.Stopwatch();
                }
                Meeting.prototype.start = function () {
                    this.status = MeetingStatus.STARTED;
                    this.id = guid_1.Guid.newGuid();
                    this.stopWatch.start();
                };
                Meeting.prototype.stop = function () {
                    this.status = MeetingStatus.STOPPED;
                    this.stopWatch.stop();
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
                    return Math.round(this.getExactMeetingCost()).toFixed(0);
                };
                Meeting.prototype.getExactMeetingCost = function () {
                    return this.getMeetingCostPerSecond() * this.getElapsedTimeInSeconds();
                };
                Meeting.prototype.getMeetingCostPerSecond = function () {
                    return this.numberOfAttendees * (this.averageHourlyRate / 3600);
                };
                Meeting.prototype.getElapsedTimeInSeconds = function () {
                    return this.stopWatch.elapsed / 1000;
                };
                return Meeting;
            }());
            exports_1("Meeting", Meeting);
        }
    }
});
//# sourceMappingURL=meeting.js.map