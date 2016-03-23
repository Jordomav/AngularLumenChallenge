/**
 * Created by Neil Strain on 3/22/2016.
 */

(function () {

    'use strict';

    angular.module('customFilters')
        .filter('prettyDate', function () {
            return function (input) {

                // Convert string input from DB into format ['MM', 'DD', 'YYYY']
                var date = input.slice(0,10).split('-');
                date.push(date.shift());

                var month = getMonthName(parseInt(date[0]) - 1),
                    day = parseInt(date[1]),
                    year = parseInt(date[2]),
                    formattedDate = month + ' ' + day + ', ' + year;

                // Display Today or Yesterday if needed.
                var today = new Date(),
                    todayMonth = getMonthName(today.getMonth()),
                    todayDate = today.getDate(),
                    todayYear = today.getFullYear();

                today = todayMonth + ' ' + todayDate + ', ' + todayYear;

                if (formattedDate === today) {

                    formattedDate = 'Today';

                } else if (month === todayMonth && year === todayYear) {
                    if (todayDate - day === 1) {
                        formattedDate = 'Yesterday';
                    }
                }

                
                return formattedDate;


                function getMonthName(monthNumber) {
                    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

                    return monthNames[monthNumber];
                }
            };
        });
}());
