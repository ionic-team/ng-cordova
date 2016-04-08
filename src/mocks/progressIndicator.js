/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaProgress
 *
 * @description
 * A service for testing Progress Indicator
 * in an app build with ngCordova.
 */

ngCordovaMocks.factory('$cordovaProgress', [
  '$timeout', function ($timeout) {

    return {
      show: function (_message) {
        var message = _message || 'Please wait...';
        console.info('$cordovaProgress.message', message);
      },

      showSimple: function (_dim) {
        var dim = _dim || false;
        console.info('$cordovaProgress.dim', dim);
      },

      showSimpleWithLabel: function (_dim, _label) {
        var dim   = _dim || false;
        var label = _label || 'Loading...';
        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.label', label);
        console.groupEnd();
      },

      showSimpleWithLabelDetail: function (_dim, _label, _detail) {
        var dim    = _dim || false;
        var label  = _label || 'Loading...';
        var detail = _detail || 'Please wait';

        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.label', label);
        console.info('$cordovaProgress.detail', detail);
        console.groupEnd();
      },

      showDeterminate: function (_dim, _timeout) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;
        console.group();
        console.info('$cordovaProgress.dim show', dim);
        console.info('$cordovaProgress.timeout', timeout);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress.dim timeout', dim);
        }, timeout);
      },

      showDeterminateWithLabel: function (_dim, _timeout, _label) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;
        var label   = _label || 'Loading...';

        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.timeout', timeout);
        console.info('$cordovaProgress.label', label);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress[dim, label] timeout', [dim, label]);
        }, timeout);
      },

      showAnnular: function (_dim, _timeout) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;

        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.timeout', timeout);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress.dim timeout', dim);
        }, timeout);
      },

      showAnnularWithLabel: function (_dim, _timeout, _label) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;
        var label   = _label || 'Loading...';

        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.timeout', timeout);
        console.info('$cordovaProgress.label', label);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress[dim, label] timeout', [dim, label]);
        }, timeout);
      },

      showBar: function (_dim, _timeout) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;

        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.timeout', timeout);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress.dim timeout', dim);
        }, timeout);
      },

      showBarWithLabel: function (_dim, _timeout, _label) {
        var dim     = _dim || false;
        var timeout = _timeout || 50000;
        var label   = _label || 'Loading...';
        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.label', label);
        console.info('$cordovaProgress.timeout', timeout);
        console.groupEnd();
        $timeout(function () {
          console.info('$cordovaProgress[dim, label] timeout', [dim, label]);
        }, timeout);
      },

      showSuccess: function (_dim, _label) {
        var dim   = _dim || false;
        var label = _label || 'Success';
        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.label', label);
        console.groupEnd();
      },

      showText: function (_dim, _text, _position) {
        var dim      = _dim || false;
        var text     = _text || 'Warning';
        var position = _position || 'center';
        console.group();
        console.info('$cordovaProgress.dim', dim);
        console.info('$cordovaProgress.text', text);
        console.info('$cordovaProgress.position', position);
        console.groupEnd();
      },

      hide: function () {
        console.info('$cordovaProgress.hide');
      }
    };
  }
]);
