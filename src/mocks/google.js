/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaGoogle
 *
 * @description
 * A service for testing Google features
 * in an app built with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaGoogle', ['$q', function ($q) {
  return {

    /**
     * These properties are here for the purpose of automated testing only.
     **/
    isAvailableShouldSucceedWith: null,
    loginShouldSucceedWith: null,
    trySilentLoginShouldSucceedWith: null,
    logoutShouldSuceedWith: null,
    disconnectShouldSuceedWith: null,

    isAvailable: function () {
      if (this.loginShouldSucceedWith !== null) {
        return $q.when(this.loginShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    login: function () {
      if (this.loginShouldSucceedWith !== null) {
        return $q.when(this.loginShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    trySilentLogin: function () {
      if (this.trySilentLoginShouldSucceedWith !== null) {
        return $q.when(this.trySilentLoginShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    logout: function () {
      if (this.logoutShouldSuceedWith !== null) {
        return $q.when(this.logoutShouldSuceedWith);
      } else {
        return $q.reject();
      }
    },

    disconnect: function () {
      if (this.disconnectShouldSuceedWith !== null) {
        return $q.when(this.disconnectShouldSuceedWith);
      } else {
        return $q.reject();
      }
    }
  };
}]);
