System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AGStopwatch;
    return {
        setters:[],
        execute: function() {
            AGStopwatch = (function () {
                function AGStopwatch() {
                }
                Object.defineProperty(AGStopwatch.prototype, "startTime", {
                    get: function () {
                        return this._startTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AGStopwatch.prototype, "stopTime", {
                    get: function () {
                        return this._stopTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AGStopwatch.prototype, "elapsed", {
                    get: function () {
                        return ((this._running ? Date.now() : this._stopTime) - this._startTime) || 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                AGStopwatch.prototype.start = function () {
                    if (this._running)
                        throw new Error("The stopwatch is already running!");
                    this._startTime = Date.now();
                    this._running = true;
                    return this._startTime;
                };
                AGStopwatch.prototype.stop = function () {
                    if (!this._running)
                        throw new Error("You must start the timer first!");
                    this._stopTime = Date.now();
                    this._running = false;
                    return this._stopTime;
                };
                AGStopwatch.prototype.restart = function () {
                    var elapsed = this.stop();
                    this.start();
                    return elapsed;
                };
                AGStopwatch.prototype.reset = function () {
                    var elapsed = this.elapsed;
                    this._startTime = undefined;
                    this._stopTime = undefined;
                    this._running = false;
                    return elapsed;
                };
                Object.defineProperty(AGStopwatch.prototype, "running", {
                    get: function () {
                        return this._running;
                    },
                    enumerable: true,
                    configurable: true
                });
                return AGStopwatch;
            }());
        }
    }
});
//# sourceMappingURL=agstopwatch.js.map