System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Meeting;
    return {
        setters:[],
        execute: function() {
            Meeting = (function () {
                function Meeting() {
                    this.currency = 'BTC';
                    this.reset();
                }
                Meeting.prototype.start = function () {
                    this.status = 'started';
                };
                Meeting.prototype.stop = function () {
                    this.status = 'stopped';
                };
                Meeting.prototype.reset = function () {
                    this.status = null;
                    this.id = this.generateId();
                    this.name = null;
                    this.currency = 'BTC';
                    this.meetingStartTime = null;
                    this.meetingStopTime = null;
                };
                Meeting.prototype.generateId = function () {
                    return 'fakeId';
                };
                Meeting.prototype.isNotStarted = function () {
                    return this.status === null;
                };
                Meeting.prototype.isStarted = function () {
                    return this.status === 'started';
                };
                Meeting.prototype.isStopped = function () {
                    return this.status === 'stopped';
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