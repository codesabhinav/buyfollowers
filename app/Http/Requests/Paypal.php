<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class Paypal extends FormRequest
{

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'message' => $validator->errors()->all()[0]
            ], 404)
        );
    }


    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' =>'required|exists:users,id',
            'product_id' =>'required|exists:products,id',
            'quantity' =>'required|integer',
            'order_id' => 'required|string',
            'payer_id' => 'required|string',
            'payment_id' => 'required|string',
            'status' => 'required|string',
            'amount' => 'required|numeric',
            'currency' => 'required|string',
            'payer_email' => 'required|email',
        ];
    }
}
