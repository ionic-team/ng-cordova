"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _configConfig = require("../../config/config");

var _utilDom = require("../../util/dom");

var dom = _interopRequireWildcard(_utilDom);

var _textInput = require("./text-input");

var _checkboxCheckbox = require("../checkbox/checkbox");

var _radioRadio = require("../radio/radio");

var _switchSwitch = require("../switch/switch");

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
var Label = (function () {
    var _class = function Label(textContainer, checkboxContainer, radioContainer, switchContainer, config) {
        _classCallCheck(this, _class);

        this.container = textContainer || checkboxContainer || radioContainer || switchContainer;
        if (this.container) {
            this.container.registerLabel(this);
            this.inputLabel = true;
        }
        this.scrollAssist = config.setting("keyboardScrollAssist");
    };

    _createClass(_class, [{
        key: "pointerStart",
        value: function pointerStart(ev) {
            if (this.scrollAssist) {
                // remember where the touchstart/mousedown started
                this.startCoord = dom.pointerCoord(ev);
            }
        }
    }, {
        key: "pointerEnd",
        value: function pointerEnd(ev) {
            if (this.container) {
                // get where the touchend/mouseup ended
                var endCoord = dom.pointerCoord(ev);
                // focus this input if the pointer hasn't moved XX pixels
                if (!dom.hasPointerMoved(20, this.startCoord, endCoord)) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this.container instanceof _textInput.Input ? this.container.focus() : this.container.toggle();
                }
                this.startCoord = null;
            }
        }
    }]);

    return _class;
})();
exports.Label = Label;
exports.Label = Label = __decorate([(0, _angular2Angular2.Directive)({
    selector: "label",
    host: {
        "[attr.for]": "labelFor",
        "[class.input-label]": "inputLabel",
        "(touchstart)": "pointerStart($event)",
        "(touchend)": "pointerEnd($event)",
        "(mousedown)": "pointerStart($event)",
        "(mouseup)": "pointerEnd($event)"
    }
}), __param(0, (0, _angular2Angular2.Optional)()), __param(0, (0, _angular2Angular2.Ancestor)()), __param(1, (0, _angular2Angular2.Optional)()), __param(1, (0, _angular2Angular2.Ancestor)()), __param(2, (0, _angular2Angular2.Optional)()), __param(2, (0, _angular2Angular2.Ancestor)()), __param(3, (0, _angular2Angular2.Optional)()), __param(3, (0, _angular2Angular2.Ancestor)()), __metadata("design:paramtypes", [typeof _textInput.Input !== "undefined" && _textInput.Input || Object, typeof _checkboxCheckbox.Checkbox !== "undefined" && _checkboxCheckbox.Checkbox || Object, typeof _radioRadio.RadioButton !== "undefined" && _radioRadio.RadioButton || Object, typeof _switchSwitch.Switch !== "undefined" && _switchSwitch.Switch || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], Label);