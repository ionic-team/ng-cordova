describe('Service: $cordovaDialogs', function () {

  var $cordovaDialogs, $rootScope, $window;

  beforeEach(module('ngCordova.plugins.dialogs'));

  beforeEach(inject(function (_$cordovaDialogs_, _$q_, _$rootScope_, _$window_) {
    $cordovaDialogs = _$cordovaDialogs_;
    $rootScope = _$rootScope_;
    $window = _$window_;

    navigator.notification = {
      alert: angular.noop,
      confirm: angular.noop,
      prompt: angular.noop,
      beep: angular.noop
    };

  }));

  it('should call navigators\'s navigator.notification.alert method', function () {

    var result;
    var message = "Some message";
    var title = "Title";
    var buttonName = "Okay";

    spyOn(navigator.notification, 'alert')
      .and.callFake(function (message, successCb, title, buttonName) {
        successCb();
      });

    $cordovaDialogs
      .alert(message, title, buttonName)
      .then(function () {
        result = "success";
      });

    $rootScope.$digest();

    expect(result).toBe("success");
  });


  // TODO: Still missing tests for confirm, prompt, beep
});
