import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paymentLinks } from "../../../Helper/api.js";

const Checkout = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [amount, setAmount] = useState("1"); 

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
    <div>
      <h2>Checkout</h2>

      {clientId ? (
        <PayPalScriptProvider options={{ "client-id": clientId }}>
          <PayPalButtons
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
