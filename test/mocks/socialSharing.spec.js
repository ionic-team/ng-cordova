describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaSocialSharing', function () {
		var $rootScope = null;
		var $cordovaSocialSharing = null;

		beforeEach(inject(function (_$cordovaSocialSharing_, _$rootScope_) {
			$cordovaSocialSharing = _$cordovaSocialSharing_;
			$rootScope = _$rootScope_;
		}));

		it('should share with twitter', function (done) {
			$cordovaSocialSharing.shareViaTwitter('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing with twitter.', function(done) {
			$cordovaSocialSharing.throwsError = true;
			$cordovaSocialSharing.shareViaTwitter('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});		

		it('should share with whatsApp', function (done) {
			$cordovaSocialSharing.shareViaWhatsApp('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing with whatsApp.', function(done) {
			$cordovaSocialSharing.throwsError = true;
			$cordovaSocialSharing.shareViaWhatsApp('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should share with facebook', function (done) {
			$cordovaSocialSharing.shareViaFacebook('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing with facebook.', function(done) {
			$cordovaSocialSharing.throwsError = true;
			$cordovaSocialSharing.shareViaFacebook('Check out Ecofic!', null, 'http://www.ecofic.com')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should share via sms', function (done) {
			$cordovaSocialSharing.shareViaSMS('Check out Ecofic!', '1-555-555-5555')
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing via sms.', function(done) {
			$cordovaSocialSharing.throwsError = true;
			$cordovaSocialSharing.shareViaSMS('Check out Ecofic!', '1-555-555-5555')
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should share via email', function (done) {
			$cordovaSocialSharing.shareViaEmail('This is an email message', 'Email Subject', [], [], [])
				.then(
					function() { expect(true).toBe(true); },
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should throw an error while sharing via email.', function(done) {
			$cordovaSocialSharing.throwsError = true;
			$cordovaSocialSharing.shareViaEmail('This is an email message', 'Email Subject', [], [], [])
				.then(
					function() { expect(true).toBe(false); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});		
	});
})