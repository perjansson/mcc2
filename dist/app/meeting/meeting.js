/// <reference path="../../typings/agstopwatch/AGStopWatch.d.ts" />
System.register(['../currency/currency', './guid', '../../node_modules/agstopwatch/agstopwatch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var currency_1, guid_1, agstopwatch_1;
    var Meeting;
    return {
        setters:[
            function (currency_1_1) {
                currency_1 = currency_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (agstopwatch_1_1) {
                agstopwatch_1 = agstopwatch_1_1;
            }],
        execute: function() {
            Meeting = (function () {
                function Meeting() {
                    this.currency = new currency_1.Currency('BTC', 'Bitcoin');
                    this.status = null;
                    this.stopWatch = new agstopwatch_1.AGStopwatch();
                }
                Meeting.prototype.start = function () {
                    this.status = 0 /* Started */;
                    this.id = guid_1.Guid.newGuid();
                    this.stopWatch.start();
                };
                Meeting.prototype.stop = function () {
                    this.status = 1 /* Stopped */;
                    this.stopWatch.stop();
                };
                Meeting.prototype.isNotStarted = function () {
                    return this.status === null;
                };
                Meeting.prototype.isStarted = function () {
                    return this.status === 0 /* Started */;
                };
                Meeting.prototype.isStopped = function () {
                    return this.status === 1 /* Stopped */;
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