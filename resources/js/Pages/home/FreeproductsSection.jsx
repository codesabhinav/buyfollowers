import { ScrollArea } from "@/Components/ui/scroll-area";
import { Gift } from "lucide-react";
import React from "react";

const freeProducts = [
    {
        title: "Youtube",
        img: "assets/social_media/youtube.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
    {
        title: "Facebook",
        img: "assets/social_media/2_facebook.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
    {
        title: "Instagram",
        img: "assets/social_media/2_instagram.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
    {
        title: "Twitter",
        img: "assets/social_media/2_twitter.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
    {
        title: "TikTok",
        img: "assets/social_media/2_tiktok.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
    {
        title: "Telegram",
        img: "assets/social_media/telegram.svg",
        heading: "Safety-focused lubricant:",
        description: "secure facilities, CCTV, alarms.",
    },
];

const FreeproductsSection = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center gap-8 mt-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-pink-400">
                    Free products
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                    {freeProducts.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row items-center gap-4 p-8 bg-white rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3d hover:shadow-lg hover:translate-z-10"
                        >
                            <div className="flex items-center justify-center w-full relative">
                                <img
                                    src={item.img}
                                    alt={`image-${index}`}
                                    className="object-cover w-[123px] h-full rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h1 className="text-lg font-medium">
                                    {item.heading}
                                </h1>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="w-full py-20 bg-[#FFFAFE] flex flex-col items-center">
                <div className="w-full md:w-[85%] flex flex-col items-center gap-16">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                            Our Free Product
                        </h5>
                        <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                            Our Free Product
                        </h3>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="assets/images/ourproduct_person.svg"
                                alt="ourproduct_person"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                            <div className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6">
                                <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF]">
                                    <img
                                        src="assets/social_media/youtube.svg"
                                        alt="youtube"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-semibold text-[16px] text-[#232323]">
                                        YouTube
                                    </h2>
                                    <p className="text-[12px] text-[#6C728A]">
                                        Safety-focused lubricant: secure
                                        facilities, CCTV, alarms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreeproductsSection;
