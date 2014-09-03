/*global facebookConnectPlugin,angular */
angular.module('ngCordova.plugins.facebookConnect', [])

  .provider('$cordova', function () {

    this.FacebookAppId = undefined;

    this.setFacebookAppId = function (id) {
      this.FacebookAppId = id;
    };

    this.$get = function () {

      var FbAppId = this.FacebookAppId;

      return {
        getFacebookAppId: function () {
          return FbAppId;
        }
      };
    };
  })

  .factory('$cordovaFacebookConnect', function ($q, $cordova) {

    return {

      init: function (appId) {
        if (!window.cordova) {
          facebookConnectPlugin.browserInit(appId);
        }
      },

      login: function (options) {

        this.init($cordova.getFacebookAppId());

        var q = $q.defer();
        facebookConnectPlugin.login(options,
          function (res) {
            q.resolve(res);
          }, function (res) {
            q.reject(res);
          });

        return q.promise;
      },

      showDialog: function (options) {

        var q = $q.defer();
        facebookConnectPlugin.showDialog(options,
          function (res) {
            q.resolve(res);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      api: function (path, permission) {

        var q = $q.defer();
        facebookConnectPlugin.api(path, permission,
          function (res) {
            q.resolve(res);
          },
          function (err) {
            q.reject(err);
          });

        return q.promise;
      },

      getAccessToken: function () {

        var q = $q.defer();
        facebookConnectPlugin.getAccessToken(function (res) {
          q.resolve(res);
        },
        function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      getLoginStatus: function () {

        var q = $q.defer();
        facebookConnectPlugin.getLoginStatus(function (res) {
          q.resolve(res);
        },
        function (err) {
          q.reject(err);
        });

        return q.promise;
      },

      logout: function () {

        var q = $q.defer();
        facebookConnectPlugin.logout(function (res) {
          q.resolve(res);
        },
        function (err) {
          q.reject(err);
        });

        return q.promise;
      }
    };
  });
