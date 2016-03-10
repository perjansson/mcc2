System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Guid;
    return {
        setters:[],
        execute: function() {
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
            exports_1("Guid", Guid);
        }
    }
});
//# sourceMappingURL=guid.js.map