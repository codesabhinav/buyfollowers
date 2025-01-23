import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paymentLinks } from "../../../Helper/api.js";
import { Label } from "@/Components/ui/label.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { AtSign, FilePen, Heart } from "lucide-react";
import { Button } from "@/Components/ui/button.jsx";
import CheckoutSlider from "./CheckoutSlider.jsx";

const Checkout = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const quantity = queryParams.get("quantity");
    const rate = queryParams.get("rate");
    const discount = queryParams.get("discount");
    const name = queryParams.get("name");
    const service = queryParams.get("service");

    const [paymentStatus, setPaymentStatus] = useState(null);
    const [clientId, setClientId] = useState(null);
    const [amount, setAmount] = useState("1");
    const [showSlide, setShowSlide] = useState(false);

    useEffect(() => {
        const fetchClientId = async () => {
            const data = await paymentLinks("Paypal");
            if (data && data.client_id) {
                setClientId(data.client_id);
            } else {
                console.error("No client_id found in the response");
            }
        };

        fetchClientId();
    }, []);

    const handleApprove = (data, actions) => {
        return actions.order
            .capture()
            .then((details) => {
                console.log("Payment successful:", details);
                setPaymentStatus("Payment Successful");
            })
            .catch((error) => {
                console.error("Payment error:", error);
                setPaymentStatus("Payment Failed");
            });
    };

    return (
        <div className="flex flex-col justify-center items-center gap-12 w-full">
            <div className="flex items-center justify-center w-full">
                <div className="p-8 shadow-xl bg-white border border-gray-400/50 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
                    <div className="flex flex-col gap-8 py-6">
                        <div className="flex flex-col items-center w-full">
                            <div className="flex flex-col items-center justify-center w-full gap-1">
                                <label className="block text-4xl text-gray-600 font-semibold pb-2">
                                    {name}
                                </label>
                                <div className="relative w-full">
                                    <Input
                                        type="text"
                                        placeholder="Enter link"
                                        className="mt-2 pl-8 border rounded-md w-full"
                                    />
                                    <span className="absolute top-0 left-2 translate-y-1/2 text-pink-500 font-semibold text-xl">
                                        @
                                    </span>
                                </div>
                                <span className="text-xs text-gray-500 text-start w-full">
                                    {name} Username (No @ Symbol)
                                </span>
                            </div>

                            <div className="flex flex-col justify-between gap-2 mt-6 w-full">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col items-start gap-2">
                                        <span className="flex items-center gap-2">
                                            <Heart className="fill-red-600 stroke-red-600 size-4" />
                                            <span>{quantity}</span>
                                        </span>

                                        <span className="px-2 py-0.5 rounded-md bg-pink-400 text-sm text-white">
                                            {name}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <span className="text-black font-semibold flex items-center gap-1">
                                            ${rate}
                                            <span className="line-through text-red-500 font-normal">
                                                ${discount}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full gap-2 mt-8">
                                    <a
                                        href="#"
                                        className="bg-[#D52E9C] p-2 w-full rounded-xl text-white font-semibold text-center transition-all duration-500 hover:scale-105 ease-in-out"
                                    >
                                        Pay now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block w-full">
                    <img
                        src="assets/images/checkOut1.jpg"
                        alt="Side Image"
                        className="w-full h-[600px] object-contain mix-blend-darken"
                    />
                </div>
            </div>

            {clientId ? (
                <PayPalScriptProvider options={{ "client-id": clientId }}>
                    <PayPalButtons
                        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: amount,
                                            currency_code: "USD",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={handleApprove}
                    />
                </PayPalScriptProvider>
            ) : (
                <p>Loading PayPal...</p>
            )}

            {paymentStatus && <div>{paymentStatus}</div>}
        </div>
    );
};

export default Checkout;
