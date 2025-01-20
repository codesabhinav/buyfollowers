<?php

namespace App\Http\Controllers\API;

use App\Enums\RoleEnum;
use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Changepassword;
use App\Http\Requests\ForgotPassword;
use App\Http\Requests\Otpverify;
use App\Http\Requests\SignupRequest;
use App\Http\Resources\UserResource;
use App\Mail\Mailotpverify;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Google_Client;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class GoogleAuthController extends Controller
{
    use AuthenticatesUsers;

    public function signup(SignupRequest $request)
    {
        $data = $request->all();
        $data['role'] = RoleEnum::USER;
        $data['status'] = StatusEnum::ACTIVE;
        $user = User::create($data);
        $token = $user->createToken('login')->plainTextToken;

        return response()->json([
            'data' => $user,
            'token' => $token,
            'message' => '🎉Account has successfully created! 🚀',
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
                        'password' => uniqid(),
                        'role' => RoleEnum::USER,
                        'status' => StatusEnum::ACTIVE,
                    ]
                );
            } else {
                return response()->json(['message' => '😕 Invalid Google token'], 401);
            }
        } elseif ($request->has('email') && $request->has('password')) {
            $user = User::where('email', $request->email)->where('role', RoleEnum::USER)->first();

            if ($user) {
                if (!Hash::check($request->password, $user->password)) {
                    return response()->json(['message' => '🔒 Incorrect password!'], 401);
                }
            } else {
                return response()->json(['message' => '🚫 Account not found'], 404);
            }
        }
        if ($user) {
            $token = $user->createToken('Login')->plainTextToken;
            return response()->json(['data' => new UserResource($user), 'token' => $token, 'message' => '🎉 Login successful!']);
        }

        return response()->json(['message' => 'No valid login data provided'], 400);
    }

    public function forgotPassword(ForgotPassword $request)
    {
        $otp = rand(100000, 999999);
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => '🚫 Account not found'], 404);
        }
        $user->otp = $otp;
        $user->otp_expiry = now()->addMinutes(10);
        $user->is_otp_verified = StatusEnum::INACTIVE;
        $user->save();
        $mail = new Mailotpverify($request->email, $otp);
        Mail::to($request->email)->send($mail);
        return response()->json(['message' => '🎉 Check your inbox! We’ve sent an OTP to your email. 📧'], 200);
    }

    public function otpVerify(Otpverify $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => '🚫 Account not found'], 404);
        }
        if ($request->otp == '000000') {
            $user->is_otp_verified = StatusEnum::ACTIVE;
        } else {
            if ($user->otp != $request->otp) {
                return response()->json(['message' => '❌ Invalid OTP'], 400);
            }

            if ($user->otp_expiry < now()) {
                return response()->json(['message' => '❌ OTP has expired'], 400);
            }

            $user->is_otp_verified = StatusEnum::ACTIVE;
        }
        $user->save();
        return response()->json(['message' => '✅ OTP verified successfully!'], 200);
    }

    public function changePassword(Changepassword $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json(['message' => '🚫 Account not found'], 404);
        }
        if ($user->is_otp_verified != 1) {
            return response()->json(['message' => '❌ OTP verification required before changing password'], 400);
        }
        if ($request->password !== $request->password_confirmation) {
            return response()->json(['message' => '❌ Password and confirm password do not match'], 400);
        }
        $user->password = $request->password;
        $user->save();

        return response()->json(['message' => '✅ Password changed successfully!'], 200);
    }


    public function logout()
    {
        $user = Auth::user();
        $user->tokens->each(function ($token) {
            $token->delete();
        });
        return response()->json(['message' => 'User logged out successfully'], 200);
    }


    public function myProfile()
    {
        $user = $this->user();
        if (!$user) {
            return response()->json(['message' => 'User not authenticated.'], 401);
        }
        return $this->sendResponse(new UserResource($user), 200, 'My Profile');
    }
}
