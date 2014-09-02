describe('ngCordovaMocks', function() {
	beforeEach(function() {
		module('ngCordovaMocks');
	});

	describe('cordovaContacts', function () {
		var $rootScope = null;
		var $cordovaContacts = null;
		var findOptions = {fields:'*'};

		var createContact = function(id, firstName, lastName, nickname,
			phoneNumbers, emailAddresses, mailingAddresses, ims, organizations, 
			birthday, note, photos, categories, urls) {
			var contact = {
				id: id,
				displayName: firstName + ' ' + lastName,
				name: { givenName: firstName, familyName: lastName },
				nickname: firstName,
				phoneNumbers: phoneNumbers,
				emails: emailAddresses,
				addresses: mailingAddresses,
				ims: ims,
				organizations: organizations,
				birthday: birthday,
				note: note,
				photos: photos,
				categories: categories,
				urls: urls
			};
			return contact;
		};

		beforeEach(inject(function (_$rootScope_, _$cordovaContacts_) {
			$cordovaContacts = _$cordovaContacts_;
			$rootScope = _$rootScope_;

			// Add some contacts for testing purposes
			var earl = createContact('1', 'Earl', 'Baleep', 'Earl',
				[], [], [], [], [], '06/21/1952',
				'', [], [], []);
			$cordovaContacts.contacts.push(earl);
		}));

		it('should save a contact', function (done) {
			var originalLength = $cordovaContacts.contacts.length;

			var contact = createContact('1000000', 'Norman', 'Yup', 'Norman');
			$cordovaContacts.save(contact)
				.then(
					function() { 
						var newLength = $cordovaContacts.contacts.length;
						expect(newLength).toBe(originalLength+1); 
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should not allow the same contact to be saved twice', function(done) {
			var originalLength = $cordovaContacts.contacts.length;

			// Save the contact once
			var contact = createContact('1000001', 'John', 'Doe', 'John');
			$cordovaContacts.save(contact)
				.then(
					function() { 
						// Ensure the contact was added
						var newLength = $cordovaContacts.contacts.length;
						expect(newLength).toBe(originalLength+1); 

						// If the contact is saved again, it should fail.
						$cordovaContacts.save(contact)
							.then(
								function() { expect(false).toBe(true); },
								function() { expect(true).toBe(true); }
							)
							.finally(function() { done(); })
						;
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should remove an existng contact', function(done) {
			// The unique identifier of the contact we'll remove
			var contactId = '1000002';
			var originalLength = $cordovaContacts.contacts.length;

			// Save the contact once
			var contact = createContact(contactId, 'John', 'Doe', 'John');
			$cordovaContacts.save(contact)
				.then(
					function() { 
						// Ensure the contact was added
						var newLength = $cordovaContacts.contacts.length;
						expect(newLength).toBe(originalLength+1); 

						// Attempt to remove the contact
						$cordovaContacts.remove(contact)
							.then(
								function() {
									newLength = $cordovaContacts.contacts.length;
									expect(newLength).toBe(originalLength);									
								},

								function() { expect(false).toBe(true); }
							)
							.finally(function() { done(); }) 
						;
					},
					function() { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it('should fail to remove a contact if it does not exist', function(done) {
			// The unique identifier of the contact we'll try to remove
			var contactId = '10000003';
			var contact = createContact(contactId, 'John', 'Doe', 'John');

			// Attempt to remove the contact
			$cordovaContacts.remove(contact)
				.then(
					function() { expect(false).toBe(true); },
					function() { expect(true).toBe(true); }
				)
				.finally(function() { done(); }) 
			;

			$rootScope.$digest();
		});

		it('should find an existing contact', function(done) {
			$cordovaContacts.find(findOptions)
				.then(
					function() { expect(true).toBe(true); },
					function(error) { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();
		});

		it ('should not find a specific contact', function(done) {
			$cordovaContacts.find(findOptions)
				.then(
					function() { expect(true).toBe(true); },
					function(error) { expect(false).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();			
		});

		it('should throw an error while finding a contact.', function(done) {
			$cordovaContacts.throwsError = true;
			$cordovaContacts.find(findOptions)
				.then(
					function() { expect(false).toBe(true); },
					function(error) { expect(true).toBe(true); }
				)
				.finally(function() { done(); })
			;

			$rootScope.$digest();			
		});
	});
})