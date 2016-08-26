
// install   :      cordova plugin add phonegap-plugin-push
// link      :      https://github.com/phonegap/phonegap-plugin-push

angular.module('ngCordova.plugins.push_v5', [])
  .factory('$cordovaPushV5',['$q', '$rootScope', '$timeout', function ($q, $rootScope, $timeout) {
   /*global PushNotification*/

    var push;
    return {
      register: function (options) {
        var q = $q.defer();

        var registered = false;

        push = PushNotification.init(options);

        push.on('notification', function (notification) {
            $timeout(function() {
                $rootScope.$emit('$cordovaPushV5:notificationReceived', notification);
            });
        });

        push.on('error', function (error) {
            if (!registered) {
                registered = true;
                q.reject(error);
                return;
            }

            $timeout(function() {
                $rootScope.$emit('$cordovaPushV5:errorOccurred', error);
            });
        });

        push.on('registration', function (data) {
            q.resolve(data.registrationId);
        });

        return q.promise;
      },
      unregister : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('register must be called before any other operation'));
        } else {
          push.unregister(function (success) {
            q.resolve(success);
          },function (error) {
            q.reject(error);
          });
        }
        return q.promise;
      },
      getBadgeNumber : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.getApplicationIconBadgeNumber(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          });
        }
        return q.promise;
      },
      setBadgeNumber : function (number) {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('register must be called before any other operation'));
        } else {
          push.setApplicationIconBadgeNumber(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          }, number);
        }
        return q.promise;
      },
      finish: function (){
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.finish(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          });
        }
        return q.promise;
      }
    };
  }]);
