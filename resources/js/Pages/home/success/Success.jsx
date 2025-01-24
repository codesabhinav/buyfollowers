import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Success = () => {
    const [isTick, setIsTick] = useState(true);

    // Toggle between tick and untick every 2000ms
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTick((prevState) => !prevState);
        }, 2000); // Switch every 2000ms
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <motion.div
                className="bg-white p-8 rounded-lg shadow-xl w-80 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="mb-6"
                    animate={{ rotate: isTick ? 0 : 180 }} // Rotate on change
                    transition={{ duration: 0.5 }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 50 50"
                        className="mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <circle
                            style={{ fill: "#25AE88" }}
                            cx="25"
                            cy="25"
                            r="25"
                        />
                        <motion.polyline
                            style={{
                                fill: "none",
                                stroke: "#FFFFFF",
                                strokeWidth: 2,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }}
                            points={isTick ? "38,15 22,33 12,25" : ""} // "Tick" when isTick is true, else untick (empty path)
                            transition={{ duration: 0.5 }}
                        />
                    </motion.svg>
                </motion.div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Payment Successful!
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Your payment has been processed successfully. Thank you!
                    </p>
                </div>
                {/* Go Back Button */}
                <a
                    href="/"
                    className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-500 transition duration-300"
                >
                    Go Back to Home Page
                </a>
            </motion.div>
        </div>
    );
};

export default Success;
