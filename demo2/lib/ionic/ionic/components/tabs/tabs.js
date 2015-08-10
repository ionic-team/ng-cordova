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
var Tabs = (function (_ViewController) {
    var _class = function Tabs(AncestorViewCtrl, viewItem, injector, elementRef) {
        var _this = this;

        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, AncestorViewCtrl, injector, elementRef);
        // Tabs may also be an actual ViewItem which was navigated to
        // if Tabs is static and not navigated to within a ViewController
        // then skip this and don't treat it as it's own ViewItem
        if (viewItem) {
            this.item = viewItem;
            // special overrides for the Tabs ViewItem
            // the Tabs ViewItem does not have it's own navbar
            // so find the navbar it should use within it's active Tab
            viewItem.navbarView = function () {
                var activeTab = _this.getActive();
                if (activeTab && activeTab.instance) {
                    return activeTab.instance.navbarView();
                }
            };
            // a Tabs ViewItem should not have a back button
            // enableBack back button will later be determined
            // by the active ViewItem that has a navbar
            viewItem.enableBack = function () {
                return false;
            };
        }
    };

    _inherits(_class, _ViewController);

    _createClass(_class, [{
        key: "addTab",
        value: function addTab(tab) {
            // tab.item refers to the ViewItem of the individual Tab being added to Tabs (ViewController)
            // this.item refers to the ViewItem instsance on Tabs
            this.add(tab.item);
            if (this.length() === 1) {
                // this was the first tab added, queue this one to be loaded and selected
                var promise = tab.queueInitial();
                this.item && this.item.addPromise(promise);
            }
        }
    }, {
        key: "select",
        value: function select(tab) {
            var _this2 = this;

            var enteringItem = null;
            if (typeof tab === "number") {
                enteringItem = this.getByIndex(tab);
            } else {
                enteringItem = this.getByInstance(tab);
            }
            if (!enteringItem || !enteringItem.instance || this.isTransitioning()) {
                return Promise.reject();
            }
            return new Promise(function (resolve) {
                enteringItem.instance.load(function () {
                    var opts = {
                        animate: false
                    };
                    var leavingItem = _this2.getActive() || new _viewViewItem.ViewItem();
                    leavingItem.shouldDestroy = false;
                    leavingItem.shouldCache = true;
                    _this2.transition(enteringItem, leavingItem, opts, function () {
                        resolve();
                    });
                });
            });
        }
    }, {
        key: "tabs",
        get: function get() {
            return this.instances();
        }
    }]);

    return _class;
})(_viewViewController.ViewController);
exports.Tabs = Tabs;
exports.Tabs = Tabs = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-tabs",
    defaultProperties: {
        "tabBarPlacement": "bottom",
        "tabBarIcons": "top"
    }
}), (0, _configAnnotations.IonicView)({
    template: "" + "<nav class=\"tab-bar-container\">" + "<div class=\"tab-bar\" role=\"tablist\">" + "<button *ng-for=\"#t of tabs\" [tab]=\"t\" class=\"tab-button\" role=\"tab\">" + "<icon [name]=\"t.tabIcon\" class=\"tab-button-icon\"></icon>" + "<span class=\"tab-button-text\">{{t.tabTitle}}</span>" + "</button>" + "</div>" + "</nav>" + "<section class=\"content-container\">" + "<ng-content></ng-content>" + "</section>",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return TabButton;
    })]
}), __param(0, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _viewViewController.ViewController !== "undefined" && _viewViewController.ViewController || Object, typeof _viewViewItem.ViewItem !== "undefined" && _viewViewItem.ViewItem || Object, typeof _angular2Angular2.Injector !== "undefined" && _angular2Angular2.Injector || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Tabs);
var TabButton = (function () {
    var _class2 = function TabButton(tabs) {
        _classCallCheck(this, _class2);

        this.tabs = tabs;
    };

    _createClass(_class2, [{
        key: "onInit",
        value: function onInit() {
            var id = this.tab.item.id;
            this.btnId = "tab-button-" + id;
            this.panelId = "tab-panel-" + id;
            this.hasTitle = !!this.tab.tabTitle;
            this.hasIcon = !!this.tab.tabIcon;
            this.hasTitleOnly = this.hasTitle && !this.hasIcon;
            this.hasIconOnly = this.hasIcon && !this.hasTitle;
        }
    }, {
        key: "onClick",
        value: function onClick(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.tabs.select(this.tab);
        }
    }]);

    return _class2;
})();
TabButton = __decorate([(0, _angular2Angular2.Directive)({
    selector: "button.tab-button",
    properties: ["tab"],
    host: {
        "[attr.id]": "btnId",
        "[attr.aria-controls]": "panelId",
        "[attr.aria-selected]": "tab.isSelected",
        "[class.has-title]": "hasTitle",
        "[class.has-icon]": "hasIcon",
        "[class.has-title-only]": "hasTitleOnly",
        "[class.icon-only]": "hasIconOnly",
        "(^click)": "onClick($event)"
    }
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Tabs])], TabButton);