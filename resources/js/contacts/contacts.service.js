/**
 * Created by Neil Strain on 3/16/2016.
 */

(function () {

    'use strict';

    // TODO: probably move some functions from ContactsController to here.
    angular.module('contactsApp')
        .service('ContactsService', function ($http) {

            var vm = this;

            vm.contacts = [];

            vm.delete = function (contacts) {

                $http.post('delete-contacts', {})
                    .then(function successCallback (res) {
                        console.log('Selected contacts successfully deleted');
                        console.log(res);

                    }, function errorCallback (res) {
                        alert('There was an error deleting the selected contacts');
                    })

            };

        });

}());
