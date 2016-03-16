
(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('TrashModalController', function ($modal, $http) {

            var vm = this;

            console.log($modal);

            vm.toggleSelectAll = function () {
                console.log('select all toggle');
                _.each(vm.contacts, function (contact) {
                    contact.selected = !(contact.selected);
                });
            };

        });
}());
