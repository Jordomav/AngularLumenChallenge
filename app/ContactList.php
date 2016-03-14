<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class ContactLists extends Model
{

    public function contactlist(){
        return $this->hasMany(Contact::class);
    }

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
