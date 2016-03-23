/**
 * Created by Neil Strain on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactListsController', function ($http, $q, ContactListsService) {


            var vm = this;


            /**
             *  Contact List Variables/Properties
             */
            vm.contactLists = [];

            vm.q = '';


            // TODO: displayContactLists() is getting called twice on page load.
            vm.displayContactLists = function () {

                console.log('displayContactLists() called');

                var promise = ContactListsService.getContactLists();

                promise.then( function success(contactLists) {

                    vm.contactLists = contactLists.data;

                }, function errorCallback (err) {
                    alert('There was an error retrieving Contact Lists');
                    console.log(err);
                });
            };


            vm.saveContactList = function (list) {

                vm.q = '';

                if ( list == undefined || !(list.trim() === '') ) {

                    var promise = ContactListsService.save(list);

                    promise.then( function success() {
                            vm.contactLists.push({
                                title: list,
                                selected: true
                            });



                        },
                        function error(err) {
                            alert('There was a problem saving the Contact List');
                            console.log(err);
                        });
                }
            };

            vm.toggleSelect = function (contactList) {
                contactList.selected = !(contactList.selected);
            };

            vm.resetContactLists = function () {
                _.each(vm.contactLists, function (list) {
                    list.selected = false;
                    console.log(list);
                    vm.newList = '';
                });

                vm.displayContactLists();
            };


            /**
             *  Display Contacts when application starts.
             */
            vm.displayContactLists();

        });

}());
