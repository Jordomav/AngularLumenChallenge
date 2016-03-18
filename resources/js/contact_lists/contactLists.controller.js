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

            vm.save = function () {
                console.log('called')
            };


            /**
             *  Display Contacts when application starts.
             */
            vm.displayContactLists();

        });

}());
