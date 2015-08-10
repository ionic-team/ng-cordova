'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.IonicView = IonicView;
exports.IonicDirective = IonicDirective;
exports.IonicComponent = IonicComponent;
exports.App = App;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _angular2Angular2 = require('angular2/angular2');

var _ionicUtil = require('ionic/util');

var util = _interopRequireWildcard(_ionicUtil);

var _componentsAppApp = require('../components/app/app');

var _ionic = require('../ionic');

// TODO: Why is forwardRef() required when they're already imported above????
var IonicDirectives = [
// Angular
_angular2Angular2.coreDirectives, _angular2Angular2.formDirectives,
// Content
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Aside;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Button;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Content;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Scroll;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Refresher;
}),
// Lists
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Card;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.List;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Item;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.ItemGroup;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.ItemGroupTitle;
}),
// Slides
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Slides;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Slide;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.SlidePager;
}),
// Tabs
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Tabs;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Tab;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Toolbar;
}),
// Media
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Icon;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.IconDirective;
}),
// Form
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Segment;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.SegmentButton;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.SegmentControlValueAccessor;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Checkbox;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.RadioGroup;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.RadioButton;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Switch;
}),
//SearchBar,
// Input
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Input;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.TextInput;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.TapInput;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Label;
}),
// Nav
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Nav;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.NavbarTemplate;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Navbar;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.NavPush;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.NavPop;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.Register;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.ShowWhen;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.HideWhen;
}),
// Gestures
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.TapClick;
}), (0, _angular2Angular2.forwardRef)(function () {
    return _ionic.TapDisabled;
}),
// Material
(0, _angular2Angular2.forwardRef)(function () {
    return _ionic.MaterialButton;
})];
exports.IonicDirectives = IonicDirectives;

var IonicViewImpl = (function (_View) {
    function IonicViewImpl() {
        var args = arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, IonicViewImpl);

        args.directives = (args.directives || []).concat(IonicDirectives);
        _get(Object.getPrototypeOf(IonicViewImpl.prototype), 'constructor', this).call(this, args);
    }

    _inherits(IonicViewImpl, _View);

    return IonicViewImpl;
})(_angular2Angular2.View);

function IonicView(args) {
    return function (cls) {
        var annotations = Reflect.getMetadata('annotations', cls) || [];
        annotations.push(new IonicViewImpl(args));
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
}

function IonicDirective(config) {
    return function (cls) {
        var annotations = Reflect.getMetadata('annotations', cls) || [];
        annotations.push(new _angular2Angular2.Directive(appendConfig(cls, config)));
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
}

function IonicComponent(config) {
    return function (cls) {
        var annotations = Reflect.getMetadata('annotations', cls) || [];
        annotations.push(new _angular2Angular2.Component(appendConfig(cls, config)));
        Reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
}

function appendConfig(cls, config) {
    config.host = config.host || {};
    cls.defaultProperties = config.defaultProperties || {};
    config.properties = config.properties || [];
    for (var prop in cls.defaultProperties) {
        // add the property to the component "properties"
        config.properties.push(prop);
        // set the component "hostProperties", so the instance's
        // property value will be used to set the element's attribute
        config.host['[attr.' + util.pascalCaseToDashCase(prop) + ']'] = prop;
    }
    cls.delegates = config.delegates;
    var componentId = config.classId || config.selector && config.selector.replace('ion-', '');
    config.host['class'] = ((config.host['class'] || '') + ' ' + componentId).trim();
    // the mode will get figured out when the component is constructed
    config.host['[attr.mode]'] = 'clsMode';
    return config;
}

function App() {
    var args = arguments[0] === undefined ? {} : arguments[0];

    return function (cls) {
        // get current annotations
        var annotations = Reflect.getMetadata('annotations', cls) || [];
        // create @Component
        args.selector = args.selector || 'ion-app';
        annotations.push(new _angular2Angular2.Component(args));
        // create @View
        // if no template was provided, default so it has a root ion-nav
        if (!args.templateUrl && !args.template) {
            args.template = '<ion-nav></ion-nav>';
        }
        annotations.push(new IonicViewImpl(args));
        // redefine with added annotations
        Reflect.defineMetadata('annotations', annotations, cls);
        (0, _componentsAppApp.ionicBootstrap)(cls, args.config, args.routes);
        return cls;
    };
}