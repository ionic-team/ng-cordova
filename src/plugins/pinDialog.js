// install   :      cordova plugin add https://github.com/Paldom/PinDialog.git
// link      :      https://github.com/Paldom/PinDialog

angular.module('ngCordova.plugins.pinDialog', [])

  .factory('$cordovaPinDialog', ['$q', '$window', '$cordova', function ($q, $window, $cordova) {

    return {
      prompt: function (message, title, buttons) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          $window.plugins.pinDialog.prompt(message, function (res) {
            q.resolve(res);
          }, title, buttons);
        });

        return q.promise;
      }
    }
  }]);
