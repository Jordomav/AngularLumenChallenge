
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

            vm.deleteSelected = function () {
                console.log('delete selected called');
                var contactsToDelete = [];
                _.each(ContactsService.contacts, function (contact) {
                    if (contact.selected) {
                        console.log('permanently deleting ' + contact.first_name + ' ' + contact.last_name);
                        contactsToDelete.push(contact);
                    }
                });

                // Only connect with lumen if there are contacts to delete.
                if (contactsToDelete.length > 0) {

                    ContactsService.delete(contactsToDelete);

                    // Update view to remove deleted contacts.
                    _.each(contactsToDelete, function (contact) {
                        contact.selected = false;
                        contact.intrash = false;
                        contact.deleted = true;
                    });

                    ContactsService.displayContacts();
                }
            };

        });
}());
