//  install   :   cordova plugin add org.apache.cordova.battery-status
//  link      :   https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

angular.module('ngCordova.plugins.appRating', [])

  .factory('$cordovaAppRating', ['$q', '$localStorage', function ($q, $localStorage) {

    return {

      init: function (config) {
        if ($localStorage.specialOffers === undefined) {
          $localStorage.specialOffers = {};
        }
        if ($localStorage.specialOffers[config.id] === undefined) {
          $localStorage.specialOffers[config.id] = {};
          $localStorage.specialOffers[config.id].enabled = true;
          $localStorage.specialOffers[config.id].countOpens = 1;
        }
        var onAgree = function () {
          $localStorage.specialOffers[config.id].enabled = false;
          config.onAgree();
        };
        var onDecline = function () {
          $localStorage.specialOffers[config.id].enabled = false;
          config.onDecline();
        };
        var onRemindMeLater = function () {
          $localStorage.specialOffers[config.id].countOpens = 1;
          config.onRemindMeLater();
        };
        document.addEventListener("resume", function () {
          if ($localStorage.specialOffers[config.id].countOpens >= config.showOnCount && $localStorage.specialOffers[config.id].enabled) {
            var clickHandler = function (buttonIndex) {
              switch (buttonIndex) {
                case 3:
                  onAgree();
                  break;
                case 2:
                  onRemindMeLater();
                  break;
                case 1:
                  onDecline();
                  break;
              }
            };
            var buttonLabels = [config.declineLabel, config.remindLabel, config.agreeLabel];
            navigator.notification.confirm(config.text, clickHandler, config.title, buttonLabels);
          } else if ($localStorage.specialOffers[config.id].enabled) {
            $localStorage.specialOffers[config.id].countOpens++;
          }
        });
      },

      appStoreUrl: function (iosAppId) {
        var reviewURL = '';
        if (window.device && parseInt(window.device.version) >= 7) {
          reviewURL = "itms-apps://itunes.apple.com/en/app/id" + iosAppId;
        } else {
          reviewURL = "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + iosAppId + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software";
        }
        return reviewURL;
      }

    };

  }]);
