angular.module('demo', [
  'ionic',
  'ngCordova',

  // modules
  // 'demo.adMob.ctrl',  -- not functioning right now
  'demo.appAvailability.ctrl',
  'demo.appRate.ctrl',
  'demo.barcodeScanner.ctrl',
  'demo.batteryStatus.ctrl',
  'demo.beacon.ctrl',
  'demo.camera.ctrl',
  'demo.clipboard.ctrl',
  'demo.contacts.ctrl',
  'demo.datePicker.ctrl',
  'demo.device.ctrl',
  'demo.deviceMotion.ctrl',
  'demo.deviceOrientation.ctrl',
  'demo.dialogs.ctrl',
  'demo.emailComposer.ctrl',
  'demo.facebook.ctrl',
  'demo.file.ctrl',
  'demo.fileOpener2.ctrl',
  'demo.fileTransfer.ctrl',
  'demo.flashlight.ctrl',
  'demo.geolocation.ctrl',
  'demo.globalization.ctrl',
  'demo.googleAnalytics.ctrl',
  'demo.healthkit.ctrl',
  'demo.inAppBrowser.ctrl',
  'demo.localNotification.ctrl',
  'demo.media.ctrl',
  'demo.network.ctrl',
  'demo.oauth.ctrl',
  'demo.preferences.ctrl',
  'demo.printer.ctrl',
  'demo.pushNotifications.ctrl',
  'demo.socialSharing.ctrl',
  'demo.sqlite.ctrl',
  'demo.statusbar.ctrl',
  'demo.toast.ctrl',
  'demo.touchid.ctrl',
  'demo.vibration.ctrl',
  'demo.upsPushNotifications.ctrl'
])

  .run(function ($rootScope, $ionicPlatform, $cordovaNetwork, $cordovaBatteryStatus, $cordovaLocalNotification, $cordovaPush) {

    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      $cordovaLocalNotification.registerPermission().then(function () {
        //alert("registered");
      }, function () {
        //alert("denied registration");
      });

      var iosConfig = {
        "badge": true,
        "sound": true,
        "alert": true
      };
      $cordovaPush.register(iosConfig).then(function (result) {
        //alert("device token: " + result.deviceToken);
      }, function (error) {
        //alert("error " + error);
      });

      $rootScope.$on('$cordovaPush:notificationReceived', function (event, notification) {
        if (notification.alert) {
          navigator.notification.alert(notification.alert);
        }
        if (notification.sound) {
          var snd = new Media(event.sound);
          snd.play();
        }
        if (notification.badge) {
          $cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
            // Success!
          }, function (err) {
            // An error occurred. Show a message to the user
          });
        }
      });


      $rootScope.$on("$cordovaNetwork:offline", function (event, result) {
        alert("Device is now Offline!");
      });


      $rootScope.$on("$cordovaNetwork:online", function (event, result) {
        alert("Device is Online!");
      });

      $rootScope.$on("$cordovaBatteryStatus:status", function (event, status) {
        //alert("status: " + status);
      })
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, $cordovaFacebookProvider, $cordovaAppRateProvider, $cordovaInAppBrowserProvider) {

    if (!window.cordova) {
      var appID = 1234567890;
      var version = "v2.0"; // or leave blank and default is v2.0
      //$cordovaFacebookProvider.browserInit(appID, version);
    }

    var browserOptions = {
      location: "yes",
      toolbar: "yes"
    };


    document.addEventListener("deviceready", function () {
      var preferences = {
        iosURL: "some URL",
        appName: 'APP NAME',
        language: 'fr'
      };
      $cordovaAppRateProvider.setPreferences(preferences);
    }, false);

    $cordovaInAppBrowserProvider.setDefaultOptions(browserOptions);

    $stateProvider

      .state('menu', {
        url: "/menu",
        templateUrl: "app/menu.html"
      })

      .state('about', {
        url: "/about",
        templateUrl: "app/about.html"
      })

      .state('appAvailability', {
        url: '/appAvailability',
        templateUrl: 'app/appAvailability/appAvailability.html',
        controller: "AppAvailabilityCtrl"
      })

      .state('appRate', {
        url: '/appRate',
        templateUrl: 'app/appRate/appRate.html',
        controller: "AppRateCtrl"
      })


      .state('barcodeScanner', {
        url: '/barcodeScanner',
        templateUrl: 'app/barcodeScanner/barcodeScanner.html',
        controller: "BarcodeScannerCtrl"
      })

      .state('batteryStatus', {
        url: '/batteryStatus',
        templateUrl: 'app/batteryStatus/batteryStatus.html',
        controller: "BatteryStatusCtrl"
      })

      .state('beacon', {
        url: '/beacon',
        templateUrl: 'app/beacon/beacon.html',
        controller: "BeaconCtrl"
      })

      .state('camera', {
        url: '/camera',
        templateUrl: 'app/camera/camera.html',
        controller: "CameraCtrl"
      })

      .state('clipboard', {
        url: '/clipboard',
        templateUrl: 'app/clipboard/clipboard.html',
        controller: "ClipboardCtrl"
      })

      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: "ContactsCtrl"
      })


      .state('datePicker', {
        url: '/datePicker',
        templateUrl: 'app/datePicker/datePicker.html',
        controller: "DatePickerCtrl"
      })

      .state('device', {
        url: '/device',
        templateUrl: 'app/device/device.html',
        controller: "DeviceCtrl"
      })

      .state('deviceMotion', {
        url: '/deviceMotion',
        templateUrl: 'app/deviceMotion/deviceMotion.html',
        controller: "DeviceMotionCtrl"
      })


      .state('deviceOrientation', {
        url: '/deviceOrientation',
        templateUrl: 'app/deviceOrientation/deviceOrientation.html',
        controller: "DeviceOrientationCtrl"
      })

      .state('dialogs', {
        url: '/dialogs',
        templateUrl: 'app/dialogs/dialogs.html',
        controller: "DialogsCtrl"
      })

      .state('emailComposer', {
        url: '/emailComposer',
        templateUrl: 'app/emailComposer/emailComposer.html',
        controller: "EmailComposerCtrl"
      })

      .state('facebook', {
        url: '/facebook',
        templateUrl: 'app/facebook/facebook.html',
        controller: "FacebookCtrl"
      })

      .state('file', {
        url: '/file',
        templateUrl: 'app/file/file.html',
        controller: "FileCtrl"
      })

      .state('fileTransfer', {
        url: '/fileTransfer',
        templateUrl: 'app/fileTransfer/fileTransfer.html',
        controller: "FileTransferCtrl"
      })

      .state('fileOpener2', {
        url: '/fileOpener2',
        templateUrl: 'app/fileOpener2/fileOpener2.html',
        controller: "FileOpener2Ctrl"
      })

      .state('flashlight', {
        url: '/flashlight',
        templateUrl: 'app/flashlight/flashlight.html',
        controller: "FlashlightCtrl"
      })

      .state('geolocation', {
        url: '/geolocation',
        templateUrl: 'app/geolocation/geolocation.html',
        controller: "GeolocationCtrl"
      })

      .state('globalization', {
        url: '/global',
        templateUrl: 'app/globalization/globalization.html',
        controller: "GlobalizationCtrl"
      })

      .state('googleAnalytics', {
        url: '/googleAnalytics',
        templateUrl: 'app/googleAnalytics/googleAnalytics.html',
        controller: "GoogleAnalyticsCtrl"
      })

      .state('healthkit', {
        url: '/healthkit',
        templateUrl: 'app/healthkit/healthkit.html',
        controller: "HealthKitCtrl"
      })

      .state('inAppBrowser', {
        url: '/inAppBrowser',
        templateUrl: 'app/inAppBrowser/inAppBrowser.html',
        controller: "InAppBrowserCtrl"
      })

      .state('localNotification', {
        url: '/localNotification',
        templateUrl: 'app/localNotification/localNotification.html',
        controller: "LocalNotificationCtrl"
      })

      .state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: "MediaCtrl"
      })

      .state('network', {
        url: '/network',
        templateUrl: 'app/network/network.html',
        controller: "NetworkCtrl"
      })

      .state('oauth', {
        url: '/oauth',
        templateUrl: 'app/oauth/oauth.html',
        controller: "OauthCtrl"
      })

      .state('preferences', {
        url: '/preferences',
        templateUrl: 'app/preferences/preferences.html',
        controller: "PreferencesCtrl"
      })

      .state('printer', {
        url: '/printer',
        templateUrl: 'app/printer/printer.html',
        controller: "PrinterCtrl"
      })

      .state('pushNotifications', {
        url: '/pushNotifications',
        templateUrl: 'app/pushNotifications/pushNotifications.html',
        controller: "PushNotificationsCtrl"
      })

      .state('socialSharing', {
        url: '/socialSharing',
        templateUrl: 'app/socialSharing/socialSharing.html',
        controller: "SocialSharingCtrl"
      })

      .state('sqlite', {
        url: '/sqlite',
        templateUrl: 'app/sqlite/sqlite.html',
        controller: "SqliteCtrl"
      })


      .state('statusbar', {
        url: '/statusbar',
        templateUrl: 'app/statusbar/statusbar.html',
        controller: "StatusbarCtrl"
      })


      .state('toast', {
        url: '/toast',
        templateUrl: 'app/toast/toast.html',
        controller: "ToastCtrl"
      })

      .state('touchid', {
        url: '/touchid',
        templateUrl: 'app/touchid/touchid.html',
        controller: "TouchIDCtrl"
      })

      .state('vibration', {
        url: '/vibration',
        templateUrl: 'app/vibration/vibration.html',
        controller: "VibrationCtrl"
      })

      .state('upsPushNotifications', {
        url: '/upsPushNotifications',
        templateUrl: 'app/upsPushNotifications/pushNotifications.html',
        controller: "UpsPushNotificationsCtrl"
      });

    $urlRouterProvider.otherwise('/menu');
  });
