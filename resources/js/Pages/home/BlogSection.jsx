import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const blockContent = [
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        image: "assets/images/rectangle_blog_bg.png",
        title: "Safety and Security",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
];

const BlogSection = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="w-full bg-[#FFFAFE] flex flex-col items-center">
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
                        slidesToScroll: 1,
                    }}
                    className="w-full flex flex-col items-center justify-center gap-12"
                >
                    <CarouselContent>
                        {blockContent.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/4 basis-full flex-shrink-0"
                            >
                                <div className="border border-[#EDEDED] rounded-lg relative">
                                    <div className="w-full">
                                        <img
                                            src={item.image}
                                            alt="rectangle_blog_bg"
                                            className="w-full"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 rounded-b-lg p-4">
                                        <div className="absolute bottom-[0px] left-0 z-10 w-full">
                                            <img
                                                src="assets/images/rectangle_blog.png"
                                                alt="rectangle_blog.png"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="absolute top-0 left-[55%] transform -translate-y-[65%] z-30">
                                            <img
                                                src="assets/images/youtube_blog.png"
                                                alt="2_youtube"
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <div className="z-20 relative top-0 w-[75%]">
                                            <h1 className="text-[#232323] text-[16px] font-bold">
                                                {item.title}
                                            </h1>
                                            <p className="text-[#6C728A] mt-1 mb-8 text-xs">
                                                {item.heading}{" "}
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex items-center gap-2">
                        <ChevronLeft className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                        <ChevronRight className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default BlogSection;
