import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paymentLinks } from "../../../Helper/api.js";
import { Label } from "@/Components/ui/label.jsx";
import { Input } from "@/Components/ui/input.jsx";
import { AtSign, FilePen, Heart } from "lucide-react";
import { Button } from "@/Components/ui/button.jsx";
import { getUserDetails, makePayment, createOrder, storeOrder, checkOrderServiceType } from "../../../Helper/api.js";

const Checkout = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const quantity = queryParams.get("quantity");
    const rate = queryParams.get("rate");
    const discount = queryParams.get("discount");
    const name = queryParams.get("name");
    const productId = queryParams.get("id");
    const service = queryParams.get("service");
    const service_type = queryParams.get("service_type");

    const [paymentStatus, setPaymentStatus] = useState(null);
    const [grabIt, setGrabIt] = useState(null);
    const [userId, setUserId] = useState(null);
    const [clientId, setClientId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const handleGrabItNowClick = async () => {
        setLoading(true);
        try {
            if (service_type === "1") {
                const checkResponse = await checkOrderServiceType(service_type);
                if (!checkResponse.success || checkResponse.message === "No data found") {
                    const orderResult = await processOrder(quantity, userId, productId, rate);
                    if (orderResult.success) {
                        setGrabIt(orderResult.message);
                        window.location.href = `/success?message=${encodeURIComponent(orderResult.message)}`;
                        return { success: true, message: orderResult.message };
                    } else {
                        setGrabIt(orderResult.message);
                        return { success: false, message: orderResult.message };
                    }
                } else {
                    setGrabIt("🚫 You are not allowed to take this for free.💸❌");
                    alert("🚫 You are not allowed to take this for free.💸❌");
                }
            }
        } catch (error) {
            return { success: false, message: error.message };
        } finally {
            setLoading(false);
        }
    };

    const processOrder = async (quantity, userId, productId, rate, transactionId = null) => {
        try {
            const link = document.querySelector('input[type="text"]').value;
            const serviceValue = service;
            const createOrderResponse = await createOrder(serviceValue, link, quantity);
            if (createOrderResponse && createOrderResponse.order) {
                const orderData = {
                    user_id: userId,
                    product_id: productId,
                    order_id: createOrderResponse.order,
                    paypal_transaction_id: transactionId || "",
                    quantity: quantity,
                    amount: rate,
                    status: 0,
                    link: link
                };

                const storeOrderResponse = await storeOrder(orderData);
                if (storeOrderResponse.success) {
                    return { success: true, message: storeOrderResponse.message };
                } else {
                    return { success: false, message: storeOrderResponse.message };
                }
            } else {
                return { success: false, message: "Failed to create order" };
            }
        } catch (error) {
            return { success: false, message: createOrderResponse.error };
        }
    };

    const handleApprove = async (data, actions) => {
        try {
            const details = await actions.order.capture();
            const paymentStatus = details.status === 'COMPLETED' ? 1 : 0;
            console.log(details);
            const paymentData = {
                user_id: userId,
                product_id: productId,
                quantity: quantity,
                order_id: data.orderID,
                payer_id: details.payer.payer_id,
                payment_id: details.id,
                status: paymentStatus,
                amount: rate,
                currency: "USD",
                payer_email: userEmail,
            };

            const response = await makePayment(paymentData);
            if (response.success) {
                const orderResult = await processOrder(quantity, userId, productId, rate, response.data.id);
                if (orderResult.success) {
                    setPaymentStatus(orderResult.message);
                    window.location.href = `/success?message=${encodeURIComponent(orderResult.message)}`;
                } else {
                    setPaymentStatus(orderResult.message);
                }
            } else {
                setPaymentStatus(orderResult.message);
            }
        } catch (error) {
            setPaymentStatus(orderResult.message);
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
                        {service_type === "1" && !loading ? (
                            <button
                                className="w-full px-4 py-2 text-white bg-[#D52E9C] hover:bg-[#f23bb5] rounded-md"
                                onClick={handleGrabItNowClick}
                                disabled={loading}
                            >
                                Grab it now! 😎
                            </button>
                        ) : service_type === "1" && loading ? (
                            <div className="flex justify-center items-center py-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                            </div>
                        ) : null}
                        {grabIt && <div className="text-center text-lg">{grabIt}</div>}
                        {service_type !== "1" && clientId ? (
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
                        ) : service_type !== "1" ? (
                            <p>Loading PayPal...</p>
                        ) : null}

                        {paymentStatus && <div className="text-center text-lg">{paymentStatus}</div>}
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
