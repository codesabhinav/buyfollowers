import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { fetchBlogs } from "../../Helper/api.js";
import React, { useState, useEffect } from "react";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const plugin = useRef(
        Autoplay({ delay: 200000000, stopOnInteraction: true })
    );
    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await fetchBlogs();
                if (response.status === 200) {
                    setBlogs(response.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        getBlogs();
    }, []);

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
                        {blogs.length > 0 ? (
                        blogs.map((item, index) => (
                            <CarouselItem
                                key={item.id}
                                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2"
                            >
                                <div
                                    className="border border-[#EDEDED] rounded-lg relative overflow-hidden w-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${item.media_id.path})`,
                                        aspectRatio: '9 / 8',
                                    }}
                                >
                                    <div className="absolute bottom-0 left-0 w-full h-full">
                                        <div className="absolute bottom-0 left-0 w-[85%] px-3 py-2 z-20">
                                            <h1 className="text-[#232323] text-[18px] md:text-[12px] lg:text-[14px] font-bold">
                                            {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
                                            </h1>
                                            <p className="text-[#6C728A] mt-1 mb-8 text-[14px] md:text-[8px] lg:text-[11px]">
                                                {item.description.length > 95 ? item.description.slice(0, 95) + "..." : item.description}
                                            </p>
                                        </div>

                                        <img
                                            src="assets/images/rectangle_blog.svg"
                                            alt="rectangle_blog"
                                            className="w-full h-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <p>No Blogs available</p>
                    )}
                    </CarouselContent>

                    <div className="flex items-center gap-2">
                        <CarouselPrevious className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                        <CarouselNext className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default BlogSection;
