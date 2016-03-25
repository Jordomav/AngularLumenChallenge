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
            var cachedListsIfModalCancelled = [];

            // Property to hold selected contact list for displaying contacts one list at a time.
            vm.selectedContactList = {id: 1};

            // Array to hold copy of lists to display in Contact List modal.
            vm.availableLists = [];


            /**
             *  Contact Display Methods
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

                    // Add elipses for long previews
                    if (output.length < 25) {
                        return output;
                    } else {
                        return output.substr(0, 25) + '...';
                    }
                }
            };


            vm.displaySelectedContactList = function (selectedList) {

                var hideState = false;

                _.each(vm.contacts, function (contact) {
                    if (contact.contact_lists.length > 0) {

                        _.some(contact.contact_lists, function (list) {
                            if (list.id === selectedList.id) {
                                hideState = false;
                            }
                        });
                    } else {
                        hideState = true;
                    }
                    contact.hide = hideState;
                });
            };


            /**
             *  Add New Contact Methods
             */
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


            vm.resetContactForm = function () {
                vm.firstNameInput = '';
                vm.lastNameInput = '';
                vm.emailInput = '';
                vm.phoneInput = '';
                vm.belongsToListIds = [];
            };


            // TODO: get rid of this and do proper validation and formatting of inputs for new Contacts.
            vm.newContactData = function () {

                if ( !(_.isEmpty(vm.firstNameInput, vm.lastNameInput, vm.emailInput, vm.phoneInput) )) {

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


            vm.toggleAddListId = function (contactListId) {

                var indexOfId = vm.belongsToListIds.indexOf(contactListId);

                if (indexOfId !== -1) {
                    vm.belongsToListIds.splice(
                        indexOfId, indexOfId + 1);

                } else {
                    vm.belongsToListIds.push(contactListId);
                }
            };


            /**
             *  Contact List Modal Methods
             */
            vm.setSelected = function (contact) {
                vm.selectedContact = contact;
            };

            vm.initContactListModal = function (contactLists) {

                cachedListsIfModalCancelled = [];

                // Cache copy of current contact lists in case user clicks cancel button to close the modal without
                // saving changes.
                angular.copy(vm.selectedContact.contact_lists, cachedListsIfModalCancelled);

                // Make a copy of the master Contact Lists array to display inside the modal.
                vm.availableLists = contactLists;

                // Show list all of the available Contact Lists that the Contact does not currently belong to.
                _.each(vm.availableLists, function (availableList) {
                    availableList.hide = false;
                    _.each(vm.selectedContact.contact_lists, function (belongsToList) {
                        if (belongsToList.id === availableList.id) {
                            availableList.hide = true;
                        }
                    });
                });

                // Populate list with current Contact List IDs. This list will also be updated when we add or remove
                // Contact Lists in the Modal.
                vm.editedListIds = [];

                getCurrentListsForSelectedContact();

                function getCurrentListsForSelectedContact() {
                    _.each(vm.selectedContact.contact_lists, function (currentList) {
                        vm.editedListIds.push(currentList.id);
                    });
                }
            };


            vm.toggleEditedListId = function (contactListId){

                var indexOfId = vm.editedListIds.indexOf(contactListId);

                if (indexOfId !== -1) {

                    vm.editedListIds.splice(
                        indexOfId, indexOfId + 1);

                    console.log(vm.editedListIds);

                } else {
                    vm.editedListIds.push(contactListId);
                }
                console.log(vm.editedListIds);
            };


            vm.saveContactListChanges = function (contact) {

                console.log({id: contact.id, lists: vm.editedListIds});

                $http.post('update-contact-lists', {
                    id: contact.id,
                    lists: vm.editedListIds
                })
                    .then( function successCallback(res) {

                    }, function errorCallback(err) {
                        alert('There was a problem saving the changes.');
                        console.log(err);
                    });
            };


            vm.cancelListModal = function () {
                console.log(cachedListsIfModalCancelled);

                vm.selectedContact.contact_lists = cachedListsIfModalCancelled;
                console.log(vm.selectedContact.contact_lists);
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
                var listIds = [];
                if (contact.contact_lists.length > 0) {
                    _.each(contact.contact_lists, function (list) {
                        listIds.push(list.id);
                    });
                    contact.lists = listIds;
                    console.log(contact);
                } else {
                    contact.lists = [];
                }
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
                            case 'contact_lists':
                                console.log('contact lists edited');
                                break;
                        }

                    }, function errorCallback (err){
                        alert('There was an error updating the contact.');
                        console.log(err);
                    });
            };


            vm.toggleAddSelectedContactToList = function (contactList) {
                var currentLists = vm.selectedContact.contact_lists;
                if (contactList.selected = true) {
                    currentLists.push(contactList);
                    contactList.hide = true;
                    contactList.selected = false;
                }
            };


            vm.editContactLists = function (){
                $http.post('update-contact', {});
            };


            vm.removeFromContactList = function(contactListId) {
                console.log('remove contact list called');

                $http.post('remove-from-contact-list', {
                    contact_id: vm.selectedContact.id,
                    contact_list_id: contactListId
                });

                _.remove(vm.selectedContact.contact_lists, function (list) {
                    if (list.id === contactListId) {
                        _.each(vm.availableLists, function (availableList) {
                            if (list.id === availableList.id) {
                                availableList.hide = false;
                                availableList.selected = false;

                                vm.editedListIds.splice(vm.editedListIds.indexOf(list.id), 1);
                                console.log(vm.editedListIds);
                            }
                        });
                        return true;
                    }
                });
            };


            /**
             *  Soft Delete Contact (send to trash bin)
             */
            vm.toggleContactInTrash = function(contact){

                contact.intrash = !(contact.intrash);

                var promise = ContactsService.saveInTrashState(contact);

                promise.then( function complete() {},

                    function error(err) {
                        alert('There was an error storing the \'intrash\' state of ' + contact.first_name);
                    });
            };


            /**
             *  Display Contacts when application starts.
             */
            vm.displayContacts();

        });

}());
