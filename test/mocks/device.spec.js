describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDevice', function () {
		var $cordovaDevice = null;

		beforeEach(inject(function (_$cordovaDevice_) {
			$cordovaDevice = _$cordovaDevice_;
		}));

		it('should get the device name', function () {
			// NOTE: device.name was deprecated in Cordova 2.3. 
			// This test can be removed once device.name is removed.
			$cordovaDevice.device = 'Power Device';
			var deviceName = $cordovaDevice.getDevice();
			expect(deviceName).toEqual('Power Device');
		});

		it('should get the version of cordova in use', function () {
			var cordovaVersion = '3.5';
			$cordovaDevice.cordova = cordovaVersion;

			var version = $cordovaDevice.getCordova();
			expect(version).toEqual(cordovaVersion);
		});

		it('should get the model name', function () {
			var modelName = 'Buster';
			$cordovaDevice.model = modelName;

			var model = $cordovaDevice.getModel();
			expect(model).toEqual(modelName);
		});

		it('should get the platform', function () {
			var operatingSystem = 'MyFavoriteOS';
			$cordovaDevice.platform = operatingSystem;

			var platform = $cordovaDevice.getPlatform();
			expect(platform).toEqual(operatingSystem);
		});

		it('should get the unique ID', function () {
			var guid = 'eb77ae18-f6c1-4a36-8705-1975a9225fb9';
			$cordovaDevice.uuid = guid;

			var uuid = $cordovaDevice.getUUID();
			expect(uuid).toEqual(guid);
		});

		it('should get the version', function () {
			var version = '1.0';
			$cordovaDevice.version = version;

			var v = $cordovaDevice.getVersion();
			expect(v).toEqual(version);
		});		
	});
})