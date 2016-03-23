<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use DB;
use \App\ContactList;
use \App\Contact;

class ContactListsController extends BaseController
{
    public function index()
    {
        return ContactList::all();
    }

    public function store(Request $request)
    {
        $list = new ContactList;
        $list->title = $request->title;
        $list->save();
    }


}
