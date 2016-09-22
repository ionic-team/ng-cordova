describe('Service: $cordovaPushV5', function() {

  var $cordovaPushV5, $rootScope;

  beforeEach(module('ngCordova.plugins.push_v5'));

  beforeEach(inject(function (_$cordovaPushV5_, _$rootScope_) {
    $cordovaPushV5 = _$cordovaPushV5_;
    $rootScope = _$rootScope_;


    window.PushNotification = {
      init: angular.noop,
      hasPermission: angular.noop,
    };
  }));

  it('should call the PushNotification.init method', function() {

    var result;
    var config = { someConfig: 1 };

    spyOn(window.PushNotification, 'init').and.returnValue(true);

    $cordovaPushV5.initialize(config)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();
    expect(window.PushNotification.init.calls.argsFor(0)[0]).toBe(config);
    expect(result).toBe(true);
  });

  it('should call the PushNotification.hasPermission method', function() {

    var result;

    spyOn(window.PushNotification, 'hasPermission')
      .and.callFake(function (successCb) {
        successCb({ isEnabled: true });
      });

    $cordovaPushV5.hasPermission()
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();
    expect(window.PushNotification.hasPermission).toHaveBeenCalled;
    expect(result.isEnabled).toBe(true);
  });
});
