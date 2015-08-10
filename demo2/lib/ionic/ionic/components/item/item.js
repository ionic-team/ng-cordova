"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _ionicUtil = require("ionic/util");

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
var Item = (function () {
    var _class = function Item(elementRef) {
        _classCallCheck(this, _class);

        this._isOpen = false;
        this._isSlideActive = false;
        this._isTransitioning = false;
        this._transform = "";
        this.ele = elementRef.nativeElement;
        this.swipeButtons = {};
        this.optionButtons = {};
    };

    return _class;
})();
exports.Item = Item;
exports.Item = Item = __decorate([(0, _angular2Angular2.Component)({
    selector: "ion-item",
    host: {
        "class": "item"
    }
}), (0, _angular2Angular2.View)({
    template: "\n    <!--\n    <ng-content select=\"ion-primary-options\"></ng-content>\n    <ng-content select=\"ion-primary-swipe-buttons\"></ng-content>\n    -->\n    <div class=\"item-content\">\n      <div class=\"item-media\">\n      </div>\n      <div class=\"item-accessory\">\n        <!--<ng-content select=\"ion-item-accessory\"></ng-content>-->\n      </div>\n      <div class=\"item-label\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <!--\n    <ng-content select=\"ion-secondary-options\"></ng-content>\n    <ng-content select=\"ion-secondary-swipe-buttons\"></ng-content>\n    -->\n  "
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Item);

var Slideable = (function () {
    function Slideable(slideElement) {
        _classCallCheck(this, Slideable);
    }

    _createClass(Slideable, [{
        key: "onTransform",

        // override
        value: function onTransform(str) {}
    }, {
        key: "onTransitionActive",

        // override
        value: function onTransitionActive(active) {}
    }, {
        key: "onSlideActive",

        //override
        value: function onSlideActive(active) {}
    }, {
        key: "transform",
        value: function transform(str) {
            if (arguments.length && str !== this._transform) {
                this.onTransform();
            }
        }
    }, {
        key: "isTransitionActive",
        value: function isTransitionActive(active) {
            if (arguments.length && active !== this._isTransitionActive) {
                this._isTransitionActive = active;
                this.onSetTransitionActive(active);
            }
            return this._isTransitioning;
        }
    }, {
        key: "isSlideActive",
        value: function isSlideActive(active) {
            if (arguments.length && active !== this._isSlideActive) {
                this._isSlideActive = active;
                this.onSetDragActive(active);
            }
            return this._isSlideActive;
        }
    }, {
        key: "isOpen",
        value: (function (_isOpen) {
            function isOpen(_x) {
                return _isOpen.apply(this, arguments);
            }

            isOpen.toString = function () {
                return _isOpen.toString();
            };

            return isOpen;
        })(function (open) {
            var _this = this;

            if (arguments.length && open !== this._isOpen) {
                this.isTransitionActive(true);
                _ionicUtil.dom.raf(function () {
                    _this.isOpen = isOpen;
                    _this.onSetIsOpen(open);
                });
            }
        })
    }]);

    return Slideable;
})();

var ItemSlideGesture = function ItemSlideGesture() {
    _classCallCheck(this, ItemSlideGesture);
};