/**
 * Created by Neil Strain on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactListsController', function ($http, ContactListsService) {

            var vm = this;

            vm.newList = 'test';

            vm.save = function () {
                console.log('called')
            };

        });


}());
