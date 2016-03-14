<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Symfony\Component\HttpFoundation\Request;
use DB;
use \App\Contact;

class ContactsController extends BaseController
{
public function store(Request $request){
    $contact = new Contact;
    $contact->first_name = $request->first_name;
    $contact->last_name = $request->last_name;
    $contact->email = $request->email;
    $contact->phone = $request->phone;
    $contact->save();
}
}
