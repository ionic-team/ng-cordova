describe('Service: $cordovaDevice', function() {

  var $cordovaDevice, $rootScope;

  beforeEach(module('ngCordova.plugins.device'));

  beforeEach(inject(function (_$cordovaDevice_, _$q_, _$rootScope_) {
    $cordovaDevice = _$cordovaDevice_;
    $rootScope = _$rootScope_;

    window.device = {
      cordova: false,
      model: 'iPhone 5C',
      name: 'iPhone 5C',
      platform: 'iOS',
      uuid: 89749382749823749823,
      version: 5,
      manufacturer: 'apple'
    };
  }));

  it('should return window.device on getDevice', function() {
    expect($cordovaDevice.getDevice()).toBe(window.device);
  });

  it('should return window.device.cordova on getCordova', function() {
    expect($cordovaDevice.getCordova()).toBe(window.device.cordova);
  });

  it('should return window.device.model on getModel', function() {
    expect($cordovaDevice.getModel()).toBe(window.device.model);
  });

  it('should return window.device.name on getName', function() {
    expect($cordovaDevice.getName()).toBe(window.device.name);
  });

  it('should return window.device.platform on getPlatform', function() {
    expect($cordovaDevice.getPlatform()).toBe(window.device.platform);
  });

  it('should return window.device.uuid on getUUID', function() {
    expect($cordovaDevice.getUUID()).toBe(window.device.uuid);
  });

  it('should return window.device.version on getVersion', function() {
    expect($cordovaDevice.getVersion()).toBe(window.device.version);
  });

  it('should return window.device.manufacturer on getManufacturer', function() {
    expect($cordovaDevice.getManufacturer()).toBe(window.device.manufacturer);
  });

});
