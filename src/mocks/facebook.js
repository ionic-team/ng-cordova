/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaFacebook
 *
 * @description
 * A service for testing Facebook features
 * in an app built with ngCordova.
 **/
ngCordovaMocks.factory('$cordovaFacebook', ['$q', function ($q) {
  return {

    /**
     * These properties are here for the purpose of automated testing only.
     **/
    loginShouldSucceedWith: null,
    showDialogShouldSucceedWith: null,
    apiShouldSucceedWith: null,
    getAccessTokenShouldSucceedWith: null,
    getLoginStatusShouldSucceedWith: null,
    logoutShouldSuceedWith: null,

    login: function (permissions) {
      if (this.loginShouldSucceedWith !== null) {
        return $q.when(this.loginShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    showDialog: function (options) {
      if (this.showDialogShouldSucceedWith !== null) {
        return $q.when(this.showDialogShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    api: function (path, permissions) {
      if (this.apiShouldSucceedWith !== null) {
        return $q.when(this.apiShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    getAccessToken: function () {
      if (this.getAccessTokenShouldSucceedWith !== null) {
        return $q.when(this.getAccessTokenShouldSucceedWith);
      } else {
        return $q.reject();
      }
    },

    getLoginStatus: function () {
      if (this.getLoginStatusShouldSucceedWith !== null) {
        return $q.when(this.getLoginStatusShouldSucceedWith);
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
    }
  };
}]);
