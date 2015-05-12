/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaKeychain
 *
 * @description
 * A service for testing Keychain features
 * in an app built with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaKeychain', ['$q', function ($q) {
  var keychains = {};

  return {
    /**
     * @ngdoc property
     * @name keychains
     * @propertyOf ngCordovaMocks.cordovaKeychain
     *
     * @description
     * The collection of 'keychains' that have been saved.
     * This property should only be used in automated tests.
     **/
    keychains: keychains,

    getForKey: function (key, serviceName) {
      var defer = $q.defer();

      if (this.keychains[serviceName]) {
        defer.resolve(this.keychains[serviceName][key]);
      } else {
        defer.reject();
      }

      return defer.promise;
    },

    setForKey: function (key, serviceName, value) {
      var defer = $q.defer();

      if (!this.keychains[serviceName]) {
        this.keychains[serviceName] = {};
      }

      this.keychains[serviceName][key] = value;

      defer.resolve();

      return defer.promise;
    },

    removeForKey: function (key, serviceName) {
      var defer = $q.defer();

      if (this.keychains[serviceName]) {
        delete this.keychains[serviceName][key];
      }

      defer.resolve();

      return defer.promise;
    }
  };
}]);
