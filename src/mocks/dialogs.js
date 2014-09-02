/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaDialogs
 *
 * @description
 * A service for testing dialogs
 * in an app build with ngCordova.
 */ 
ngCordovaMocks.factory('$cordovaDialogs', function() {
	var dialogText = false;
	var dialogTitle = '';
	var defaultValue = '';
	var promptResponse = '';
	var beepCount = 0;
	var useHostAbilities = true;

	return {
        /**
		 * @ngdoc property
		 * @name dialogText
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * The main content in the dialog.
		 * This property should only be used in automated tests.
		**/		
		dialogText: dialogText,

        /**
		 * @ngdoc property
		 * @name dialogTitle
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * The title of the dialog.
		 * This property should only be used in automated tests.
		**/		
		dialogTitle: dialogTitle,

        /**
		 * @ngdoc property
		 * @name defaultValue
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * The default value to be used in a prompt.
		 * This property should only be used in automated tests.
		**/
		defaultValue: defaultValue,

        /**
		 * @ngdoc property
		 * @name promptResponse
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * Used to simulate a user's response to a prompt.
		 * This property should only be used in automated tests.
		**/
		promptResponse: promptResponse,

        /**
		 * @ngdoc property
		 * @name buttonLabels
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * An array of the text of each button in the dialog.
		 * This property should only be used in automated tests.
		**/		
		buttonLabels: [],

        /**
		 * @ngdoc property
		 * @name beepCount
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * The number of times a beep has occurred.
		 * This property should only be used in automated tests.
		**/		
		beepCount: beepCount,

        /**
		 * @ngdoc property
		 * @name useHostAbilities
		 * @propertyOf ngCordovaMocks.cordovaDialogs
		 *
		 * @description
		 * A flag that signals whether or not to try and use the host's 
		 * (browser or otherwise) prompting capabilities.
		 * This property should only be used in automated tests.
		**/
		useHostAbilities: useHostAbilities,		

		alert: function(message, callback, title, buttonName) {
			if (this.useHostAbilities) {
				// NOTE: The window.alert method doesn't support a title or callbacks.				
				alert(message);
			} else {
				this.dialogText = message;
				this.dialogTitle = title;
				this.buttonLabels.push(buttonName);				
			}
		},

		confirm: function(message, callback, title, buttonName) {
			if (this.useHostAbilities) {
				// NOTE: The window.confirm method doesn't support a title or custom button naming.
				var result = confirm(message);
				callback(result);
			} else {
				this.dialogText = message;
				this.dialogTitle = title;
				this.buttonLabels.push(buttonName);				
			}
		},

		prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
			if (this.useHostAbilities) {
				// NOTE: The window.prompt method doesn't support a title or custom button naming.
				var result = prompt(message, defaultText);
				promptCallback(result);				
			} else {
				this.dialogText = message;
				this.dialogTitle = title;
				this.defaultValue = defaultText;

				for (var i=0; i<buttonLabels.length; i++) {
					this.buttonLabels.push(buttonLabels[i]);
				}

				if (promptCallback) {
					promptCallback(this.promptResponse);
				}
			}
		},

		beep: function(times) {
			this.beepCount = times;
		}
	};
});