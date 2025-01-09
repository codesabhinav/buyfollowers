import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

const paidProducts = [
    {
        image: "assets/social_media/Facebook.png",
        title: "Facebook",
        description: "Boost your Facebook presence with real followers.",
        oldAmount: "$200",
        newAmount: "$150",
    },
    {
        image: "assets/social_media/Instagram.png",
        title: "Facebook",
        description: "Grow your Facebook audience with high-quality services.",
        oldAmount: "$220",
        newAmount: "$170",
    },
    {
        image: "assets/social_media/Twitter.png",
        title: "Facebook",
        description: "Improve your Facebook engagement with authentic likes.",
        oldAmount: "$250",
        newAmount: "$200",
    },
    {
        image: "assets/social_media/Snapchat.png",
        title: "Facebook",
        description: "Maximize your social reach on Facebook.",
        oldAmount: "$300",
        newAmount: "$250",
    },
    {
        image: "assets/social_media/YouTube.png",
        title: "Facebook",
        description: "Improve your Facebook engagement with authentic likes.",
        oldAmount: "$250",
        newAmount: "$200",
    },
    {
        image: "assets/social_media/WhatsApp.png",
        title: "Facebook",
        description: "Maximize your social reach on Facebook.",
        oldAmount: "$300",
        newAmount: "$250",
    },
];

const PaidProductsSection = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <>
            <div className="flex flex-col items-center gap-8 mt-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-pink-400">
                    Paid products
                </h3>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {paidProducts.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/3 lg:basis-1/4"
                            >
                                <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-xl flex flex-col items-center p-4">
                                    <div className="w-28 mix-blend-darken">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-center mb-2">
                                            {item.title}
                                        </h2>
                                        <p className="text-center text-sm text-gray-600 mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex justify-center items-center gap-2 mb-4">
                                            <span className="text-lg text-gray-400 line-through">
                                                {item.oldAmount}
                                            </span>
                                            <span className="text-xl font-semibold text-green-600">
                                                {item.newAmount}
                                            </span>
                                        </div>
                                        <button className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-all">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -left-4" />
                    <CarouselNext className="absolute top-1/2 -right-4" />
                </Carousel>
            </div>
        </>
    );
};

export default PaidProductsSection;
