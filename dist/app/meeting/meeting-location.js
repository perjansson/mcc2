System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MeetingLocation;
    return {
        setters:[],
        execute: function() {
            MeetingLocation = (function () {
                function MeetingLocation(longitude, latitude) {
                    this.longitude = longitude;
                    this.latitude = latitude;
                }
                return MeetingLocation;
            }());
            exports_1("MeetingLocation", MeetingLocation);
        }
    }
});
//# sourceMappingURL=meeting-location.js.map