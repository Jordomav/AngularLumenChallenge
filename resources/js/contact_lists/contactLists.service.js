/**
 * Created by Neil Strain on 3/18/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .service('ContactListsService', function ($http) {

            var vm = this;

            vm.getContactLists = function () {
                return $http.get('get-contact-lists');
            };

        });


}());
