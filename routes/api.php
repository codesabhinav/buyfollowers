<?php

use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\GoogleAuthController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SettingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:api'])->group(function () {
    Route::get('my-profile', [GoogleAuthController::class, 'myProfile']);
    Route::post('logout', [GoogleAuthController::class, 'logout']);
});

Route::get('/settings', [SettingController::class, 'index']);
Route::get('/navbar', [SettingController::class, 'navbar']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{blog}', [BlogController::class, 'show']);

Route::post('/login', [GoogleAuthController::class, 'login']);
Route::post('/signup', [GoogleAuthController::class, 'signup']);
Route::post('/forgot-password', [GoogleAuthController::class, 'forgotPassword']);
Route::post('/otp-verify', [GoogleAuthController::class, 'otpVerify']);
Route::post('/change-password', [GoogleAuthController::class, 'changePassword']);