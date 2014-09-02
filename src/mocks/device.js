/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDevice
 *
 * @description
 * A service for testing device information
 * in an app build with ngCordova.
**/  
ngCordovaMocks.factory('$cordovaDevice', function () {
	var device = '';
	var cordova = '';
	var model = '';
	var platform = '';
	var uuid = '';
	var version = '';

	return {
        /**
		 * @ngdoc property
		 * @name device
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The name of the 'device'. 
		 * This property should only be used in automated tests.
		**/		
		device: device,

        /**
		 * @ngdoc property
		 * @name cordova
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The version of cordova in use.
		 * This property should only be used in automated tests.
		**/				
		cordova: cordova,

        /**
		 * @ngdoc property
		 * @name model
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The model of the device using the app.
		 * This property should only be used in automated tests.
		**/
		model: model,

        /**
		 * @ngdoc property
		 * @name platform
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The name of the operating system in use.
		 * This property should only be used in automated tests.
		**/		
		platform: platform,

        /**
		 * @ngdoc property
		 * @name uuid
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The unique identifier of a device.
		 * This property should only be used in automated tests.
		**/		
		uuid: uuid,

        /**
		 * @ngdoc property
		 * @name version
		 * @propertyOf ngCordovaMocks.cordovaDevice
		 *
		 * @description
		 * The version of the operating system.
		 * This property should only be used in automated tests.
		**/		
		version: version,

		getDevice: function () {
			return this.device;
		},

		getCordova: function () {
			return this.cordova;
		},

		getModel: function () {
			return this.model;
		},

		getPlatform: function() {
			return this.platform;
		},

		getUUID: function() {
			return this.uuid;
		},

		getVersion: function() {
			return this.version;
		}
	};
});