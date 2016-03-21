/**
 * Created by Jordan Mavrogeorge on 3/21/16.
 */

(function()
{
    'use strict';

    angular.module('customFilters')
        .filter('prettyDate', function(){
           return function(input){
              return input.slice(0,10);
           }
        });
}());
