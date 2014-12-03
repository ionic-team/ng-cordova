angular.module('ngCordova.plugins', [
  'ngCordova.plugins.adMob',
  'ngCordova.plugins.appAvailability',
  'ngCordova.plugins.backgroundGeolocation',
  'ngCordova.plugins.badge',
  'ngCordova.plugins.barcodeScanner',
  'ngCordova.plugins.battery-status',
  'ngCordova.plugins.ble',
  'ngCordova.plugins.bluetoothSerial',
  'ngCordova.plugins.calendar',
  'ngCordova.plugins.camera',
  'ngCordova.plugins.capture',
  'ngCordova.plugins.clipboard',
  'ngCordova.plugins.contacts',
  'ngCordova.plugins.datePicker',
  'ngCordova.plugins.device',
  'ngCordova.plugins.deviceMotion',
  'ngCordova.plugins.deviceOrientation',
  'ngCordova.plugins.dialogs',
  'ngCordova.plugins.facebook',
  'ngCordova.plugins.file',
  'ngCordova.plugins.flashlight',
  'ngCordova.plugins.ga',
  'ngCordova.plugins.geolocation',
  'ngCordova.plugins.globalization',
  'ngCordova.plugins.googleAnalytics',
  'ngCordova.plugins.googleMap',
  'ngCordova.plugins.httpd',
  'ngCordova.plugins.inAppBrowser',
  'ngCordova.plugins.keyboard',
  'ngCordova.plugins.keychain',
  'ngCordova.plugins.localNotification',
  'ngCordova.plugins.media',
  'ngCordova.plugins.nativeAudio',
  'ngCordova.plugins.network',
  'ngCordova.plugins.oauth',
  'ngCordova.plugins.oauthUtility',
  'ngCordova.plugins.pinDialog',
  'ngCordova.plugins.prefs',
  'ngCordova.plugins.printer',
  'ngCordova.plugins.progressIndicator',
  'ngCordova.plugins.push',
  'ngCordova.plugins.sms',
  'ngCordova.plugins.socialSharing',
  'ngCordova.plugins.spinnerDialog',
  'ngCordova.plugins.splashscreen',
  'ngCordova.plugins.sqlite',
  'ngCordova.plugins.statusbar',
  'ngCordova.plugins.toast',
  'ngCordova.plugins.touchid',
  'ngCordova.plugins.vibration',
  'ngCordova.plugins.videoCapturePlus',
  'ngCordova.plugins.zip'
])

  .factory('cordovaReady', [function () {
    return function (fn) {

      var queue = [];

      var impl = function () {
        queue.push(Array.prototype.slice.call(arguments));
      };

      document.addEventListener('deviceready', function () {
        queue.forEach(function (args) {
          fn.apply(this, args);
        });
        impl = fn;
      }, false);

      return function () {
        return impl.apply(this, arguments);
      };
    };
  }]);
