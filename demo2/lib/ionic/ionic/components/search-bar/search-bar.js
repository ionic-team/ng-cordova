"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require("angular2/angular2");

var _ion = require("../ion");

var _configConfig = require("../../config/config");

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
var SearchBar = (function (_Ion) {
    var _class = function SearchBar(elementRef, ionicConfig //,
    ) {
        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, elementRef, ionicConfig);
        // this.controlDirective = cd;
        // cd.valueAccessor = this; //ControlDirective should inject CheckboxControlDirective
        this.query = "";
    };

    _inherits(_class, _Ion);

    _createClass(_class, [{
        key: "writeValue",

        /**
         * Much like ngModel, this is called from our valueAccessor for the attached
         * ControlDirective to update the value internally.
         */
        value: function writeValue(value) {
            this.value = value;
        }
    }, {
        key: "inputChanged",
        value: function inputChanged(event) {
            this.value = event.target.value;
            console.log("Search changed", this.value);
            // TODO: Better way to do this?
            this.controlDirective._control().updateValue(event.target.value);
        }
    }, {
        key: "inputFocused",
        value: function inputFocused() {
            this.isFocused = true;
            this.shouldLeftAlign = true;
        }
    }, {
        key: "inputBlurred",
        value: function inputBlurred() {
            this.isFocused = false;
            this.shouldLeftAlign = this.value.trim() != "";
        }
    }]);

    return _class;
})(_ion.Ion);
exports.SearchBar = SearchBar;
exports.SearchBar = SearchBar = __decorate([(0, _configAnnotations.IonicComponent)({
    selector: "ion-search-bar",
    properties: ["list", "query"],
    defaultProperties: {
        "cancelText": "Cancel",
        "placeholder": "Search"
    }
}), (0, _configAnnotations.IonicView)({
    template: "\n  <div class=\"search-bar-input-container\" [class.left-align]=\"shouldLeftAlign\">\n    <div class=\"search-bar-icon\"></div>\n    <input (focus)=\"inputFocused()\" (blur)=\"inputBlurred()\"\n    (input)=\"inputChanged($event)\" class=\"search-bar-input\" type=\"search\" [attr.placeholder]=\"placeholder\">\n  </div>\n  <button class=\"search-bar-cancel\">{{cancelText}}</button>"
}), __metadata("design:paramtypes", [typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _configConfig.IonicConfig !== "undefined" && _configConfig.IonicConfig || Object])], SearchBar);
/*
export class SearchPipe extends Pipe {
  constructor() {
    super();
    this.state = 0;
  }

  supports(newValue) {
    return true;
  }

  transform(value, ...args) {
    console.log('Transforming', value, args);
    return value;
    //return `${value} state:${this.state ++}`;
  }

  create(cdRef) {
    console.log('REF', cdRef);
    return new SearchPipe(cdRef);
  }
}
*/