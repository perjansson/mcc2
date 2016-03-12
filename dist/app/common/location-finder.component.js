System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LocationFinderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocationFinderComponent = (function () {
                function LocationFinderComponent() {
                    this.onLocationFound = new core_1.EventEmitter();
                }
                LocationFinderComponent.prototype.findLocation = function () {
                    console.log('findLocation');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LocationFinderComponent.prototype, "buttonText", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LocationFinderComponent.prototype, "onLocationFound", void 0);
                LocationFinderComponent = __decorate([
                    core_1.Component({
                        selector: 'location-finder',
                        styles: ["\n    .btn-mcc {\n      font-size: 16px;\n      padding: 8px 12px;\n      border-radius: 8px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    @media only screen and (min-width : 480px) {\n      .btn-mcc {\n        font-size: 26px;\n        padding: 13px 20px;\n        border-radius: 8px;\n        margin-left: auto;\n        margin-right: auto;\n      }\n    }\n  "],
                        template: "\n    <button type=\"button\" class=\"btn btn-warning btn-mcc\" (click)=\"findLocation()\">\n      <i class=\"fa fa-location-arrow\"></i> {{buttonText}}\n    </button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LocationFinderComponent);
                return LocationFinderComponent;
            }());
            exports_1("LocationFinderComponent", LocationFinderComponent);
        }
    }
});
//# sourceMappingURL=location-finder.component.js.map