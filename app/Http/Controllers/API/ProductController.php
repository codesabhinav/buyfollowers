<?php

namespace App\Http\Controllers\API;

use App\Enums\ProductEnum;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::query();
        if ($request->name) {
            $products->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->service_type && is_array($request->service_type)) {
            $products->whereIn('service_type', $request->service_type);
        }

        $products = $products->get();
        if ($products->isEmpty()) {
            return $this->errorResponse(404, 'No data found');
        }

        $products->each(function ($product) {
            $product->image = $product->getImageAttribute();
        });
        
        return $this->sendResponse($products, 200, 'Paid Products get successfully');
    }

    public function show(Product $product, Request $request)
    {
        if (!$product) {
            return $this->errorResponse(404, 'No data available');
        }
        return $this->sendResponse($product, 200, 'Product retrieved successfully');
    }
}
