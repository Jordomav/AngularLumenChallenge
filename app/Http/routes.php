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
$app->post('soft-delete', 'ContactsController@toggleSoftDelete');
$app->post('delete-contacts', 'ContactsController@deleteContacts');

$app->get('get-contact-lists', 'ContactListsController@index');
$app->post('save-contact-list', 'ContactListsController@store');
$app->post('retitle-contact-list', 'ContactListsController@retitle');
$app->post('delete-contact-list', 'ContactListsController@delete');
