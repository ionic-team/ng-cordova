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