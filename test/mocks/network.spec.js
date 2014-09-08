describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaNetwork', function () {
		var $cordovaNetwork = null;

		beforeEach(inject(function (_$cordovaNetwork_) {
			$cordovaNetwork = _$cordovaNetwork_;
		}));

		it('should get network name', function () {
			// TODO: This should integrate with the navigator connection property values.
			$cordovaNetwork.connectionType = 'WiFi connection';
			var networkName = $cordovaNetwork.getNetwork();
			expect(networkName).toEqual('WiFi connection');
		});

		it('should check if online', function() {
			var isOnline = $cordovaNetwork.isOnline();
			expect(isOnline).toBe(true);
		});

		it('should check if offline', function() {
			var isOffline = $cordovaNetwork.isOffline();
			expect(isOffline).toBe(false);
		})
	});
})