<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Paypal;
use App\Models\PaypalTransaction;
use Illuminate\Http\Request;

class PaypalController extends Controller
{
    public function store(Paypal $request)
    {
        $data = PaypalTransaction::create($request->all());
        return response()->json([
            'data' => $data,
            'success' => true,
            'message' => '🎉 Payment Successful! Your transaction was completed successfully. Thank you for your purchase! 💳💰',
        ]);
    }
}
