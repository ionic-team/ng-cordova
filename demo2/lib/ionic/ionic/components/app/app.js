"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.ionicBootstrap = ionicBootstrap;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _angular2Angular2 = require("angular2/angular2");

var _routingRouter = require("../../routing/router");

var _configConfig = require("../../config/config");

var _platformPlatform = require("../../platform/platform");

var _actionMenuActionMenu = require("../action-menu/action-menu");

var _modalModal = require("../modal/modal");

var _popupPopup = require("../popup/popup");

var _formFocusHolder = require("../form/focus-holder");

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

var IonicApp = (function () {
    function IonicApp() {
        _classCallCheck(this, IonicApp);

        this.overlays = [];
        // Our component registry map
        this.components = {};
        this._activeViewId = null;
    }

    _createClass(IonicApp, [{
        key: "load",
        value: function load(appRef) {
            this.ref(appRef);
            this._zone = appRef.injector.get(_angular2Angular2.NgZone);
        }
    }, {
        key: "focusHolder",
        value: function focusHolder(val) {
            if (arguments.length) {
                this._focusHolder = val;
            }
            return this._focusHolder;
        }
    }, {
        key: "title",
        value: function title(val) {
            document.title = val;
        }
    }, {
        key: "ref",
        value: function ref(val) {
            if (arguments.length) {
                this._ref = val;
            }
            return this._ref;
        }
    }, {
        key: "zoneRun",
        value: function zoneRun(fn) {
            this._zone.run(fn);
        }
    }, {
        key: "stateChange",
        value: function stateChange(type, activeView) {
            if (this._activeViewId !== activeView.id) {
                this.router.stateChange(type, activeView);
                this._activeViewId = activeView.id;
            }
        }
    }, {
        key: "stateClear",
        value: function stateClear() {
            this.router.stateClear();
        }
    }, {
        key: "register",

        /**
         * Register a known component with a key, for easy lookups later.
         */
        value: function register(key, component) {
            this.components[key] = component;
            // TODO(mlynch): We need to track the lifecycle of this component to remove it onDehydrate
        }
    }, {
        key: "getComponent",

        /**
         * Get the component for the given key.
         */
        value: function getComponent(key) {
            return this.components[key];
        }
    }, {
        key: "appendComponent",

        /**
         * Create and append the given component into the root
         * element of the app.
         *
         * @param Component the component to create and insert
         * @return Promise that resolves with the ContainerRef created
         */
        value: function appendComponent(componentType) {
            var context = arguments[1] === undefined ? null : arguments[1];

            return this.rootAnchor.append(componentType);
        }
    }, {
        key: "applyBodyCss",
        value: function applyBodyCss(bodyEle, platform, config) {
            var versions = platform.versions();
            platform.platforms().forEach(function (platformName) {
                // platform-ios
                var platformClass = "platform-" + platformName;
                bodyEle.classList.add(platformClass);
                var platformVersion = versions[platformName];
                if (platformVersion) {
                    // platform-ios_8
                    platformClass += "_" + platformVersion.major;
                    bodyEle.classList.add(platformClass);
                    // platform-ios_8_3
                    bodyEle.classList.add(platformClass + "_" + platformVersion.minor);
                }
            });
            bodyEle.setAttribute("mode", config.setting("mode"));
        }
    }, {
        key: "isRTL",
        value: function isRTL(val) {
            if (arguments.length) {
                this._rtl = val;
            }
            return this._rtl;
        }
    }, {
        key: "injector",
        get: function get() {
            return this._ref.injector;
        }
    }]);

    return IonicApp;
})();

exports.IonicApp = IonicApp;

