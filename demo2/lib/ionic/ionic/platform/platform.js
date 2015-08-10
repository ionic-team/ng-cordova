'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilUtil = require('../util/util');

var util = _interopRequireWildcard(_utilUtil);

var _utilDom = require('../util/dom');

var dom = _interopRequireWildcard(_utilDom);

var PlatformCtrl = (function () {
    function PlatformCtrl() {
        var _this = this;

        _classCallCheck(this, PlatformCtrl);

        this._settings = {};
        this._platforms = [];
        this._versions = {};
        this._registry = {};
        this._default = null;
        this._onResizes = [];
        this._readyPromise = new Promise(function (res) {
            _this._readyResolve = res;
        });
    }

    _createClass(PlatformCtrl, [{
        key: 'is',

        // Methods
        // **********************************************
        value: function is(platformName) {
            return this._platforms.indexOf(platformName) > -1;
        }
    }, {
        key: 'platforms',
        value: function platforms() {
            // get the array of active platforms, which also knows the hierarchy,
            // with the last one the most important
            return this._platforms;
        }
    }, {
        key: 'versions',
        value: function versions(platformName) {
            if (arguments.length) {
                // get a specific platform's version
                return this._versions[platformName];
            }
            // get all the platforms that have a valid parsed version
            return this._versions;
        }
    }, {
        key: 'ready',
        value: function ready() {
            return this._readyPromise;
        }
    }, {
        key: 'prepareReady',
        value: function prepareReady(config) {
            var self = this;
            function resolve() {
                self._readyResolve(config);
            }
            if (this._engineReady) {
                // the engine provide a ready promise, use this instead
                this._engineReady(resolve);
            } else {
                // there is no custom ready method from the engine
                // use the default dom ready
                dom.ready(resolve);
            }
        }
    }, {
        key: 'domReady',
        value: function domReady() {
            // convenience method so its easy to access on Platform
            return dom.ready.apply(this, arguments);
        }
    }, {
        key: 'windowLoad',
        value: function windowLoad() {
            // convenience method so its easy to access on Platform
            return dom.windowLoad.apply(this, arguments);
        }
    }, {
        key: 'on',

        // Methods meant to be overridden by the engine
        // **********************************************
        // Provided NOOP methods so they do not error when
        // called by engines (the browser) doesn't provide them
        value: function on() {}
    }, {
        key: 'onHardwareBackButton',
        value: function onHardwareBackButton() {}
    }, {
        key: 'registerBackButtonAction',
        value: function registerBackButtonAction() {}
    }, {
        key: 'exitApp',
        value: function exitApp() {}
    }, {
        key: 'fullScreen',
        value: function fullScreen() {}
    }, {
        key: 'showStatusBar',
        value: function showStatusBar() {}
    }, {
        key: 'url',

        // Getter/Setter Methods
        // **********************************************
        value: function url(val) {
            if (arguments.length) {
                this._url = val;
                this._qs = util.getQuerystring(val);
            }
            return this._url;
        }
    }, {
        key: 'query',
        value: function query(key) {
            return (this._qs || {})[key];
        }
    }, {
        key: 'userAgent',
        value: function userAgent(val) {
            if (arguments.length) {
                this._ua = val;
            }
            return this._ua;
        }
    }, {
        key: 'navigatorPlatform',
        value: function navigatorPlatform(val) {
            if (arguments.length) {
                this._bPlt = val;
            }
            return this._bPlt || '';
        }
    }, {
        key: 'width',
        value: function width() {
            if (!this._w) {
                this._w = window.innerWidth;
                this._h = window.innerHeight;
            }
            return this._w;
        }
    }, {
        key: 'height',
        value: function height() {
            if (!this._h) {
                this._w = window.innerWidth;
                this._h = window.innerHeight;
            }
            return this._h;
        }
    }, {
        key: 'isPortrait',
        value: function isPortrait() {
            return this.width() < this.height();
        }
    }, {
        key: 'isLandscape',
        value: function isLandscape() {
            return !this.isPortrait();
        }
    }, {
        key: 'winResize',
        value: function winResize() {
            Platform._w = Platform._h = 0;
            clearTimeout(Platform._resizeTimer);
            Platform._resizeTimer = setTimeout(function () {
                for (var i = 0; i < Platform._onResizes.length; i++) {
                    try {
                        Platform._onResizes[i]();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }, 500);
        }
    }, {
        key: 'onResize',
        value: function onResize(cb) {
            // TODO: Make more good
            this._onResizes.push(cb);
        }
    }, {
        key: 'register',

        // Registry
        // **********************************************
        value: function register(platformConfig) {
            this._registry[platformConfig.name] = platformConfig;
        }
    }, {
        key: 'registry',
        value: function registry() {
            return this._registry;
        }
    }, {
        key: 'setDefault',
        value: function setDefault(platformName) {
            this._default = platformName;
        }
    }, {
        key: 'testQuery',
        value: function testQuery(queryValue) {
            var val = this.query('ionicplatform');
            if (val) {
                var valueSplit = val.toLowerCase().split(';');
                for (var i = 0; i < valueSplit.length; i++) {
                    if (valueSplit[i] == queryValue) {
                        return true;
                    }
                }
            }
            return false;
        }
    }, {
        key: 'testUserAgent',
        value: function testUserAgent(userAgentExpression) {
            var rx = new RegExp(userAgentExpression, 'i');
            return rx.test(this._ua);
        }
    }, {
        key: 'matchUserAgentVersion',
        value: function matchUserAgentVersion(userAgentExpression) {
            var val = this._ua.match(userAgentExpression);
            if (val) {
                return {
                    major: val[1],
                    minor: val[2]
                };
            }
        }
    }, {
        key: 'isPlatform',
        value: function isPlatform(queryValue, userAgentExpression) {
            if (!userAgentExpression) {
                userAgentExpression = queryValue;
            }
            return this.testQuery(queryValue) || this.testUserAgent(userAgentExpression);
        }
    }, {
        key: 'load',
        value: function load(config) {
            var rootPlatformNode = null;
            var engineNode = null;
            var self = this;
            this.platformOverride = config.setting('platform');
            // figure out the most specific platform and active engine
            var tmpPlatform = null;
            for (var platformName in this._registry) {
                tmpPlatform = this.matchPlatform(platformName);
                if (tmpPlatform) {
                    // we found a platform match!
                    // check if its more specific than the one we already have
                    if (tmpPlatform.isEngine) {
                        // because it matched then this should be the active engine
                        // you cannot have more than one active engine
                        engineNode = tmpPlatform;
                    } else if (!rootPlatformNode || tmpPlatform.depth > rootPlatformNode.depth) {
                        // only find the root node for platforms that are not engines
                        // set this node as the root since we either don't already
                        // have one, or this one is more specific that the current one
                        rootPlatformNode = tmpPlatform;
                    }
                }
            }
            if (!rootPlatformNode) {
                rootPlatformNode = new PlatformNode(this._default);
            }
            // build a Platform instance filled with the
            // hierarchy of active platforms and settings
            if (rootPlatformNode) {
                // check if we found an engine node (cordova/node-webkit/etc)
                if (engineNode) {
                    // add the engine to the first in the platform hierarchy
                    // the original rootPlatformNode now becomes a child
                    // of the engineNode, which is not the new root
                    engineNode.child(rootPlatformNode);
                    rootPlatformNode.parent(engineNode);
                    rootPlatformNode = engineNode;
                    // add any events which the engine would provide
                    // for example, Cordova provides its own ready event
                    var engineMethods = engineNode.methods();
                    engineMethods._engineReady = engineMethods.ready;
                    delete engineMethods.ready;
                    util.extend(this, engineMethods);
                }
                var platformNode = rootPlatformNode;
                while (platformNode) {
                    insertSuperset(platformNode);
                    platformNode = platformNode.child();
                }
                // make sure the root noot is actually the root
                // incase a node was inserted before the root
                platformNode = rootPlatformNode.parent();
                while (platformNode) {
                    rootPlatformNode = platformNode;
                    platformNode = platformNode.parent();
                }
                platformNode = rootPlatformNode;
                while (platformNode) {
                    // set the array of active platforms with
                    // the last one in the array the most important
                    this._platforms.push(platformNode.name());
                    // copy default platform settings into this platform settings obj
                    this._settings[platformNode.name()] = util.extend({}, platformNode.settings());
                    // get the platforms version if a version parser was provided
                    this._versions[platformNode.name()] = platformNode.version(this);
                    // go to the next platform child
                    platformNode = platformNode.child();
                }
            }
        }
    }, {
        key: 'matchPlatform',
        value: function matchPlatform(platformName) {
            // build a PlatformNode and assign config data to it
            // use it's getRoot method to build up its hierarchy
            // depending on which platforms match
            var platformNode = new PlatformNode(platformName);
            var rootNode = platformNode.getRoot(this, 0);
            if (rootNode) {
                rootNode.depth = 0;
                var childPlatform = rootNode.child();
                while (childPlatform) {
                    rootNode.depth++;
                    childPlatform = childPlatform.child();
                }
            }
            return rootNode;
        }
    }, {
        key: 'settings',
        value: function settings(val) {
            if (arguments.length) {
                this._settings = val;
            }
            return this._settings;
        }
    }, {
        key: 'get',
        value: function get(platformName) {
            return this._registry[platformName] || {};
        }
    }]);

    return PlatformCtrl;
})();

exports.PlatformCtrl = PlatformCtrl;

function insertSuperset(platformNode) {
    var supersetPlaformName = platformNode.superset();
    if (supersetPlaformName) {
        // add a platform in between two exist platforms
        // so we can build the correct hierarchy of active platforms
        var supersetPlatform = new PlatformNode(supersetPlaformName);
        supersetPlatform.parent(platformNode.parent());
        supersetPlatform.child(platformNode);
        if (supersetPlatform.parent()) {
            supersetPlatform.parent().child(supersetPlatform);
        }
        platformNode.parent(supersetPlatform);
    }
}

var PlatformNode = (function () {
    function PlatformNode(platformName) {
        _classCallCheck(this, PlatformNode);

        this.c = Platform.get(platformName);
        this.isEngine = this.c.isEngine;
    }

    _createClass(PlatformNode, [{
        key: 'name',
        value: function name() {
            return this.c.name;
        }
    }, {
        key: 'settings',
        value: function settings() {
            return this.c.settings || {};
        }
    }, {
        key: 'superset',
        value: function superset() {
            return this.c.superset;
        }
    }, {
        key: 'methods',
        value: function methods() {
            return this.c.methods || {};
        }
    }, {
        key: 'parent',
        value: function parent(val) {
            if (arguments.length) {
                this._parent = val;
            }
            return this._parent;
        }
    }, {
        key: 'child',
        value: function child(val) {
            if (arguments.length) {
                this._child = val;
            }
            return this._child;
        }
    }, {
        key: 'isMatch',
        value: function isMatch(p) {
            if (typeof this.c.isMatched !== 'boolean') {
                if (p.platformOverride && !this.isEngine) {
                    this.c.isMatched = p.platformOverride === this.c.name;
                } else if (!this.c.isMatch) {
                    this.c.isMatched = false;
                } else {
                    this.c.isMatched = this.c.isMatch(p);
                }
            }
            return this.c.isMatched;
        }
    }, {
        key: 'version',
        value: function version(p) {
            if (this.c.versionParser) {
                var v = this.c.versionParser(p);
                if (v) {
                    var str = v.major + '.' + v.minor;
                    return {
                        str: str,
                        num: parseFloat(str),
                        major: parseInt(v.major, 10),
                        minor: parseInt(v.minor, 10)
                    };
                }
            }
        }
    }, {
        key: 'getRoot',
        value: function getRoot(p) {
            if (this.isMatch(p)) {
                var parents = this.getSubsetParents(this.name());
                if (!parents.length) {
                    return this;
                }
                var platform = null;
                var rootPlatform = null;
                for (var i = 0; i < parents.length; i++) {
                    platform = new PlatformNode(parents[i]);
                    platform.child(this);
                    rootPlatform = platform.getRoot(p);
                    if (rootPlatform) {
                        this.parent(platform);
                        return rootPlatform;
                    }
                }
            }
            return null;
        }
    }, {
        key: 'getSubsetParents',
        value: function getSubsetParents(subsetPlatformName) {
            var registry = Platform.registry();
            var parentPlatformNames = [];
            var platform = null;
            for (var platformName in registry) {
                platform = registry[platformName];
                if (platform.subsets && platform.subsets.indexOf(subsetPlatformName) > -1) {
                    parentPlatformNames.push(platformName);
                }
            }
            return parentPlatformNames;
        }
    }]);

    return PlatformNode;
})();

var Platform = new PlatformCtrl();
exports.Platform = Platform;