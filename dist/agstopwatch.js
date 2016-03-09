System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Stopwatch;
    return {
        setters:[],
        execute: function() {
            Stopwatch = (function () {
                function Stopwatch() {
                }
                Object.defineProperty(Stopwatch.prototype, "startTime", {
                    get: function () {
                        return this._startTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Stopwatch.prototype, "stopTime", {
                    get: function () {
                        return this._stopTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Stopwatch.prototype, "elapsed", {
                    get: function () {
                        return ((this._running ? Date.now() : this._stopTime) - this._startTime) || 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Stopwatch.prototype.start = function () {
                    if (this._running)
                        throw new Error("The stopwatch is already running!");
                    this._startTime = Date.now();
                    this._running = true;
                    return this._startTime;
                };
                Stopwatch.prototype.stop = function () {
                    if (!this._running)
                        throw new Error("You must start the timer first!");
                    this._stopTime = Date.now();
                    this._running = false;
                    return this._stopTime;
                };
                Stopwatch.prototype.restart = function () {
                    var elapsed = this.stop();
                    this.start();
                    return elapsed;
                };
                Stopwatch.prototype.reset = function () {
                    var elapsed = this.elapsed;
                    this._startTime = undefined;
                    this._stopTime = undefined;
                    this._running = false;
                    return elapsed;
                };
                Object.defineProperty(Stopwatch.prototype, "running", {
                    get: function () {
                        return this._running;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Stopwatch;
            }());
            exports_1("Stopwatch", Stopwatch);
        }
    }
});
//# sourceMappingURL=agstopwatch.js.map