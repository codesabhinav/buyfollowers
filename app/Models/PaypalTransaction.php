<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaypalTransaction extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'order_id',
        'payer_id',
        'payment_id',
        'status',
        'amount',
        'currency',
        'payer_email',
        'created'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
