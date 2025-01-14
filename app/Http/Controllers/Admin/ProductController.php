<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ProductEnum;
use App\Http\Controllers\Controller;
use App\Http\Traits\MediaUpload;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    use MediaUpload;
    public function index()
    {
        return view('admin.products.index');
    }

    public function store(Request $request)
    {
        try {
        $data = $request->validate(
            [
                'service' => ['required', 'integer'],
                'name' => ['required'],
                'type' => ['required'],
                'category' => ['required'],
                'network' => ['required'],
                'description' => ['nullable'],
                'rate' => ['required'],
                'min' => ['required'],
                'max' => ['required'],
                'refill' => ['required'],
                'canceling_is_available' => ['required'],
                'logo' => ['nullable', 'image'],
                'cancel' => ['required'],
                'service_type' => ['required', 'in:' . ProductEnum::FREE . ',' . ProductEnum::HIGH_QUALITY . ',' . ProductEnum::ACTIVE],
                "rate_percentage" => [
                    "required_if:service_type," . ProductEnum::HIGH_QUALITY,
                    "required_if:service_type," . ProductEnum::ACTIVE
                ]
            ],
            [
                'rate_percentage.required_if' => 'The Rate Percentage is required when is Service is High quality or Active.'
            ]
        );

        if (isset($request->logo)) {
            $data['media_id'] = $this->upload($request->logo)->id;
        }

        Product::updateOrCreate(
            ['service' => $data['service']],
            $data
        );
        return redirect()->back()->with('success', 'Service Insert Successfully!');
    } catch (Exception $e) {
        Log::error("Store Products"  . $e->getMessage());
        return redirect()->back()->with(['error' => $e->getMessage()]);
    }
    }

    public function myProducts(Request $request)
    {
        $products = Product::orderByDesc('id');

        if ($request->name) {
            $products->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->service) {
            $products->where('service', $request->service);
        }

        $products = $products->paginate(25);
        return view('admin.my-products.index', compact('products', 'request'));
    }

    public function edit(Product $product)
    {
        return view('admin.my-products.edit', compact('product'));
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(["status" => 200, "message" => "Service Deleted"]);
    }
}
