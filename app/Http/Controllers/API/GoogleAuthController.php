<?php

namespace App\Http\Controllers\API;

use App\Enums\RoleEnum;
use App\Enums\StatusEnum;
use App\Helpers\SocialLoginHelper;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use GuzzleHttp\Exception\ClientException;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;
use Google_Client;
use Google_Service_Oauth2;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class GoogleAuthController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
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

            $token = $user->createToken('Google Login')->plainTextToken;
            return response()->json(['token' => $token, 'user' => $user]);
        }
        return response()->json(['error' => 'Invalid Google token'], 401);
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
        return $this->sendResponse($user, 200, 'User authenticated');
    }
}
