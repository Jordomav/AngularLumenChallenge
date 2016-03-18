/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http, ContactsService) {

            var vm = this;

            /**
             * Contact Variables/Properties
             */

            // Empty lists to hold all Contacts.
            vm.contacts = [];

            // Master list to hold all available Contact Lists
            vm.contactLists = [];

            // Properties to store values from new Contact form.
            vm.firstNameInput = '';
            vm.lastNameInput = '';
            vm.emailInput = '';
            vm.phoneInput = '';
            vm.belongsToListIds = [];


            /**
             *  Contact Methods
             */
            vm.displayContacts = function () {

                var promise = ContactsService.getContacts();

                promise.then( function complete(contacts) {
                    vm.contacts = contacts.data;

                    // contact.intrash property should be converted to JS boolean values for ng-show/hide.
                    // SQLite stores strings '0' and '1' for booleans.
                    _.each(vm.contacts, function (contact) {
                        contact.intrash = !!+contact.intrash;
                    });

                }, function error(err) {
                    alert('There was an error retrieving Contacts');
                    console.log(err);
                })
            };

            // Display Contacts when application starts.
            vm.displayContacts();


            vm.addContact = function () {
                
                var contact = vm.newContactData();
                var promise = ContactsService.save(contact);

                promise.then( function complete(res) {
                    vm.displayContacts();
                    vm.resetForm();

                }, function error(err) {
                    alert('There was a problem saving the Contact');
                    console.log(err);
                })
            };


            vm.toggleContactInTrash = function(contact){

                contact.intrash = !(contact.intrash);

                $http.post('soft-delete', {id: contact.id})

                    .then(function successCallback(res) {

                    }, function errorCallback(res) {
                        alert('There was an error storing the \'intrash\' state of ' + contact.first_name);
                    });
            };

            vm.newContactData = function () {
                return  {
                            first_name: vm.firstNameInput,
                            last_name: vm.lastNameInput,
                            email: vm.emailInput,
                            phone: vm.phoneInput,
                            lists: vm.belongsToListIds
                        }
            };

            vm.resetForm = function () {
                vm.firstNameInput = '';
                vm.lastNameInput = '';
                vm.emailInput = '';
                vm.phoneInput = '';
                vm.listsForNewContact = [];
            };


            /**
             *  Contact List Methods
             */

            $http.get('get-contact-lists')
                .then(function successCallback (res) {
                    vm.contactLists = res.data;


                }, function errorCallback () {
                    alert('There was an error retrieving Contact Lists');
                });

        });

}());
