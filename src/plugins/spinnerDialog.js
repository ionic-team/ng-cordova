// install   :       cordova plugin add https://github.com/Paldom/SpinnerDialog.git
// link      :       https://github.com/Paldom/SpinnerDialog

angular.module('ngCordova.plugins.spinnerDialog', [])

  .factory('$cordovaSpinnerDialog', [function () {

    return {
      show: function (title, message) {
        return window.plugins.spinnerDialog.show(title, message);
      },
      hide: function () {
        return window.plugins.spinnerDialog.hide();
      }
    }

  }]);