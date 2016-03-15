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
                                <form action="" class="form-inline">

                                        <input name="first_name"
                                               type="text"
                                               placeholder="First Name"
                                               class="form-control">

                                        <input name="last_name"
                                               type="text"
                                               placeholder="Last Name"
                                               class="form-control">

                                        <input name="email"
                                               type="text"
                                               placeholder="Email"
                                               class="form-control">

                                        <input name="phone"
                                               type="text"
                                               placeholder="Phone"
                                               class="form-control">

                                        <select multiple class="form-control">
                                            <option>Friend</option>
                                            <option>Family</option>
                                            <option>Co-Worker</option>

                                        </select>
                                </form>
                        </div>
                    </div>



                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date Added</th>
                        </tr>
                        <tr data-ng-repeat="contact in contacts.contacts" class="contact">
                            <td>{{contact.id}}</td>
                            <td>{{contact.first_name + ' ' + contact.last_name}}</td>
                            <td>{{contact.email}}</td>
                            <td>{{contact.phone}}</td>
                            <td>{{contact.created_at}}</td>
                            <td>
                                <button class="btn btn-danger btn-xs"><i class="glyphicon glyphicon-trash"></i>Delete Contact</button>
                            </td>
                            <td>
                                <button class="btn btn-warning btn-xs"><i class="glyphicon glyphicon-pencil"></i>Edit Contact</button>
                            </td>
                        </tr>
                        </thead>
                </div>
            </div>



        <script src="/build/js/deps.js"></script>
        <script src="/build/js/app.js"></script>


</body>
</html>