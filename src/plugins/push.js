// install   :      cordova plugin add phonegap-plugin-push
// link      :      https://github.com/phonegap/phonegap-plugin-push

angular.module('ngCordova.plugins.push', [])

  .factory('$cordovaPush', ['$q', '$window', '$rootScope', '$timeout', function ($q, $window, $rootScope, $timeout) {
    var push;  
    return {
        
      onNotification: function (notification) {
        $timeout(function () {
          $rootScope.$broadcast('$cordovaPush:notificationReceived', notification);
        });
      },

      register: function (config) {
          
        var q = $q.defer();
        var injector;
        push = PushNotification.init(config);
        if (config !== undefined && config.ecb === undefined) {
          if (document.querySelector('[ng-app]') === null) {
            injector = 'document.body';
          }
          else {
            injector = 'document.querySelector(\'[ng-app]\')';
          }
          config.ecb = 'angular.element(' + injector + ').injector().get(\'$cordovaPush\').onNotification';
        }
        
        push.on('registration', function (token) {
          q.resolve(token);
        }, function (error) {
          q.reject(error);
        }, config);

        return q.promise;
      },

      unregister: function (options) {
        var q = $q.defer();
          if(push === undefined){
            q.reject("Push not Initialized");
          } else {
            push.unregister(function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            }, options);
          }
        return q.promise;
      },

      // iOS only
      setBadgeNumber: function (number) {
        var q = $q.defer();
          if(push === undefined){
            q.reject("Push not Initialized");
          } else {
            push.setApplicationIconBadgeNumber(function (result) {
              q.resolve(result);
            }, function (error) {
              q.reject(error);
            }, number);
            return q.promise;
          }
      }
    };
  }]);
