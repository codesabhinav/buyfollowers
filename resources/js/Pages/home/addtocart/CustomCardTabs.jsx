import { motion } from "framer-motion";
import Active from "./Active";
import HighQuality from "./HighQuality";
import { useState } from "react";

const CustomCardTabs = () => {
    const [activeTab, setActiveTab] = useState("highQuality");

    const tabTransition = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
        transition: { duration: 0.5 },
    };

    return (
        <>
            <div className="flex flex-col gap-6 w-full rounded-xl">
                <div className="shadow-md drop-shadow-sm shadow-[#FFDEF4] relative w-full rounded-xl">
                    <div className="bg-[#D52E9C] p-2 rounded-t-xl text-center">
                        <span className="text-[34px] text-white text-center">
                            Instagram Likes
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 p-1 lg:p-4 w-full">
                        <div className="flex flex-col w-full border border-[#FFEEF9] rounded-xl">
                            <div className="flex items-center gap-2 bg-white">
                                <motion.div
                                    className={`${
                                        activeTab === "highQuality"
                                            ? "bg-[#D52E9C]"
                                            : "bg-transparent"
                                    } flex flex-col items-center justify-center p-2 rounded-t-xl w-full cursor-pointer`}
                                    onClick={() => setActiveTab("highQuality")}
                                    {...tabTransition}
                                >
                                    <span
                                        className={`text-lg ${
                                            activeTab === "highQuality"
                                                ? "text-white"
                                                : "text-[#D52E9C]"
                                        } font-semibold`}
                                    >
                                        High Quality
                                    </span>
                                    <span
                                        className={`text-sm ${
                                            activeTab === "highQuality"
                                                ? "text-white"
                                                : "text-[#D52E9C]"
                                        } font-semibold`}
                                    >
                                        Instagram Likes
                                    </span>
                                </motion.div>

                                <motion.div
                                    className={`${
                                        activeTab === "active"
                                            ? "bg-[#D52E9C]"
                                            : "bg-transparent"
                                    } flex flex-col items-center justify-center p-2 rounded-t-xl w-full cursor-pointer`}
                                    onClick={() => setActiveTab("active")}
                                    {...tabTransition}
                                >
                                    <span
                                        className={`text-lg ${
                                            activeTab === "active"
                                                ? "text-white"
                                                : "text-[#D52E9C]"
                                        } font-semibold`}
                                    >
                                        Active
                                    </span>
                                    <span
                                        className={`text-sm ${
                                            activeTab === "active"
                                                ? "text-white"
                                                : "text-[#D52E9C]"
                                        } font-semibold`}
                                    >
                                        Instagram Likes
                                    </span>
                                </motion.div>
                            </div>

                            <div className="flex items-center justify-center w-full">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full"
                                >
                                    {activeTab === "highQuality" ? (
                                        <HighQuality />
                                    ) : (
                                        <Active />
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomCardTabs;
