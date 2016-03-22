<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;
use DB;
use \App\Contact;

class ContactsController extends BaseController
{
    public function index()
    {
        $contacts = Contact::all();
        $contactsWithLists = new Collection;
        foreach ($contacts as $contact) {
            $contact->ContactLists;
            $contactsWithLists->add($contact);
        }
        return $contactsWithLists;
    }

    public function store(Request $request)
    {

        $contact = new Contact;

        $contact->first_name = $request->first_name;
        $contact->last_name = $request->last_name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;

        $contact->save();

        if ($request->lists) {
            $contact->contactLists()->attach($request->lists);
            $contact->save();
        }
    }

    public function toggleSoftDelete(Request $request)
    {
        $contact = Contact::find($request->id);
        $contact->intrash = !($contact->intrash);
        $contact->save();
    }

    public function update(Request $request)
    {
//        $contact = Contact::find($request->id);
//        $contact->update($request->all());
        $contact = Contact::find($request->id);
        $contact->first_name = $request->first_name;
        $contact->last_name = $request->last_name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->save();

    }

    public function deleteContacts()
    {
        DB::table('contacts')->where('intrash', '1')->delete();
    }
}
