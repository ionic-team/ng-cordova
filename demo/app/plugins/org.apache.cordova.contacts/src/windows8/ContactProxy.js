//cordova.define("org.apache.cordova.contacts.ContactProxy", function (require, exports, module) {
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


module.exports = {
    search:function(win,fail,args){
        var fields = args[0]; // ignored, always returns entire object
        var options = args[1];

        var filter = options.filter;   // ignored
        var multiple = true;//options.multiple;

        var picker = new Windows.ApplicationModel.Contacts.ContactPicker();
        picker.selectionMode = Windows.ApplicationModel.Contacts.ContactSelectionMode.contacts;   // select entire contact
        if (picker.pickContactAsync) {
            // TODO: 8.1 has better contact support via the 'Contact' object
        }
        else {
            // 8.0 use the ContactInformation class
            // decide which function we will call
            var pickerFunkName = multiple ? 'pickMultipleContactsAsync' : 'pickSingleContactAsync';
            picker[pickerFunkName]().done(function (res) {
                if (!res) {
                    fail && setTimeout(function () {
                        fail(new Error("User did not pick a contact."));
                    }, 0);
                    return;
                }

                var contactResults = [];

                for (var i = 0; i < res.length; i++) {


                    var index,
                        contactResult = res[i],
                        contact = {
                            id: "",
                            name: { formatted: contactResult.name },  // ContactName
                            displayName: contactResult.name,          // DOMString
                            nickname: contactResult.name,             // DOMString
                            phoneNumbers: contactResult.phoneNumbers, // ContactField[]
                            addresses: contactResult.locations,       // ContactAddress[]
                            emails: [],                               // ContactField
                            ims: contactResult.instantMessages,       // ContactField[]
                            organizations: [],              // ContactOrganization[]
                            birthday: null,                 // Date
                            note: "",                       // DOMString
                            photos: [],                     // ContactField[]
                            categories: [],                 // ContactField[]
                            urls: []                        // ContactField[]
                        };

                    // Win8-ContactField is {category, name, type, value};
                    // Cordova ContactField is {type,value, pref:bool };
                    // Win8 type means 'email' cordova type means 'work|home|...' so we convert them
                    if (contact.emails && contact.emails.length) {
                        contact.emails[0].pref = true; // add a preferred prop 
                        for (index = 0; index < contacts.emails.length; index++) {
                            contact.emails[index].type = contact.emails[index].category;
                        }
                    }

                    if (contact.phoneNumbers && contact.phoneNumbers.length) {
                        contact.phoneNumbers[0].pref = true; // cordova contact field needs a 'prefered' property on  a contact
                        // change the meaning of type from 'telephonenumber' to 'work|home|...'
                        for (index = 0; index < contact.phoneNumbers.length; index++) {
                            contact.phoneNumbers[index].type = contact.phoneNumbers[index].category;
                        }
                    }

                    if (contact.addresses && contact.addresses.length) {

                        // convert addresses/locations to Cordova.ContactAddresses                    
                        // constr: ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country)
                        var address, formatted;
                        for (index = 0; index < contact.addresses.length; index++) {
                            address = contact.addresses[index];   // make an alias
                            var formattedArray = [];
                            // get rid of the empty fields.
                            var fields = [address.street, address.city, address.region, address.country, address.postalCode];
                            for (var n = 0; n < fields.length; n++) {
                                if (fields[n].length > 0) {
                                    formattedArray.push(fields[n]);
                                }
                            }
                            formattedAddress = formattedArray.join(", ");
                            console.log(contact.name.formatted + " formatted looks like " + formattedAddress);
                            contact.addresses[index] = new ContactAddress(false,
                                                                          address.name,
                                                                          formattedAddress,
                                                                          address.street,
                                                                          address.city,
                                                                          address.region,
                                                                          address.postalCode,
                                                                          address.country);
                        }

                    }

                    // convert ims to ContactField
                    if (contact.ims && contact.ims.length) {
                        // MS ContactInstantMessageField has : displayText, launchUri, service, userName, category, type
                        contact.ims[0].pref = true;
                        for (index = 0; index < contact.ims.length; index++) {
                            contact.ims[index] = new ContactField(contact.ims[index].type, contact.ims[index].value, false);
                        }
                    }

                    contactResults.push(contact);

                }
                // send em back
                win(contactResults);

            });
        }
    },

    save:function(win,fail,args){
        console && console.error && console.error("Error : Windows 8 does not support creating/saving contacts");
        fail && setTimeout(function () {
            fail(new Error("Contact create/save not supported on Windows 8"));
        }, 0);

    }


}

require("cordova/exec/proxy").add("Contacts", module.exports);
// });
