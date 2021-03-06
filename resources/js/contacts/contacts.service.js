/**
 * Created by Neil Strain on 3/16/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .service('ContactsService', function ($http) {

            var vm = this;

            vm.contacts = [];


            vm.getContacts = function () {

                return $http.get('get-contacts');
            };


            vm.save = function (contact) {

                return $http.post('save-contact', contact);

            };

            vm.saveInTrashState = function (contact) {
                return $http.post('soft-delete', {id: contact.id});
            };

            vm.delete = function (contacts) {

                $http.post('delete-contacts', {})
                    .then(function successCallback (res) {

                    }, function errorCallback () {
                        alert('There was an error deleting the selected contacts');
                    });

            };

        });

}());
