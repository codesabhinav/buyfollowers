
<?php

use App\Models\Setting;
use Illuminate\Support\Facades\Storage;

function checkFileExist($path)
{
    return Storage::exists($path);
}

function getFilePath($path)
{
    return asset('storage/' . $path);
}

function setEnvironmentVariable($key, $value)
{
    $currentSetting = Setting::where('key', $key)->first();
    if (!$currentSetting || $currentSetting->value !== $value) {
        Setting::updateOrCreate([
            "key" => $key,
        ], [
            "value" => $value,
        ]);
    }
    return null;
}

function getEnvironmentVariable($key)
{
    $environmentVariable = Setting::where('key', $key)->first();
    if ($environmentVariable) {
        return $environmentVariable->value;
    }
    return null;
}

function getSiteLogo()
{
    $logo = asset('assets/images/buy_followers_logo.svg');
    if (getEnvironmentVariable('logo')) {
        $logo = asset('storage/' . getEnvironmentVariable('logo'));
    }
    return $logo;
}
