System.register('ng-cordova/progressIndicator', [], function (_export) {
  // install   :      cordova plugin add https://github.com/pbernasconi/cordova-progressIndicator.git
  // link      :      http://pbernasconi.github.io/cordova-progressIndicator/

  'use strict';

  return {
    setters: [],
    execute: function () {
      angular.module('ngCordova.plugins.progressIndicator', []).factory('$cordovaProgress', ['$q', function ($q) {

        return {
          show: function show(_message) {
            var message = _message || 'Please wait...';
            return ProgressIndicator.show(message);
          },

          showSimple: function showSimple(_dim) {
            var dim = _dim || false;
            return ProgressIndicator.showSimple(dim);
          },

          showSimpleWithLabel: function showSimpleWithLabel(_dim, _label) {
            var dim = _dim || false;
            var label = _label || 'Loading...';
            return ProgressIndicator.showSimpleWithLabel(dim, label);
          },

          showSimpleWithLabelDetail: function showSimpleWithLabelDetail(_dim, _label, _detail) {
            var dim = _dim || false;
            var label = _label || 'Loading...';
            var detail = _detail || 'Please wait';
            return ProgressIndicator.showSimpleWithLabelDetail(dim, label, detail);
          },

          showDeterminate: function showDeterminate(_dim, _timeout) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            return ProgressIndicator.showDeterminate(dim, timeout);
          },

          showDeterminateWithLabel: function showDeterminateWithLabel(_dim, _timeout, _label) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            var label = _label || 'Loading...';

            return ProgressIndicator.showDeterminateWithLabel(dim, timeout, label);
          },

          showAnnular: function showAnnular(_dim, _timeout) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            return ProgressIndicator.showAnnular(dim, timeout);
          },

          showAnnularWithLabel: function showAnnularWithLabel(_dim, _timeout, _label) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            var label = _label || 'Loading...';
            return ProgressIndicator.showAnnularWithLabel(dim, timeout, label);
          },

          showBar: function showBar(_dim, _timeout) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            return ProgressIndicator.showBar(dim, timeout);
          },

          showBarWithLabel: function showBarWithLabel(_dim, _timeout, _label) {
            var dim = _dim || false;
            var timeout = _timeout || 50000;
            var label = _label || 'Loading...';
            return ProgressIndicator.showBarWithLabel(dim, timeout, label);
          },

          showSuccess: function showSuccess(_dim, _label) {
            var dim = _dim || false;
            var label = _label || 'Success';
            return ProgressIndicator.showSuccess(dim, label);
          },

          showText: function showText(_dim, _text, _position) {
            var dim = _dim || false;
            var text = _text || 'Warning';
            var position = _position || 'center';
            return ProgressIndicator.showText(dim, text, position);
          },

          hide: function hide() {
            return ProgressIndicator.hide();
          }
        };
      }]);
    }
  };
});