<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentLink extends Model
{
    protected $fillable = ['title', 'client_secret', 'client_id', 'mode'];
}
