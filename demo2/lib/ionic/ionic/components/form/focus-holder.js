"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _input = require("./input");

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
var FocusHolder = (function () {
    var _class = function FocusHolder() {
        _classCallCheck(this, _class);

        this.i = [];
    };

    _createClass(_class, [{
        key: "setFocusHolder",
        value: function setFocusHolder(inputType) {
            _input.IonInput.clearTabIndexes();
            this.i[1].tabIndex = ACTIVE_TAB_INDEX;
            this.i[1].type = inputType;
            this.i[1].focus();
        }
    }, {
        key: "setActiveInput",
        value: function setActiveInput(input) {
            _input.IonInput.clearTabIndexes();
            this.i[1].tabIndex = -1;
            input.tabIndex = ACTIVE_TAB_INDEX;
        }
    }, {
        key: "receivedFocus",
        value: function receivedFocus(tabIndex) {
            if (tabIndex === PREVIOUS_TAB_INDEX) {
                // they tabbed back one input
                // reset the focus to the center focus holder
                this.i[1].focus();
                // focus on the previous input
                _input.IonInput.focusPrevious();
            } else if (tabIndex === NEXT_TAB_INDEX) {
                // they tabbed to the next input
                // reset the focus to the center focus holder
                this.i[1].focus();
                // focus on the next input
                _input.IonInput.focusNext();
            }
        }
    }, {
        key: "register",
        value: function register(input) {
            // register each of the focus holder inputs
            // assign them their correct tab indexes
            input.tabIndex = PREVIOUS_TAB_INDEX + this.i.length;
            this.i.push(input);
        }
    }]);

    return _class;
})();
exports.FocusHolder = FocusHolder;
exports.FocusHolder = FocusHolder = __decorate([(0, _angular2Angular2.Component)({
    selector: "focus-holder"
}), (0, _angular2Angular2.View)({
    template: "<input><input><input>",
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return FocusInput;
    })]
}), __metadata("design:paramtypes", [])], FocusHolder);
var FocusInput = (function () {
    var _class2 = function FocusInput(elementRef, holder) {
        _classCallCheck(this, _class2);

        this.elementRef = elementRef;
        holder.register(this);
        this.holder = holder;
    };

    _createClass(_class2, [{
        key: "focus",
        value: function focus() {
            this.elementRef.nativeElement.focus();
        }
    }, {
        key: "keydown",
        value: function keydown(ev) {
            // prevent any keyboard typing when a holder has focus
            if (ev.keyCode !== 9) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    }, {
        key: "type",
        get: function get() {
            // default to text type if unknown
            return this._t || "text";
        },
        set: function set(val) {
            this._t = val;
        }
    }]);

    return _class2;
})();
FocusInput = __decorate([(0, _angular2Angular2.Directive)({
    selector: "input",
    properties: ["tabIndex"],
    host: {
        "[tabIndex]": "tabIndex",
        "[type]": "type",
        "(focus)": "holder.receivedFocus(tabIndex)",
        "(keydown)": "keydown($event)"
    }
}), __param(1, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, FocusHolder])], FocusInput);
var PREVIOUS_TAB_INDEX = 999;
var ACTIVE_TAB_INDEX = 1000;
var NEXT_TAB_INDEX = 1001;