import { ScrollArea } from "@/Components/ui/scroll-area";
import { Gift } from "lucide-react";
import React from "react";

const freeProducts = [
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        img: "assets/social_media/Facebook.png",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        img: "assets/social_media/Instagram.png",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        img: "assets/social_media/Snapchat.png",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        img: "assets/social_media/WhatsApp.png",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        img: "assets/social_media/YouTube.png",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        img: "assets/social_media/Twitter.png",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
];

const FreeproductsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-8 mt-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-pink-400">
                    Free products
                </h3>

                {/* <ScrollArea className="w-full h-[334px]"></ScrollArea> */}
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
            </div>
        </>
    );
};

export default FreeproductsSection;
