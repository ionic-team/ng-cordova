'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _router = require('./router');

var UrlStateManager = (function () {
    function UrlStateManager(window, router) {
        var _this = this;

        _classCallCheck(this, UrlStateManager);

        this.location = window.location;
        this.history = window.history;
        this.ls = window.localStorage;
        this.router = router;
        // overkill for location change listeners, but ensures we
        // know when the location has changed. Only 1 of the listeners
        // will actually do the work, the other will be skipped.
        window.addEventListener('popstate', function () {
            _this.onLocationChange();
        });
        window.addEventListener('hashchange', function () {
            _this.onLocationChange();
        });
    }

    _createClass(UrlStateManager, [{
        key: 'load',
        value: function load() {
            var paths = [this.getCurrentPath()];
            var savedPaths = this.paths();
            if (savedPaths[savedPaths.length - 1] == paths[0]) {
                // the last path in the saved paths is the same as the
                // current path, so use the saved paths to rebuild the history
                paths = savedPaths;
            } else {
                // the current path is not the same as the last path in the
                // saved history, so the saved history is no good, erase it
                this.paths([]);
            }
            return Promise.resolve({
                paths: paths,
                priority: 0
            });
        }
    }, {
        key: 'stateChange',
        value: function stateChange(path, type, activeView) {
            var savedPaths = this.paths();
            // check if the given path is different than the current location
            var isDifferentPath = this.getCurrentPath() !== path;
            if (type == 'pop') {
                // if the popstate came from the browser's back button (and not Ionic)
                // then we shouldn't force another browser history.back()
                // only do a history.back() if the URL hasn't been updated yet
                if (isDifferentPath) {
                    this.history.back();
                }
                if (savedPaths.length && savedPaths[savedPaths.length - 1] != path) {
                    // only if the last item in the saved paths
                    // equals this path then it can be removed
                    savedPaths.pop();
                }
            } else {
                if (this._hasInit) {
                    if (isDifferentPath) {
                        // push the new state to the history stack since the path
                        // isn't already in the location hash
                        this.history.pushState(path, '', '#' + path);
                    }
                } else {
                    // replace the very first load with the correct entering state info
                    this.history.replaceState(path, '', '#' + path);
                    this._hasInit = true;
                }
                if (savedPaths[savedPaths.length - 1] != path) {
                    // only if the last item in the saved paths does
                    // not equal this path then it can be added
                    savedPaths.push(path);
                    // don't allow the history to grow too large
                    if (savedPaths.length > MAX_PATH_STORE) {
                        savedPaths = savedPaths.slice(savedPaths.length - MAX_PATH_STORE);
                    }
                }
            }
            // save the new path data
            this.paths(savedPaths);
            // ensure this resets
            this._currentPath = null;
        }
    }, {
        key: 'stateClear',
        value: function stateClear() {
            this.paths([]);
        }
    }, {
        key: 'onLocationChange',
        value: function onLocationChange() {
            var currentPath = this.getCurrentPath();
            if (currentPath == this._currentPath) {
                // absolutely no change since last onLocationChange
                return;
            }
            // keep in-memory the current path to quickly tell if things have changed
            this._currentPath = currentPath;
            // load up the saved paths
            var savedPaths = this.paths();
            if (currentPath === savedPaths[savedPaths.length - 1]) {
                // do nothing if the last saved path is
                // the same as the current path
                return;
            }
            if (currentPath === savedPaths[savedPaths.length - 2]) {
                // the user is moving back
                this.router.pop();
            } else {
                // the user is moving forward
                this.router.push(currentPath);
            }
        }
    }, {
        key: 'paths',
        value: function paths(val) {
            if (arguments.length) {
                // set in-memory data
                this._paths = val;
                // set localStorage data
                try {
                    this.ls.setItem(PATH_STORE_KEY, JSON.stringify(val));
                } catch (e) {}
            } else {
                if (!this._paths) {
                    // we don't already have data in-memory
                    // see if we have data in localStorage
                    try {
                        var strData = this.ls.getItem(PATH_STORE_KEY);
                        if (strData) {
                            this._paths = JSON.parse(strData);
                        }
                    } catch (e) {}
                    // if not in localStorage yet then create new path data
                    if (!this._paths) {
                        this._paths = [];
                    }
                }
                // return the in-memory data
                return this._paths;
            }
        }
    }, {
        key: 'getCurrentPath',
        value: function getCurrentPath() {
            // remove leading # to get the path
            return this.location.hash.slice(1);
        }
    }]);

    return UrlStateManager;
})();

var PATH_STORE_KEY = 'ionic:history';
var MAX_PATH_STORE = 20;
_router.IonicRouter.registerStateManager('url', UrlStateManager);