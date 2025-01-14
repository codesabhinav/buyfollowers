import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Dot, Star } from "lucide-react";
import { useRef } from "react";

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
    const plugin = useRef(
        Autoplay({ delay: 4000000, stopOnInteraction: true })
    );

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-2"
            >
                <div className="flex flex-row md:flex-col items-center gap-2">
                    <span className="bg-[#D52E9C] size-4 rounded-full cursor-pointer border border-[#D52E9C] ring-2 ring-offset-1 ring-[#D52E9C]"></span>
                    <span className="bg-[#F2F2F2] size-6 rounded-full cursor-pointer"></span>
                    <span className="bg-[#F2F2F2] size-6 rounded-full cursor-pointer"></span>
                    <span className="bg-[#F2F2F2] size-6 rounded-full cursor-pointer"></span>
                </div>

                <CarouselContent className="h-[534px] sm:h-[434px] md:h-[534px] lg:h-[453px]">
                    {userTestimonials.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="h-[534px] md:basis-1/2"
                        >
                            <div className="bg-[#FFFFFF] shadow-md border border-[#EDEDED] rounded-3xl p-12 relative w-full flex flex-col justify-center items-center">
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
            </Carousel>
        </>
    );
};

export default UserTestimonials;
