/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http, ContactsService, ContactListsService) {

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

                    // Give ContactsService a reference to Contacts, as we use this in the TrashModalController
                    // `deleteContacts()` method.
                    ContactsService.contacts = vm.contacts;

                }, function error(err) {
                    alert('There was an error retrieving Contacts');
                    console.log(err);
                });
            };


            vm.addContact = function () {

                var contact = vm.newContactData();
                var promise = ContactsService.save(contact);

                promise.then( function complete() {
                    vm.displayContacts();
                    vm.resetContactForm();

                }, function error(err) {
                    alert('There was a problem saving the Contact');
                    console.log(err);
                });
            };


            vm.toggleContactInTrash = function(contact){

                contact.intrash = !(contact.intrash);

                var promise = ContactsService.saveInTrashState(contact);

                promise.then( function complete() {},

                        function error(err) {
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
                        };
            };

            vm.resetContactForm = function () {
                vm.firstNameInput = '';
                vm.lastNameInput = '';
                vm.emailInput = '';
                vm.phoneInput = '';
                vm.listsForNewContact = [];
            };


            /**
             *  Contact List Methods
             */
            vm.displayContactLists = function () {

                var promise = ContactListsService.getContactLists();

                promise.then( function success(contactLists) {

                    vm.contactLists = contactLists.data;

                }, function errorCallback (err) {
                    alert('There was an error retrieving Contact Lists');
                    console.log(err);
                });
            };


            /**
             *  Display Contacts and Contact Lists when application starts.
             */
            vm.displayContacts();
            vm.displayContactLists();

        });

}());
