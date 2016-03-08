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
                    this.status = 'notStarted';
                }
                Meeting.prototype.start = function () {
                    this.reStart();
                };
                Meeting.prototype.resume = function () {
                    this.status = 'running';
                };
                Meeting.prototype.pause = function () {
                    this.status = 'paused';
                };
                Meeting.prototype.stop = function () {
                    this.status = 'stopped';
                };
                Meeting.prototype.reStart = function () {
                    this.id = this.generateId();
                    this.name = null;
                    this.currency = 'BTC';
                    this.meetingStartTime = null;
                    this.meetingStopTime = null;
                    this.status = 'running';
                };
                Meeting.prototype.generateId = function () {
                    return 'fakeId';
                };
                Meeting.prototype.hasStarted = function () {
                    return this.status !== 'notStarted';
                };
                Meeting.prototype.isRunning = function () {
                    return this.status === 'running';
                };
                Meeting.prototype.isPaused = function () {
                    return this.status === 'paused';
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