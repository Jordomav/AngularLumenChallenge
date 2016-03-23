/**
 * Created by Jordan Mavrogeorge on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactsController', function ($http, ContactsService, ContactListsService) {

            var vm = this;


            /**
             * Contact Variables/Properties
             */

            // Empty lists to hold all Contacts.
            vm.contacts = [];

            // Master list to hold all available Contact Lists
            vm.contactLists = [];

            // Properties to store values from new Contact form.
            vm.firstNameInput = '';
            vm.lastNameInput = '';
            vm.emailInput = '';
            vm.phoneInput = '';
            vm.belongsToListIds = [];

            // We use selected contact for displaying data in contact list modal.
            vm.selectedContact = {};

            // List to hold Contact List IDs for edited Contact
            vm.editedListIds = [];


            /**
             *  Contact Methods
             */
            vm.displayContacts = function () {

                var promise = ContactsService.getContacts();

                promise.then( function complete(contacts) {
                    vm.contacts = contacts.data;

                    // contact.intrash property should be converted to JS boolean values for ng-show/hide.
                    // SQLite stores strings '0' and '1' for booleans.
                    _.each(vm.contacts, function (contact) {
                        contact.intrash = !!+contact.intrash;
                    });

                    // Give ContactsService a reference to Contacts, as we use this in the TrashModalController
                    // `deleteContacts()` method.
                    ContactsService.contacts = vm.contacts;

                }, function error(err) {
                    alert('There was an error retrieving Contacts');
                    console.log(err);
                });
            };


            vm.contactListPreviewFor = function (contact) {
                if ( !(_.isEmpty(contact.contact_lists) )) {
                    var output = '';

                    // Limit preview to 3 contact lists.
                    var len = Math.min(3, contact.contact_lists.length);

                    for (var i = 0; i < len; i++) {
                        if (i < len - 1) {
                            output += contact.contact_lists[i].title + ', ';
                        } else {
                            output += contact.contact_lists[i].title;
                        }
                    }

                    // Add elipses if
                    if (output.length < 25) {
                        return output;
                    } else {
                        return output.substr(0, 25) + '...';
                    }
                }
            };


            vm.setSelected = function (contact) {
                vm.selectedContact = contact;
            };


            vm.addContact = function () {

                if ( !(_.isEmpty(vm.newContactData())) ) {

                    var contact = vm.newContactData();
                    var promise = ContactsService.save(contact);

                    promise.then( function complete() {
                        vm.displayContacts();
                        vm.resetContactForm();
                        vm.closeContactListMenu();

                    }, function error(err) {
                        alert('There was a problem saving the Contact');
                        console.log(err);
                    });
                }
            };


            vm.toggleContactInTrash = function(contact){

                contact.intrash = !(contact.intrash);

                var promise = ContactsService.saveInTrashState(contact);

                promise.then( function complete() {},

                        function error(err) {
                            alert('There was an error storing the \'intrash\' state of ' + contact.first_name);
                        });
            };


            vm.newContactData = function () {

                if ( !(_.isEmpty(vm.firstNameInput, vm.lastNameInput, vm.emailInput, vm.phoneInput) )) {

                    console.log('hooray, contact form is filled out');

                    return  {
                        first_name: vm.firstNameInput,
                        last_name: vm.lastNameInput,
                        email: vm.emailInput,
                        phone: vm.phoneInput,
                        lists: vm.belongsToListIds
                    };

                } else {
                    console.log('empty');
                    return {};
                }
            };


            //TODO refactor to consolidate toggle add list id functions
            vm.toggleAddListId = function (contactListId) {

                var indexOfId = vm.belongsToListIds.indexOf(contactListId);

                if (indexOfId !== -1) {
                    vm.belongsToListIds.splice(
                        indexOfId, indexOfId + 1);

                    return false;

                } else {
                    vm.belongsToListIds.push(contactListId);

                    return true;
                }
            };

            vm.toggleEditedListId = function(contactListId){
                for (var i = 0; i < vm.selectedContact.contact_lists.length; i++){
                    vm.editedListIds.push(vm.selectedContact.contact_lists[i].id);
                    vm.selectedContact.contact_lists[i].selected = true;
                }
                console.log(vm.editedListIds, vm.selectedContact);
                var indexOfId = vm.editedListIds.indexOf(contactListId);

                if (indexOfId !== -1) {
                    vm.editedListIds.splice(
                        indexOfId, indexOfId + 1);

                } else {
                    vm.editedListIds.push(contactListId);

                }
                console.log(vm.editedListIds)
            };


            vm.resetContactForm = function () {
                vm.firstNameInput = '';
                vm.lastNameInput = '';
                vm.emailInput = '';
                vm.phoneInput = '';
                vm.belongsToListIds = [];
            };


            /**
             *  Contact List Dropdown
             */
            vm.contactListMenu = false;

            vm.toggleContactListMenu = function () {
                vm.contactListMenu = ! (vm.contactListMenu);
            };

            vm.closeContactListMenu = function () {
                vm.contactListMenu = false;
            };

            vm.nameSort = false;

            vm.toggleNames = function(){
                vm.nameSort = !(vm.nameSort);
            };


            /**
             *  Edit Contact Methods
             */
            vm.toggleEdit = function (contact, fieldName){
                switch (fieldName) {
                    case 'first_name':
                        contact.editFirstName = !(contact.editFirstName);
                        break;
                    case 'last_name':
                        contact.editLastName = !(contact.editLastName);
                        break;
                    case 'email':
                        contact.editEmail = !(contact.editEmail);
                        break;
                    case 'phone':
                        contact.editPhone = !(contact.editPhone);
                        break;
                    default:
                        alert('Unfortunately, there was an error editing the contact.');
                }
            };


            vm.saveEdit = function (contact, fieldName) {
                console.log(contact);
                $http.post('update-contact', contact)
                    .then(function successCallback (res) {
                        switch (fieldName) {
                            case 'first_name':
                                contact.editFirstName = false;
                                break;
                            case 'last_name':
                                contact.editLastName = false;
                                break;
                            case 'email':
                                contact.editEmail = false;
                                break;
                            case 'phone':
                                contact.editPhone = false;
                                break;
                        }

                    }, function errorCallback (err){
                        alert('There was an error updating the contact.');
                        console.log(err);
                    });
            };

            vm.editContactLists = function (){
                $http.post('update-contact', {});
            };

            vm.removeFromContactList = function(contactListId) {

                $http.post('remove-from-contact-list', {
                    contact_id: vm.selectedContact.id,
                    contact_list_id: contactListId
                });

                _.remove(vm.selectedContact.contact_lists, function (list) {
                    return list.id === contactListId;
                });

            };


            /**
             * Edit Contacts and save to database
             */
            vm.updateUser = function(data){
                console.log('data');
                $http.post('update-contact');
            };


            /**
             *  Display Contacts when application starts.
             */
            vm.displayContacts();

        });

}());
