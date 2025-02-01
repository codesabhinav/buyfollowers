import { Input } from "@/Components/ui/input";
import { Search } from "lucide-react";
import ServicesCarousel from "./ServicesCarousel";
import { FaYoutube } from "react-icons/fa";
import PaidProductsSection from "./PaidProductsSection";
import { useState } from "react";

const FirstSection = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <div className="relative bg-transparent w-full mt-4 mb-8 xl:mt-28 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-48 px-2">
                {/* Left Section */}
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-4xl sm:text-5xl font-semibold text-white">
                        Make the Best of Your Experience With BuyFollowers
                    </h1>
                    <p className="text-base sm:text-lg text-white">
                        BuyFollowers is the one-stop destination for 100%
                        high-quality social media services. We ensure to boost
                        your online presence through genuine and authentic
                        services.
                    </p>
                </div>

                {/* Right Section with Carousel */}
                <div className="flex flex-col justify-center items-center gap-20 w-full relative mt-8 lg:mt-0">
                    <ServicesCarousel />

                    {/* Search Section */}
                    <div className="mt-6 w-full sm:w-[75%] lg:w-[85%] mx-auto">
                        <div className="relative w-full">
                            {/* Facebook Icon */}
                            <FaYoutube
                                size={32}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 border-2 border-pink-400 border-dashed rounded-full bg-transparent p-1"
                            />
                            {/* Input Field */}
                            <Input
                                type="text"
                                className="p-5 pl-14 pr-14 w-full border-none shadow-lg rounded-2xl focus:outline-none focus:ring-0 bg-white"
                                placeholder="Search here..."
                            />
                            {/* Search Icon Container */}
                            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-600 p-2 rounded-r-xl rounded-tl-[43px] rounded-bl-[12px] flex items-center justify-center w-[73px] h-[64px]">
                                <Search size={23} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstSection;
