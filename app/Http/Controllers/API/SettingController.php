<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
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
}
