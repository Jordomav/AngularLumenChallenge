/**
 * Created by Neil Strain on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactListsController', function ($http, ContactListsService) {


            var vm = this;


            /**
             *  Contact List Variables/Properties
             */

            vm.contactLists = [];
            vm.newList = '';


            vm.displayContactLists = function () {

                var promise = ContactListsService.getContactLists();

                promise.then( function success(contactLists) {

                    vm.contactLists = contactLists.data;

                }, function errorCallback (err) {
                    alert('There was an error retrieving Contact Lists');
                    console.log(err);
                });
            };


            vm.saveContactList = function () {

                var promise = ContactListsService.save(vm.newList);

                promise.then( function success() {
                    vm.displayContactLists();
                },
                    function error(err) {
                        alert('There was a problem saving the Contact List');
                        console.log(err);
                    });
            };


            /**
             *  Display Contacts when application starts.
             */
            vm.displayContactLists();

        });

}());
