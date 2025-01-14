<?php

use App\Enums\ProductEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('service')->nullable();
            $table->string('name')->nullable();
            $table->string('type')->nullable();
            $table->string('category')->nullable();
            $table->string('network')->nullable();
            $table->string('description')->nullable();
            $table->string('rate')->nullable();
            $table->string('rate_percentage')->nullable();
            $table->integer('min')->nullable();
            $table->integer('max')->nullable();
            $table->string('refill')->nullable();
            $table->string('canceling_is_available')->nullable();
            $table->string('cancel')->nullable();
            $table->tinyInteger('service_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
