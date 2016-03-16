
(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('TrashModalController', function (ContactsService, $http) {

            var vm = this;

            vm.toggleSelectAll = function () {
                _.each(ContactsService.contacts, function (contact) {
                    contact.selected = !(contact.selected);
                });
            };

        });
}());
