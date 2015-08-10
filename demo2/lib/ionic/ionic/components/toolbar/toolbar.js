"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _ion = require("../ion");

var _configConfig = require("../../config/config");

var _configAnnotations = require("../../config/annotations");

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
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};

var ToolbarBase = (function (_Ion) {
    function ToolbarBase(elementRef, config) {
        _classCallCheck(this, ToolbarBase);

        _get(Object.getPrototypeOf(ToolbarBase.prototype), "constructor", this).call(this, elementRef, config);
        this.titleAlign = config.setting("navTitleAlign");
        this.itemEles = [];
    }

    _inherits(ToolbarBase, _Ion);

    _createClass(ToolbarBase, [{
        key: "titleElement",
        value: function titleElement(eleRef) {
            if (arguments.length) {
                this._nbTlEle = eleRef;
            }
            return this._nbTlEle;
        }
    }, {
        key: "itemElements",
        value: function itemElements(eleRef) {
            if (arguments.length) {
                this.itemEles.push(eleRef);
            }
            return this.itemEles;
        }
    }, {
        key: "titleText",
        value: function titleText(eleRef) {
            if (arguments.length) {
                this._ttTxt.push(eleRef);
            }
            return this._ttTxt;
        }
    }, {
        key: "alignTitle",
        value: function alignTitle() {
            // don't bother if we're not trying to center align the title
            if (this.titleAlign !== "center" || this.aligned) return;
            // called after the navbar/title has had a moment to
            // finish rendering in their correct locations
            var toolbarEle = this.getNativeElement();
            var titleEle = toolbarEle.querySelector("ion-title");
            // don't bother if there's no title element
            if (!titleEle) return;
            // get all the dimensions
            var titleOffsetLeft = titleEle.offsetLeft;
            var titleOffsetRight = toolbarEle.offsetWidth - (titleOffsetLeft + titleEle.offsetWidth);
            var marginLeft = 0;
            var marginRight = 0;
            if (titleOffsetLeft < titleOffsetRight) {
                marginLeft = titleOffsetRight - titleOffsetLeft + 5;
            } else if (titleOffsetLeft > titleOffsetRight) {
                marginRight = titleOffsetLeft - titleOffsetRight - 5;
            }
            if (marginLeft || marginRight) {
                // only do an update if it has to
                var innerTitleEle = toolbarEle.querySelector(".toolbar-inner-title");
                innerTitleEle.style.margin = "0 " + marginRight + "px 0 " + marginLeft + "px";
            }
            this.aligned = true;
        }
    }]);

    return ToolbarBase;
})(_ion.Ion);

exports.ToolbarBase = ToolbarBase;
var Toolbar = (function (_ToolbarBase) {
    var _class = function Toolbar(elementRef, ionicConfig) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        this.itemEles = [];
    };

    _inherits(_class, _ToolbarBase);

    _createClass(_class, [{
        key: "onIonInit",
        value: function onIonInit() {
            var _this = this;

            // TODO: THIS IS HORRIBLE, FIX
            setTimeout(function () {
                _this.alignTitle();
                setTimeout(function () {
                    _this.alignTitle();
                }, 64);
            }, 32);
        }
    }]);

    return _class;
})(ToolbarBase);
exports.Toolbar = Toolbar;
exports.Toolbar = Toolbar = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-toolbar"
}), (0, _angular2Angular2.View)({
    template: "\n    <div class=\"toolbar-inner\">\n      <div class=\"toolbar-title\">\n        <div class=\"toolbar-inner-title\">\n          <ng-content select=\"ion-title\"></ng-content>\n        </div>\n      </div>\n      <div class=\"toolbar-item toolbar-primary-item\">\n        <ng-content select=\"[primary]\"></ng-content>\n      </div>\n      <div class=\"toolbar-item toolbar-secondary-item\">\n        <ng-content select=\"[secondary]\"></ng-content>\n      </div>\n    </div>\n  ",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return ToolbarTitle;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return ToolbarItem;
    })]
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Toolbar);
var ToolbarTitle = (function () {
    var _class2 = function ToolbarTitle(toolbar, elementRef) {
        _classCallCheck(this, _class2);

        toolbar.titleElement(elementRef);
    };

    return _class2;
})();
ToolbarTitle = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".toolbar-title"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Toolbar, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], ToolbarTitle);
var ToolbarItem = (function () {
    var _class3 = function ToolbarItem(toolbar, elementRef) {
        _classCallCheck(this, _class3);

        toolbar.itemElements(elementRef);
    };

    return _class3;
})();
ToolbarItem = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".toolbar-item"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Toolbar, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], ToolbarItem);