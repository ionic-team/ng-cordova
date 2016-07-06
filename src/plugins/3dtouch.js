// install   :      cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-3dtouch.git
// link      :      https://github.com/EddyVerbruggen/cordova-plugin-3dtouch

angular.module('ngCordova.plugins.3dtouch', [])

    .factory('$cordova3DTouch', ['$q', function($q) {
        var quickActions = [];
        var quickActionHandler = {};

        var createQuickActionHandler = function(quickActionHandler) {
            return function (payload) {
                for (var key in quickActionHandler) {
                    if (payload.type === key) {
                        quickActionHandler[key]();
                    }
                }
            };
        };

        return {
            /*
             * Checks if Cordova 3D touch is present and loaded
             *
             * @return   promise
             */
            isAvailable: function () {
                var deferred = $q.defer();
                if (!window.cordova) {
                    deferred.reject('Not supported in browser');
                } else {
                    if (!window.ThreeDeeTouch) {
                        deferred.reject('Could not find 3D touch plugin');
                    } else {
                        window.ThreeDeeTouch.isAvailable(function (value) {
                            deferred.resolve(value);
                        }, function (err) {
                            deferred.reject(err);
                        });
                    }
                }

                return deferred.promise;
            },

            /*
             * Add a quick action to menu
             *
             * @param    string type
             * @param    string title
             * @param    string iconType (optional)
             * @param    string subtitle (optional)
             * @param    function callback (optional)
             * @return   promise
             */
            addQuickAction: function(type, title, iconType, iconTemplate, subtitle, callback) {
                var deferred = $q.defer();

                var quickAction = {
                    type: type,
                    title: title,
                    subtitle: subtitle
                };

                if (iconType) {
                    quickAction.iconType = iconType;
                }

                if (iconTemplate) {
                    quickAction.iconTemplate = iconTemplate;
                }

                this.isAvailable().then(function() {
                    quickActions.push(quickAction);
                    quickActionHandler[type] = callback;
                    window.ThreeDeeTouch.configureQuickActions(quickActions);
                    window.ThreeDeeTouch.onHomeIconPressed = createQuickActionHandler(quickActionHandler);
                    deferred.resolve(quickActions);
                },
                function(err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            /*
             * Add a quick action handler. Used for static quick actions
             *
             * @param    string type
             * @param    function callback
             * @return   promise
             */
            addQuickActionHandler: function(type, callback) {
                var deferred = $q.defer();

                this.isAvailable().then(function() {
                    quickActionHandler[type] = callback;
                    window.ThreeDeeTouch.onHomeIconPressed = createQuickActionHandler(quickActionHandler);
                    deferred.resolve(true);
                },
                function(err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            /*
             * Enable link preview popup when force touch is appled to link elements
             *
             * @return   bool
             */
            enableLinkPreview: function() {
                var deferred = $q.defer();

                this.isAvailable().then(function() {
                    window.ThreeDeeTouch.enableLinkPreview();
                        deferred.resolve(true);
                },
                function(err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            /*
             * Add a hanlder function for force touch events,
             *
             * @param    function callback
             * @return   promise
             */
            addForceTouchHandler: function(callback) {
                var deferred = $q.defer();

                this.isAvailable().then(function() {
                    window.ThreeDeeTouch.watchForceTouches(callback);
                    deferred.resolve(true);
                },
                function(err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            }
        };
    }]);
