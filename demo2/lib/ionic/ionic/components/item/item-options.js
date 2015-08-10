"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var ItemPrimaryOptions = (function () {
    var _class = function ItemPrimaryOptions() {
        _classCallCheck(this, _class);
    };

    return _class;
})();
exports.ItemPrimaryOptions = ItemPrimaryOptions;
exports.ItemPrimaryOptions = ItemPrimaryOptions = __decorate([Decorator({
    selector: "ion-primary-options"
}), __metadata("design:paramtypes", [])], ItemPrimaryOptions);
var ItemSecondaryOptions = (function () {
    var _class2 = function ItemSecondaryOptions() {
        _classCallCheck(this, _class2);
    };

    return _class2;
})();
exports.ItemSecondaryOptions = ItemSecondaryOptions;
exports.ItemSecondaryOptions = ItemSecondaryOptions = __decorate([Decorator({
    selector: "ion-secondary-options"
}), __metadata("design:paramtypes", [])], ItemSecondaryOptions);