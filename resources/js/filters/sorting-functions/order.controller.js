/**
 * Created by JordanMavrogeorge on 3/21/16.
 */

(function () {
    'use strict';
    angular.module('sortApp')
        .controller('mainController', function($scope) {
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
    });
}());
