<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Contact List</title>
    <link rel="stylesheet" href="/build/css/css-deps.css">
    <link rel="stylesheet" href="/build/css/app.css">
</head>

<body>
<div class="container">

<!--    TODO: break apart views into angular element directives -->

        <h1>Contacts</h1>
        <hr>
            <div data-ng-app="contactsApp" data-ng-controller="ContactsController as contacts">

                    <div class="row">
                        <div class="col-xs-12">

                            <h4>Create a contact</h4>

                            <form name="addContactForm" class="form-inline">

                                    <input name="first_name"
                                           data-ng-model="contacts.firstNameInput"
                                           type="text"
                                           placeholder="First Name"
                                           class="form-control"
                                           required>

                                    <input name="last_name"
                                           data-ng-model="contacts.lastNameInput"
                                           type="text"
                                           placeholder="Last Name"
                                           class="form-control"
                                           required>

                                    <input name="email"
                                           data-ng-model="contacts.emailInput"
                                           type="text"
                                           placeholder="Email"
                                           class="form-control"
                                           required>

                                    <input name="phone"
                                           data-ng-model="contacts.phoneInput"
                                           type="text"
                                           placeholder="Phone"
                                           class="form-control"
                                           required>

<!--                                    <form>-->
<!--                                        <select data-ng-controller="ContactListsController as lists"-->
<!--                                                title="contact-lists"-->
<!--                                                data-ng-model="contacts.belongsToListIds"-->
<!--                                                multiple-->
<!--                                                style="width: 200px">-->
<!---->
<!--                                            <option data-ng-repeat="contactList in lists.contactLists"-->
<!--                                                    value="{{ contactList.id }}">-->
<!--                                                {{ contactList.title }}-->
<!--                                            </option>-->
<!---->
<!--                                        </select>-->
<!--                                        <span><i data-toggle="modal" data-target="#contact-list-modal" class="fa fa-plus-square-o"></i></span>-->
<!--                                    </form>-->

                                    <div data-ng-controller="ContactListsController as lists"
                                         class="contact-list-selector form-control"
                                         data-ng-model="contacts.belongsToListIds">

                                        <div data-ng-click="contacts.toggleContactListMenu()"><i class="fa fa-plus"></i> Add To</div>
                                        <div data-ng-if="contacts.contactListMenu" class="contact-list-dropdown">


                                            <input data-ng-model="lists.newList"
                                                   type="text"
                                                   title="add-contact-list" placeholder="Add New Contact List"
                                                   class="col-xs-10"
                                                   required>
                                            <i data-ng-click="lists.saveContactList(); contacts.toggleAddListId(lists.contactLists.length + 1)"
                                               class="fa fa-plus col-xs-2"></i>

                                            <div class="lists">
                                                <div data-ng-repeat="contactList in lists.contactLists"
                                                     data-ng-click="contacts.toggleAddListId(contactList.id); lists.toggleSelect(contactList)"
                                                     class="col-xs-12"
                                                     data-ng-class="{ 'selected' : contactList.selected }">
                                                    {{ contactList.title }}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <button data-ng-controller="ContactListsController as lists"
                                            data-ng-click="contacts.addContact(); lists.resetContactLists()"
                                            class="btn btn-success">
                                        <i class="fa fa-user-plus"></i>
                                           Add
                                    </button>

                            </form>
                        </div>
                    </div>



                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    <div data-ng-click="contacts.toggleNames()"><i class="fa fa-angle-down"></i>Name</div>
                                    <div data-ng-show="contacts.nameSort" id="FirstLast">
                                        <div data-ng-click="sortType = 'first_name'; sortReverse = !sortReverse">
                                            First Name
                                        </div>
                                        <div data-ng-click="sortType = 'last_name'; sortReverse = !sortReverse">
                                            Last Name
                                        </div>
                                    </div>

                                </th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th data-ng-click="sortType = 'created_at'; sortReverse = !sortReverse">Date Added</th>
                                <input type="text" data-ng-model="q" placeholder="Search for contacts..." aria-label="filter contacts">
                            </tr>
                        </thead>
                        <tbody class="table-hover">
                            <tr data-ng-repeat="contact in contacts.contacts | orderBy:sortType:sortReverse | filter:q as results" data-ng-hide="contact.deleted || contact.intrash" class="contact">
                                <td data-editable-text="contact.first_name + ' ' + contact.last_name">{{contact.first_name + ' ' + contact.last_name}}</td>
                                <td data-editable-text="contact.email">{{contact.email}}</td>
                                <td data-editable-text="contact.phone">{{contact.phone}}</td>
                                <td>{{contact.updated_at | prettyDate}}</td>
                                <td>
                                    <button data-ng-click ="contacts.toggleContactInTrash(contact)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete Contact</button>
                                </td>
                            </tr>
                            <td  data-ng-if="results.length == 0">
                                <strong>No results found.</strong>
                            </td>
                        </tbody>
                    </table>


                <!-- Button trigger trash modal -->
                <button type="button" class="btn btn-danger btn-md" data-toggle="modal" data-target="#trash-modal"><i class="fa fa-trash"></i> Trash</button>

                <!-- Trash modal -->
                <div data-ng-controller="TrashModalController as trash"
                     class="modal fade" id="trash-modal"
                     tabindex="-1"
                     role="dialog"
                     aria-labelledby="myModalLabel">

                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Trash Can</h4>
                            </div>
                            <div class="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Date Removed</th>
                                        </tr>
                                        <tr data-ng-repeat="contact in contacts.contacts"
                                            data-ng-show="contact.intrash"
                                            class="contact">

                                            <td>{{ contact.first_name + ' ' + contact.last_name }}</td>
                                            <td>{{ contact.email }}</td>
                                            <td>{{ contact.phone }}</td>
                                            <td>{{ contact.updated_at }}</td>

                                            <td>
                                                <button data-ng-click ="contacts.toggleContactInTrash(contact)"
                                                        class="btn btn-warning btn-xs"><i class="fa fa-refresh">

                                                    </i> Recover Contact</button>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="modal-footer">

                                <button data-ng-click="trash.deleteContacts()"
                                        data-dismiss="modal"
                                        class="btn btn-danger"
                                        data-target="#trash-modal">
                                    <i class="fa fa-times"></i>
                                    Take out the trash
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- New Contact List modal -->
                <div data-ng-controller="ContactListsController as lists"
                     class="modal fade"
                     id="contact-list-modal"
                     tabindex="-1"
                     role="dialog">

                    <div class="modal-dialog modal-sm" role="document">
                        <div class="modal-content">

                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Add Contact List</h4>
                            </div>

                            <div class="modal-body">

                                <form id="add-contact-list">
                                    <input type="text"
                                           title="new-contact-list"
                                           data-ng-model="lists.newList">

                                    <button data-ng-click="lists.saveContactList()"
                                            type="submit"
                                            data-dismiss="modal"
                                            class="btn btn-success"
                                            data-target="#contact-list-modal">
                                        Save
                                    </button>
                                </form>

                            </div>

                            <div class="modal-footer">


                            </div>
                        </div>
                    </div>
                </div>

            </div>

</div>


        <script src="/build/js/deps.js"></script>
        <script src="/build/js/app.js"></script>


</body>
</html>