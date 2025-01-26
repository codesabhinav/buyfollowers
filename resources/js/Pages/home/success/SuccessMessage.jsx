import React from "react";
import "./SuccessMessage.css";
import { Button } from "@/Components/ui/button";
import { ArrowLeft } from "lucide-react";

const SuccessMessage = () => {
    return (
        <div className="h-screen flex items-center justify-center px-4">
            <div className="bg-white shadow-lg p-10 text-center border-b-4 border-pink-600 w-full md:w-5/12 flex flex-col justify-center items-center gap-8">
                <div className="animation-ctn text-center">
                    <div className="icon icon--order-success svg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="154px"
                            height="154px"
                        >
                            <g fill="none" stroke="#22AE73" strokeWidth="2">
                                <circle
                                    cx="77"
                                    cy="77"
                                    r="72"
                                    style={{
                                        strokeDasharray: "480px, 480px",
                                        strokeDashoffset: "960px",
                                    }}
                                ></circle>
                                <circle
                                    id="colored"
                                    fill="#22AE73"
                                    cx="77"
                                    cy="77"
                                    r="72"
                                    style={{
                                        strokeDasharray: "480px, 480px",
                                        strokeDashoffset: "960px",
                                    }}
                                ></circle>
                                <polyline
                                    className="st0"
                                    stroke="#fff"
                                    strokeWidth="10"
                                    points="43.5,77.8 63.7,97.9 112.2,49.4"
                                    style={{
                                        strokeDasharray: "100px, 100px",
                                        strokeDashoffset: "200px",
                                    }}
                                ></polyline>
                            </g>
                        </svg>
                    </div>
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-medium text-gray-800">
                    Your payment was successful
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                    Thank you for your payment. We will be in contact with more
                    details shortly.
                </p>

                <a
                    href="/"
                    className="p-2 rounded-lg text-white bg-pink-600 hover:bg-pink-500 flex items-center gap-2"
                >
                    <ArrowLeft />
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default SuccessMessage;
