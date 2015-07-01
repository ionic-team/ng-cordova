/*!
 * ngCordova
 * v0.1.17-alpha
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){
System.register('ng-cordova/ng-cordova', ['./plugins/camera', './plugins/geolocation'], function (_export) {
  'use strict';

  return {
    setters: [function (_pluginsCamera) {
      for (var _key in _pluginsCamera) {
        _export(_key, _pluginsCamera[_key]);
      }
    }, function (_pluginsGeolocation) {
      for (var _key2 in _pluginsGeolocation) {
        _export(_key2, _pluginsGeolocation[_key2]);
      }
    }],
    execute: function () {}
  };
});
System.register("ng-cordova/plugins/camera", [], function (_export) {
  // install   :   cordova plugin add cordova-plugin-camera
  // link      :   https://github.com/apache/cordova-plugin-camera

  "use strict";

  var Camera;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Camera = (function () {
        function Camera() {
          _classCallCheck(this, Camera);
        }

        _createClass(Camera, null, [{
          key: "getPicture",
          value: function getPicture(options) {
            return new Promise(function (resolve, reject) {
              navigator.camera.getPicture(function (imageData) {
                resolve(imageData);
              }, function (err) {
                reject(err);
              }, options);
            });
          }
        }, {
          key: "cleanup",
          value: function cleanup() {
            return new Promise(function (resolve, reject) {
              navigator.camera.cleanup(function () {
                resolve();
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return Camera;
      })();

      _export("Camera", Camera);
    }
  };
});
System.register('ng-cordova/plugins/geolocation', ['rx'], function (_export) {
  // install   :     cordova plugin add cordova-plugin-geolocation
  // link      :     https://github.com/apache/cordova-plugin-geolocation

  'use strict';

  var Rx, Geolocation;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_rx) {
      Rx = _rx;
    }],
    execute: function () {
      Geolocation = (function () {
        function Geolocation() {
          _classCallCheck(this, Geolocation);
        }

        _createClass(Geolocation, [{
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
})();