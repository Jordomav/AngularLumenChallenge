/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http, ContactsService) {

            var vm = this;

            // Empty lists to hold all contacts.
            vm.contacts = [];

            // Properties to store values from new user form.
            vm.firstName = '';
            vm.lastName = '';
            vm.email = '';
            vm.phone = '';

            vm.contactForm = {};


            vm.displayContacts = function () {

                $http.get('get-contacts')
                    .then(function successCallback(res) {

                        vm.contacts = res.data;

                        // contact.intrash should be boolean value.
                        _.each(vm.contacts, function (contact) {
                            contact.intrash = !!+contact.intrash;

                            ContactsService.contacts.push(contact);
                        });

                    }, function errorCallback(res) {
                        alert('There was an error retrieving contacts.');
                    });
            };

            // Display all current contacts in the database when page is loaded.
            vm.displayContacts();


            // Add new contacts.
            vm.addContact = function () {

                $http.post('save-contact', {

                    first_name: vm.firstName,
                    last_name: vm.lastName,
                    email: vm.email,
                    phone: vm.phone

                })
                    .then( function successCallback (res) {
                        vm.displayContacts();

                        vm.firstName = '';
                        vm.lastName = '';
                        vm.email = '';
                        vm.phone = '';

                    }, function errorCallback (res) {
                        alert.log('There was an error saving the contact.', res);
                    });


            };

            vm.toggleContactInTrash = function(contact){
                
                contact.intrash = !(contact.intrash);

                $http.post('soft-delete', {id: contact.id})

                    .then(function successCallback(res) {

                    }, function errorCallback(res) {
                        alert('There was an error storing the \'intrash\' state of ' + contact.first_name);
                        console.log(res);
                    });
            };

        });

}());
