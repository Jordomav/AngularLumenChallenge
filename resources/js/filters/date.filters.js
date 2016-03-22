/**
 * Created by Jordan Mavrogeorge on 3/21/16.
 */

(function()
{
    'use strict';

    angular.module('customFilters')
        .filter('prettyDate', function(){
           return function(input){
              var date = input.slice(0,10).split('-');
               date.push(date.shift());
               date[0] = date[0].replace("01", "January,");
               date[0] = date[0].replace("02", "February,");
               date[0] = date[0].replace("03", "March,");
               date[0] = date[0].replace("04", "April,");
               date[0] = date[0].replace("05", "May,");
               date[0] = date[0].replace("06", "June,");
               date[0] = date[0].replace("07", "July,");
               date[0] = date[0].replace("08", "August,");
               date[0] = date[0].replace("09", "September,");
               date[0] = date[0].replace("10", "October,");
               date[0] = date[0].replace("11", "November,");
               date[0] = date[0].replace("12", "December,");
               date[1] = date[1].replace("01", "1");
               date[1] = date[1].replace("02", "2");
               date[1] = date[1].replace("03", "3");
               date[1] = date[1].replace("04", "4");
               date[1] = date[1].replace("05", "5");
               date[1] = date[1].replace("06", "6");
               date[1] = date[1].replace("07", "7");
               date[1] = date[1].replace("08", "8");
               date[1] = date[1].replace("09", "9");
               date = date.join(' ');
               return date;
           }
        });
}());
