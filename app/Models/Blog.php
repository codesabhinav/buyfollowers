<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = ['title', 'media_id', 'tags', 'description'];

    public function image()
    {
        return $this->belongsTo(Media::class, 'media_id');
    }
}
