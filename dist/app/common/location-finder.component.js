/// <reference path="../../typings/google.maps.d.ts" />
System.register(['angular2/core', 'angular2/common', './location'], function(exports_1, context_1) {
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
    var core_1, common_1, location_1;
    var LocationFinderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (location_1_1) {
                location_1 = location_1_1;
            }],
        execute: function() {
            LocationFinderComponent = (function () {
                function LocationFinderComponent() {
                    this.onLocationFound = new core_1.EventEmitter();
                    this.supportGeolocation = false;
                    this.isGettingLocation = false;
                    this._self = this;
                    this.geocoder = new google.maps.Geocoder();
                }
                LocationFinderComponent.prototype.ngOnInit = function () {
                    if (!!navigator.geolocation) {
                        this.supportGeolocation = true;
                    }
                    else {
                        this.supportGeolocation = false;
                    }
                };
                LocationFinderComponent.prototype.findLocation = function () {
                    var _this = this;
                    this.isGettingLocation = true;
                    navigator.geolocation.getCurrentPosition(function (position) {
                        _this.geocoder = new google.maps.Geocoder();
                        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        _this.geocoder.geocode({ location: latlng }, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                var result = results[0];
                                var city;
                                for (var component in result['address_components']) {
                                    for (var i in result['address_components'][component]['types']) {
                                        if (result['address_components'][component]['types'][i] == "locality") {
                                            city = result['address_components'][component]['long_name'];
                                        }
                                    }
                                }
                                _this.meetingLocation = new location_1.Location(position.coords.latitude, position.coords.longitude, city);
                                _this.onLocationFound.emit(_this.meetingLocation);
                            }
                            else {
                                console.error('Error getting city from google api');
                            }
                        });
                    }, function () {
                        console.error('Error finding location');
                    }, {
                        timeout: 30000,
                        maximumAge: 1,
                        enableHighAccuracy: true
                    });
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
                        template: "\n    <button type=\"button\" class=\"btn btn-warning btn-mcc\" (click)=\"findLocation()\" [ngClass]=\"{disabled: !supportGeolocation}\">\n      <i class=\"fa fa-location-arrow\" [style.display]=\"!isGettingLocation || meetingLocation ? 'inherit' : 'none'\"></i>\n      <i class=\"fa fa-spinner fa-spin\" [style.display]=\"isGettingLocation && !meetingLocation? 'inherit' : 'none'\"></i>\n      <span [style.display]=\"!meetingLocation ? 'inherit' : 'none'\"> {{buttonText}}</span>\n      <span [style.display]=\"meetingLocation ? 'inherit' : 'none'\"> {{meetingLocation?.city}}</span>\n    </button>\n  ",
                        directives: [common_1.NgClass]
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