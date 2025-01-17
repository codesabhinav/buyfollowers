<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('FrontentLayout', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//  home import
Route::get('/authentication', function () {
    return Inertia::render('Auth/AuthLayout');
});
Route::get('/forget', function () {
    return Inertia::render('Auth/Forgot');
});
Route::get('/add-cart', function () {
    return Inertia::render('home/addtocart/AddtoCartLayout');
});
Route::get('/checkout', function () {
    return Inertia::render('home/checkout/CheckoutLayout');
});
Route::get('/about-us', function () {
    return Inertia::render('home/about/AboutusLayout');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