function initApp(window, document, config) {
    // create the base IonicApp
    var app = new IonicApp();
    app.isRTL(document.documentElement.getAttribute("dir") == "rtl");
    // load all platform data
    // Platform is a global singleton
    _platformPlatform.Platform.url(window.location.href);
    _platformPlatform.Platform.userAgent(window.navigator.userAgent);
    _platformPlatform.Platform.navigatorPlatform(window.navigator.platform);
    _platformPlatform.Platform.load(config);
    // on resize be sure to clear out existing window dimensions
    window.addEventListener("resize", _platformPlatform.Platform.winResize);
    return app;
}
var RootAnchor = (function () {
    var _class = function RootAnchor(app, elementRef, loader) {
        _classCallCheck(this, _class);

        this.elementRef = elementRef;
        this.loader = loader;
        app.rootAnchor = this;
    };

    _createClass(_class, [{
        key: "append",
        value: function append(componentType) {
            return this.loader.loadNextToLocation(componentType, this.elementRef)["catch"](function (err) {
                console.error(err);
            });
        }
    }]);

    return _class;
})();
RootAnchor = __decorate([(0, _angular2Angular2.Component)({
    selector: "root-anchor"
}), (0, _angular2Angular2.View)({
    template: ""
}), __metadata("design:paramtypes", [IonicApp, typeof _angular2Angular2.ElementRef !== "undefined" && _angular2Angular2.ElementRef || Object, typeof _angular2Angular2.DynamicComponentLoader !== "undefined" && _angular2Angular2.DynamicComponentLoader || Object])], RootAnchor);

function ionicBootstrap(rootComponentType, config, router) {
    return new Promise(function (resolve) {
        try {
            (function () {
                // get the user config, or create one if wasn't passed in
                if (typeof config !== _configConfig.IonicConfig) {
                    config = new _configConfig.IonicConfig(config);
                }
                // create the base IonicApp
                var app = initApp(window, document, config);
                // copy default platform settings into the user config platform settings
                // user config platform settings should override default platform settings
                config.setPlatform(_platformPlatform.Platform);
                // config and platform settings have been figured out
                // apply the correct CSS to the app
                app.applyBodyCss(document.body, _platformPlatform.Platform, config);
                // prepare the ready promise to fire....when ready
                _platformPlatform.Platform.prepareReady(config);
                // setup router
                if (typeof router !== _routingRouter.IonicRouter) {
                    router = new _routingRouter.IonicRouter(router);
                }
                router.app(app);
                // TODO: don't wire these together
                app.router = router;
                // TODO: probs need a better way to inject global injectables
                var actionMenu = new _actionMenuActionMenu.ActionMenu(app, config);
                var modal = new _modalModal.Modal(app, config);
                var popup = new _popupPopup.Popup(app, config);
                // add injectables that will be available to all child components
                var appBindings = _angular2Angular2.Injector.resolve([(0, _angular2Angular2.bind)(IonicApp).toValue(app), (0, _angular2Angular2.bind)(_configConfig.IonicConfig).toValue(config), (0, _angular2Angular2.bind)(_routingRouter.IonicRouter).toValue(router), (0, _angular2Angular2.bind)(_actionMenuActionMenu.ActionMenu).toValue(actionMenu), (0, _angular2Angular2.bind)(_modalModal.Modal).toValue(modal), (0, _angular2Angular2.bind)(_popupPopup.Popup).toValue(popup)]);
                (0, _angular2Angular2.bootstrap)(rootComponentType, appBindings).then(function (appRef) {
                    app.load(appRef);
                    // Adding a anchor to add overlays off of...huh??
                    var elementRefs = appRef._hostComponent.hostView._view.elementRefs;
                    var lastElementRef = elementRefs[1];
                    var injector = lastElementRef.parentView._view.rootElementInjectors[0]._injector;
                    var loader = injector.get(_angular2Angular2.DynamicComponentLoader);
                    loader.loadNextToLocation(RootAnchor, lastElementRef).then(function () {
                        // append the focus holder if its needed
                        if (config.setting("keyboardScrollAssist")) {
                            app.appendComponent(_formFocusHolder.FocusHolder).then(function (ref) {
                                app.focusHolder(ref.instance);
                            });
                        }
                    })["catch"](function (err) {
                        console.error(err);
                    });
                    router.load(window, app, config).then(function () {
                        // resolve that the app has loaded
                        resolve(app);
                    });
                })["catch"](function (err) {
                    console.error("ionicBootstrap", err);
                });
            })();
        } catch (err) {
            console.error(err);
        }
    });
}