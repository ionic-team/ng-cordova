describe('ngCordovaMocks', function() {

  beforeEach(function() {
    module('ngCordovaMocks');
  });

  describe('cordovaPrinter', function () {
	  var $cordovaPrinter, $rootScope;

	  beforeEach(inject(function (_$timeout_, _$rootScope_, _$cordovaPrinter_) {
	    $cordovaPrinter = _$cordovaPrinter_;
    	$rootScope = _$rootScope_;
	  }));


	  it('should return window\'s printer.isAvailable', function () {

	    var result;

	    $cordovaPrinter
	      .isAvailable()
	      .then(function (response) {
	        result = response;
	      });

	    $rootScope.$digest();

	    expect(result).toBe(true);
	  });

	  it('should call window\'s printer.print', function () {
	    var result;
	    var someDoc = 'someDocContent';
	    var options = {landscape: true};

	    $cordovaPrinter
	      .print(someDoc, options)
	      .then(function (response) {
	        result = response;
	      });

	   $rootScope.$digest();

	    expect(result).toBe(undefined);
	  });

	});
});