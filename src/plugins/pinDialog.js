// install   :      cordova plugin add https://github.com/Paldom/PinDialog.git
// link      :      https://github.com/Paldom/PinDialog

angular.module('ngCordova.plugins.pinDialog', [])

  .factory('$cordovaPinDialog', ['$q', '$window', function ($q, $window) {

    return {
      prompt: function (message, title, buttons) {
        var q = $q.defer();

        $window.plugins.pinDialog.prompt(message, function (res) {
          q.resolve(res);
        }, title, buttons);

        return q.promise;
      }
    };
  }]);
