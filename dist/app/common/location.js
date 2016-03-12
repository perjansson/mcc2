System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Location;
    return {
        setters:[],
        execute: function() {
            Location = (function () {
                function Location(longitude, latitude) {
                    this.longitude = longitude;
                    this.latitude = latitude;
                }
                return Location;
            }());
            exports_1("Location", Location);
        }
    }
});
//# sourceMappingURL=location.js.map