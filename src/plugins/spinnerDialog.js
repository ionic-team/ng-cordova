// install   :       cordova plugin add https://github.com/Paldom/SpinnerDialog.git
// link      :       https://github.com/Paldom/SpinnerDialog

angular.module('ngCordova.plugins.spinnerDialog', [])

  .factory('$cordovaSpinnerDialog', ['$window', function ($window) {

    return {
      show: function (title, message, fixed, iosOptions) {
        fixed = fixed || false;
        return $window.plugins.spinnerDialog.show(title, message, fixed, iosOptions);
      },
      hide: function () {
        return $window.plugins.spinnerDialog.hide();
      }
    };

  }]);
