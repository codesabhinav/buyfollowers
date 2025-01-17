<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = [
        'name',
        'path',
    ];

    protected $hidden = ['name','created_at', 'updated_at','deleted_at'];
}
