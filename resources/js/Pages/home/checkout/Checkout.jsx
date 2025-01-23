import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paymentLinks } from "../../../Helper/api.js";
import { Label } from "@/Components/ui/label.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { AtSign, FilePen, Heart } from "lucide-react";
import { Button } from "@/Components/ui/button.jsx";
import { getUserDetails, makePayment } from "../../../Helper/api.js";

const Checkout = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const quantity = queryParams.get("quantity");
    const rate = queryParams.get("rate");
    const discount = queryParams.get("discount");
    const name = queryParams.get("name");
    const productId = queryParams.get("id");
    const service = queryParams.get("service");

    const [paymentStatus, setPaymentStatus] = useState(null);
    const [userId, setUserId] = useState(null);
    const [clientId, setClientId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetails();
                if (response && response.data.id) {
                    setUserId(response.data.id);
                    setUserEmail(response.data.email);
                } else {
                    throw (error)
                }
            } catch (error) {
                throw (error)
            }
        };

        fetchUserDetails();
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

    const handleApprove = async (data, actions) => {
        try {
            const details = await actions.order.capture();
            console.log("Payment successful:", details);

            const paymentData = {
                user_id: userId,  
                product_id: productId, 
                quantity: quantity,  
                order_id: data.orderID,  
                payer_id: details.payer.payer_id,  
                payment_id: details.id,  
                status: "completed", 
                amount: rate,  
                currency: "USD", 
                payer_email: userEmail,  
            };

            const response = await makePayment(paymentData);
            if (response.success) {
                setPaymentStatus("Payment Successful");
            } else {
                setPaymentStatus("Payment Failed");
            }
        } catch (error) {
            console.error("Payment error:", error);
            setPaymentStatus("Payment Failed");
        }
    };

    return (
        <>
            <div className="w-full flex items-center justify-center lg:justify-between gap-2">
                <div className="flex flex-col items-center gap-2 shadow-xl bg-white border border-gray-400/50 rounded-xl md:w-1/2 lg:w-[45%] p-8 mb-8 lg:mb-0">
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

                    <div className="flex flex-col gap-12 mt-6 w-full">
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
                        {clientId ? (
                            <PayPalScriptProvider
                                options={{ "client-id": clientId }}
                            >
                                <PayPalButtons
                                    className="w-full"
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: rate,
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
                </div>

                <div className="hidden lg:block w-1/2">
                    <img
                        src="assets/images/checkOut1-remove-bg-io.png"
                        alt="Side Image"
                        className="w-full h-[623px] object-contain mix-"
                    />
                </div>
            </div>
        </>
    );
};

export default Checkout;
