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

    function setQuality(value) {
      options.quality = value;
    }

    function setDestinationType(value) {
      options.destinationType = Camera.DestinationType[value];
    }

    function setSourceType(value) {
      options.sourceType = Camera.PictureSourceType[value];
    }

    function setAllowEdit(value) {
      options.allowEdit = value;
    };

    function setEncodingType(value) {
      options.encodingType = Camera.EncodingType[value];
    };

    function setTargetWidth(value) {
      options.targetWidth = value;
    };

    function setTargetHeight(value) {
      options.targetHeight = value;
    };

    function setPopoverOptionsfunction(value) {
      options.popoverOptions = value;
    };

    function setSaveToPhotoAlbum(value) {
      options.saveToPhotoAlbum = value;
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
      $get: function() {
        return {
          getPicture: function(options) {
            var q = $q.defer();

            if (!navigator.camera) {
              q.resolve(null);
              return q.promise;
            }

            if (values) {
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