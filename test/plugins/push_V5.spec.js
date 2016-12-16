describe('Service: $cordovaPushV5', function() {

  var $cordovaPushV5, $rootScope, fakePush;

  beforeEach(module('ngCordova.plugins.push_v5'));

  beforeEach(inject(function (_$cordovaPushV5_, _$rootScope_) {
    $cordovaPushV5 = _$cordovaPushV5_;
    $rootScope = _$rootScope_;

    window.PushNotification = {
      init: angular.noop,
      hasPermission: angular.noop,
    };

    fakePush = {
      subscribe: angular.noop,
      unsubscribe: angular.noop
    };
  }));

  it('should call the PushNotification.init method', function() {

    var result;
    var config = { someConfig: 1 };

    spyOn(window.PushNotification, 'init').and.returnValue(fakePush);

    $cordovaPushV5.initialize(config)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();
    expect(window.PushNotification.init.calls.argsFor(0)[0]).toBe(config);
    expect(result).toBe(fakePush);
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

  it('should reject if init has not been called before subscribe', function() {
    var error;
    $cordovaPushV5.subscribe()
      .catch(function(err) {
        error = err;
      });
    
    $rootScope.$digest();
    expect(error.message).toBe('init must be called before any other operation');
  });

  it('should reject if the subscribe error callback is called', function() {
    var config = { someConfig: 1 };
    var topic = '';
    var error = new Error('SimpleError');
    var response;

    spyOn(fakePush, 'subscribe')
      .and.callFake(function(topic, successCb, errorCb) {
        errorCb(error);
      });
    spyOn(window.PushNotification, 'init').and.returnValue(fakePush);

    $cordovaPushV5.initialize(config)
      .then(function () {
        return $cordovaPushV5.subscribe(topic);
      })
      .catch(function(error) {
        response = error;
      });
    
    $rootScope.$digest();
    expect(fakePush.subscribe).toHaveBeenCalled;
    expect(fakePush.subscribe.calls.argsFor(0)[0]).toBe(topic);
    expect(response).toBe(error);
  });

  it('should resolve if the subscribe success callback is called', function() {
    var config = { someConfig: 1 };
    var topic = '';
    var result = true;
    var response;

    spyOn(fakePush, 'subscribe')
      .and.callFake(function(topic, successCb, errorCb) {
        successCb(result);
      });
    spyOn(window.PushNotification, 'init').and.returnValue(fakePush);

    $cordovaPushV5.initialize(config)
      .then(function () {
        return $cordovaPushV5.subscribe(topic);
      })
      .then(function(success) {
        response = success;
      });
    
    $rootScope.$digest();
    expect(fakePush.subscribe).toHaveBeenCalled;
    expect(fakePush.subscribe.calls.argsFor(0)[0]).toBe(topic);
    expect(response).toBe(result);
  });

  it('should reject if init has not been called before unsubscribe', function() {
    var error;
    $cordovaPushV5.unsubscribe()
      .catch(function(err) {
        error = err;
      });
    
    $rootScope.$digest();
    expect(error.message).toBe('init must be called before any other operation');
  });

  it('should reject if the unsubscribe error callback is called', function() {
    var config = { someConfig: 1 };
    var topic = '';
    var error = new Error('SimpleError');
    var response;

    spyOn(fakePush, 'unsubscribe')
      .and.callFake(function(topic, successCb, errorCb) {
        errorCb(error);
      });
    spyOn(window.PushNotification, 'init').and.returnValue(fakePush);

    $cordovaPushV5.initialize(config)
      .then(function () {
        return $cordovaPushV5.unsubscribe(topic);
      })
      .catch(function(error) {
        response = error;
      });
    
    $rootScope.$digest();
    expect(fakePush.unsubscribe).toHaveBeenCalled;
    expect(fakePush.unsubscribe.calls.argsFor(0)[0]).toBe(topic);
    expect(response).toBe(error);
  });

  it('should resolve if the unsubscribe success callback is called', function() {
    var config = { someConfig: 1 };
    var topic = '';
    var result = true;
    var response;

    spyOn(fakePush, 'unsubscribe')
      .and.callFake(function(topic, successCb, errorCb) {
        successCb(result);
      });
    spyOn(window.PushNotification, 'init').and.returnValue(fakePush);

    $cordovaPushV5.initialize(config)
      .then(function () {
        return $cordovaPushV5.unsubscribe(topic);
      })
      .then(function(success) {
        response = success;
      });
    
    $rootScope.$digest();
    expect(fakePush.unsubscribe).toHaveBeenCalled;
    expect(fakePush.unsubscribe.calls.argsFor(0)[0]).toBe(topic);
    expect(response).toBe(result);
  });
});
