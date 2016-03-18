/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http, ContactsService) {

            var vm = this;

            /**
             * Contact Methods
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

            vm.displayContacts = function () {

                $http.get('get-contacts')
                    .then(function successCallback(res) {

                        vm.contacts = res.data;

                        // contact.intrash should be boolean value.
                        _.each(vm.contacts, function (contact) {
                            contact.intrash = !!+contact.intrash;
                        });

                        ContactsService.contacts = vm.contacts;

                    }, function errorCallback(res) {
                        alert('There was an error retrieving contacts.');
                    });
            };

            // Display all current Contacts in the database when page is loaded.
            vm.displayContacts();


            // Add new Contacts.
            vm.addContact = function () {

                $http.post('save-contact', {

                    first_name: vm.firstNameInput,
                    last_name: vm.lastNameInput,
                    email: vm.emailInput,
                    phone: vm.phoneInput,
                    lists: vm.belongsToListIds

                })
                    .then( function successCallback (res) {
                        vm.displayContacts();

                        vm.firstName = '';
                        vm.lastName = '';
                        vm.email = '';
                        vm.phone = '';
                        vm.listsForNewContact = [];

                    }, function errorCallback (res) {
                        alert('There was an error saving the contact.');
                    });
            };


            vm.toggleContactInTrash = function(contact){

                contact.intrash = !(contact.intrash);

                $http.post('soft-delete', {id: contact.id})

                    .then(function successCallback(res) {

                    }, function errorCallback(res) {
                        alert('There was an error storing the \'intrash\' state of ' + contact.first_name);
                    });
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
