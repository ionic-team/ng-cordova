// install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
// link     :     https://github.com/pushandplay/cordova-plugin-apprate

/* globals AppRate: true */
angular.module('ngCordova.plugins.appRate', [])

  .provider('$cordovaAppRate', [function () {

    /**
      * Set defaults settings to AppRate
      *
      * @param {Object} defaults - AppRate default settings
      * @param {string} defaults.language
      * @param {string} defaults.appName
      * @param {boolean} defaults.promptForNewVersion
      * @param {boolean} defaults.openStoreInApp
      * @param {number} defaults.usesUntilPrompt
      * @param {boolean} defaults.useCustomRateDialog
      * @param {string} defaults.iosURL
      * @param {string} defaults.androidURL
      * @param {string} defaults.blackberryURL
      * @param {string} defaults.windowsURL
      */
    this.setPreferences = function (defaults) {
      if (!defaults || !angular.isObject(defaults)) {
        return;
      }

      AppRate.preferences.useLanguage = defaults.language || null;
      AppRate.preferences.displayAppName = defaults.appName || '';
      AppRate.preferences.promptAgainForEachNewVersion = defaults.promptForNewVersion || true;
      AppRate.preferences.openStoreInApp = defaults.openStoreInApp || false;
      AppRate.preferences.usesUntilPrompt = defaults.usesUntilPrompt || 3;
      AppRate.preferences.useCustomRateDialog = defaults.useCustomRateDialog || false;
      AppRate.preferences.storeAppURL.ios = defaults.iosURL || null;
      AppRate.preferences.storeAppURL.android = defaults.androidURL || null;
      AppRate.preferences.storeAppURL.blackberry = defaults.blackberryURL || null;
      AppRate.preferences.storeAppURL.windows8 = defaults.windowsURL || null;
    };

    /**
      * Set custom locale
      *
      * @param {Object} customObj
      * @param {string} customObj.title
      * @param {string} customObj.cancelButtonLabel
      * @param {string} customObj.laterButtonLabel
      * @param {string} customObj.rateButtonLabel
      */
    this.setCustomLocale = function (customObj) {
      var strings = {
        title: 'Rate %@',
        message: 'If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!',
        cancelButtonLabel: 'No, Thanks',
        laterButtonLabel: 'Remind Me Later',
        rateButtonLabel: 'Rate It Now'
      };

      strings = angular.extend(strings, customObj);

      AppRate.preferences.customLocale = strings;
    };

    this.$get = ['$q', function ($q) {
      return {
        promptForRating: function (immediate) {
          var q = $q.defer();
          var prompt = AppRate.promptForRating(immediate);
          q.resolve(prompt);

          return q.promise;
        },

        navigateToAppStore: function () {
          var q = $q.defer();
          var navigate = AppRate.navigateToAppStore();
          q.resolve(navigate);

          return q.promise;
        },

        onButtonClicked: function (cb) {
          AppRate.onButtonClicked = function (buttonIndex) {
            cb.call(this, buttonIndex);
          };
        },

        onRateDialogShow: function (cb) {
          AppRate.onRateDialogShow = cb();
        }
      };
    }];
  }]);
