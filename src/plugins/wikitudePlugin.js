/**
 * Created by yailanderson on 10/06/16.
 */
'use strict';

// install :  cordova plugin add https://github.com/Wikitude/wikitude-cordova-plugin.git

(function (angular) {

  angular.module('ngCordova.plugins.wikitudePlugin', [])
    .factory('$wikitudePlugin', ['$q', '$window', '$exceptionHandler', function ($q, $window, $exceptionHandler) {

      return {
        /**
         * internal listeners for success and error, they are invoked in cordova.exec() function
         */
        setInternalListeners: function () {
          $window.plugins.wikitudePlugin.prototype.onWikitudeOK = function () {
            //success callback
          };

          $window.plugins.wikitudePlugin.prototype.onWikitudeError = function (error) {
            // error callback
            throw (error);
          };
        },

        /**
         * array of requiredFeatures for instance [ "2d_tracking", "geo" ]
         * if no argument is passed the default value is 2d tracking
         * @param requiredFeatures
         * @returns {*}
         */
        isDeviceSupported: function (requiredFeatures) {

          // set the internal listeners for success and error
          this.setInternalListeners();

          var self = this;
          var q = $q.defer();

          // store features in the $wikitudePlugin for accessing it in all methods
          self.features = requiredFeatures || [ '2d_tracking' ];

          $window.plugins.wikitudePlugin.isDeviceSupported(function () {
            //device supported
            q.resolve(self);
          }, function () {
            //device not supported
            q.reject('device not supported!');
          }, self.features);

          return q.promise;
        },

        /**
         *
         * @param worldPath
         * @param startupConfiguration
         */
        loadARchitectWorld: function (worldPath, startupConfiguration) {
          var q = $q.defer();

          // startup configuration converted to json
          var config = JSON.stringify( startupConfiguration || { 'camera_position': 'back' } );

          if (typeof worldPath === 'string') {

            $window.plugins.wikitudePlugin.loadARchitectWorld(function (loadedURL) {
              // loadedSuccessful
              q.resolve(loadedURL);
            }, function (errorMessage) {
              // error local path is wrong or the remote url returned an error code
              q.reject(errorMessage);
            },worldPath, this.features, config);
          }

          return q.promise;
        },

        /**
         * inject a location into the Wikitude SDK
         * @param latitude
         * @param longitude
         * @param altitude
         * @param accuracy
         */
        setLocation: function (latitude, longitude, altitude, accuracy) {
          try {
            //inject a location into the Wikitude SDK
            $window.plugins.wikitudePlugin.setLocation(latitude, longitude, altitude, accuracy);
          } catch (e) {
            // handle execption
            $exceptionHandler(e.message);
          }
        },

        /**
         * The first argument Indicates if the ARchitect
         * web view should be included in the generated screenshot or not.
         * If a file path or file name is given in the second argument,
         * the generated screenshot will be saved in the application bundle.
         * Passing null will save the photo in the device photo library
         * @param includeWebView
         * @param imagePath
         * @returns {*}
         */
        captureScreen: function (includeWebView, imagePath) {
          var q = $q.defer();

          $window.plugins.wikitudePlugin.captureScreen(includeWebView, imagePath, function (bundlePath) {
            //success
            q.resolve(bundlePath);
          }, function (error) {
            //error
            q.reject(error);
          });

          return q.promise;
        },

        callJavaScript: function (js) {
          try {
            $window.plugins.wikitudePlugin.callJavaScript(js);
          } catch (e) {
            $exceptionHandler(e);
          }
        },

        setOnUrlInvokeCallback: function (onUrlInvokeCallback) {
          $window.plugins.wikitudePlugin.setOnUrlInvokeCallback(onUrlInvokeCallback);
        },


        close: function () {
          $window.plugins.wikitudePlugin.close();
        },

        show: function () {
          $window.plugins.wikitudePlugin.show();
        },

        hide: function () {
          $window.plugins.wikitudePlugin.hide();
        }

      };// end of wikitudePlugin factory

    }]);

})(window.angular);
