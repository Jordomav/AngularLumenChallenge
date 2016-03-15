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

        <h1>Contacts</h1>
        <hr>
            <div data-ng-app="contactsApp" data-ng-controller="ContactsController as contacts">

                    <div class="row">
                        <div class="col-xs-12">

                            <h4>Create a contact</h4>

                            <form name="addContactForm" class="form-inline">

                                    <input name="first_name"
                                           data-ng-model="contacts.firstName"
                                           type="text"
                                           placeholder="First Name"
                                           class="form-control">

                                    <input name="last_name"
                                           data-ng-model="contacts.lastName"
                                           type="text"
                                           placeholder="Last Name"
                                           class="form-control">

                                    <input name="email"
                                           data-ng-model="contacts.email"
                                           type="text"
                                           placeholder="Email"
                                           class="form-control">

                                    <input name="phone"
                                           data-ng-model="contacts.phone"
                                           type="text"
                                           placeholder="Phone"
                                           class="form-control">

                                    <select multiple class="form-control" style="width: 200px;">
                                        <option>Friend</option>
                                        <option>Family</option>
                                        <option>Co-Worker</option>

                                    </select>

                                    <button data-ng-click="contacts.addContact()" class="btn btn-success">
                                        <i class="fa fa-user-plus"></i>
                                           Add
                                    </button>

                            </form>
                        </div>
                    </div>



                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date Added</th>
                        </tr>
                        <tr data-ng-repeat="contact in contacts.contacts" data-ng-hide="contact.inTrash" class="contact">
                            <td>{{contact.first_name + ' ' + contact.last_name}}</td>
                            <td>{{contact.email}}</td>
                            <td>{{contact.phone}}</td>
                            <td>{{contact.created_at}}</td>
                            <td>
                                <button data-ng-click ="contacts.moveContactToTrash(contact)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i> Delete Contact</button>
                            </td>
                        </tr>
                        </thead>
                        </table>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-danger btn-md" data-toggle="modal" data-target="#myModal"><i class="fa fa-trash"></i> Trash</button>
                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Trash Can</h4>
                            </div>
                            <div class="modal-body">
<!--                                SOFT DELETIONS HERE-->
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Take out the trash</button>
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