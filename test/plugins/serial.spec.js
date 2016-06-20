describe('Service: $cordovaSerial', function() {

  var $cordovaSerial, $rootScope;

  beforeEach(module('ngCordova.plugins.serial'));

  beforeEach(inject(function (_$cordovaSerial_, _$q_, _$rootScope_) {
    $cordovaSerial = _$cordovaSerial_;
    $rootScope = _$rootScope_;

    serial = {
      requestPermission: angular.noop,
      open: angular.noop,
      write: angular.noop,
      writeHex: angular.noop,
      read: angular.noop,
      registerReadCallback: angular.noop,
      close: angular.noop
    };
  }));

  describe('when requestPermission is called', function() {
    var options = {
      vid: '1000',
      pid: '1200',
      driver: 'FtdiSerialDriver'
    };

    it('should call serial.requestPermission with the provided options', function() {
      spyOn(serial, 'requestPermission');
      $cordovaSerial.requestPermission(options);
      expect(serial.requestPermission).toHaveBeenCalledWith(options, jasmine.any(Function), jasmine.any(Function));
    });

    it('should resolve the promise when serial.requestPermission is successful', function() {
      var result;

      spyOn(serial, 'requestPermission').and.callFake(function(options, successCallback, errorCallback) {
        successCallback();
      });
      $cordovaSerial.requestPermission(options).then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should reject the promise when serial.requestPermission has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'requestPermission').and.callFake(function(options, successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.requestPermission(options).then(function() {
        fail('Expected requestPermission to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

  describe('when open is called', function() {
    var options = {
      baudRate: 115200
    };

    it('should call serial.open with the provided options', function() {
      spyOn(serial, 'open');
      $cordovaSerial.open(options);
      expect(serial.open).toHaveBeenCalledWith(options, jasmine.any(Function), jasmine.any(Function));
    });

    it('should resolve the promise when serial.open is successful', function() {
      var result;

      spyOn(serial, 'open').and.callFake(function(options, successCallback, errorCallback) {
        successCallback();
      });
      $cordovaSerial.open(options).then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should reject the promise when serial.open has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'open').and.callFake(function(options, successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.open(options).then(function() {
        fail('Expected open to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

  describe('when write is called', function() {
    var data = 'ff';

    it('should call serial.write with the provided options', function() {
      spyOn(serial, 'write');
      $cordovaSerial.write(data);
      expect(serial.write).toHaveBeenCalledWith(data, jasmine.any(Function), jasmine.any(Function));
    });

    it('should resolve the promise when serial.write is successful', function() {
      var result;

      spyOn(serial, 'write').and.callFake(function(data, successCallback, errorCallback) {
        successCallback();
      });
      $cordovaSerial.write(data).then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should reject the promise when serial.write has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'write').and.callFake(function(data, successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.write(data).then(function() {
        fail('Expected write to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

  describe('when writeHex is called', function() {
    var data = 'ff';

    it('should call serial.writeHex with the provided options', function() {
      spyOn(serial, 'writeHex');
      $cordovaSerial.writeHex(data);
      expect(serial.writeHex).toHaveBeenCalledWith(data, jasmine.any(Function), jasmine.any(Function));
    });

    it('should resolve the promise when serial.writeHex is successful', function() {
      var result;

      spyOn(serial, 'writeHex').and.callFake(function(data, successCallback, errorCallback) {
        successCallback();
      });
      $cordovaSerial.writeHex(data).then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should reject the promise when serial.writeHex has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'writeHex').and.callFake(function(data, successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.writeHex(data).then(function() {
        fail('Expected writeHex to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

  describe('when read is called', function() {
    var data = [0,1];

    it('should resolve the promise when serial.read is successful', function() {
      var result;

      spyOn(serial, 'read').and.callFake(function(successCallback, errorCallback) {
        successCallback(data);
      });
      $cordovaSerial.read().then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should parse the successful response data as a Uint8Array', function() {
      var response;

      spyOn(serial, 'read').and.callFake(function(successCallback, errorCallback) {
        successCallback(data);
      });
      $cordovaSerial.read().then(function(result) {
         response = result;
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(response instanceof Uint8Array).toEqual(true);
    });

    it('should reject the promise when serial.read has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'read').and.callFake(function(successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.read().then(function() {
        fail('Expected read to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

  describe('when registerReadCallback is called', function() {
    var data = [0,1];

    it('should call serial.registerReadCallback with a success and failure callback', function() {
      var successCallback = angular.noop;
      var errorCallback = angular.noop;
      spyOn(serial, 'registerReadCallback');
      $cordovaSerial.registerReadCallback(successCallback, errorCallback);
      expect(serial.registerReadCallback).toHaveBeenCalledWith(jasmine.any(Function), errorCallback);
    });

    it('should call the provided success callback', function() {
      var successCallback = jasmine.createSpy('successCallback');
      var errorCallback = jasmine.createSpy('errorCallback');

      spyOn(serial, 'registerReadCallback').and.callFake(function(successCallback, errorCallback) {
        successCallback(data);
      });

      $cordovaSerial.registerReadCallback(successCallback, errorCallback);

      expect(successCallback).toHaveBeenCalled();
      expect(errorCallback).not.toHaveBeenCalled();
    });

    it('should parse the successful response data as a Uint8Array', function() {
      var response;

      var successCallback = jasmine.createSpy('successCallback').and.callFake(function(data) {
        response = data;
      });
      var errorCallback = jasmine.createSpy('errorCallback');

      spyOn(serial, 'registerReadCallback').and.callFake(function(successCallback, errorCallback) {
        successCallback(data);
      });

      $cordovaSerial.registerReadCallback(successCallback, errorCallback);

      expect(response instanceof Uint8Array).toEqual(true);
    });

    it('should call the provided failure callback', function() {
      var error = 'Some error';
      var successCallback = jasmine.createSpy('successCallback');
      var errorCallback = jasmine.createSpy('errorCallback');

      spyOn(serial, 'registerReadCallback').and.callFake(function(successCallback, errorCallback) {
        errorCallback(error);
      });

      $cordovaSerial.registerReadCallback(successCallback, errorCallback);

      expect(successCallback).not.toHaveBeenCalled();
      expect(errorCallback).toHaveBeenCalledWith(error);
    });
  });

  describe('when close is called', function() {
    it('should resolve the promise when serial.close is successful', function() {
      var result;

      spyOn(serial, 'close').and.callFake(function(successCallback, errorCallback) {
        successCallback();
      });
      $cordovaSerial.close().then(function() {
        result = 'success';
      }).catch(function(err) {
        fail(err);
      });
      $rootScope.$digest();
      expect(result).toEqual('success');
    });

    it('should reject the promise when serial.close has an error', function() {
      var expectedError = 'Some error';
      var error;

      spyOn(serial, 'close').and.callFake(function(successCallback, errorCallback) {
        errorCallback(expectedError);
      });
      $cordovaSerial.close().then(function() {
        fail('Expected close to reject promise');
      }).catch(function(err) {
        error = err;
      });
      $rootScope.$digest();
      expect(error).toEqual(expectedError);
    });
  });

});
