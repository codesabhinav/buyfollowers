import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Dot, Star } from "lucide-react";
import { useRef } from "react";

const detailsTestimonials = [
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

const DetailsTestimonials = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full flex flex-col items-center justify-center"
            >
                <CarouselContent>
                    {detailsTestimonials.map((item, index) => (
                        <CarouselItem key={index} className="h-[523px]">
                            <div className="bg-[#FFFFFF] shadow-md rounded-3xl p-12 relative w-full flex flex-col justify-center items-center">
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
                <div className="flex items-center gap-2">
                    <ChevronLeft className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    <ChevronRight className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                </div>
            </Carousel>
        </>
    );
};

export default DetailsTestimonials;
