// install  :     cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
// link     :     https://github.com/pushandplay/cordova-plugin-apprate

angular.module('ngCordova.plugins.AppRate', [])

  .factory('$cordovaAppRate', ['$q', function ($q) {
    return {
      setAppUrl: function (device, url) {
        var devices = ['ios', 'android', 'blackberry', 'windows8'];

        if (devices.indexOf(device) !== -1) {
          AppRate.preferences.storeAppURL[device] = url;
        }
      },

      promptForRating: function (immediate) {
        var d = $q.defer(),
          prompt = AppRate.promptForRating(immediate);

        d.resolve(prompt);

        return d.promise;
      },

      onButtonClicked: function (cb) {
        AppRate.onButtonClicked = function (buttonIndex) {
          cb.call(this, buttonIndex);
        };
      },

      onRateDialogShow: function (cb) {
        AppRate.onRateDialogShow = cb();
      },

      useLanguage: function (lang) {
        AppRate.preferences.useLanguage = lang;
      },

      customLocale: function (customLocale) {
        var strings = {
          title: 'Rate %@',
          message: 'If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!',
          cancelButtonLabel: 'No, Thanks',
          laterButtonLabel: 'Remind Me Later',
          rateButtonLabel: 'Rate It Now'
        };

        strings = angular.extend(strings, customLocale);

        AppRate.preferences.customLocale = strings;
      },

      appName: function (name) {
        AppRate.preferences.displayAppName = name;
      },

      usesUntilPrompt: function (uses) {
        AppRate.preferences.usesUntilPrompt = uses;
      },

      promptForEveryVersion: function (prompt) {
        AppRate.preferences.promptAgainForEachNewVersion = prompt;
      }
    };
  }]);
