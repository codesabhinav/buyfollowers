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
            "Ueniy ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon dllecomm odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.",
        user_icon: "assets/images/user_1.png",
        user_name: "Mark Wood",
        user_hobbie: "Traveller",
    },
    {
        title: "Excellent",
        rating: "4",
        description:
            "Ueniy ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon dllecomm odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.",
        user_icon: "assets/images/user_2.png",
        user_name: "Aman Khan",
        user_hobbie: "Traveller",
    },
    {
        title: "Resonable",
        rating: "3",
        description:
            "Ueniy ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon dllecomm odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.",
        user_icon: "assets/images/user_1.png",
        user_name: "Abhinav Singh",
        user_hobbie: "Traveller",
    },
    {
        title: "Excellent",
        rating: "4",
        description:
            "Ueniy ad minim veniam quis nostrud exe rcitati oen ullamco labor is nisi ut aliq uip ex ea comm odo cons equa uis aute iruoesre trud exeon dllecomm odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.odo cons equa uis aute iruoesre trud exeon dlle.",
        user_icon: "assets/images/user_2.png",
        user_name: "Gaurav Tiwari",
        user_hobbie: "Traveller",
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
            {/* <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-2 px-0"
            >
                <div className="flex flex-row md:flex-col items-center gap-2">
                    {userTestimonials.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                selectedIndex === index
                                    ? "bg-[#D52E9C] border border-[#D52E9C] ring-2 ring-offset-1 ring-[#D52E9C]"
                                    : "bg-[#F2F2F2]"
                            }`}
                        ></span>
                    ))}
                </div>

                <CarouselContent className="h-[534px] sm:h-[434px] md:h-[534px] lg:h-[453px]">
                    {userTestimonials.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="h-[534px] md:basis-1/2"
                        >
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
                                                        i < Number(item.rating);
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel> */}
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
