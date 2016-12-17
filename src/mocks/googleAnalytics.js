/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaGoogleAnalytics
 *
 * @description
 * A service for testing google analytics services
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaGoogleAnalytics', ['$q', function ($q) {
  var throwsError = false;
  var methods = {
    ga: {}
  };

  /**
   * @ngdoc property
   * @name throwsError
   * @propertyOf ngCordovaMocks.cordovaGeolocation
   *
   * @description
   * A flag that signals whether a promise should be rejected or not.
   * This property should only be used in automated tests.
   **/
  methods.ga.throwsError = throwsError;

  var methodsName = [
    'startTrackerWithId',
    'setUserId',
    'debugMode',
    'trackView',
    'addCustomDimension',
    'trackEvent',
    'trackException',
    'trackTiming',
    'addTransaction',
    'addTransactionItem'
  ];

  methodsName.forEach(function (funcName) {
    methods.ga[funcName] = function () {
      var defer = $q.defer();

      (this.throwsError) ?
        defer.reject() :
        defer.resolve();

      return defer.promise;
    };
  });

  return methods;
}]);
