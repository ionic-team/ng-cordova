System.register("ng-cordova/appRate", [], function (_export) {
  // install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
  // link     :     https://github.com/pushandplay/cordova-plugin-apprate

  "use strict";

  return {
    setters: [],
    execute: function () {
      angular.module("ngCordova.plugins.appRate", []).provider("$cordovaAppRate", [function () {

        this.setPreferences = function (defaults) {
          if (!defaults || !angular.isObject(defaults)) {
            return;
          }

          AppRate.preferences.useLanguage = defaults.language || null;
          AppRate.preferences.displayAppName = defaults.appName || "";
          AppRate.preferences.promptAgainForEachNewVersion = defaults.promptForNewVersion || true;
          AppRate.preferences.openStoreInApp = defaults.openStoreInApp || false;
          AppRate.preferences.usesUntilPrompt = defaults.usesUntilPrompt || 3;
          AppRate.preferences.useCustomRateDialog = defaults.useCustomRateDialog || false;
          AppRate.preferences.storeAppURL.ios = defaults.iosURL || null;
          AppRate.preferences.storeAppURL.android = defaults.androidURL || null;
          AppRate.preferences.storeAppURL.blackberry = defaults.blackberryURL || null;
          AppRate.preferences.storeAppURL.windows8 = defaults.windowsURL || null;
        };

        this.setCustomLocale = function (customObj) {
          var strings = {
            title: "Rate %@",
            message: "If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
            cancelButtonLabel: "No, Thanks",
            laterButtonLabel: "Remind Me Later",
            rateButtonLabel: "Rate It Now"
          };

          strings = angular.extend(strings, customObj);

          AppRate.preferences.customLocale = strings;
        };

        this.$get = ["$q", function ($q) {
          return {
            promptForRating: function promptForRating(immediate) {
              var q = $q.defer();
              var prompt = AppRate.promptForRating(immediate);
              q.resolve(prompt);

              return q.promise;
            },

            navigateToAppStore: function navigateToAppStore() {
              var q = $q.defer();
              var navigate = AppRate.navigateToAppStore();
              q.resolve(navigate);

              return q.promise;
            },

            onButtonClicked: function onButtonClicked(cb) {
              AppRate.onButtonClicked = function (buttonIndex) {
                cb.call(this, buttonIndex);
              };
            },

            onRateDialogShow: function onRateDialogShow(cb) {
              AppRate.onRateDialogShow = cb();
            }
          };
        }];
      }]);
    }
  };
});