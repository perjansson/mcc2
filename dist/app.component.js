System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './meeting.component', './currency.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, http_1, meeting_component_1, currency_service_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (meeting_component_1_1) {
                meeting_component_1 = meeting_component_1_1;
            },
            function (currency_service_1_1) {
                currency_service_1 = currency_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.location = location;
                }
                AppComponent.prototype.getLinkStyle = function (path) {
                    return this.location.path() === path;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mcc-app',
                        styles: ["\n    nav {\n      margin-bottom: 20px;\n    }\n    nav > .row {\n      margin-top: 30px;\n    }\n    nav button {\n      margin: 0px 3px;\n    }\n    nav button.router-link-active {\n      background-color: #286090;\n      border-color: #204d74;\n    }\n    .btn-mcc {\n      font-size: 16px;\n      padding: 8px 12px;\n      border-radius: 8px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    hr {\n      border: 0;\n      height: 0;\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n      margin: 20px 0;\n    }\n    @media only screen and (min-width : 480px) {\n      nav {\n        margin-bottom: 40px;\n      }\n      nav button {\n        margin: 0px 5px;\n      }\n      .btn-mcc {\n        font-size: 26px;\n        padding: 13px 20px;\n        border-radius: 8px;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      hr {\n        margin: 50px 0;\n      }\n    }\n  "],
                        template: "\n    <nav class=\"row animated fadeIn\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 text-center\">\n          <button class=\"btn btn-primary btn-mcc\" [class.active]=\"getLinkStyle('#/meeting')\" [routerLink]=\"['Meeting']\"><i class=\"fa fa-clock-o\"></i> Meeting</button>\n          <button class=\"btn btn-primary btn-mcc disabled\" [class.active]=\"getLinkStyle('#/toplist')\"><i class=\"fa fa-list\"></i> Top list</button>\n          <button class=\"btn btn-primary btn-mcc disabled\" [class.active]=\"getLinkStyle('#/about')\"><i class=\"fa fa-users\"></i> About</button>\n        </div>\n      </div>\n    </nav>\n    <hr/>\n    <main class=\"row animated fadeIn\">\n      <div>\n        <div class=\"col-xs-12\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </main>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.Location, http_1.HTTP_PROVIDERS, currency_service_1.CurrencyService]
                    }),
                    router_1.RouteConfig([
                        { path: '/meeting', name: 'Meeting', component: meeting_component_1.MeetingComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.component.js.map