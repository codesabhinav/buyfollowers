<?php

namespace App\Http\Controllers\Admin;

use App\Enums\PaymentLinkEnum;
use App\Http\Controllers\Controller;
use App\Models\PaymentLink;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class PaymentLinkController extends Controller
{
    public function index(Request $request)
    {
        $payments = PaymentLink::orderByDesc('id');
        if ($request->title) {
            $payments->where('title', 'like', '%' . $request->title . '%');
        }
        $payments = $payments->paginate(25);
        return view('admin.payment-links.index', compact('payments', 'request'));
    }

    public function create()
    {
        return view('admin.payment-links.add');
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'title' => ['required', 'unique:payment_links'],
                'client_secret' => ['required'],
                'client_id' => ['required'],
                'mode' => ['required', 'in:' . PaymentLinkEnum::TEST . ',' . PaymentLinkEnum::LIVE],
            ]);
            PaymentLink::create($data);
            return redirect()->route('admin.payment.links.index')->with('success', 'Payment Link Added Successfully!');
        } catch (Exception $e) {
            Log::error("Store payment links "  . $e->getMessage());
            return redirect()->back()->with(['error' => $e->getMessage()]);
        }
    }

    public function edit(PaymentLink $payment)
    {
        return view('admin.payment-links.edit', compact('payment'));
    }

    public function update(PaymentLink $payment, Request $request)
    {
        try {
            $data = $request->validate([
                'title' => ['required', Rule::unique('payment_links')->ignore($payment->id),],
                'client_secret' => ['required'],
                'client_id' => ['required'],
                'mode' => ['required', 'in:' . PaymentLinkEnum::TEST . ',' . PaymentLinkEnum::LIVE],
            ]);
            $payment->update($data);
            return redirect()->route('admin.payment.links.index')->with('success', 'Payment Link Updated Successfully!');
        } catch (Exception $e) {
            Log::error("Update Payment Link "  . $e->getMessage());
            return redirect()->back()->with(['error' => $e->getMessage()]);
        }
    }

    public function destroy(PaymentLink $payment)
    {
        $payment->delete();
        return response()->json(["status" => 200, "message" => "Payment Link Deleted"]);
    }
}
