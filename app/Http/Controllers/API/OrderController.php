<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Order as OrderRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\PaginationResource;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $data = Order::where('user_id', $this->user()->id)->paginate($perPage);
        if ($data->isEmpty()) {
            return response()->json([
                'success'=>false, 
                'meesage'=>'No data found'
            ],404);
        }
        $orders = OrderResource::collection($data);
        return response()->json(PaginationResource::formatPaginationResponse($data, $orders));
    }

    public function store(OrderRequest $request)
    {
        $data = Order::create($request->all());
        return response()->json([
           'data'=> new OrderResource($data),
           'success' => true,
            'message' => '🎉 Congratulations! Your order has been completed successfully. 🚀' .
                'Order ID: ' . $data['order_id'] . " " .
                'Thank you for choosing us! We hope you enjoy your purchase. 💖' .
                'For any queries, feel free to reach out to our support team. 😊'
        ], 200);
    }
}
