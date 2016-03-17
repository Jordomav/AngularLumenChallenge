!function(){"use strict";angular.module("contactsApp",["ui.bootstrap"])}(),function(){"use strict";angular.module("contactsApp").controller("ContactsController",["$http","ContactsService",function(t,n){var e=this;e.contacts=[],e.firstName="",e.lastName="",e.email="",e.phone="",e.displayContacts=function(){t.get("get-contacts").then(function(t){e.contacts=t.data,_.each(e.contacts,function(t){t.intrash=!!+t.intrash}),n.contacts=e.contacts},function(t){alert("There was an error retrieving contacts.")})},e.displayContacts(),e.addContact=function(){t.post("save-contact",{first_name:e.firstName,last_name:e.lastName,email:e.email,phone:e.phone}).then(function(t){e.displayContacts(),e.firstName="",e.lastName="",e.email="",e.phone=""},function(t){alert.log("There was an error saving the contact.",t)})},e.toggleContactInTrash=function(n){n.intrash=!n.intrash,t.post("soft-delete",{id:n.id}).then(function(t){},function(t){alert("There was an error storing the 'intrash' state of "+n.first_name),console.log(t)})}}])}(),function(){"use strict";angular.module("contactsApp").service("ContactsService",["$http",function(t){var n=this;n.contacts=[],n["delete"]=function(n){t.post("delete-contacts",{}).then(function(t){},function(){alert("There was an error deleting the selected contacts")})}}])}(),function(){"use strict";angular.module("contactsApp").controller("TrashModalController",["ContactsService","$http",function(t,n){var e=this;e.deleteContacts=function(){console.log("delete selected called"),t.contacts.length>0&&(t["delete"](t.contacts),_.each(t.contacts,function(t){t.intrash&&(t.deleted=!0,t.intrash=!1)}))}}])}(),function(){"use strict"}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzYXBwLm1vZHVsZS5qcyIsImNvbnRhY3RzL2NvbnRhY3RzLmNvbnRyb2xsZXIuanMiLCJjb250YWN0cy9jb250YWN0cy5zZXJ2aWNlLmpzIiwiY29udGFjdHMvdHJhc2htb2RhbC5jb250cm9sbGVyLmpzIiwiY29udGFjdF9saXN0cy9jb250YWN0Lmxpc3RzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkaHR0cCIsIkNvbnRhY3RzU2VydmljZSIsInZtIiwidGhpcyIsImNvbnRhY3RzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiZGlzcGxheUNvbnRhY3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJfIiwiZWFjaCIsImNvbnRhY3QiLCJpbnRyYXNoIiwiYWxlcnQiLCJhZGRDb250YWN0IiwicG9zdCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJsb2ciLCJ0b2dnbGVDb250YWN0SW5UcmFzaCIsImlkIiwiY29uc29sZSIsInNlcnZpY2UiLCJkZWxldGVDb250YWN0cyIsImxlbmd0aCIsImRlbGV0ZWQiXSwibWFwcGluZ3MiOiJDQUlBLFdBRUEsWUFFQUEsU0FBQUMsT0FBQSxlQUFBLG9CQ0pBLFdBRUEsWUFFQUQsU0FBQUMsT0FBQSxlQUNBQyxXQUFBLHNCQUFBLFFBQUEsa0JBQUEsU0FBQUMsRUFBQUMsR0FFQSxHQUFBQyxHQUFBQyxJQUdBRCxHQUFBRSxZQUdBRixFQUFBRyxVQUFBLEdBQ0FILEVBQUFJLFNBQUEsR0FDQUosRUFBQUssTUFBQSxHQUNBTCxFQUFBTSxNQUFBLEdBRUFOLEVBQUFPLGdCQUFBLFdBRUFULEVBQUFVLElBQUEsZ0JBQ0FDLEtBQUEsU0FBQUMsR0FFQVYsRUFBQUUsU0FBQVEsRUFBQUMsS0FHQUMsRUFBQUMsS0FBQWIsRUFBQUUsU0FBQSxTQUFBWSxHQUNBQSxFQUFBQyxXQUFBRCxFQUFBQyxVQUdBaEIsRUFBQUcsU0FBQUYsRUFBQUUsVUFFQSxTQUFBUSxHQUNBTSxNQUFBLDhDQUtBaEIsRUFBQU8sa0JBSUFQLEVBQUFpQixXQUFBLFdBRUFuQixFQUFBb0IsS0FBQSxnQkFFQUMsV0FBQW5CLEVBQUFHLFVBQ0FpQixVQUFBcEIsRUFBQUksU0FDQUMsTUFBQUwsRUFBQUssTUFDQUMsTUFBQU4sRUFBQU0sUUFHQUcsS0FBQSxTQUFBQyxHQUNBVixFQUFBTyxrQkFFQVAsRUFBQUcsVUFBQSxHQUNBSCxFQUFBSSxTQUFBLEdBQ0FKLEVBQUFLLE1BQUEsR0FDQUwsRUFBQU0sTUFBQSxJQUVBLFNBQUFJLEdBQ0FNLE1BQUFLLElBQUEseUNBQUFYLE1BS0FWLEVBQUFzQixxQkFBQSxTQUFBUixHQUVBQSxFQUFBQyxTQUFBRCxFQUFBLFFBRUFoQixFQUFBb0IsS0FBQSxlQUFBSyxHQUFBVCxFQUFBUyxLQUVBZCxLQUFBLFNBQUFDLEtBRUEsU0FBQUEsR0FDQU0sTUFBQSxxREFBQUYsRUFBQUssWUFDQUssUUFBQUgsSUFBQVgsWUM1RUEsV0FFQSxZQUdBZixTQUFBQyxPQUFBLGVBQ0E2QixRQUFBLG1CQUFBLFFBQUEsU0FBQTNCLEdBRUEsR0FBQUUsR0FBQUMsSUFFQUQsR0FBQUUsWUFFQUYsRUFBQUEsVUFBQSxTQUFBRSxHQUVBSixFQUFBb0IsS0FBQSxzQkFDQVQsS0FBQSxTQUFBQyxLQUVBLFdBQ0FNLE1BQUEsOERDckJBLFdBRUEsWUFFQXJCLFNBQUFDLE9BQUEsZUFDQUMsV0FBQSx3QkFBQSxrQkFBQSxRQUFBLFNBQUFFLEVBQUFELEdBRUEsR0FBQUUsR0FBQUMsSUFFQUQsR0FBQTBCLGVBQUEsV0FDQUYsUUFBQUgsSUFBQSwwQkFHQXRCLEVBQUFHLFNBQUF5QixPQUFBLElBRUE1QixFQUFBQSxVQUFBQSxFQUFBRyxVQUdBVSxFQUFBQyxLQUFBZCxFQUFBRyxTQUFBLFNBQUFZLEdBQ0FBLEVBQUFDLFVBQ0FELEVBQUFjLFNBQUEsRUFDQWQsRUFBQUMsU0FBQSxhQ2xCQSxXQUVBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBOZWlsIFN0cmFpbiBvbiAzLzE0LzIwMTYuXG4gKi9cblxuKGZ1bmN0aW9uICgpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb250YWN0c0FwcCcsIFsndWkuYm9vdHN0cmFwJ10pO1xuXG5cbn0oKSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSm9yZGFuIE1hdnJvZ2VvcmdlIG9uIDMvMTQvMjAxNi5cbiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2NvbnRhY3RzQXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NvbnRhY3RzQ29udHJvbGxlcicsIGZ1bmN0aW9uICgkaHR0cCwgQ29udGFjdHNTZXJ2aWNlKSB7XG5cbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIEVtcHR5IGxpc3RzIHRvIGhvbGQgYWxsIGNvbnRhY3RzLlxuICAgICAgICAgICAgdm0uY29udGFjdHMgPSBbXTtcblxuICAgICAgICAgICAgLy8gUHJvcGVydGllcyB0byBzdG9yZSB2YWx1ZXMgZnJvbSBuZXcgdXNlciBmb3JtLlxuICAgICAgICAgICAgdm0uZmlyc3ROYW1lID0gJyc7XG4gICAgICAgICAgICB2bS5sYXN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgdm0uZW1haWwgPSAnJztcbiAgICAgICAgICAgIHZtLnBob25lID0gJyc7XG5cbiAgICAgICAgICAgIHZtLmRpc3BsYXlDb250YWN0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnZ2V0LWNvbnRhY3RzJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKHJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5jb250YWN0cyA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWN0LmludHJhc2ggc2hvdWxkIGJlIGJvb2xlYW4gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godm0uY29udGFjdHMsIGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdC5pbnRyYXNoID0gISErY29udGFjdC5pbnRyYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RzU2VydmljZS5jb250YWN0cyA9IHZtLmNvbnRhY3RzO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgY29udGFjdHMuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBhbGwgY3VycmVudCBjb250YWN0cyBpbiB0aGUgZGF0YWJhc2Ugd2hlbiBwYWdlIGlzIGxvYWRlZC5cbiAgICAgICAgICAgIHZtLmRpc3BsYXlDb250YWN0cygpO1xuXG5cbiAgICAgICAgICAgIC8vIEFkZCBuZXcgY29udGFjdHMuXG4gICAgICAgICAgICB2bS5hZGRDb250YWN0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnc2F2ZS1jb250YWN0Jywge1xuXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IHZtLmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiB2bS5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdm0ucGhvbmVcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2sgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzcGxheUNvbnRhY3RzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpcnN0TmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubGFzdE5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmVtYWlsID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5waG9uZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2sgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3Igc2F2aW5nIHRoZSBjb250YWN0LicsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICB2bS50b2dnbGVDb250YWN0SW5UcmFzaCA9IGZ1bmN0aW9uKGNvbnRhY3Qpe1xuXG4gICAgICAgICAgICAgICAgY29udGFjdC5pbnRyYXNoID0gIShjb250YWN0LmludHJhc2gpO1xuXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnc29mdC1kZWxldGUnLCB7aWQ6IGNvbnRhY3QuaWR9KVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBzdG9yaW5nIHRoZSBcXCdpbnRyYXNoXFwnIHN0YXRlIG9mICcgKyBjb250YWN0LmZpcnN0X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xuXG59KCkpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5laWwgU3RyYWluIG9uIDMvMTYvMjAxNi5cbiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gVE9ETzogcHJvYmFibHkgbW92ZSBzb21lIGZ1bmN0aW9ucyBmcm9tIENvbnRhY3RzQ29udHJvbGxlciB0byBoZXJlLlxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb250YWN0c0FwcCcpXG4gICAgICAgIC5zZXJ2aWNlKCdDb250YWN0c1NlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICAgICAgdm0uY29udGFjdHMgPSBbXTtcblxuICAgICAgICAgICAgdm0uZGVsZXRlID0gZnVuY3Rpb24gKGNvbnRhY3RzKSB7XG5cbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCdkZWxldGUtY29udGFjdHMnLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrIChyZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3IgZGVsZXRpbmcgdGhlIHNlbGVjdGVkIGNvbnRhY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xuXG59KCkpO1xuIiwiXG4oZnVuY3Rpb24gKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2NvbnRhY3RzQXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1RyYXNoTW9kYWxDb250cm9sbGVyJywgZnVuY3Rpb24gKENvbnRhY3RzU2VydmljZSwgJGh0dHApIHtcblxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICAgICAgdm0uZGVsZXRlQ29udGFjdHM9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHNlbGVjdGVkIGNhbGxlZCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gT25seSBjb25uZWN0IHdpdGggbHVtZW4gaWYgdGhlcmUgYXJlIGNvbnRhY3RzIHRvIGRlbGV0ZS5cbiAgICAgICAgICAgICAgICBpZiAoQ29udGFjdHNTZXJ2aWNlLmNvbnRhY3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBDb250YWN0c1NlcnZpY2UuZGVsZXRlKENvbnRhY3RzU2VydmljZS5jb250YWN0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHZpZXcgdG8gcmVtb3ZlIGRlbGV0ZWQgY29udGFjdHMuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChDb250YWN0c1NlcnZpY2UuY29udGFjdHMsIGZ1bmN0aW9uIChjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFjdC5pbnRyYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdC5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWN0LmludHJhc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xufSgpKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOZWlsIFN0cmFpbiBvbiAzLzE0LzIwMTYuXG4gKi9cblxuKGZ1bmN0aW9uICgpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuXG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
