/// <reference path="../../typings/agstopwatch/AGStopWatch.d.ts" />
System.register(['../../node_modules/agstopwatch/agstopwatch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var agstopwatch_1;
    var Currency, Meeting, Guid;
    return {
        setters:[
            function (agstopwatch_1_1) {
                agstopwatch_1 = agstopwatch_1_1;
            }],
        execute: function() {
            ;
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
                    this.stopWatch = new agstopwatch_1.AGStopwatch();
                }
                Meeting.prototype.start = function () {
                    this.status = 0 /* Started */;
                    this.id = Guid.newGuid();
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
            Guid = (function () {
                function Guid() {
                }
                Guid.newGuid = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                };
                return Guid;
            }());
        }
    }
});
//# sourceMappingURL=meeting.js.map