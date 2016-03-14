<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Contact List</title>
    <link rel="stylesheet" href="/build/css/css-deps.css">
    <link rel="stylesheet" href="/build/css/app.css">

</head>

<body>
    <h1>Contacts</h1>
    <hr>
        <div data-ng-app="contactsApp" data-ng-controller="contactsCtrl">
        <!--    CREATE CONTACT MODAL-->
            <div>
                <!-- Modal -->
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Create a contact</h4>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <h3>Contacts Name:</h3>
                                        <input type="text" placeholder="First Name" class="form-control"><br>
                                        <input type="text" placeholder="Last Name" class="form-control"><br>
                                        <h3>Email:</h3>
                                        <input type="text" placeholder="Email" class="form-control"><br>
                                        <h3>Phone:</h3>
                                        <input type="text" placeholder="Phone" class="form-control"><br>
                                        <h3>Relation:</h3>
                                        <select multiple class="form-control">
                                            <option>Friend</option>
                                            <option>Family</option>
                                            <option>Co-Worker</option>

                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-default">Create Contact</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <table class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Added</th>
                        <th><h4>Select Relation:</h4>
                            <select class="form-control">
                                <option>Friend</option>
                                <option>Family</option>
                                <option>Co-Worker</option>
                            </select>
                        </th>
                        <th><button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Add Contact</button></th>
                    </tr>
                    </thead>
            </div>
        </div>


        <script src="/build/js/deps.js"></script>
        <script src="/build/js/app.js"></script>


</body>
</html>