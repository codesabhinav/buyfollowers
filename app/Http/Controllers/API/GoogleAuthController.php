<?php

namespace App\Http\Controllers\API;

use App\Enums\RoleEnum;
use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Resources\UserResource;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Google_Client;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class GoogleAuthController extends Controller
{
    use AuthenticatesUsers;

    public function signup(SignupRequest $request)
    {
        $data = $request->all();
        $data['role'] = RoleEnum::USER;
        $data['status'] = StatusEnum::ACTIVE;
        $user = User::create($data);
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'data' => $user,
            'token' => $token,
            'message' => 'User registered successfully',
        ], 201);
    }
    public function login(Request $request)
    {
        $user = null;
        if ($request->has('token')) {
            $client = new Google_Client(['client_id' => getEnvironmentVariable('google_client_id')]);
            $payload = $client->verifyIdToken($request->token);

            if ($payload) {
                $user = User::updateOrCreate(
                    ['email' => $payload['email']],
                    [
                        'name' => $payload['name'],
                        'email_verified_at' => now(),
                        'password' => bcrypt(uniqid()),
                        'role' => RoleEnum::USER,
                        'status' => StatusEnum::ACTIVE,
                    ]
                );
            } else {
                return response()->json(['error' => 'Invalid Google token'], 401);
            }
        } elseif ($request->has('email') && $request->has('password')) {
            $user = User::where('email', $request->email)->first();

            if ($user) {
                if (!Hash::check($request->password, $user->password)) {
                    return response()->json(['error' => 'Incorrect password'], 401);
                }
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        }
        if ($user) {
            $token = $user->createToken('Login')->plainTextToken;
            return response()->json(['data' => new UserResource($user), 'token' => $token, 'message' => 'Login Success!']);
        }

        return response()->json(['error' => 'No valid login data provided'], 400);
    }

    public function logout()
    {
        $user = Auth::user();
        $user->tokens->each(function ($token) {
            $token->delete();
        });

        return response()->json(['message' => 'User logged out successfully'], 200);
    }


    public function getUser(): JsonResponse
    {
        $user = $this->user();
        if (!$user) {
            return response()->json(['error' => 'User not authenticated.'], 401);
        }
        return $this->sendResponse(new UserResource($user), 200, 'My Profile');
    }
}
