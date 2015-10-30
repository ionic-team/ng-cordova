/**
   * @ngdoc service
   * @name ngCordovaMocks.cordovaGooglePlus
   *
   * @description
   * A service for testing Google Plus features
   * in an app built with ngCordova.
   **/
  ngCordovaMocks.factory('$cordovaGooglePlus', ['$q', function ($q) {
    return {

      /**
       * These properties are here for the purpose of automated testing only.
       **/
      loginShouldSucceedWith: null,
      silentLoginShouldSucceedWith: null,
      disconnectShouldSucceedWith: null,
      isAvailableShouldSucceedWith: null,
      logoutShouldSuceedWith: null,

      login: function (options) {
        if (this.loginShouldSucceedWith !== null) {
          return $q.when(this.loginShouldSucceedWith);
        } else {
          return $q.reject();
        }
      },

      silentLogin: function (options) {
        if (this.loginShouldSucceedWith !== null) {
          return $q.when(this.silentLoginShouldSucceedWith);
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
        if (this.logoutShouldSuceedWith !== null) {
          return $q.when(this.disconnectShouldSucceedWith);
        } else {
          return $q.reject();
        }
      },

      isAvailable: function () {
        if (this.logoutShouldSuceedWith !== null) {
          return $q.when(this.disconnectShouldSucceedWith);
        } else {
          return $q.reject();
        }
      }
    };
  }]);
