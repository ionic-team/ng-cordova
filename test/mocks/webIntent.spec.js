describe('ngCordovaMocks', function() {

    beforeEach(function() {
	module('ngCordovaMocks');
    });

    describe('webIntent', function () {
	var $webIntent = null;
	var $rootScope = null;
	var spy = {};

	//beforeEach(module('ngCordova.plugins.webIntent'));

	beforeEach(inject(function (_$webIntent_, _$rootScope_) {
	    $webIntent = _$webIntent_;
	    $rootScope = _$rootScope_;

	    spy.success = jasmine.createSpy('success');
	    spy.fail = function() {};//jasmine.createSpy('fail');

	    spyOn(spy, 'fail').and.callThrough();
	}));

	it('should return actionSend on actionSend', function() {
	    expect($webIntent.actionSend()).toBe("actionSend");
	});

	it('should return actionView on actionView', function() {
	    expect($webIntent.actionView()).toBe("actionView");
	});

	it('should return extraText on extraText', function() {
	    expect($webIntent.extraText()).toBe("extraText");
	});

	it('should return extraSubject on extraSubject', function() {
	    expect($webIntent.extraSubject()).toBe("extraSubject");
	});

	it('should return extraStream on extraStream', function() {
	    expect($webIntent.extraStream()).toBe("extraStream");
	});

	it('should return extraEmail on extraEmail', function() {
	    expect($webIntent.extraEmail()).toBe("extraEmail");
	});

	it('should return actionCall on actionCall', function() {
	    expect($webIntent.actionCall()).toBe("actionCall");
	});

	it('should return actionSendTo on actionSendTo', function() {
	    expect($webIntent.actionSendTo()).toBe("actionSendTo");
	});

	describe('startActivity', function() {
	    it('should call the success callback', function(done) {
		$webIntent.startActivity("myFile")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.success).toHaveBeenCalled();
			expect(spy.fail).not.toHaveBeenCalled();
		    }).finally(done);

		$rootScope.$apply();
	    });

	    it('should call the fail callback', function(done) {
		$webIntent.throwsError = true;
		$webIntent.startActivity("myFile")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.fail).toHaveBeenCalled();
			expect(spy.success).not.toHaveBeenCalled();
		    }).finally(done);
		$rootScope.$apply();
	    });
	});

	describe('hasExtra', function() {
	    it('should call the success callback', function(done) {
		$webIntent.hasExtra("extraText")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.success).toHaveBeenCalledWith($webIntent.has);
			expect(spy.fail).not.toHaveBeenCalled();
		    }).finally(done);

		$rootScope.$apply();
	    });

	    it('should call the fail callback', function(done) {
		$webIntent.throwsError = true;
		$webIntent.hasExtra("extraText")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.fail).toHaveBeenCalled();
			expect(spy.success).not.toHaveBeenCalled();
		    }).finally(done);
		$rootScope.$apply();
	    });
	});

	describe('getExtra', function() {
	    it('should call the success callback', function(done) {
		$webIntent.getExtra("extraText")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.success).toHaveBeenCalledWith($webIntent.url);
			expect(spy.fail).not.toHaveBeenCalled();
		    }).finally(done);

		$rootScope.$apply();
	    });

	    it('should call the fail callback', function(done) {
		$webIntent.throwsError = true;
		$webIntent.getExtra("extraText")
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.fail).toHaveBeenCalled();
			expect(spy.success).not.toHaveBeenCalled();
		    }).finally(done);
		$rootScope.$apply();
	    });
	});

	describe('getUri', function() {
	    it('should call the success callback', function(done) {
		$webIntent.getUri()
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.success).toHaveBeenCalledWith($webIntent.url);
			expect(spy.fail).not.toHaveBeenCalled();
		    }).finally(done);

		$rootScope.$apply();
	    });

	    it('should call the fail callback', function(done) {
		$webIntent.throwsError = true;
		$webIntent.getUri()
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.fail).toHaveBeenCalled();
			expect(spy.success).not.toHaveBeenCalled();
		    }).finally(done);
		$rootScope.$apply();
	    });
	});

	describe('onNewIntent', function() {
	    it('should call the success callback', function() {
		$webIntent.onNewIntent(spy.success);
		$webIntent.newIntent();
		
		expect(spy.success).toHaveBeenCalled();
	    });
	});

	describe('sendBroadcast', function() {
	    it('should call the success callback', function(done) {
		$webIntent.sendBroadcast()
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.success).toHaveBeenCalled();
			expect(spy.fail).not.toHaveBeenCalled();
		    }).finally(done);

		$rootScope.$apply();
	    });

	    it('should call the fail callback', function(done) {
		$webIntent.throwsError = true;
		$webIntent.sendBroadcast()
		    .then(spy.success).catch(spy.fail).then(function() {
			expect(spy.fail).toHaveBeenCalled();
			expect(spy.success).not.toHaveBeenCalled();
		    }).finally(done);
		$rootScope.$apply();
	    });
	});
	


    });
});
