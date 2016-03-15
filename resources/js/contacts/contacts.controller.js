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


            // Display all current contacts in the database when page is loaded.
            $http.get('get-contacts')
                .then(function successCallback(res) {

                    vm.contacts = res.data;
            });

            vm.addContact = function () {

                console.log(vm.firstName);

                $http.post('save-contact', {

                    first_name: vm.firstName,
                    last_name: vm.lastName,
                    email: vm.email,
                    phone: vm.phone

                })
                    .then( function successCallback (res) {
                        console.log(res);

                    }, function errorCallback (res) {
                        console.log('error', res);
                    });


            };

        });

}());
