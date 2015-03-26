describe('Service: $cordovaPreferences', function() {

  var $cordovaPreferences, $rootScope;

  beforeEach(module('ngCordova.plugins.prefs'));

  beforeEach(inject(function (_$cordovaPreferences_, _$window_, _$rootScope_) {
    $cordovaPreferences = _$cordovaPreferences_;
    $rootScope = _$rootScope_;
    $window = _$window_;

    $window.appgiraffe = {
      plugins: {
        applicationPreferences: {
          set: angular.noop,
          get: angular.noop,
    }}};  
  }));

  it('should call $window\'s appgiraffe.plugins.applicationPreferences.set method', function() {

    var result;

    spyOn($window.appgiraffe.plugins.applicationPreferences, 'set')
      .andCallFake(function (key, value, successCb, errorCb) {
        successCb(true);
      });

    $cordovaPreferences
      .set('icon', 5)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(true);
    expect($window.appgiraffe.plugins.applicationPreferences.set).toHaveBeenCalledWith(
      'icon',
      5,
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s appgiraffe.plugins.applicationPreferences.set a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn($window.appgiraffe.plugins.applicationPreferences, 'set')
      .andCallFake(function (key, value, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaPreferences.set()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

  it('should call $window\'s appgiraffe.plugins.applicationPreferences.get method', function() {

    var result;
    var prefResult = 5;

    spyOn($window.appgiraffe.plugins.applicationPreferences, 'get')
      .andCallFake(function (key, successCb, errorCb) {
        successCb(prefResult);
      });

    $cordovaPreferences
      .get('icon')
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(prefResult);
    expect($window.appgiraffe.plugins.applicationPreferences.get).toHaveBeenCalledWith(
      'icon',
      jasmine.any(Function),
      jasmine.any(Function)
    );
  });

  it('should call errorCb when in $window\'s appgiraffe.plugins.applicationPreferences.get a error orccurs', function() {

    var result;
    var errorObj = { someError: 1 };

    spyOn($window.appgiraffe.plugins.applicationPreferences, 'get')
      .andCallFake(function (key, successCb, errorCb) {
        errorCb(errorObj);
      });

    $cordovaPreferences.get()
      .then(angular.noop, function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(errorObj);
  });

});
