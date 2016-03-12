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
    var ToggleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ToggleComponent = (function () {
                function ToggleComponent() {
                    this.selected = new core_1.EventEmitter();
                }
                ToggleComponent.prototype.onToggleClick = function () {
                    this.value = !this.value;
                    this.selected.emit(this.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ToggleComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ToggleComponent.prototype, "selected", void 0);
                ToggleComponent = __decorate([
                    core_1.Component({
                        selector: 'toggle',
                        styles: ["\n    .toggle {\n      height: 32px;\n      cursor: pointer;\n    }\n    .toggle input[type=\"checkbox\"], .toggle input[type=\"radio\"] {\n      width: 0;\n      height: 0;\n      padding: 0;\n      margin: 0;\n      text-indent: -100000px;\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .toggle .handle {\n      position: relative;\n      top: -30px;\n      left: 0;\n      display: block;\n      width: 50px;\n      height: 32px;\n      background-color: white;\n      border-radius: 19px;\n      -webkit-box-shadow: inset 0 0 0 1px #b8bfc8;\n      -moz-box-shadow: inset 0 0 0 1px #b8bfc8;\n      box-shadow: inset 0 0 0 1px #b8bfc8;\n      -webkit-border-radius: 19px;\n      -moz-border-radius: 19px;\n    }\n    .toggle .handle:before, .toggle .handle:after {\n      position: absolute;\n      top: 1px;\n      left: 1px;\n      display: block;\n      width: 30px;\n      height: 30px;\n      content: \"\";\n      background-color: white;\n      -webkit-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n      -moz-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n      box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n      -webkit-transition: all .25s ease-in-out;\n      -moz-transition: all .25s ease-in-out;\n      transition: all .25s ease-in-out;\n      border-radius: 30px;\n      -webkit-border-radius: 30px;\n      -moz-border-radius: 30px;\n    }\n    .toggle input[type=\"checkbox\"]:disabled + .handle, .toggle input[type=\"radio\"]:disabled + .handle, .toggle input[type=\"checkbox\"]:disabled + .handle:before, .toggle input[type=\"radio\"]:disabled + .handle:before, .toggle input[type=\"checkbox\"]:disabled + .handle:after, .toggle input[type=\"radio\"]:disabled + .handle:after {\n      background-color: #e6e9ed;\n      filter: alpha(opacity=60);\n      opacity: .6;\n    }\n    .toggle input[type=\"checkbox\"]:checked + .handle:before, .toggle input[type=\"radio\"]:checked + .handle:before {\n      width: 50px;\n      background-color: #a0d468;\n    }\n    .toggle input[type=\"checkbox\"]:checked + .handle:after, .toggle input[type=\"radio\"]:checked + .handle:after {\n      left: 20px;\n      content: \"\";\n      color: green;\n      -webkit-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n      -moz-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n      box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n    }\n    @media only screen and (min-width : 480px) {\n      .toggle {\n        height: 62px;\n      }\n      .toggle .handle {\n        top: -50px;\n        width: 100px;\n        height: 62px;\n        border-radius: 38px;\n        -webkit-border-radius: 38px;\n        -moz-border-radius: 38px;\n      }\n      .toggle .handle:before, .toggle .handle:after {\n        width: 60px;\n        height: 60px;\n        border-radius: 60px;\n        -webkit-border-radius: 60px;\n        -moz-border-radius: 60px;\n      }\n      .toggle input[type=\"checkbox\"]:checked + .handle:before, .toggle input[type=\"radio\"]:checked + .handle:before {\n        width: 100px;\n      }\n      .toggle input[type=\"checkbox\"]:checked + .handle:after, .toggle input[type=\"radio\"]:checked + .handle:after {\n        left: 40px;\n      }\n    }\n  "],
                        template: "\n    <label class=\"toggle\">\n      <input type=\"checkbox\" (click)=\"onToggleClick()\">\n      <span class=\"handle\"></span>\n    </label>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ToggleComponent);
                return ToggleComponent;
            }());
            exports_1("ToggleComponent", ToggleComponent);
        }
    }
});
//# sourceMappingURL=toggle.component.js.map