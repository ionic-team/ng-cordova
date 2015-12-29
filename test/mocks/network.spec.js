describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaNetwork', function () {
		var $cordovaNetwork = null;
		var $rootScope = null;
		var $cordovaNetwork = null;

		beforeEach(inject(function (_$cordovaNetwork_,_$rootScope_,_$cordovaNetwork_) {
			$cordovaNetwork = _$cordovaNetwork_;
			$rootScope = _$rootScope_;
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
		});

		it('should launch listeners when switching to online', function() {
			var isOnline = false;

			$rootScope.$on('$cordovaNetwork:online',function(){
				isOnline = $cordovaNetwork.isOnline();
			});

			$cordovaNetwork.switchToOnline();

			expect(isOnline).toBe(true);
		});

		it('should launch listeners when switching to online', function() {
			var isOffline = false;

			$rootScope.$on('$cordovaNetwork:offline',function(){
				isOffline = $cordovaNetwork.isOffline();
			});

			$cordovaNetwork.switchToOffline();

			expect(isOffline).toBe(true);
		});
	});
})