// install   :      cordova plugin add org.pbernasconi.progressindicator
// link      :      http://pbernasconi.github.io/cordova-progressIndicator/

angular.module('ngCordova.plugins.progressIndicator', [])

  .factory('$cordovaProgress', ['$q', '$cordova', function ($cordova) {

    return {
      showSimple: function (_dim) {
        var dim = _dim || false;

        $cordova.ready().then(function () {
          return ProgressIndicator.showSimple(dim)
        });
      },

      showSimpleWithLabel: function (_dim, _label) {
        var dim = _dim || false;
        var label = _label || "Loading...";

        $cordova.ready().then(function () {
          return ProgressIndicator.showSimpleWithLabel(dim, label);
        });
      },

      showSimpleWithLabelDetail: function (_dim, _label, _detail) {
        var dim = _dim || false;
        var label = _label || "Loading...";
        var detail = _detail || "Please wait";

        $cordova.ready().then(function () {
          return ProgressIndicator.showSimpleWithLabelDetail(dim, label, detail);
        });
      },

      showDeterminate: function (_dim, _timeout) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;
        $cordova.ready().then(function () {
          return ProgressIndicator.showDeterminate(dim, timeout)
        });
      },

      showDeterminateWithLabel: function (_dim, _timeout, _label) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;
        var label = _label || "Loading...";

        $cordova.ready().then(function () {
          return ProgressIndicator.showDeterminateWithLabel(dim, timeout, label)
        });
      },

      showAnnular: function (_dim, _timeout) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;

        $cordova.ready().then(function () {
          return ProgressIndicator.showAnnular(dim, timeout)
        });
      },

      showAnnularWithLabel: function (_dim, _timeout, _label) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;
        var label = _label || "Loading...";
        $cordova.ready().then(function () {
          return ProgressIndicator.showAnnularWithLabel(dim, timeout, label)
        });
      },

      showBar: function (_dim, _timeout) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;
        $cordova.ready().then(function () {
          return ProgressIndicator.showBar(dim, timeout)
        });
      },

      showBarWithLabel: function (_dim, _timeout, _label) {
        var dim = _dim || false;
        var timeout = _timeout || 50000;
        var label = _label || "Loading...";
        $cordova.ready().then(function () {
          return ProgressIndicator.showBarWithLabel(dim, timeout, label)
        });
      },

      showSuccess: function (_dim, _label) {
        var dim = _dim || false;
        var label = _label || "Success";
        $cordova.ready().then(function () {
          return ProgressIndicator.showSuccess(dim, label)
        });
      },

      showText: function (_dim, _text, _position) {
        var dim = _dim || false;
        var text = _text || "Warning";
        var position = _position || "center";
        $cordova.ready().then(function () {
          return ProgressIndicator.showText(dim, text, position);

        });
      },

      hide: function () {
        $cordova.ready().then(function () {
          return ProgressIndicator.hide();
        });
      }
    }

  }]);
