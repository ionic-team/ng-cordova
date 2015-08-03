System.register('ng-cordova/plugins/geolocation', ['rx'], function (_export) {
  // install   :     cordova plugin add cordova-plugin-geolocation
  // link      :     https://github.com/apache/cordova-plugin-geolocation

  //import * as Rx from 'rx'

  'use strict';

  var Rx, Geolocation;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_rx) {
      Rx = _rx;
    }],
    execute: function () {

      console.log('Imported Rx', Rx, 'yea');

      Geolocation = (function () {
        function Geolocation() {
          _classCallCheck(this, Geolocation);
        }

        _createClass(Geolocation, null, [{
          key: 'getCurrentPosition',
          value: function getCurrentPosition(options) {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(function (result) {
                resolve(result);
              }, function (err) {
                reject(err);
              }, options);
            });
          }
        }, {
          key: 'watchPosition',
          value: function watchPosition(options) {
            var watchID = undefined;

            var source = Rx.Observable.create(function (observer) {
              watchID = navigator.geolocation.watchPosition(function (result) {
                observer.onNext(result);
              }, function (err) {
                observer.onError(err, observer);
              }, options);
            });

            return {
              source: source,
              watchID: watchID,
              clear: function clear() {
                navigator.geolocation.clearWatch(watchID);
              }
            };
          }
        }, {
          key: 'clearWatch',
          value: function clearWatch(watchID) {
            return navigator.geolocation.clearWatch(watchID);
          }
        }]);

        return Geolocation;
      })();

      _export('Geolocation', Geolocation);
    }
  };
});