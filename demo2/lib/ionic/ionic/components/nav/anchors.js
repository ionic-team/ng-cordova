"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _angular2SrcCoreCompilerView_container_ref = require("angular2/src/core/compiler/view_container_ref");

var _pane = require("./pane");

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
var PaneAnchor = (function () {
    var _class = function PaneAnchor(pane, elementRef) {
        _classCallCheck(this, _class);

        pane.sectionAnchorElementRef = elementRef;
    };

    return _class;
})();
exports.PaneAnchor = PaneAnchor;
exports.PaneAnchor = PaneAnchor = __decorate([(0, _angular2Angular2.Directive)({ selector: "template[pane-anchor]" }), __param(0, (0, _angular2Angular2.Ancestor)()), __param(0, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _pane.Pane;
}))), __metadata("design:paramtypes", [typeof _pane.Pane !== "undefined" && _pane.Pane || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], PaneAnchor);
var PaneContentAnchor = (function () {
    var _class2 = function PaneContentAnchor(pane, viewContainerRef) {
        _classCallCheck(this, _class2);

        pane.contentContainerRef = viewContainerRef;
    };

    return _class2;
})();
exports.PaneContentAnchor = PaneContentAnchor;
exports.PaneContentAnchor = PaneContentAnchor = __decorate([(0, _angular2Angular2.Directive)({ selector: "template[content-anchor]" }), __param(0, (0, _angular2Angular2.Ancestor)()), __param(0, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _pane.Pane;
}))), __metadata("design:paramtypes", [typeof _pane.Pane !== "undefined" && _pane.Pane || Object, typeof _angular2SrcCoreCompilerView_container_ref.ViewContainerRef !== "undefined" && _angular2SrcCoreCompilerView_container_ref.ViewContainerRef || Object])], PaneContentAnchor);
var NavBarAnchor = (function () {
    var _class3 = function NavBarAnchor(viewCtrl, viewContainerRef) {
        _classCallCheck(this, _class3);

        viewCtrl.navbarViewContainer(viewContainerRef);
    };

    return _class3;
})();
NavBarAnchor = __decorate([(0, _angular2Angular2.Directive)({
    selector: "template[navbar-anchor]"
}), __param(0, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _viewViewController.ViewController;
}))), __metadata("design:paramtypes", [typeof _viewViewController.ViewController !== "undefined" && _viewViewController.ViewController || Object, typeof _angular2SrcCoreCompilerView_container_ref.ViewContainerRef !== "undefined" && _angular2SrcCoreCompilerView_container_ref.ViewContainerRef || Object])], NavBarAnchor);
var NavBarContainer = (function () {
    var _class4 = function NavBarContainer() {
        _classCallCheck(this, _class4);
    };

    return _class4;
})();
exports.NavBarContainer = NavBarContainer;
exports.NavBarContainer = NavBarContainer = __decorate([(0, _angular2Angular2.Component)({
    selector: "section",
    host: {
        "class": "navbar-container"
    }
}), (0, _angular2Angular2.View)({
    template: "<template navbar-anchor></template>",
    directives: [NavBarAnchor]
}), __metadata("design:paramtypes", [])], NavBarContainer);