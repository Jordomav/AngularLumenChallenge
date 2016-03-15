<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});

$app->get('get-contacts', 'ContactsController@index');
$app->post('save-contact', 'ContactsController@store');
$app->post('update-contact', 'ContactsController@update');
$app->post('delete-contact', 'ContactsController@delete');
$app->post('save-contactlist', 'ContactListsController@store');
$app->post('retitle-contactlist', 'ContactListsController@retitle');
$app->post('delete-contactlist', 'ContactListsController@delete');
