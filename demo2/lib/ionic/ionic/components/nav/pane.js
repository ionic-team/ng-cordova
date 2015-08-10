"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _ion = require("../ion");

var _configConfig = require("../../config/config");

var _viewViewController = require("../view/view-controller");

var _swipeHandle = require("./swipe-handle");

var _configAnnotations = require("../../config/annotations");

var _anchors = require("./anchors");

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

var PaneController = (function () {
    function PaneController(viewCtrl) {
        _classCallCheck(this, PaneController);

        this.panes = {};
        this.viewCtrl = viewCtrl;
        this.bindings = _angular2Angular2.Injector.resolve([(0, _angular2Angular2.bind)(_viewViewController.ViewController).toValue(viewCtrl)]);
    }

    _createClass(PaneController, [{
        key: "get",
        value: function get(itemStructure, callback) {
            var _this = this;

            // this gets or creates the Pane which similar nav items live in
            // Nav items with just a navbar/content would all use the same Pane
            // Tabs and view's without a navbar would get a different Panes
            var key = itemStructure.key;
            var viewCtrl = this.viewCtrl;
            var pane = this.panes[key];
            if (pane) {
                // nav pane which the entering component already exists
                callback(pane);
            } else {
                // create a new nav pane
                this.panes[key] = null;
                viewCtrl.loader.loadNextToLocation(Pane, viewCtrl.anchorElementRef(), this.bindings).then(function () {
                    // get the pane reference by name
                    pane = _this.panes[key];
                    var sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
                    if (!sectionAnchorElementRef) {
                        return callback();
                    }
                    var promises = [];
                    var sectionsToAdd = [];
                    // decide which sections should be added to this Pane, ie: nav bars, footers, etc.
                    // add only the sections it needs
                    if (itemStructure.navbar) {
                        sectionsToAdd.push(_anchors.NavBarContainer);
                    }
                    // add the sections which this type of Pane requires
                    sectionsToAdd.forEach(function (SectionClass) {
                        // as each section is compiled and added to the Pane
                        // the section will add a reference to itself in the Pane's sections object
                        promises.push(viewCtrl.loader.loadNextToLocation(SectionClass, sectionAnchorElementRef));
                    });
                    // wait for all of the sections to resolve
                    Promise.all(promises).then(function () {
                        callback(pane);
                    }, function (err) {
                        console.error(err);
                    });
                }, function (loaderErr) {
                    console.error(loaderErr);
                })["catch"](function (err) {
                    console.error(err);
                });
            }
        }
    }, {
        key: "add",
        value: function add(pane) {
            for (var np in this.panes) {
                if (this.panes[np] === null) {
                    this.panes[np] = pane;
                    return;
                }
            }
        }
    }]);

    return PaneController;
})();

exports.PaneController = PaneController;
var Pane = (function (_Ion) {
    var _class = function Pane(viewCtrl, elementRef, ionicConfig) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        viewCtrl.panes.add(this);
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "showPane",
        set: function set(val) {
            this._showPane = val;
        },
        get: function get() {
            return this._showPane;
        }
    }]);

    return _class;
})(_ion.Ion);
exports.Pane = Pane;
exports.Pane = Pane = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-pane",
    classId: "nav",
    host: _defineProperty({}, "[class.show-pane]", "showPane")
}), (0, _angular2Angular2.View)({
    template: "\n    <template pane-anchor></template>\n    <section class=\"content-container\">\n      <template content-anchor></template>\n      <div class=\"swipe-handle\"></div>\n    </section>\n  ",
    directives: [_anchors.PaneAnchor, _anchors.PaneContentAnchor, _swipeHandle.SwipeHandle]
}), __param(0, (0, _angular2Angular2.Inject)((0, _angular2Angular2.forwardRef)(function () {
    return _viewViewController.ViewController;
}))), __metadata("design:paramtypes", [typeof _viewViewController.ViewController !== "undefined" && _viewViewController.ViewController || Object, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Pane);