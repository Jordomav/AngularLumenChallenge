/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http) {

            var vm = this;

            vm.contacts = [];

            $http.get('get-contacts')
                .then(function successCallback(res) {
                    console.log(res.data);
                vm.contacts = res.data;
            });

        });

}());
