System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Currency;
    return {
        setters:[],
        execute: function() {
            Currency = (function () {
                function Currency(key, name) {
                    this.key = key;
                    this.name = name;
                }
                return Currency;
            }());
            exports_1("Currency", Currency);
        }
    }
});
//# sourceMappingURL=currency.js.map