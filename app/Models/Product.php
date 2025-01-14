<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'service',
        'name',
        'type',
        'category',
        'network',
        'description',
        'rate',
        'rate_percentage',
        'min',
        'max',
        'refill',
        'canceling_is_available',
        'cancel',
        'service_type',
        'media_id',
    ];

    protected $casts = [
        'refill' => 'boolean',
        'canceling_is_available' => 'boolean',
        'cancel' => 'boolean',
    ];

    public function image()
    {
        return $this->belongsTo(Media::class, 'media_id');
    }

    public function setRefillAttribute($value)
    {
        $this->attributes['refill'] = (filter_var($value, FILTER_VALIDATE_BOOLEAN)) ? 1 : 0;
    }

    public function setCancelingIsAvailableAttribute($value)
    {
        $this->attributes['canceling_is_available'] = (filter_var($value, FILTER_VALIDATE_BOOLEAN)) ? 1 : 0;
    }

    public function setCancelAttribute($value)
    {
        $this->attributes['cancel'] = (filter_var($value, FILTER_VALIDATE_BOOLEAN)) ? 1 : 0;
    }
}
