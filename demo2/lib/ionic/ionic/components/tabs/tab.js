"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _viewViewController = require("../view/view-controller");

var _viewViewItem = require("../view/view-item");

var _tabs = require("./tabs");

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
var Tab = (function (_ViewController) {
    var _class = function Tab(tabs, elementRef, injector) {
        var _this = this;

        _classCallCheck(this, _class);

        // A Tab is both a container of many views, and is a view itself.
        // A Tab is one ViewItem within it's Ancestor Tabs (which extends ViewController)
        // A Tab is a ViewController for its child ViewItems
        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, tabs, injector, elementRef);
        this.tabs = tabs;
        this.childNavbar(true);
        var item = this.item = new _viewViewItem.ViewItem(tabs.Ancestor);
        item.setInstance(this);
        item.viewElementRef(elementRef);
        tabs.addTab(this);
        this.navbarView = item.navbarView = function () {
            var activeItem = _this.getActive();
            return activeItem && activeItem.navbarView();
        };
        item.enableBack = function () {
            // override ViewItem's enableBack(), should use the
            // active child nav item's enableBack() instead
            var activeItem = _this.getActive();
            return activeItem && activeItem.enableBack();
        };
        this.panelId = "tab-panel-" + item.id;
        this.labeledBy = "tab-button-" + item.id;
    };

    _inherits(_class, _ViewController);

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            var _this2 = this;

            if (this._initialResolve) {
                this.tabs.select(this).then(function () {
                    _this2._initialResolve();
                    _this2._initialResolve = null;
                });
            }
        }
    }, {
        key: "load",
        value: function load(callback) {
            if (!this._loaded && this.root) {
                var opts = {
                    animate: false,
                    navbar: false
                };
                this.push(this.root, null, opts).then(function () {
                    callback && callback();
                });
                this._loaded = true;
            } else {
                callback && callback();
            }
        }
    }, {
        key: "queueInitial",
        value: function queueInitial() {
            var _this3 = this;

            // this Tab will be used as the initial one for the first load of Tabs
            return new Promise(function (res) {
                _this3._initialResolve = res;
            });
        }
    }, {
        key: "isSelected",
        get: function get() {
            return this.tabs.isActive(this.item);
        }
    }, {
        key: "isNotSelected",
        get: function get() {
            return !this.tabs.isActive(this.item);
        }
    }]);

    return _class;
})(_viewViewController.ViewController);
exports.Tab = Tab;
exports.Tab = Tab = __decorate([(0, _angular2Angular2.Component)({
    selector: "ion-tab",
    properties: ["root", "tabTitle", "tabIcon"],
    host: {
        "[attr.id]": "panelId",
        "[attr.aria-labelledby]": "labeledBy",
        "[attr.aria-hidden]": "isNotSelected",
        "[class.tab-selected]": "isSelected",
        "role": "tabpanel"
    }
}), (0, _angular2Angular2.View)({
    template: "<template pane-anchor></template><ng-content></ng-content>",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return TabPaneAnchor;
    })]
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [typeof _tabs.Tabs !== "undefined" && _tabs.Tabs || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _angular2Angular2.Injector !== "undefined" && _angular2Angular2.Injector || Object])], Tab);
var TabPaneAnchor = (function () {
    var _class2 = function TabPaneAnchor(tab, elementRef) {
        _classCallCheck(this, _class2);

        tab.anchorElementRef(elementRef);
    };

    return _class2;
})();
TabPaneAnchor = __decorate([(0, _angular2Angular2.Directive)({
    selector: "template[pane-anchor]"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Tab, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], TabPaneAnchor);