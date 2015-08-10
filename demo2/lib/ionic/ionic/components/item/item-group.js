"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ItemGroup = (function () {
    var _class = function ItemGroup(elementRef) {
        _classCallCheck(this, _class);

        this.ele = elementRef.nativeElement;
    };

    return _class;
})();
exports.ItemGroup = ItemGroup;
exports.ItemGroup = ItemGroup = __decorate([(0, _angular2Angular2.Directive)({
    selector: "ion-item-group",
    host: {
        "class": "item-group"
    }
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], ItemGroup);
var ItemGroupTitle = (function () {
    var _class2 = function ItemGroupTitle(elementRef) {
        _classCallCheck(this, _class2);

        this.isSticky = true;
        this.ele = elementRef.nativeElement;
    };

    return _class2;
})();
exports.ItemGroupTitle = ItemGroupTitle;
exports.ItemGroupTitle = ItemGroupTitle = __decorate([(0, _angular2Angular2.Directive)({
    selector: "ion-item-group-title",
    host: {
        "class": "item-group-title",
        "[class.sticky]": "isSticky"
    }
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], ItemGroupTitle);