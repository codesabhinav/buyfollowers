import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const carouselItems = [
    {
        title: "Youtube",
        icon: <FaYoutube />,
    },
    {
        title: "Instagram",
        icon: <FaInstagram />,
    },
    {
        title: "Facebook",
        icon: <FaFacebookF />,
    },
    {
        title: "Twitter",
        icon: <FaTwitter />,
    },
    {
        title: "TikTok",
        icon: <FaTiktok />,
    },
];

const ServicesCarousel = () => {
    // const [activeIndex, setActiveIndex] = useState(0);

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    // };
    // const handlePrevious = () => {
    //     setActiveIndex((prevIndex) =>
    //         prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    //     );
    // };

    const [positionIndexs, setPositionIndexs] = useState(0);
    const handleNext = () => {
        setPositionIndexs(
            (prevIndex) => (prevIndex + 1) % carouselItems.length
        );
    };
    const handlePrev = () => {
        setPositionIndexs(
            (prevIndex) =>
                (prevIndex - 1 + carouselItems.length) % carouselItems.length
        );
    };

    const positions = ["center", "left", "left1", "right", "right1"];
    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 4 },
        left: { x: "-50%", scale: 0.7, zIndex: 2 },
        left1: { x: "-90%", scale: 0.5, zIndex: 1 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 2 },
    };

    const handleImageClick = (e) => {
        const width = e.target.clientWidth;
        const clientWidth = e.nativeEvent.offsetX;

        if (clientWidth > width / 2) {
            handlePrev();
        } else {
            handleNext();
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full sm:w-[75%] lg:w-[85%] mt-12 lg:mt-0">
                {carouselItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial="center"
                        animate={
                            positions[
                                (positionIndexs + index) % carouselItems.length
                            ]
                        }
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ position: "absolute" }}
                        className={`flex flex-col items-center justify-center gap-3 w-[35%]`}
                        onClick={handleImageClick}
                    >
                        <span
                            className={`shadow-xl p-6 rounded-tl-xl rounded-tr-[28px] rounded-br-xl rounded-bl-[28px] border-4 backdrop-blur-2xl text-3xl ${
                                (positionIndexs + index) % carouselItems.length
                                    ? "white/45 text-white border-white/45"
                                    : "bg-custom-gradient text-white border-white"
                            }`}
                        >
                            {item.icon}
                        </span>
                        <span className="text-lg text-white font-semibold">
                            {item.title}
                        </span>
                    </motion.div>
                ))}

                <div
                    className="absolute top-12 lg:top-2 left-0 transform -translate-y-1/2 text-3xl bg-white/45 border border-dashed border-white rounded-full p-2 text-white cursor-pointer"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="size-4" />
                </div>
                <div
                    className="absolute top-12 lg:top-2 right-0 transform -translate-y-1/2 text-3xl bg-white/45 border border-dashed border-white rounded-full p-2 text-white cursor-pointer"
                    onClick={handleNext}
                >
                    <ChevronRight className="size-4" />
                </div>
            </div>
        </>
    );
};

export default ServicesCarousel;
