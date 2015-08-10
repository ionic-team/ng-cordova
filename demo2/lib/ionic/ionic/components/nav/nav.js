"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _configAnnotations = require("../../config/annotations");

var _viewViewController = require("../view/view-controller");

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
var Nav = (function (_ViewController) {
    var _class = function Nav(ancestorViewCtrl, injector, elementRef) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, ancestorViewCtrl, injector, elementRef);
    };

    _inherits(_class, _ViewController);

    _createClass(_class, [{
        key: "onIonInit",
        value: function onIonInit() {
            if (this.root) {
                this.push(this.root);
            }
            // default the swipe back to be enabled
            var isSwipeBackEnabled = (this.swipeBackEnabled || "").toString() !== "false";
            this.isSwipeBackEnabled(isSwipeBackEnabled);
        }
    }]);

    return _class;
})(_viewViewController.ViewController);
exports.Nav = Nav;
exports.Nav = Nav = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-nav",
    properties: ["root"],
    defaultProperties: {
        "swipeBackEnabled": true
    }
}), (0, _angular2Angular2.View)({
    template: "<template pane-anchor></template>",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return NavPaneAnchor;
    })]
}), __param(0, (0, _angular2Angular2.Optional)()), __metadata("design:paramtypes", [typeof _viewViewController.ViewController !== "undefined" && _viewViewController.ViewController || Object, typeof _angular2Angular2.Injector !== "undefined" && _angular2Angular2.Injector || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Nav);
var NavPaneAnchor = (function () {
    var _class2 = function NavPaneAnchor(nav, elementRef) {
        _classCallCheck(this, _class2);

        nav.anchorElementRef(elementRef);
    };

    return _class2;
})();
NavPaneAnchor = __decorate([(0, _angular2Angular2.Directive)({ selector: "template[pane-anchor]" }), __param(0, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [Nav, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], NavPaneAnchor);