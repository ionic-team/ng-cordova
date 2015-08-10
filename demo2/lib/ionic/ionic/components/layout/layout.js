"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

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
var Layout = (function () {
    var _class = function Layout(elementRef) {
        var _this = this;

        _classCallCheck(this, _class);

        this.ele = ngElement.nativeElement;
        this.eqEle = this.ele.lastElementChild;
        window.requestAnimationFrame(function () {
            _this.initLayout();
        });
    };

    _createClass(_class, [{
        key: "initLayout",
        value: function initLayout() {
            var _this2 = this;

            this.mqs = {};

            var _loop = function (x) {
                var attr = _this2.ele.attributes[x];
                var val = attr.nodeValue;
                var mqClassname = attr.nodeName;
                if (val.indexOf("(") > -1 && val.indexOf(")") > -1) {
                    var mql = _this2.eqEle.contentDocument.defaultView.matchMedia(val);
                    if (mql.media !== "not all") {
                        _this2.mqs[mql.media] = function (mql) {
                            console.log(mql.media, mql.matches, mqClassname);
                            window.requestAnimationFrame(function () {
                                _this2.ele.classList[mql.matches ? "add" : "remove"](mqClassname);
                            });
                        };
                        _this2.mqs[mql.media](mql);
                        mql.addListener(_this2.mqs[mql.media]);
                    }
                }
            };

            for (var x = 0; x < this.ele.attributes.length; x++) {
                _loop(x);
            }
        }
    }]);

    return _class;
})();
exports.Layout = Layout;
exports.Layout = Layout = __decorate([(0, _angular2Angular2.Component)({
    selector: "layout,[layout]"
}), (0, _angular2Angular2.View)({
    template: "\n    <ng-content></ng-content>\n    <object class=\"ele-qry\" data=\"about:blank\"></object>\n  "
}), __param(0, (0, _angular2Angular2.ElementRef)()), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object])], Layout);