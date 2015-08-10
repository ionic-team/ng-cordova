"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _configConfig = require("../../config/config");

var _configAnnotations = require("../../config/annotations");

var _ion = require("../ion");

var _buttonButton = require("../button/button");

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

/*

'home': {
  ios: ['ion-ios-home', 'ion-ios-home-outline'],
  md: 'ion-md-home'
}

1-for-1 swap
Map of stuff that's 1-for-1
<icon name="home"></icon>
<icon class="ion-ios-home"></icon>
<icon class="ion-md-home"></icon>


Always use the same no matter what
Cuz it's not in the map of 1-for-1's
<icon name="alert"></icon>
<icon class="ion-alert"></icon>


Different between modes
Used different attributes
<icon ios-name="search3" md-name="search2"></icon>
<icon class="ion-ios-search3"></icon>
<icon class="ion-md-search2"></icon>



Ionicons SVG
<icon svg="home"></icon>
<icon><svg>...ios...</svg></icon>
<icon><svg>...md...</svg></icon>


Custom SVG File
<icon svg-src="home.svg"></icon>


Custom Font Icon
<icon class="fa-home"></icon>

*/
var IconDirective = (function () {
    var _class = function IconDirective(_elementRef, AncestorButton, forward, config, _renderer) {
        _classCallCheck(this, _class);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        var ele = this.ele = _elementRef.nativeElement;
        this.iconLeft = this.iconRight = this.iconOnly = false;
        this.ariaHidden = true;
        if (forward !== null) {
            this.fwdIcon = config.setting("forwardIcon");
        }
        if (AncestorButton) {
            // this icon is within a button
            this.withinButton = true;
            // check if there is a sibling element (that's not aria hidden)
            var hasPreviousSiblingElement = !!ele.previousElementSibling;
            var hasNextSiblingElement = ele.nextElementSibling && ele.nextElementSibling.getAttribute("aria-hidden") !== "true";
            if (!hasPreviousSiblingElement && !hasNextSiblingElement) {
                // this icon is within a button, and doesn't have a sibling element
                // check for text nodes to the right and left of this icon element
                this.iconLeft = (ele.nextSibling && ele.nextSibling.textContent || "").trim() !== "";
                this.iconRight = (ele.previousSibling && ele.previousSibling.textContent || "").trim() !== "";
                this.iconOnly = !this.iconLeft && !this.iconRight;
            }
            // tell the button there's a child icon
            // the button will set the correct css classes on itself
            AncestorButton.registerIcon(this);
        }
    };

    _createClass(_class, [{
        key: "onInit",
        value: function onInit() {
            if (this.fwdIcon) {
                this.name = this.fwdIcon;
            }
            if (!this.name) return;
            // add the css class to show the icon font
            this._renderer.setElementClass(this._elementRef, this.name, true);
            // hide the icon when it's within a button
            // and the button isn't an icon only button
            this.ariaHidden = this.withinButton && !this.iconOnly;
            if (!this.ariaHidden) {
                // the icon is either not within a button
                // or the icon is within a button, and its an icon only button
                this.label = this.name.replace("ion-", "").replace("ios-", "").replace("md-", "").replace("-", "");
            }
        }
    }, {
        key: "onDestroy",
        value: function onDestroy() {
            this.ele = null;
        }
    }]);

    return _class;
})();
exports.IconDirective = IconDirective;
exports.IconDirective = IconDirective = __decorate([(0, _angular2Angular2.Directive)({
    selector: "icon",
    properties: ["name", "iconName"],
    host: {
        "[attr.aria-label]": "label",
        "[attr.aria-hidden]": "ariaHidden",
        "role": "img"
    }
}), __param(1, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Ancestor)()), __param(2, (0, _angular2Angular2.Attribute)("forward")), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _buttonButton.Button !== "undefined" && _buttonButton.Button || Object, String, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object, typeof _angular2Angular2.Renderer !== "undefined" && _angular2Angular2.Renderer || Object])], IconDirective);
var Icon = (function (_Ion) {
    var _class2 = function Icon(elementRef, ionicConfig) {
        _classCallCheck(this, _class2);

        _get(Object.getPrototypeOf(_class2.prototype), "constructor", this).call(this, elementRef, ionicConfig);
    };

    _inherits(_class2, _Ion);

    _createClass(_class2, [{
        key: "onIonInit",
        value: function onIonInit() {
            var _this = this;

            this.iconClass = this.ios;
            console.log("ICON", this.mode);
            setTimeout(function () {
                console.log("MODE", _this.mode);
            });
        }
    }]);

    return _class2;
})(_ion.Ion);
exports.Icon = Icon;
exports.Icon = Icon = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-icon",
    properties: ["md", "ios"],
    host: {
        "mode": "mode"
    }
}), (0, _angular2Angular2.View)({
    template: "<i class=\"icon\" [class]=\"iconClass\">",
    directives: [_angular2Angular2.CSSClass]
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Icon);