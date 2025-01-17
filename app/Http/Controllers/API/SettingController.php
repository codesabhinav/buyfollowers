<?php

namespace App\Http\Controllers\API;

use App\Enums\ProductEnum;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\SettingResource;
use App\Models\Blog;
use App\Models\Product;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        $settings = Setting::query();
        if ($request->key) {
            $settings->where('key', 'like', '%' . $request->key . '%');
        }
        $settings = $settings->get();
        if ($settings->isEmpty()) {
            return $this->errorResponse(404, 'No data found');
        }
        return $this->sendResponse(SettingResource::collection($settings), 200, 'Settings get successfully');
    }

    public function navbar()
    {
        // Fetch paid and free products
        $paidProducts = Product::whereNot('service_type', ProductEnum::FREE)->get();
        $freeProducts = Product::where('service_type', ProductEnum::FREE)->get();

        // Fetch blogs
        $blogs = Blog::all();

        // Format the navbar data
        $navbarData = [
            [
                'id' => 1,
                'title' => 'Home',
                'href' => '/',
                'description' => 'Home.',
            ],
            [
                'id' => 2,
                'title' => 'Paid Products',
                'href' => '#',
                'description' => 'Paid Products.',
                'sub_navbarLinks' => $paidProducts->map(function ($product) {
                    return new ServiceResource($product);
                }),
            ],
            [
                'id' => 3,
                'title' => 'Free trial',
                'href' => '#',
                'description' => 'Free trial.',
                'sub_navbarLinks' => $freeProducts->map(function ($product) {
                    return new ServiceResource($product);
                }),
            ],
            [
                'id' => 4,
                'title' => 'Blog',
                'href' => '#',
                'description' => 'Blog.',
                'sub_navbarLinks' => $blogs->map(function ($blog) {
                    return new BlogResource($blog);
                }),
            ],
            [
                'id' => 5,
                'title' => 'About-us',
                'href' => 'about-us',
                'description' => 'About us',
            ],
        ];

        return $this->sendResponse($navbarData, 200, 'Navbar');
    }
}
