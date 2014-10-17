/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaContacts
 *
 * @description
 * A service for testing features related with contacts
 * in an app build with ngCordova.
**/  
ngCordovaMocks.factory('$cordovaContacts', ['$q', function($q) {
	var throwsError = false;
	var contacts = [];

	return {
        /**
		 * @ngdoc property
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaContacts
		 *
		 * @description
		 * A flag that signals whether a promise should be rejected or not.
		 * This property should only be used in automated tests.
		**/
		throwsError: throwsError,

        /**
		 * @ngdoc contacts
		 * @name throwsError
		 * @propertyOf ngCordovaMocks.cordovaContacts
		 *
		 * @description
		 * An in-memory collection of contacts.
		 * This property should only be used in automated tests.
		**/
		contacts: contacts,

		save: function(contact) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error saving the contact.');
			} else {
				var existingIndex = null;
				for (var i=0; i<this.contacts.length; i++) {
					// The actual implementation relies on the entire object match.
					// we're gong to rely on the ID.
					if (this.contacts[i].id === contact.id) {
						existingIndex = i;
						break;
					}
				}

				if (existingIndex === null) {
					this.contacts.push(contact);
					defer.resolve();
				} else {
					defer.reject('Contact already exists.');
				}
			}
			return defer.promise;
		},

		remove: function(contact) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error saving the contact.');
			} else {
				var toRemove = null;
				for (var i=0; i<this.contacts.length; i++) {
					// The actual implementation relies on the entire object match.
					// we're gong to rely on the ID.
					if (this.contacts[i].id === contact.id) {
						toRemove = i;
						break;
					}
				}

				if (toRemove === null) {
					defer.reject('Unable to find contact.');
				} else {
					this.contacts.splice(toRemove, 1);
					defer.resolve();
				}
			}
			return defer.promise;
		},

		find: function(options) {
			var defer = $q.defer();
			if (this.throwsError) {
				defer.reject('There was an error finding the contact.');
			} else {
				if (this.contacts.length===0) {
					defer.resolve([]);
				} else {
					fields = options.fields || ['id', 'displayName'];
					if (!fields) {
						defer.reject('ContactError.INVALID_ARGUMENT_ERROR');
					} else {
						// Implement a very rudimentary search approach for testing purposes.
						// This is NOT exhaustive.
						var results = [],
							search = options.filter?options.filter.toLowerCase():null;
						if (!search) {
							defer.resolve(this.contacts);
						} else {
							// search in each string field
							var searchFields = (fields.length === 1 && fields[0]==='*') ? Object.keys(this.contacts[0]) : fields;
							for (var i=0; i<this.contacts.length; i++) {
								var contact = this.contacts[i];
								for(var key in searchFields) {
									var propertyValue = contact[searchFields[key]];
									if (propertyValue && typeof propertyValue === 'string' && propertyValue.toLowerCase().indexOf(search)>-1) {
										results.push(contact);
										break;
									}
								}
							}
							defer.resolve(results);
						}
					}
				}
			}
			return defer.promise;
		}
	};
}]);
