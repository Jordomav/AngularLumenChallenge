/**
 * Created by Neil Strain on 3/14/2016.
 */

(function () {

    'use strict';

    angular.module('contactsApp')
        .controller('ContactListsController', function ($http) {

            var vm = this;

            vm.contactLists = [];

            $http.get('')
        });


}());
