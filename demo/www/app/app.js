angular.module('demo', [
  'ionic',
  'ngCordova',

  // modules
  // 'demo.adMob.ctrl',  // not working???
  'demo.appAvailability.ctrl',
  'demo.appRate.ctrl',
  'demo.barcodeScanner.ctrl',
  'demo.batteryStatus.ctrl',
  'demo.camera.ctrl',
  'demo.clipboard.ctrl',
  'demo.contacts.ctrl',
  'demo.datePicker.ctrl',
  'demo.device.ctrl',
  'demo.deviceMotion.ctrl',
  'demo.deviceOrientation.ctrl',
  'demo.dialogs.ctrl',
  'demo.facebook.ctrl',
  'demo.file.ctrl',
  'demo.flashlight.ctrl',
  'demo.geolocation.ctrl',
  'demo.globalization.ctrl',
  'demo.googleAnalytics.ctrl',
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
  'demo.vibration.ctrl'
])

  .run(function ($rootScope, $ionicPlatform, $cordovaNetwork, $cordovaBatteryStatus) {

    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      $cordovaNetwork.watchOffline();
      $cordovaNetwork.watchOnline();


      $rootScope.$on("networkOffline", function () {
        alert("Device is now Offline!");
      });


      $rootScope.$on("networkOnline", function () {
        alert("Device is Online!");
      });

      $cordovaBatteryStatus.$on("batterystatus", function (status) {
        alert("status :" + status);
      })
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {

    if (!window.cordova) {
      var appID = 1234567890;
      var version = "v2.0"; // or leave blank and default is v2.0
      $cordovaFacebookProvider.browserInit(appID, version);
    }

    $stateProvider

      .state('menu', {
        url: "/menu",
        templateUrl: "app/menu.html"
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
      });


    $urlRouterProvider.otherwise('/menu');
  });
