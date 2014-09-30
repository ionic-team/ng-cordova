describe('Service: $cordovaBatteryStatus', function() {

  var $cordovaBatteryStatus, $rootScope;

  var eventNames = ['batterystatus', 'batterycritical', 'batterylow'];

  beforeEach(module('ngCordova.plugins.battery-status'));

  beforeEach(inject(function (_$cordovaBatteryStatus_, _$q_, _$rootScope_) {
    $cordovaBatteryStatus = _$cordovaBatteryStatus_;
    $rootScope = _$rootScope_;
  }));

  for (var i = 0; i < eventNames.length; i++) {
    (function(eventName) {
      it('should emit the `' + eventName + '` event the right way', function() {

        spyOn($cordovaBatteryStatus, '$emit');

        var result = { 'isPlugged': true, 'level': 1 };

        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(eventName, false, false, result);

        window.dispatchEvent(evt);

        expect($cordovaBatteryStatus.$emit).toHaveBeenCalledWith(eventName, result);
      });
    })(eventNames[i]);
  }
});
