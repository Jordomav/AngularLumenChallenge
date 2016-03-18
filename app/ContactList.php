<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class ContactList extends Model
{
    protected $database = 'contact_lists';

    public function contacts()
    {
        return $this->belongsToMany(Contact::class)->withTimestamps();
    }
}
