describe('Service: $cordovaPinDialog', function() {

  var $cordovaPinDialog, $rootScope;

  beforeEach(module('ngCordova.plugins.pinDialog'));

  beforeEach(inject(function (_$cordovaPinDialog_, _$q_, _$rootScope_) {
    $cordovaPinDialog = _$cordovaPinDialog_;
    $rootScope = _$rootScope_;

    window.plugins = {
      pinDialog: {
        prompt: angular.noop
      }
    };
  }));

  it('should call window\'s pinDialog.prompt method', function() {

    var result;

    spyOn(window.plugins.pinDialog, 'prompt')
      .andCallFake(function (message, callback, title, buttons) {
        callback({
          buttonIndex: 2
        });
      });

    $cordovaPinDialog
      .prompt('some message', 'some title', ['OK', 'Cancel'])
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result.buttonIndex === 2).toBe(true);
    expect(window.plugins.pinDialog.prompt).toHaveBeenCalledWith(
      'some message', jasmine.any(Function), 'some title', ['OK', 'Cancel']
    );
  });

});
