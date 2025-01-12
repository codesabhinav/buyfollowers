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
        title: "What Clients Say About Us",
        description:
            "Our clients consistently praise us for our unparalleled expertise, unwavering commitment, and exceptional service. Their testimonials reflect a trust in our ability to deliver results, making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions. making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions.",
    },
    {
        title: "What Clients Say About Us",
        description:
            "Our clients consistently praise us for our unparalleled expertise, unwavering commitment, and exceptional service. Their testimonials reflect a trust in our ability to deliver results, making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions. making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions.",
    },
    {
        title: "What Clients Say About Us",
        description:
            "Our clients consistently praise us for our unparalleled expertise, unwavering commitment, and exceptional service. Their testimonials reflect a trust in our ability to deliver results, making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions. making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions.",
    },
    {
        title: "What Clients Say About Us",
        description:
            "Our clients consistently praise us for our unparalleled expertise, unwavering commitment, and exceptional service. Their testimonials reflect a trust in our ability to deliver results, making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions. making us their preferred choice. Discover the satisfaction our clients experience with our top-notch solutions.",
    },
];

const DetailsTestimonials = () => {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full flex flex-col items-start gap-3"
            >
                <span className="text-base sm:text-lg font-semibold text-[#D52E9C]">
                    Testimonials
                </span>

                <CarouselContent>
                    {detailsTestimonials.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <div className="relative w-full flex flex-col gap-6">
                                <h1 className="text-xl text-[#151515] font-semibold">
                                    {item.title}
                                </h1>
                                <p className="text-[#6C728A] font-medium">
                                    {item.description}
                                </p>
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
