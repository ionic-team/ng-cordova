describe('Service: $cordovaFileOpener2', function(){

  var $cordovaFileOpener2, $rootScope, $window;

  beforeEach(function() {
    module('ngCordovaMocks');
  });

  beforeEach(inject(function (_$cordovaFileOpener2_, _$q_, _$rootScope_, _$window_) {
    $cordovaFileOpener2 = _$cordovaFileOpener2_;
    $rootScope = _$rootScope_;
    $window = _$window_;
  }));

  it('should call window\'s plugins.fileOpener2.open method of success', function(done) {
    $cordovaFileOpener2.open(
      '/sdcard/Download/gmail.apk',
      'application/vnd.android.package-archive'
    ).then(
      function () {
        expect(true).toBe(true);
      },
      function() {
        expect(false).toBe(true);
      }
    ).finally(done);

    $rootScope.$digest();
  });

  it('should call window\'s plugins.fileOpener2.open method of failure', function(done) {
    $cordovaFileOpener2.throwsError = true;
    $cordovaFileOpener2.open(
      '/sdcard/Download/gmail.apk',
      'application/vnd.android.package-archive'
    ).then(
      function () {
        expect(true).toBe(true);
      },
      function() {
        expect(false).toBe(true);
      }
    ).finally(done);

    $rootScope.$digest();
  });

});
