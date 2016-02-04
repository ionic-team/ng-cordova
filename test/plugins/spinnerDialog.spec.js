describe('Service: $cordovaSpinnerDialog', function() {

  var $cordovaSpinnerDialog;

  beforeEach(module('ngCordova.plugins.spinnerDialog'));

  beforeEach(inject(function (_$cordovaSpinnerDialog_) {
    $cordovaSpinnerDialog = _$cordovaSpinnerDialog_;

    window.plugins = {
      spinnerDialog: jasmine.createSpyObj('spinnerDialog', ['hide', 'show'])
    }
  }));

  it('should call window.plugins\'s spinnerDialog.show', function() {
    $cordovaSpinnerDialog.show('hi', 'nice hi message', true);
    expect(window.plugins.spinnerDialog.show).toHaveBeenCalledWith('hi', 'nice hi message', true);
  });

  it('should call window.plugins\'s spinnerDialog.hide', function() {
    $cordovaSpinnerDialog.hide();
    expect(window.plugins.spinnerDialog.hide).toHaveBeenCalled();
  });

});
