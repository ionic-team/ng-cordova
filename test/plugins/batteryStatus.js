describe('Service: $cordovaBatteryStatus', function() {

  var $cordovaBatteryStatus, $rootScope;

  beforeEach(module('ngCordova.plugins.battery-status'));

  beforeEach(inject(function (_$cordovaBatteryStatus_, _$q_, _$rootScope_) {
    $cordovaBatteryStatus = _$cordovaBatteryStatus_;
    $rootScope = _$rootScope_;
  }));

  it('should emit the `batterystatus` event the right way', function() {

    spyOn($cordovaBatteryStatus, '$emit');

    var result = { 'isPlugged': true, 'level': 1 };

    var event = new CustomEvent('batterystatus', { 'detail': result });
    window.dispatchEvent(event);

    expect($cordovaBatteryStatus.$emit).toHaveBeenCalledWith('batterystatus', result);
  });

});
