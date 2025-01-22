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
                    'free_max' => ['nullable'],
                    'high_quality_rate' => ['nullable'],
                    'active_rate' => ['nullable'],
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

            if ($request->service_type == ProductEnum::FREE) {
                if ($request->has('free_max') && $request->free_max !== null) {
                    $data['max'] = $request->free_max;
                }
                $data['rate'] = 0;
                $data['min'] = 0;
                $data['high_quality_rate'] = 0;
                $data['active_rate'] = 0;
            } elseif ($request->service_type == ProductEnum::HIGH_QUALITY || $request->service_type == ProductEnum::ACTIVE) {
                $ratePercentage = $request->rate_percentage / 100;
                if ($request->service_type == ProductEnum::HIGH_QUALITY) {
                    $data['high_quality_rate'] = (int)round($data['rate'] * (1 + $ratePercentage));
                    $data['active_rate'] = (int)$data['rate'];
                }

                if ($request->service_type == ProductEnum::ACTIVE) {
                    $data['active_rate'] = (int)round($data['rate'] * (1 + $ratePercentage));
                    $data['high_quality_rate'] = (int)$data['rate'];
                }
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
