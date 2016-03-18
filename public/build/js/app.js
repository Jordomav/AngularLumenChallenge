!function(){"use strict";angular.module("contactsApp",[])}(),function(){"use strict";angular.module("contactsApp").controller("ContactsController",["$http","ContactsService",function(t,n){var e=this;e.contacts=[],e.contactLists=[],e.firstNameInput="",e.lastNameInput="",e.emailInput="",e.phoneInput="",e.belongsToListIds=[],e.displayContacts=function(){t.get("get-contacts").then(function(t){e.contacts=t.data,_.each(e.contacts,function(t){t.intrash=!!+t.intrash}),n.contacts=e.contacts},function(t){alert("There was an error retrieving contacts.")})},e.displayContacts(),e.addContact=function(){t.post("save-contact",{first_name:e.firstNameInput,last_name:e.lastNameInput,email:e.emailInput,phone:e.phoneInput,lists:e.belongsToListIds}).then(function(t){e.displayContacts(),e.firstName="",e.lastName="",e.email="",e.phone="",e.listsForNewContact=[]},function(t){alert("There was an error saving the contact.")})},e.toggleContactInTrash=function(n){n.intrash=!n.intrash,t.post("soft-delete",{id:n.id}).then(function(t){},function(t){alert("There was an error storing the 'intrash' state of "+n.first_name),console.log(t)})},t.get("get-contact-lists").then(function(t){console.log("success"),e.contactLists=t.data},function(){alert("There was an error retrieving Contact Lists")})}])}(),function(){"use strict";angular.module("contactsApp").service("ContactsService",["$http",function(t){var n=this;n.contacts=[],n["delete"]=function(n){t.post("delete-contacts",{}).then(function(t){},function(){alert("There was an error deleting the selected contacts")})}}])}(),function(){"use strict";angular.module("contactsApp").controller("TrashModalController",["ContactsService","$http",function(t,n){var e=this;e.deleteContacts=function(){console.log("delete selected called"),t.contacts.length>0&&(t["delete"](t.contacts),_.each(t.contacts,function(t){t.intrash&&(t.deleted=!0,t.intrash=!1)}))}}])}(),function(){"use strict";angular.module("contactsApp").controller("ContactListsController",["$http",function(t){}])}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzYXBwLm1vZHVsZS5qcyIsImNvbnRhY3RzL2NvbnRhY3RzLmNvbnRyb2xsZXIuanMiLCJjb250YWN0cy9jb250YWN0cy5zZXJ2aWNlLmpzIiwiY29udGFjdHMvdHJhc2htb2RhbC5jb250cm9sbGVyLmpzIiwiY29udGFjdF9saXN0cy9jb250YWN0Lmxpc3RzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkaHR0cCIsIkNvbnRhY3RzU2VydmljZSIsInZtIiwidGhpcyIsImNvbnRhY3RzIiwiY29udGFjdExpc3RzIiwiZmlyc3ROYW1lSW5wdXQiLCJsYXN0TmFtZUlucHV0IiwiZW1haWxJbnB1dCIsInBob25lSW5wdXQiLCJiZWxvbmdzVG9MaXN0SWRzIiwiZGlzcGxheUNvbnRhY3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJfIiwiZWFjaCIsImNvbnRhY3QiLCJpbnRyYXNoIiwiYWxlcnQiLCJhZGRDb250YWN0IiwicG9zdCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInBob25lIiwibGlzdHMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImxpc3RzRm9yTmV3Q29udGFjdCIsInRvZ2dsZUNvbnRhY3RJblRyYXNoIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic2VydmljZSIsImRlbGV0ZUNvbnRhY3RzIiwibGVuZ3RoIiwiZGVsZXRlZCJdLCJtYXBwaW5ncyI6IkNBSUEsV0FFQSxZQUVBQSxTQUFBQyxPQUFBLHFCQ0pBLFdBRUEsWUFFQUQsU0FBQUMsT0FBQSxlQUNBQyxXQUFBLHNCQUFBLFFBQUEsa0JBQUEsU0FBQUMsRUFBQUMsR0FFQSxHQUFBQyxHQUFBQyxJQU9BRCxHQUFBRSxZQUdBRixFQUFBRyxnQkFHQUgsRUFBQUksZUFBQSxHQUNBSixFQUFBSyxjQUFBLEdBQ0FMLEVBQUFNLFdBQUEsR0FDQU4sRUFBQU8sV0FBQSxHQUNBUCxFQUFBUSxvQkFFQVIsRUFBQVMsZ0JBQUEsV0FFQVgsRUFBQVksSUFBQSxnQkFDQUMsS0FBQSxTQUFBQyxHQUVBWixFQUFBRSxTQUFBVSxFQUFBQyxLQUdBQyxFQUFBQyxLQUFBZixFQUFBRSxTQUFBLFNBQUFjLEdBQ0FBLEVBQUFDLFdBQUFELEVBQUFDLFVBR0FsQixFQUFBRyxTQUFBRixFQUFBRSxVQUVBLFNBQUFVLEdBQ0FNLE1BQUEsOENBS0FsQixFQUFBUyxrQkFJQVQsRUFBQW1CLFdBQUEsV0FFQXJCLEVBQUFzQixLQUFBLGdCQUVBQyxXQUFBckIsRUFBQUksZUFDQWtCLFVBQUF0QixFQUFBSyxjQUNBa0IsTUFBQXZCLEVBQUFNLFdBQ0FrQixNQUFBeEIsRUFBQU8sV0FDQWtCLE1BQUF6QixFQUFBUSxtQkFHQUcsS0FBQSxTQUFBQyxHQUNBWixFQUFBUyxrQkFFQVQsRUFBQTBCLFVBQUEsR0FDQTFCLEVBQUEyQixTQUFBLEdBQ0EzQixFQUFBdUIsTUFBQSxHQUNBdkIsRUFBQXdCLE1BQUEsR0FDQXhCLEVBQUE0Qix1QkFFQSxTQUFBaEIsR0FDQU0sTUFBQSw2Q0FLQWxCLEVBQUE2QixxQkFBQSxTQUFBYixHQUVBQSxFQUFBQyxTQUFBRCxFQUFBLFFBRUFsQixFQUFBc0IsS0FBQSxlQUFBVSxHQUFBZCxFQUFBYyxLQUVBbkIsS0FBQSxTQUFBQyxLQUVBLFNBQUFBLEdBQ0FNLE1BQUEscURBQUFGLEVBQUFLLFlBQ0FVLFFBQUFDLElBQUFwQixNQVVBZCxFQUFBWSxJQUFBLHFCQUNBQyxLQUFBLFNBQUFDLEdBQ0FtQixRQUFBQyxJQUFBLFdBQ0FoQyxFQUFBRyxhQUFBUyxFQUFBQyxNQUdBLFdBQ0FLLE1BQUEsdURDdkdBLFdBRUEsWUFHQXZCLFNBQUFDLE9BQUEsZUFDQXFDLFFBQUEsbUJBQUEsUUFBQSxTQUFBbkMsR0FFQSxHQUFBRSxHQUFBQyxJQUVBRCxHQUFBRSxZQUVBRixFQUFBQSxVQUFBLFNBQUFFLEdBRUFKLEVBQUFzQixLQUFBLHNCQUNBVCxLQUFBLFNBQUFDLEtBRUEsV0FDQU0sTUFBQSw4RENyQkEsV0FFQSxZQUVBdkIsU0FBQUMsT0FBQSxlQUNBQyxXQUFBLHdCQUFBLGtCQUFBLFFBQUEsU0FBQUUsRUFBQUQsR0FFQSxHQUFBRSxHQUFBQyxJQUVBRCxHQUFBa0MsZUFBQSxXQUNBSCxRQUFBQyxJQUFBLDBCQUdBakMsRUFBQUcsU0FBQWlDLE9BQUEsSUFFQXBDLEVBQUFBLFVBQUFBLEVBQUFHLFVBR0FZLEVBQUFDLEtBQUFoQixFQUFBRyxTQUFBLFNBQUFjLEdBQ0FBLEVBQUFDLFVBQ0FELEVBQUFvQixTQUFBLEVBQ0FwQixFQUFBQyxTQUFBLGFDbEJBLFdBRUEsWUFFQXRCLFNBQUFDLE9BQUEsZUFDQUMsV0FBQSwwQkFBQSxRQUFBLFNBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE5laWwgU3RyYWluIG9uIDMvMTQvMjAxNi5cclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29udGFjdHNBcHAnLCBbXSk7XHJcblxyXG5cclxufSgpKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSm9yZGFuIE1hdnJvZ2VvcmdlIG9uIDMvMTQvMjAxNi5cclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnY29udGFjdHNBcHAnKVxyXG4gICAgICAgIC5jb250cm9sbGVyKCdDb250YWN0c0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoJGh0dHAsIENvbnRhY3RzU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb250YWN0IE1ldGhvZHNcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBsaXN0cyB0byBob2xkIGFsbCBDb250YWN0cy5cclxuICAgICAgICAgICAgdm0uY29udGFjdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1hc3RlciBsaXN0IHRvIGhvbGQgYWxsIGF2YWlsYWJsZSBDb250YWN0IExpc3RzXHJcbiAgICAgICAgICAgIHZtLmNvbnRhY3RMaXN0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvcGVydGllcyB0byBzdG9yZSB2YWx1ZXMgZnJvbSBuZXcgQ29udGFjdCBmb3JtLlxyXG4gICAgICAgICAgICB2bS5maXJzdE5hbWVJbnB1dCA9ICcnO1xyXG4gICAgICAgICAgICB2bS5sYXN0TmFtZUlucHV0ID0gJyc7XHJcbiAgICAgICAgICAgIHZtLmVtYWlsSW5wdXQgPSAnJztcclxuICAgICAgICAgICAgdm0ucGhvbmVJbnB1dCA9ICcnO1xyXG4gICAgICAgICAgICB2bS5iZWxvbmdzVG9MaXN0SWRzID0gW107XHJcblxyXG4gICAgICAgICAgICB2bS5kaXNwbGF5Q29udGFjdHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCdnZXQtY29udGFjdHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhyZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmNvbnRhY3RzID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWN0LmludHJhc2ggc2hvdWxkIGJlIGJvb2xlYW4gdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaCh2bS5jb250YWN0cywgZnVuY3Rpb24gKGNvbnRhY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3QuaW50cmFzaCA9ICEhK2NvbnRhY3QuaW50cmFzaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0c1NlcnZpY2UuY29udGFjdHMgPSB2bS5jb250YWN0cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGNvbnRhY3RzLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheSBhbGwgY3VycmVudCBDb250YWN0cyBpbiB0aGUgZGF0YWJhc2Ugd2hlbiBwYWdlIGlzIGxvYWRlZC5cclxuICAgICAgICAgICAgdm0uZGlzcGxheUNvbnRhY3RzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIG5ldyBDb250YWN0cy5cclxuICAgICAgICAgICAgdm0uYWRkQ29udGFjdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCdzYXZlLWNvbnRhY3QnLCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IHZtLmZpcnN0TmFtZUlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogdm0ubGFzdE5hbWVJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdm0uZW1haWxJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdm0ucGhvbmVJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0czogdm0uYmVsb25nc1RvTGlzdElkc1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc3BsYXlDb250YWN0cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmlyc3ROYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmxhc3ROYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmVtYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBob25lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmxpc3RzRm9yTmV3Q29udGFjdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBzYXZpbmcgdGhlIGNvbnRhY3QuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdm0udG9nZ2xlQ29udGFjdEluVHJhc2ggPSBmdW5jdGlvbihjb250YWN0KXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWN0LmludHJhc2ggPSAhKGNvbnRhY3QuaW50cmFzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnc29mdC1kZWxldGUnLCB7aWQ6IGNvbnRhY3QuaWR9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2socmVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3Igc3RvcmluZyB0aGUgXFwnaW50cmFzaFxcJyBzdGF0ZSBvZiAnICsgY29udGFjdC5maXJzdF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqICBDb250YWN0IExpc3QgTWV0aG9kc1xyXG4gICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICRodHRwLmdldCgnZ2V0LWNvbnRhY3QtbGlzdHMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmNvbnRhY3RMaXN0cyA9IHJlcy5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgQ29udGFjdCBMaXN0cycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxufSgpKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgTmVpbCBTdHJhaW4gb24gMy8xNi8yMDE2LlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIFRPRE86IHByb2JhYmx5IG1vdmUgc29tZSBmdW5jdGlvbnMgZnJvbSBDb250YWN0c0NvbnRyb2xsZXIgdG8gaGVyZS5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb250YWN0c0FwcCcpXHJcbiAgICAgICAgLnNlcnZpY2UoJ0NvbnRhY3RzU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZtLmNvbnRhY3RzID0gW107XHJcblxyXG4gICAgICAgICAgICB2bS5kZWxldGUgPSBmdW5jdGlvbiAoY29udGFjdHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCdkZWxldGUtY29udGFjdHMnLCB7fSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2sgKHJlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvckNhbGxiYWNrICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBkZWxldGluZyB0aGUgc2VsZWN0ZWQgY29udGFjdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxufSgpKTtcclxuIiwiXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb250YWN0c0FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1RyYXNoTW9kYWxDb250cm9sbGVyJywgZnVuY3Rpb24gKENvbnRhY3RzU2VydmljZSwgJGh0dHApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2bS5kZWxldGVDb250YWN0cz0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBzZWxlY3RlZCBjYWxsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGNvbm5lY3Qgd2l0aCBsdW1lbiBpZiB0aGVyZSBhcmUgY29udGFjdHMgdG8gZGVsZXRlLlxyXG4gICAgICAgICAgICAgICAgaWYgKENvbnRhY3RzU2VydmljZS5jb250YWN0cy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RzU2VydmljZS5kZWxldGUoQ29udGFjdHNTZXJ2aWNlLmNvbnRhY3RzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHZpZXcgdG8gcmVtb3ZlIGRlbGV0ZWQgY29udGFjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKENvbnRhY3RzU2VydmljZS5jb250YWN0cywgZnVuY3Rpb24gKGNvbnRhY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QuaW50cmFzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdC5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3QuaW50cmFzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9KTtcclxufSgpKTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgTmVpbCBTdHJhaW4gb24gMy8xNC8yMDE2LlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjb250YWN0c0FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0NvbnRhY3RMaXN0c0NvbnRyb2xsZXInLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbn0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
