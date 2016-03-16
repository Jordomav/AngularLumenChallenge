/**
 * Created by Neil Strain on 3/16/2016.
 */

(function () {

    'use strict';

    // TODO: probably move some functions from ContactsController to here.
    angular.module('contactsApp')
        .service('ContactsService', function () {

            var vm = this;

            vm.contacts = [];

        });

}());
