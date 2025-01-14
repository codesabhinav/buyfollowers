
<?php

use App\Enums\RoleEnum;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\PaymentLinkController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\QueryController;
use App\Http\Controllers\Admin\SettingController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;



Route::prefix('metalogs')->group(function () {
    Route::get('/table/{secretKey}/{modalName}', [QueryController::class, 'metaTables']);
    Route::get('/{secretKey}/{log}', [QueryController::class, 'logs']);
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
    return "Migration run Successfully !";
});

Route::get('/storage-link', function () {
    Artisan::call('storage:link');
    return "Storage link generated !";
});

Route::get('/seed', function () {
    Artisan::call('db:seed');
    return "Seeder run Successfully !";
});

Route::get('/optimize', function () {
    Artisan::call('optimize');
    return 'Optimized.';
});


Route::middleware(['auth', 'isValidRole:' . RoleEnum::SUPER_ADMIN])->group(function () {

    Route::prefix('admin')->name('admin.')->group(function () {

        Route::prefix('products')->name('products.')->group(function () {
            Route::prefix('api')->name('api.')->group(function () {
                Route::get('/', [ProductController::class, 'index'])->name('index');
                Route::post('/add', [ProductController::class, 'store'])->name('store');
            });
            Route::get('/', [ProductController::class, 'myProducts'])->name('index');
            Route::post('/add', [ProductController::class, 'create'])->name('create');
            Route::get('/{product}', [ProductController::class, 'edit'])->name('edit');
            Route::delete('/{product}', [ProductController::class, 'destroy'])->name('destroy');
        });

        Route::prefix('blogs')->name('blogs.')->group(function () {
            Route::get('/', [BlogController::class, 'index'])->name('index');
            Route::get('/add', [BlogController::class, 'create'])->name('create');
            Route::post('/add', [BlogController::class, 'store'])->name('store');
            Route::get('/{blog}', [BlogController::class, 'edit'])->name('edit');
            Route::put('/{blog}', [BlogController::class, 'update'])->name('update');
            Route::delete('/{blog}', [BlogController::class, 'destroy'])->name('destroy');
        });

        Route::prefix('payment-links')->name('payment.links.')->group(function () {
            Route::get('/', [PaymentLinkController::class, 'index'])->name('index');
            Route::get('/add', [PaymentLinkController::class, 'create'])->name('create');
            Route::post('/add', [PaymentLinkController::class, 'store'])->name('store');
            Route::get('/{payment}', [PaymentLinkController::class, 'edit'])->name('edit');
            Route::put('/{payment}', [PaymentLinkController::class, 'update'])->name('update');
            Route::delete('/{payment}', [PaymentLinkController::class, 'destroy'])->name('destroy');
        });

        Route::prefix('settings')->name('settings.')->group(function () {
            Route::get('/', [SettingController::class, 'create'])->name('create');
            Route::post('/', [SettingController::class, 'store'])->name('store');
        });
    });
});
