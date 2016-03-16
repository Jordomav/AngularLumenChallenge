<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Contact extends Model
{

    protected $fillable = [
        'name', 'email', 'intrash'
    ];

    protected $hidden = [
        'password',
    ];

    public function contact(){
        return $this->hasMany(ContactLists::class);
    }

    public function contactlist()
    {
        return $this->belongsTo(ContactLists::class);
    }
}
