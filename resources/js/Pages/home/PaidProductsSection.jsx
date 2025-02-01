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
import { products } from "../../Helper/api";
import React, { useState, useEffect } from "react";

const PaidProductsSection = ({ searchQuery, sectionRef }) => {
    const [paidProducts, setPaidProducts] = useState([]);
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await products(["2", "3"]);
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

    const filteredProducts = searchQuery
        ? paidProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : paidProducts;

    useEffect(() => {
        if (searchQuery && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchQuery]);

    return (
        <>
            <div ref={sectionRef} className="w-full md:w-[85%] flex flex-col items-center gap-16 py-20 px-4">
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
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <CarouselItem
                                    key={product.id}
                                    className="md:basis-1/3 lg:basis-1/4 h-72"
                                >
                                    <div className="flex flex-col items-center relative">
                                        <img
                                            src={product.image.path}
                                            alt={product.name}
                                            className="w-[73px] h-[73px] object-center absolute top-12 left-1/2 rounded-full border-2 border-dashed border-pink-500 p-2 bg-pink-300/20"
                                            style={{
                                                transform:
                                                    "translate(-50%, -50%)",
                                            }}
                                        />
                                        <div className="p-4 mt-12 border border-[#F2F2F2] rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 h-[12rem]">
                                            <h2 className="text-xl font-semibold text-center mt-6">
                                                {product.name.split("|")[0]}
                                            </h2>
                                            <p className="text-center text-sm text-gray-600">
                                                {product.name
                                                    .split("|")
                                                    .slice(1)
                                                    .join(" | ")}
                                            </p>
                                            <a
                                                href={`/add-cart/${product.id}`}
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
                        <CarouselPrevious className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                        <CarouselNext className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default PaidProductsSection;
