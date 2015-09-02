describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDiagnostic', function () {
		var count = 0;
		var $rootScope = null;
		var $cordovaDiagnostic = null;

		beforeEach(inject(function (_$cordovaDiagnostic_, _$rootScope_, _$interval_) {
			$cordovaDiagnostic = _$cordovaDiagnostic_;
			$rootScope = _$rootScope_;
			count = 0;
		}));

    /**
     * Android and iOS
     */

		it('should get the location status', function (done) {
			var expected = true;
			$cordovaDiagnostic.useHostAbilities = true;

			$cordovaDiagnostic.isLocationEnabled()
				.then(
					function(actual) { expect(actual).toBe(expected); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should get the wifi status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isWifiEnabled()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should get the camera status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isCameraEnabled()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should get the bluetooth status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isBluetoothEnabled()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should get the wifi status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isWifiEnabled()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    /**
     * Android only
     */

    it('should switch to location settings', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.switchToLocationSettings()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should switch to mobile data settings', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.switchToMobileDataSettings()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should switch to bluetooth settings', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.switchToBluetoothSettings()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should switch to wifi settings', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.switchToWifiSettings()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    /**
     * iOS only
     */

    it('should get the location enabled setting status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isLocationEnabledSetting()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

    it('should get the location authorized status', function (done) {
      var expected = true;
      $cordovaDiagnostic.useHostAbilities = true;

      $cordovaDiagnostic.isLocationAuthorized()
        .then(
          function(actual) { expect(actual).toBe(expected); },
          function() { expect(false).toBe(true); }
        )
        .finally(function() { done(); })
      ;

      $rootScope.$digest();
    });

	});

});
