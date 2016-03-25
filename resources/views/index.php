<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Contact List</title>
    <link rel="stylesheet" href="/build/css/css-deps.css">
    <link rel="stylesheet" href="/build/css/app.css">
</head>

<body>
<div class="container" data-ng-app="contactsApp" data-ng-controller="ContactsController as contacts">

<!--    TODO: break apart views into angular element directives -->
    <div class="row">
        <div class="col-xs-2">
            <h1>Contacts</h1>
        </div>
        <form class="col-xs-2 form-inline listControl" data-ng-controller="ContactListsController as lists">

            <!--  TODO: list sorting seems broken  -->
            <select data-ng-options="list.title for list in lists.contactLists track by list.id"
                    data-ng-model="contacts.selectedContactList"
                    data-ng-change="contacts.displaySelectedContactList()">
            </select>

        </form>
        <input type="text" data-ng-model="q" placeholder="Search for contacts..." aria-label="filter contacts" class="searchContacts col-xs-2"><i class="fa fa-search" style="font-size: 20px; margin-top:33px; margin-left:5px;"></i>
    </div>

    <hr>
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

                            <div data-ng-controller="ContactListsController as lists"
                                 class="contact-list-selector form-control"
                                 data-ng-model="contacts.belongsToListIds">

                                <div data-ng-click="contacts.toggleContactListMenu()"><i class="fa fa-plus"></i> Add To</div>
                                <div data-ng-if="contacts.contactListMenu" class="contact-list-dropdown">
                                    <div class="list-input">
                                        <span>
                                            <input data-ng-model="lists.q"
                                                   id="contact-list-input"
                                                   style="width:200px;"
                                                   type="text"
                                                   title="add-contact-list" placeholder="Add New Contact List">
                                        </span>
                                    </div>
                                    <div class="lists">
                                        <div data-ng-repeat="contactList in lists.contactLists | filter:lists.q as filterResult"
                                             data-ng-click="contacts.toggleAddListId(contactList.id); lists.toggleSelect(contactList)"
                                             class="col-xs-12"
                                             data-ng-class="{ selected : contactList.selected }">
                                            {{ contactList.title }}
                                        </div>
                                        <div data-ng-if="filterResult.length == 0">
                                            <strong data-ng-click="lists.saveContactList(lists.q); contacts.toggleAddListId(lists.contactLists.length + 1)">"{{lists.q}}" could not be found. Click to add.</strong>
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


            <table class="table" data-ng-controller="ContactListsController as lists">
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
                        <th>Contact Lists</th>

                    </tr>
                </thead>
                <tbody class="table-hover">
                    <tr data-ng-repeat="contact in contacts.contacts | orderBy:sortType:sortReverse | filter:q as results"
                        data-ng-hide="contact.hide === true || contact.deleted || contact.intrash" class="contact">

                        <td>
                            <!--  First Name -->
                            <span data-ng-hide="contact.editFirstName"
                                  data-ng-click="contacts.toggleEdit(contact, 'first_name')">{{ contact.first_name + ' ' }}</span>

                            <span data-ng-show="contact.editFirstName">
                                <input data-ng-model="contact.first_name"
                                       name="first_name" title="first_name" type="text" value="{{ contact.first_name }}">
                                <button data-ng-click="contacts.saveEdit(contact, 'first_name')" class="btn btn-xs btn-success">
                                    <i class="fa fa-check"></i></button>
                                <button data-ng-click="contacts.toggleEdit(contact, 'first_name')"
                                        class="btn btn-xs btn-warning"><i class="fa fa-times"></i></button>
                            </span>

                            <!-- Last Name -->
                            <span data-ng-hide="contact.editLastName"
                                  data-ng-click="contacts.toggleEdit(contact, 'last_name')">{{ contact.last_name }}</span>

                            <span data-ng-show="contact.editLastName">
                                <input data-ng-model="contact.last_name"
                                       name="last_name" title="last_name" type="text" value="{{ contact.last_name }}">
                                <button data-ng-click="contacts.saveEdit(contact, 'last_name')"
                                        class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                <button data-ng-click="contacts.toggleEdit(contact, 'last_name')"
                                        class="btn btn-xs btn-warning"><i class="fa fa-times"></i></button>
                            </span>
                        </td>

                        <!-- Email -->
                        <td>
                            <span data-ng-hide="contact.editEmail"
                                  data-ng-click="contacts.toggleEdit(contact, 'email')">{{ contact.email }}</span>

                            <span data-ng-show="contact.editEmail">
                                    <input data-ng-model="contact.email"
                                           name="email" title="email" type="text" value="{{ contact.email }}">
                                    <button data-ng-click="contacts.saveEdit(contact, 'email')"
                                            class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button data-ng-click="contacts.toggleEdit(contact, 'email')"
                                            class="btn btn-xs btn-warning"><i class="fa fa-times"></i></button>
                            </span>
                        </td>

                        <!-- Phone -->
                        <td>
                            <span data-ng-hide="contact.editPhone"
                                  data-ng-click="contacts.toggleEdit(contact, 'phone')">{{ contact.phone }}</span>

                            <span data-ng-show="contact.editPhone">
                                    <input data-ng-model="contact.phone"
                                           name="phone" title="phone" type="text" value="{{ contact.phone }}">
                                    <button data-ng-click="contacts.saveEdit(contact, 'phone')"
                                                class="btn btn-xs btn-success"><i class="fa fa-check"></i></button>
                                    <button data-ng-click="contacts.toggleEdit(contact, 'phone')"
                                            class="btn btn-xs btn-warning"><i class="fa fa-times"></i></button>
                            </span>
                        </td>

                        <td>{{contact.updated_at | prettyDate }}</td>
                        <td data-target="#list-modal" data-toggle="modal"
                            data-ng-click="contacts.setSelected(contact); contacts.initContactListModal(lists.contactLists)">
                            {{contacts.contactListPreviewFor(contact)}}

                            <span data-ng-if="contact.contact_lists.length === 0">
                                <button class="btn btn-info btn-xs"><i class="fa fa-plus"></i></button>
                            </span>

                        </td>
                        <td>
                            <button data-ng-click ="contacts.toggleContactInTrash(contact)"
                                    class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i>

                                Delete Contact
                            </button>
                        </td>
                    </tr>
                    <tr  data-ng-if="results.length == 0">
                        <td><strong>No results found.</strong></td>
                    </tr>
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

        <!-- Contact List Modal -->
        <div id="list-modal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Contacts Lists for {{contacts.selectedContact.first_name + ' ' + contacts.selectedContact.last_name }}</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table-condensed col-xs-6">
                                <tr data-ng-repeat="contactList in contacts.selectedContact.contact_lists" class="row">
                                    <td class="col-xs-6">{{contactList.title}}</td>
                                    <td class="col-xs-6">
                                        <button data-ng-click="contacts.removeFromContactList(contactList.id)" class="btn btn-danger btn-xs">
                                            <i class="fa fa-times-circle"> </i>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                        </table>
                        <div class="container">
                            <div data-ng-controller="ContactListsController as lists"
                                 class="contact-list-selector col-xs-2"
                                 data-ng-model="contacts.editedListIds">


                                <div class="contactListSelect">
                                    <div class="list-input">
                                        <span>
                                            <input data-ng-model="q"
                                                     style="width:218px;"
                                                     type="text"
                                                     title="add-contact-list" placeholder="Search for Contact-Lists"
                                                     required>
                                        </span>
                                    </div>
                                    <div class="lists2">
                                        <div data-ng-repeat="contactList in contacts.availableLists | filter:q as contactlist"
                                             data-ng-hide="contactList.hide === true"
                                             data-ng-click="contacts.toggleEditedListId(contactList.id, lists.contactLists);
                                                             lists.toggleSelect(contactList);
                                                             contacts.toggleAddSelectedContactToList(contactList)"
                                             class="col-xs-12"

                                             data-ng-class="{ selected : contactList.selected }">
                                            {{ contactList.title }}
                                        </div>
                                        <div data-ng-if="contactlist.length === 0" data-ng-model="lists.newList">
                                            <strong data-ng-click="lists.saveContactList(q); contacts.toggleAddListId(lists.contactLists.length + 1)">
                                                "{{q}}" could not be found. Click to add.</strong>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-success"
                                data-dismiss="modal"
                                data-ng-click="contacts.saveEdit(contacts.selectedContact, 'contact_lists')">
                            <i class="fa fa-pencil"></i> Update Contact</button>
                        <button data-ng-click="contacts.cancelListModal()" type="button"
                                class="btn btn-default"
                                data-dismiss="modal">
                            <i class="fa fa-times-circle-o"></i>
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </div>
</div>


        <script src="/build/js/deps.js"></script>
        <script src="/build/js/app.js"></script>


</body>
</html>