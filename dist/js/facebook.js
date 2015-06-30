System.register('ng-cordova/facebook', [], function (_export) {
  // install   :   cordova -d plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
  // link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.facebook', []).provider('$cordovaFacebook', [function () {

        this.browserInit = function (id, version) {
          this.appID = id;
          this.appVersion = version || 'v2.0';
          facebookConnectPlugin.browserInit(this.appID, this.appVersion);
        };

        this.$get = ['$q', function ($q) {
          return {
            login: function login(permissions) {
              var q = $q.defer();
              facebookConnectPlugin.login(permissions, function (res) {
                q.resolve(res);
              }, function (res) {
                q.reject(res);
              });

              return q.promise;
            },

            showDialog: function showDialog(options) {
              var q = $q.defer();
              facebookConnectPlugin.showDialog(options, function (res) {
                q.resolve(res);
              }, function (err) {
                q.reject(err);
              });
              return q.promise;
            },

            api: function api(path, permissions) {
              var q = $q.defer();
              facebookConnectPlugin.api(path, permissions, function (res) {
                q.resolve(res);
              }, function (err) {
                q.reject(err);
              });
              return q.promise;
            },

            getAccessToken: function getAccessToken() {
              var q = $q.defer();
              facebookConnectPlugin.getAccessToken(function (res) {
                q.resolve(res);
              }, function (err) {
                q.reject(err);
              });
              return q.promise;
            },

            getLoginStatus: function getLoginStatus() {
              var q = $q.defer();
              facebookConnectPlugin.getLoginStatus(function (res) {
                q.resolve(res);
              }, function (err) {
                q.reject(err);
              });
              return q.promise;
            },

            logout: function logout() {
              var q = $q.defer();
              facebookConnectPlugin.logout(function (res) {
                q.resolve(res);
              }, function (err) {
                q.reject(err);
              });
              return q.promise;
            }
          };
        }];
      }]);
    }
  };
});