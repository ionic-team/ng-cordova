'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2SrcFacadeLang = require('angular2/src/facade/lang');

var _utilUtil = require('../util/util');

var util = _interopRequireWildcard(_utilUtil);

var _pathRecognizer = require('./path-recognizer');

var IonicRouter = (function () {
    function IonicRouter(config) {
        _classCallCheck(this, IonicRouter);

        this._routes = [];
        this._viewCtrls = [];
        this.config(config);
    }

    _createClass(IonicRouter, [{
        key: 'app',
        value: function app(_app) {
            this.app = _app;
        }
    }, {
        key: 'config',
        value: function config(_config) {
            if (_config) {
                for (var i = 0; i < _config.length; i++) {
                    this.addRoute(_config[i]);
                }
            }
        }
    }, {
        key: 'addRoute',
        value: function addRoute(routeConfig) {
            if (routeConfig && routeConfig.path && routeConfig.component) {
                var route = new Route(routeConfig);
                if (routeConfig.root) {
                    this.otherwise(route);
                }
                this._routes.push(route);
            }
        }
    }, {
        key: 'stateChange',
        value: function stateChange(type, activeView) {
            // this fires when the app's state has changed. `stateChange` will
            // tell each of the state managers that the state has changed, and
            // each state manager will decide what to do with this info
            // (the url state manager updates the url bar if a route was setup)
            if (activeView && activeView.component) {
                var componentRoute = activeView.component.route;
                if (componentRoute) {
                    var path = componentRoute.generate(activeView.params);
                    if (path) {
                        for (var _name in stateManagers) {
                            stateManagers[_name].stateChange(path, type, activeView);
                        }
                    }
                }
            }
        }
    }, {
        key: 'stateClear',
        value: function stateClear() {
            for (var _name2 in stateManagers) {
                stateManagers[_name2].stateClear();
            }
        }
    }, {
        key: 'matchPaths',
        value: function matchPaths(paths) {
            // load each of paths to a component
            var components = [];
            var route = undefined;
            if (paths) {
                for (var i = 0; i < paths.length; i++) {
                    route = this.matchPath(paths[i]);
                    if (route && route.component) {
                        components.push(route.component);
                    }
                }
            }
            return components;
        }
    }, {
        key: 'matchPath',
        value: function matchPath(path) {
            // takes a string path and loops through each of the setup
            // routes to see if the path matches any of the routes
            // the matched path with the highest specifity wins
            var matchedRoute = null;
            var route = null;
            var routeMatch = null;
            for (var i = 0; i < this._routes.length; i++) {
                route = this._routes[i];
                routeMatch = route.match(path);
                if (routeMatch && (!matchedRoute || route.specificity > matchedRoute.specificity)) {
                    matchedRoute = route;
                }
            }
            return matchedRoute;
        }
    }, {
        key: 'load',
        value: function load(window, ionicApp, ionicConfig) {
            var _this = this;

            // load is called when the app has finished loading each state
            // manager gets a chance to say what path the app should be at
            var viewCtrl = this.viewController();
            if (!viewCtrl || !this._routes.length) {
                return Promise.resolve();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
                resolve = res;
            });
            // get the initial load paths from the state manager with the highest priorty
            this.getManagerPaths(window, ionicApp, ionicConfig).then(function (paths) {
                // load all of the paths the highest priority state manager has given
                var components = _this.matchPaths(paths);
                if (!components.length && _this.otherwise()) {
                    // the state manager did not find and loaded components
                    // use the "otherwise" path
                    components = [_this.otherwise().component];
                }
                _this.app.zoneRun(function () {
                    viewCtrl.setItems(components).then(resolve);
                });
            });
            return promise;
        }
    }, {
        key: 'getManagerPaths',
        value: function getManagerPaths(window, ionicApp, ionicConfig) {
            // loop through all of the state managers and load their paths
            // the state manager with valid paths and highest priority wins
            var resolve = undefined;
            var promise = new Promise(function (res) {
                resolve = res;
            });
            // load each of the state managers
            var stateManagerPromises = [];
            for (var _name3 in stateManagerClasses) {
                stateManagers[_name3] = new stateManagerClasses[_name3](window, this, ionicApp, ionicConfig);
                stateManagerPromises.push(stateManagers[_name3].load());
            }
            // when all the state manager loads have resolved then see which one wins
            Promise.all(stateManagerPromises).then(function (stateManagerLoadResults) {
                // now that all the state managers are loaded
                // get the highest priority state manager's paths
                var stateLoadResult = null;
                var paths = null;
                var highestPriority = -1;
                for (var i = 0; i < stateManagerLoadResults.length; i++) {
                    stateLoadResult = stateManagerLoadResults[i];
                    if (stateLoadResult && stateLoadResult.paths.length && stateLoadResult.priority > highestPriority) {
                        paths = stateLoadResult.paths;
                        highestPriority = stateLoadResult.priority;
                    }
                }
                resolve(paths);
            });
            return promise;
        }
    }, {
        key: 'push',
        value: function push(path) {
            var _this2 = this;

            var viewCtrl = this.viewController();
            if (viewCtrl) {
                (function () {
                    var matchedRoute = _this2.matchPath(path);
                    if (matchedRoute && matchedRoute.component) {
                        _this2.app.zoneRun(function () {
                            viewCtrl.push(matchedRoute.component, matchedRoute.params, {});
                        });
                    }
                })();
            }
        }
    }, {
        key: 'pop',
        value: function pop() {
            var viewCtrl = this.viewController();
            if (viewCtrl) {
                this.app.zoneRun(function () {
                    viewCtrl.pop();
                });
            }
        }
    }, {
        key: 'otherwise',
        value: function otherwise(val) {
            if (arguments.length) {
                this._otherwise = val;
            }
            return this._otherwise;
        }
    }, {
        key: 'addViewController',
        value: function addViewController(viewCtrl) {
            this._viewCtrls.push(viewCtrl);
        }
    }, {
        key: 'viewController',
        value: function viewController() {
            if (this._viewCtrls.length) {
                return this._viewCtrls[this._viewCtrls.length - 1];
            }
        }
    }], [{
        key: 'registerStateManager',
        value: function registerStateManager(name, StateManagerClass) {
            stateManagerClasses[name] = StateManagerClass;
        }
    }, {
        key: 'deregisterStateManager',
        value: function deregisterStateManager(name) {
            delete stateManagerClasses[name];
            delete stateManagers[name];
        }
    }]);

    return IonicRouter;
})();

exports.IonicRouter = IonicRouter;

var stateManagerClasses = {};
var stateManagers = {};

var Route = (function () {
    function Route(routeConfig) {
        _classCallCheck(this, Route);

        util.extend(this, routeConfig);
        this.recognizer = new _pathRecognizer.PathRecognizer(this.path);
        this.specificity = this.recognizer.specificity;
        this.component.route = this;
    }

    _createClass(Route, [{
        key: 'match',
        value: function match(path) {
            return _angular2SrcFacadeLang.RegExpWrapper.firstMatch(this.recognizer.regex, path);
        }
    }, {
        key: 'generate',
        value: function generate(params) {
            return this.recognizer.generate(params);
        }
    }]);

    return Route;
})();