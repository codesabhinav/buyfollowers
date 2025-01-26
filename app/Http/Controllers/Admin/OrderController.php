<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::orderByDesc('id');
        if ($request->order_id) {
            $orders->where('order_id', 'like', '%' . $request->order_id . '%');
        }
        $orders = $orders->paginate(25);
        return view('admin.orders.index', compact('orders', 'request'));
    }

    public function update(Request $request, Order $order)
    {
        $order->status = $request->input('status');
        $order->save();

        return response()->json(['message' => 'Order status updated successfully!']);
    }
}
