"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _toolbarToolbar = require("../toolbar/toolbar");

var _configConfig = require("../../config/config");

var _configAnnotations = require("../../config/annotations");

var _appApp = require("../app/app");

var _viewViewItem = require("../view/view-item");

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
var Navbar = (function (_ToolbarBase) {
    var _class = function Navbar(elementRef, config, app, item) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, config);
        this.app = app;
        item && item.navbarView(this);
        this.bbClass = config.setting("backButtonIcon");
        this.bbDefault = config.setting("backButtonText");
        this.bbText = "";
    };

    _inherits(_class, _ToolbarBase);

    _createClass(_class, [{
        key: "backButtonElement",
        value: function backButtonElement(eleRef) {
            if (arguments.length) {
                this._bbEle = eleRef;
            }
            return this._bbEle;
        }
    }, {
        key: "backButtonTextElement",
        value: function backButtonTextElement(eleRef) {
            if (arguments.length) {
                this._bbTxEle = eleRef;
            }
            return this._bbTxEle;
        }
    }, {
        key: "didEnter",
        value: function didEnter() {
            var titleEle = this._ttEle || (this._ttEle = this.getNativeElement().querySelector("ion-title"));
            titleEle && this.app.title(titleEle.textContent);
        }
    }]);

    return _class;
})(_toolbarToolbar.ToolbarBase);
exports.Navbar = Navbar;
exports.Navbar = Navbar = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-navbar",
    host: {
        "class": "toolbar"
    }
}), (0, _configAnnotations.IonicView)({
    template: "\n    <div class=\"toolbar-inner\">\n      <button class=\"back-button\">\n        <icon class=\"back-button-icon\" [name]=\"bbClass\"></icon>\n        <span class=\"back-button-text\">\n          <span class=\"back-default\" [text-content]=\"bbDefault\"></span>\n          <span class=\"back-title\" [text-content]=\"bbText\"></span>\n        </span>\n      </button>\n      <div class=\"toolbar-title\">\n        <div class=\"toolbar-inner-title\">\n          <ng-content select=\"ion-title\"></ng-content>\n        </div>\n      </div>\n      <div class=\"toolbar-item toolbar-primary-item\">\n        <ng-content select=\"[primary]\"></ng-content>\n      </div>\n      <div class=\"toolbar-item toolbar-secondary-item\">\n        <ng-content select=\"[secondary]\"></ng-content>\n      </div>\n    </div>\n  ",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return BackButton;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return BackButtonText;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return Title;
    }), (0, _angular2Angular2.forwardRef)(function () {
        return NavbarItem;
    })]
}), __param(3, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object, typeof _appApp.IonicApp !== "undefined" && _appApp.IonicApp || Object, typeof _viewViewItem.ViewItem !== "undefined" && _viewViewItem.ViewItem || Object])], Navbar);
var BackButton = (function () {
    var _class2 = function BackButton(navbar, item, elementRef) {
        _classCallCheck(this, _class2);

        this.item = item;
        navbar.backButtonElement(elementRef);
    };

    _createClass(_class2, [{
        key: "goBack",
        value: function goBack(ev) {
            ev.stopPropagation();
            ev.preventDefault();
            this.item && this.item.viewCtrl.pop();
        }
    }]);

    return _class2;
})();
BackButton = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".back-button",
    host: {
        "(^click)": "goBack($event)"
    }
}), __param(0, (0, _angular2Angular2.Ancestor)()), __param(1, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [Navbar, typeof _viewViewItem.ViewItem !== "undefined" && _viewViewItem.ViewItem || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], BackButton);
var BackButtonText = (function () {
    var _class3 = function BackButtonText(navbar, elementRef) {
        _classCallCheck(this, _class3);

        navbar.backButtonTextElement(elementRef);
    };

    return _class3;
})();
BackButtonText = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".back-button-text"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Navbar, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], BackButtonText);
var Title = (function () {
    var _class4 = function Title(toolbar, elementRef) {
        _classCallCheck(this, _class4);

        toolbar.titleElement(elementRef);
    };

    return _class4;
})();
Title = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".toolbar-title"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Navbar, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Title);
var NavbarItem = (function () {
    var _class5 = function NavbarItem(toolbar, elementRef) {
        _classCallCheck(this, _class5);

        toolbar.itemElements(elementRef);
    };

    return _class5;
})();
NavbarItem = __decorate([(0, _angular2Angular2.Directive)({
    selector: ".toolbar-item"
}), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Navbar, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], NavbarItem);
/*
  Used to find and register headers in a view, and this directive's
  content will be moved up to the common navbar location, and created
  using the same context as the view's content area.
*/
var NavbarTemplate = (function () {
    var _class6 = function NavbarTemplate(item, templateRef) {
        _classCallCheck(this, _class6);

        item && item.addTemplateRef("navbar", templateRef);
    };

    return _class6;
})();
exports.NavbarTemplate = NavbarTemplate;
exports.NavbarTemplate = NavbarTemplate = __decorate([(0, _angular2Angular2.Directive)({
    selector: "template[navbar]"
}), __param(0, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _viewViewItem.ViewItem !== "undefined" && _viewViewItem.ViewItem || Object, typeof _angular2Angular2.TemplateRef !== "undefined" && _angular2Angular2.TemplateRef || Object])], NavbarTemplate);