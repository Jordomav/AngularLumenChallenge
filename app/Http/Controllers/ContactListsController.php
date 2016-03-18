<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use DB;
use \App\ContactList;

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

    public function toggleSoftDelete(Request $request)
    {
        $contact = Contact::find($request->id);
        $contact->intrash = !($contact->intrash);
        $contact->save();
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->update($request->all());
//        The above should work but in case the bellow should work as well
//        $contact->first_name = $request->first_name;
//        $contact->last_name = $request->last_name;
//        $contact->email = $request->email;
//        $contact->phone = $request->phone;
//        $contact->save();
    }

    public function deleteContacts()
    {
        DB::table('contacts')->where('intrash', '1')->delete();
    }
}
