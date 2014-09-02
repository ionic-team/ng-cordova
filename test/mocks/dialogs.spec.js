describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaDialogs', function () {
		var $cordovaDialogs = null;

		beforeEach(inject(function (_$cordovaDialogs_) {
			$cordovaDialogs = _$cordovaDialogs_;
		}));

		it('should alert the user', function() {
			var message = 'Hello. World.';
			$cordovaDialogs.useHostAbilities = false;
			$cordovaDialogs.alert(message);

			expect($cordovaDialogs.dialogText).toBe(message);
		});

		it('should ask for confirmation', function() {
			var confirmation = 'Are you sure?';
			$cordovaDialogs.useHostAbilities = false;			
			$cordovaDialogs.confirm(confirmation);

			expect($cordovaDialogs.dialogText).toBe(confirmation);
		});

		it('should prompt the user', function() {
			// Pretend that user enters '21'
			var promptResponse = '21';
			$cordovaDialogs.useHostAbilities = false;			
			$cordovaDialogs.promptResponse = promptResponse;

			// Simulate the prompt
			var prompt = 'Please enter your age:';
			$cordovaDialogs.prompt(prompt, 
				function(response) {
					expect(response).toBe(promptResponse);
				},
				'Age',
				['ok', 'cancel'],
				'13'
			);
		});

		it('should beep five times', function() {
			var times = 5;
			$cordovaDialogs.beep(times);
			expect($cordovaDialogs.beepCount).toBe(times);
		})
	});
})