/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http) {

            var vm = this;

            // Empty lists to hold all contacts.
            vm.contacts = [];

            // Properties to store values from new user form.
            vm.firstName = '';
            vm.lastName = '';
            vm.email = '';
            vm.phone = '';
            vm.inTrash = false;

            vm.contactForm = {};


            vm.displayContacts = function () {

                $http.get('get-contacts')
                    .then(function successCallback(res) {

                        vm.contacts = res.data;
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
                console.log(contact);
                contact.inTrash = !(contact.inTrash);
            };

        });

}());
