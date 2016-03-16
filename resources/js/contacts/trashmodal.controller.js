
(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('TrashModalController', function (ContactsService, $http) {

            var vm = this;

            vm.deleteContacts= function () {
                console.log('delete selected called');

                // Only connect with lumen if there are contacts to delete.
                if (ContactsService.contacts.length > 0) {

                    ContactsService.delete(ContactsService.contacts);

                    // Update view to remove deleted contacts.
                    _.each(ContactsService.contacts, function (contact) {
                        if (contact.intrash) {
                            contact.deleted = true;
                            contact.intrash = false;
                        }

                    });
                }
            };

        });
}());
