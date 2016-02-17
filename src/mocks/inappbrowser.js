/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaInAppBrowser
 *
 * @description
 * A service to open links on exteral browser. This mock does nothing, but if you don't declare it
 * the tests of your application will break.
 **/
ngCordovaMocks.provider('$cordovaInAppBrowser', [function() {

  this.setDefaultOptions = function() {};

  this.$get = ['$q', function($q) {

    var dummyPromise = function() {
      var q = $q.defer();

      q.resolve(true);

      return q.promise;
    };

    return {
      open: dummyPromise,

      close: angular.noop,

      show: angular.noop,

      executeScript: dummyPromise,

      insertCSS: dummyPromise
    };
  }];
}]);