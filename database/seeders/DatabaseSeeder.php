<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Enums\StatusEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::updateOrCreate([
            'email'  => 'admin@buyfollowers.cc',
        ], [
            'name'  => 'Admin',
            'password'  => Hash::make('admin@123'),
            'status'    =>  StatusEnum::ACTIVE,
            'role'    =>  RoleEnum::SUPER_ADMIN,
        ]);
    }
}
