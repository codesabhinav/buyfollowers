<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'product' => new ProductResource($this->product),
            'order_id' => $this->order_id,
            'paypal_transaction_id' => $this->paypal_transaction_id,
            'quantity' => $this->quantity,
            'amount' => $this->amount,
            'status' => $this->status,
            'created_at' => Carbon::parse($this->created_at)->timezone('Asia/Kolkata')->format('d-m-Y'),
            'updated_at' => $this->updated_at,
        ];
    }
}
