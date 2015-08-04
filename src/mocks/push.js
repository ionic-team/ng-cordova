'use strict';

/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaPush
 *
 * @description
 * A service for testing push notifications features
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaPush', ['$q', '$timeout', '$rootScope', function ($q, $timeout, $rootScope) {
  var throwsError = false;

  var deviceToken = '';

  return {
    /**
     * @ngdoc property
     * @name throwsError
     * @propertyOf ngCordovaMocks.cordovaPush
     *
     * @description
     * A flag that signals whether a promise should be rejected or not.
     * This property should only be used in automated tests.
     **/
    throwsError: throwsError,

    /**
     * @ngdoc property
     * @name deviceToken
     * @propertyOf ngCordovaMocks.cordovaPush
     *
     * @description
     * Token send when service register device
     * This property should only be used in automated tests.
     **/
    deviceToken: deviceToken,

    onNotification: function (notification) {
      $timeout(function () {
        $rootScope.$broadcast('$cordovaPush:notificationReceived', notification);
      });
    },

    register: function (config) {
      var _self = this;
      var defer = $q.defer();
      if (config !== undefined && config.ecb === undefined) {
        config.ecb = this.onNotification;
      }

      if (this.throwsError) {
        defer.reject('There was a register error.');
      } else {
        defer.resolve(this.deviceToken);
        if (config && config.ecb) {
          config.ecb({
            event: 'registered',
            regid: _self.deviceToken
          });
        }
      }
      return defer.promise;
    },

    unregister: function (options) {
      var defer = $q.defer();
      if (this.throwsError) {
        defer.reject('There was a register error.');
      } else {
        defer.resolve();
      }
      return defer.promise;
    },
  };
}]);
