// install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
// link     :     https://github.com/pushandplay/cordova-plugin-apprate

angular.module('ngCordova.plugins.appRate', [])

  .provider("$cordovaAppRate", [function () {

    this.setAppUrl = function (device, url) {
      var devices = ['ios', 'android', 'blackberry', 'windows8'];

      if (devices.indexOf(device) !== -1) {
        AppRate.preferences.storeAppURL[device] = url;
      }
      else {
        alert("wrong device type");
      }
    };

    this.useLanguage = function (language) {
      AppRate.preferences.useLanguage = language;
    };

    this.displayAppName = function (name) {
      AppRate.preferences.displayAppName = name;
    };

    this.promptAgainForEachNewVersion = function (boolean) {
      AppRate.preferences.promptAgainForEachNewVersion = boolean;
    };

    this.usesUntilPrompt = function (number) {
      AppRate.preferences.usesUntilPrompt = number;
    };

    this.openStoreInApp = function (boolean) {
      AppRate.preferences.openStoreInApp = boolean;
    };

    this.useCustomRateDialog = function (boolean) {
      AppRate.preferences.useCustomRateDialog = boolean;
    };

    this.customLocale = function (customObj) {
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
