import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const blockContnet = [
    {
        image: "assets/social_media/facebook.svg",
        title: "Facebook",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/instagram.svg",
        title: "Instagram",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/tiktok.svg",
        title: "Tiktok",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/twitter.svg",
        title: "Twitter",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/facebook.svg",
        title: "Facebook",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/instagram.svg",
        title: "Instagram",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/tiktok.svg",
        title: "Tiktok",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/social_media/twitter.svg",
        title: "Twitter",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
];

const BlogSection = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <>
            <div className="w-full py-20 bg-[#FFFAFE] flex flex-col items-center">
                <div className="w-full md:w-[85%] flex flex-col items-center gap-16 py-20">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                            Our Blog
                        </h5>
                        <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                            Our Blog
                        </h3>
                    </div>

                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full flex flex-col items-center justify-center"
                    >
                        <CarouselContent>
                            {blockContnet.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/3 lg:basis-1/4 h-72"
                                >
                                    <div className="flex flex-col items-center relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-24 h-full object-center absolute top-12 left-1/2"
                                            style={{
                                                transform:
                                                    "translate(-50%, -50%)",
                                            }}
                                        />
                                        <div className="p-4 mt-11 border border-[#F2F2F2] rounded-xl shadow-lg flex flex-col items-center justify-center gap-2">
                                            <h2 className="text-xl font-semibold text-center mt-12">
                                                {item.title}
                                            </h2>
                                            <p className="text-center text-sm text-gray-600">
                                                {item.description}
                                            </p>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-lg text-gray-400 line-through">
                                                    {item.oldAmount}
                                                </span>
                                                <span className="text-xl font-semibold text-green-600">
                                                    {item.newAmount}
                                                </span>
                                            </div>
                                            <button className="w-fit py-2 px-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full transition-all">
                                                Buy now
                                            </button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious className="" />
                    <CarouselNext className="" /> */}
                        <div className="flex items-center gap-2">
                            <ChevronLeft className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                            <ChevronRight className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default BlogSection;
