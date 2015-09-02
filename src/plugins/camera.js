// install   :   cordova plugin add cordova-plugin-camera
// link      :   https://github.com/apache/cordova-plugin-camera

angular.module('ngCordova.plugins.camera', [])
  .provider('$cordovaCamera', function() {

    var Camera = {};
    Camera.DestinationType = {
      DATA_URL: 0, // Return image as base64-encoded string
      FILE_URI: 1, // Return image file URI
      NATIVE_URI: 2 // Return image native URI (e.g., assets-library:// on iOS or content:// on Android)
    };
    Camera.PictureSourceType = {
      PHOTOLIBRARY: 0,
      CAMERA: 1,
      SAVEDPHOTOALBUM: 2
    };
    Camera.EncodingType = {
      JPEG: 0, // Return JPEG encoded image
      PNG: 1 // Return PNG encoded image
    };
    Camera.MediaType = {
      PICTURE: 0, // allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType
      VIDEO: 1, // allow selection of video only, WILL ALWAYS RETURN FILE_URI
      ALLMEDIA: 2 // allow selection from all media types
    };
    Camera.Direction = {
      BACK: 0, // Use the back-facing camera
      FRONT: 1 // Use the front-facing camera
    };
    Camera.PopoverArrowDirection = {
      ARROW_UP: 1, // matches iOS UIPopoverArrowDirection constants
      ARROW_DOWN: 2,
      ARROW_LEFT: 4,
      ARROW_RIGHT: 8,
      ARROW_ANY: 15
    };

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL, //
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: null,
      saveToPhotoAlbum: false
    };

    /**
    * @description
    * Set qualitity value
    *
    * @param {number} value
    */
    function setQuality(value) {
      if(angular.isNumber(value)){
        options.quality = value;
      } else {
        throw 'The param for setQuality need be a number';
      }
    }

    /**
    * @description
    * choose destinationType value, can be "DATA_URL", "FILE_URI" or "NATIVE_URI".
    * will happen crash error if param value be different of this 3 options.
    *
    * @param {String} can be "DATA_URL", "FILE_URI" or "NATIVE_URI"
    */
    function setDestinationType(value) {
      if(angular.isString(value)){

        var uperValue = value.toUpperCase();

        if(uperValue == 'DATA_URI' || uperValue == 'FILE_URI' || uperValue == 'NATIVE_URI') {
          options.destinationType = Camera.DestinationType[value];
        } else {
          throw 'The param for setDestinationType can be only DATA_URI, FILE_URI or NATIVE_URI';
        }

      } else {
        throw 'The param for setDestinationType need be a String';
      }
    }

    /**
    * @description
    * choose sourceType value, can be "PHOTOLIBRARY", "CAMERA" or "SAVEDPHOTOALBUM".
    * will happen crash error if param value be different of this 3 options.
    *
    * @param {String} can be "PHOTOLIBRARY", "CAMERA" or "SAVEDPHOTOALBUM".
    */
    function setSourceType(value) {
      if(angular.isString(value)){

        var uperValue = value.toUpperCase();
        if(uperValue == 'PHOTOLIBRARY' || uperValue == 'CAMERA' || uperValue == 'SAVEDPHOTOALBUM'){
          options.sourceType = Camera.PictureSourceType[value];
        } else {
          throw 'The sourceType param can be onlye PHOTOLIBRARY, CAMERA or SAVEDPHOTOALBUM!';
        }
        
      } else {
        throw 'The sourceType param need be a string !';
      }
    }

    /**
    * @description
    * choose allowEdit value.
    *
    * @param {Boolean} value.
    */
    function setAllowEdit(value) {
      if(angular.isBoolean(value)) {
        options.allowEdit = value;
      } else {
        throw 'The allowEdit param need be a boolean value.';
      }
    };

    /**
    * @description
    * choose encodingType value, can be "JPEG", or "PNG".
    * will happen crash error if param value be different of this 2 options.
    *
    * @param {String} can be can be "JPEG", or "PNG".
    */
    function setEncodingType(value) {
      if(angular.isString(value)) {

        var uperValue = value.toUpperCase();
        if(uperValue == 'JPEG' || uperValue == 'PNG') {
          options.encodingType = Camera.EncodingType[value];
        } else {
          throw 'The encodingType param can be only JPED or PNG';
        }
      } else {
        throw 'The encodingType param need be a String value.';
      }
    };

    /**
    * @description
    * choose targetWidth value,
    *
    * @param {number} value.
    */
    function setTargetWidth(value) {
      if(angular.isNumber(value)) {
        options.targetWidth = value;
      } else {
        throw 'The targetWidth param need be a number value';
      }
    };

    /**
    * @description
    * choose targetHeight value,
    *
    * @param {number} value.
    */
    function setTargetHeight(value) {
      if(angular.isNumber(value)) {
        options.targetHeight = value;
      } else {
        throw 'The targetHeight param need be a number value';
      }
    };

    /**
    * @description
    * set popoverOptions value (only for iOS)
    * 
      ```
        { x : 0, 
          y :  32,
          width : 320,
          height : 480,
          arrowDir : 'ARROW_ANY' // can be ARROW_RIGHT, ARROW_LEFT, ARROW_UP, ARROW_DOWN or ARROW_ANY
        }
      ```
    * @param {Object}
    */
    function setPopoverOptions(value) {
      if(angular.isObject(value)){
        if(angular.isDefined(value.arrowDir)) {
          if(!angular.isString(value.arrowDir))   throw 'The param popoverOptions.arrowDir need be a String value.';
          
          var arrowDir = value.arrowDir.toUpperCase();
          if(arrowDir != 'ARROW_UP' && arrowDir != 'ARROW_DOWN' && arrowDir != 'ARROW_RIGHT' && arrowDir != 'ARROW_LEFT' && arrowDir != 'ARROW_ANY'){
            throw 'The param popoverOptions.arrowDir can be only ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT or ARROW_ANY.';
          }
          options.popoverOptions.arrowDir = Camera.PopoverArrowDirection[arrowDir];
        }
        options.popoverOptions = value;
      } else {
        throw 'The popoverOptions need be a Object value.';
      }
    };

    /**
    * @description
    * choose saveToPhotoAlbum value.
    *
    * @param {Boolean} value.
    */
    function setSaveToPhotoAlbum(value) {
      if(angular.isBoolean(value)) {
        options.saveToPhotoAlbum = value;
      } else {
        throw 'The saveToPhotoAlbum param need be a boolean value.';
      }
    };

    return {
      setQuality: setQuality,
      setDestinationType: setDestinationType,
      setSourceType: setSourceType,
      setAllowEdit: setAllowEdit,
      setEncodingType: setEncodingType,
      setTargetWidth: setTargetWidth,
      setTargetHeight: setTargetHeight,
      setPopoverOptions: setPopoverOptions,
      setSaveToPhotoAlbum: setSaveToPhotoAlbum,
      $get: function($q) {
        return {
          getPicture: function(values) {
            var q = $q.defer();

            if (!navigator.camera) {
              q.resolve(null);
              return q.promise;
            }

            if (angular.isObject(values)) {
              for (key in values) {
                switch (key) {
                  case 'destinationType':
                    setDestinationType(values[key]);
                    break;
                  case 'sourceType':
                    setSourceType(values[key]);
                    break;
                  case 'encodingType':
                    setEncodingType(values[key]);
                    break;
                  default:
                    options[key] = values[key];
                }
              }
            }

            navigator.camera.getPicture(function(imageData) {
              q.resolve(imageData);
            }, function(err) {
              q.reject(err);
            }, options);

            return q.promise;
          },

          cleanup: function() {
            var q = $q.defer();

            navigator.camera.cleanup(function() {
              q.resolve();
            }, function(err) {
              q.reject(err);
            });

            return q.promise;
          }
        };
      }
    };

  });