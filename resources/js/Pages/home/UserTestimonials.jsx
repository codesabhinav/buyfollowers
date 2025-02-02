import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Dot, Star } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const userTestimonials = [
    {
        title: "Resonable",
        rating: "5",
        description:
            "I was struggling to get noticed on social media, but after using this service, my follower count increased instantly. My profile now looks more credible, and I’ve started receiving more engagement from real users. This boost has helped me reach a wider audience effortlessly",
        user_icon: "assets/images/user_1.png",
        user_name: "Mark Wood",
        user_hobbie: "Traveller",
    },
    {
        title: "Excellent",
        rating: "5",
        description:
            "At first, I was skeptical about buying followers, but this service exceeded my expectations. Not only did my follower count rise, but my organic engagement also improved. My account now looks more established, which has helped me attract more genuine followers and business opportunities",
        user_icon: "assets/images/user_2.png",
        user_name: "Aman Khan",
        user_hobbie: "Traveller",
    },
    {
        title: "Resonable",
        rating: "4",
        description:
            "As a small business owner, I needed a way to build trust and attract more customers. Increasing my follower count made my brand look more authoritative, and I started seeing more people interacting with my content. This service gave me the push I needed to grow my online presence",
        user_icon: "assets/images/user_1.png",
        user_name: "Abhinav Singh",
        user_hobbie: "Traveller",
    },
    {
        title: "Excellent",
        rating: "5",
        description:
            "Ever since I increased my followers, I’ve been getting more collaboration opportunities and brand deals. It’s amazing how having a larger audience helps with credibility. This service is perfect for influencers who want to take their social media game to the next level and thanks for the service",
        user_icon: "assets/images/user_2.png",
        user_name: "Gaurav Tiwari",
        user_hobbie: "Influencer",
    },
];

const UserTestimonials = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const swiperRef = useRef();
    const handleDotClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <>
            <div className="px-4 md:px-0">
                <div className=" flex items-center gap-4">
                    <div className="hidden md:flex flex-col justify-center gap-2 mt-4">
                        {userTestimonials.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                    selectedIndex === index
                                        ? "bg-[#D52E9C] border border-[#D52E9C] ring-2 ring-offset-1 ring-[#D52E9C]"
                                        : "bg-[#F2F2F2]"
                                }`}
                            ></span>
                        ))}
                    </div>

                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            949: {
                                slidePrev: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        navigation={true}
                        onSlideChange={(swiper) =>
                            setSelectedIndex(swiper.activeIndex)
                        }
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="h-[534px] sm:h-[434px] md:h-[534px] lg:h-[423]"
                    >
                        {userTestimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[#FFFFFF] shadow-md border border-[#EDEDED] rounded-3xl p-8 py-14 sm:py-12 sm:p-12 relative w-full flex flex-col justify-center items-center">
                                    <div className="bg-[#D52E9C] rounded-md absolute top-0 right-4 p-8">
                                        <img
                                            src="assets/images/right_comma.svg"
                                            alt="right_comma"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-lg font-semibold text-[#232323]">
                                                {item.title}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                {Array.from(
                                                    { length: 5 },
                                                    (_, i) => {
                                                        const isFilled =
                                                            i <
                                                            Number(item.rating);
                                                        return (
                                                            <Star
                                                                key={i}
                                                                className={`${
                                                                    isFilled
                                                                        ? "stroke-[#F9B524] fill-[#F9B524]"
                                                                        : "stroke-[#D1D6E3] fill-[#D1D6E3]"
                                                                } size-4`}
                                                            />
                                                        );
                                                    }
                                                )}
                                            </span>
                                        </div>
                                        <p className="text-[#6C728A]">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#D52E9C] py-2 px-2 rounded-full absolute -bottom-5">
                                        <div className="w-11 h-11">
                                            <img
                                                src={item.user_icon}
                                                alt="usericon"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col text-white pr-4">
                                            <span className="text-sm font-medium">
                                                {item.user_name}
                                            </span>
                                            <span className="text-xs font-medium">
                                                {item.user_hobbie}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="md:hidden flex flex-row justify-center gap-2 mt-4">
                    {userTestimonials.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                selectedIndex === index
                                    ? "bg-[#D52E9C] border border-[#D52E9C] ring-2 ring-offset-1 ring-[#D52E9C]"
                                    : "bg-[#F2F2F2]"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserTestimonials;
