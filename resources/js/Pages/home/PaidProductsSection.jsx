import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from '../../Helper/api';
import React, { useState, useEffect } from "react";

const PaidProductsSection = () => {
    const [paidProducts, setPaidProducts] = useState([]);
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await products(['2', '3']);
                if (response && Array.isArray(response.data)) {
                    setPaidProducts(response.data);
                } else {
                    console.error("Fetched data is not an array", response);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            {/* <div className="flex flex-col items-center gap-8 mt-8">
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
            </div> */}

            <div className="w-full md:w-[85%] flex flex-col items-center gap-16 py-20 px-4">
                <div className="flex flex-col gap-2 items-center">
                    <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                        Our Paid Product
                    </h5>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                        Our Paid Product
                    </h3>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="flex flex-col items-center justify-center"
                >
                    <CarouselContent>
                        {paidProducts.length > 0 ? (
                            paidProducts.map((product) => (
                                <CarouselItem
                                    key={product.id}
                                    className="md:basis-1/3 lg:basis-1/4 h-72"
                                >
                                    <div className="flex flex-col items-center relative">
                                        <img
                                            src={product.image.path}
                                            alt={product.name}
                                            className="w-24 h-115px object-center absolute top-12 left-1/2"
                                            style={{
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        />
                                        <div className="p-4 mt-11 border border-[#F2F2F2] rounded-xl shadow-lg flex flex-col items-center justify-center gap-2">
                                            <h2 className="text-xl font-semibold text-center mt-12">
                                                {product.name.split('|')[0]}
                                            </h2>
                                            <p className="text-center text-sm text-gray-600">
                                                {product.name.split('|').slice(1).join(' | ')}
                                            </p>
                                            <a
                                                href={product.href}
                                                className="w-fit py-2 px-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full transition-all cursor-pointer"
                                            >
                                                Buy now
                                            </a>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                    </CarouselContent>
                    <div className="flex items-center gap-2">
                        <ChevronLeft className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                        <ChevronRight className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default PaidProductsSection;
