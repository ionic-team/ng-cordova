describe('ngCordovaMocks', function () {
  beforeEach(function () {
    module('ngCordovaMocks');
  });

  describe('cordovaToast', function () {
    var $rootScope = null;
    var $cordovaToast = null;
    var message = 'A message.';
    var functionNames = [
      'hide',
      'showShortTop',
      'showShortCenter',
      'showShortBottom',
      'showLongTop',
      'showLongCenter',
      'showLongBottom',
      'show'
    ];

    beforeEach(inject(function (_$cordovaToast_, _$rootScope_) {
      $cordovaToast = _$cordovaToast_;
      $rootScope = _$rootScope_;
    }));

    it('should show a toast', function () {

      functionNames.forEach(function(functionName){
        $cordovaToast[functionName](message)
          .then(
          function () {expect(true).toBe(true)},
          function () {expect(false).toBe(true)}
        )
          .finally(function () {done();});
        $rootScope.$digest();
      });
    });

    it('should throw an error ', function (done) {
      $cordovaToast.throwsError = true;

      functionNames.forEach(function(functionName){
        $cordovaToast[functionName](message)
          .then(
          function () {expect(true).toBe(false)},
          function () {expect(true).toBe(true)}
        )
          .finally(function () {done();});
        $rootScope.$digest();
      })
    });
  });
});
