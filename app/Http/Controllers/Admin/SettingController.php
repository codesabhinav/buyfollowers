<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function create()
    {
        return view('admin.settings.create');
    }
    public function store(Request $request)
    {
        try {
            foreach ($request->except('_token') as $key => $value) {

                if ($key == 'logo' && $request->hasFile('logo')) {
                    $mediaPath = Storage::put('media', $request->file('logo'));
                    setEnvironmentVariable($key, $mediaPath);
                } else {
                    setEnvironmentVariable($key, $value);
                }
            }
            return redirect()->back()->with('success', 'Setting Added');
        } catch (Exception $e) {
            Log::error("Settings"  . $e->getMessage());
            return redirect()->back()->with(['error' => $e->getMessage()]);
        }
    }
}
