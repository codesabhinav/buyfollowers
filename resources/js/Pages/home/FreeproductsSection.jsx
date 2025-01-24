import { ScrollArea } from "@/Components/ui/scroll-area";
import { Gift } from "lucide-react";
import React, { useState, useEffect } from "react";
import { products } from "../../Helper/api";

const FreeproductsSection = () => {
    const [freeProducts, setFreeProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await products(["1"]);
                if (response && Array.isArray(response.data)) {
                    setFreeProducts(response.data);
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
            <div className="w-full py-20 bg-[#FFFAFE] flex flex-col items-center px-4">
                <div className="w-full md:w-[85%] flex flex-col items-center gap-16">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                            Our Free Product
                        </h5>
                        <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                            Our Free Product
                        </h3>
                    </div>

                    <div className="flex items-center flex-col md:flex-row gap-6">
                        <div className="flex flex-col gap-6">
                            {freeProducts.length > 0 ? (
                                freeProducts.slice(0, 3).map((product) => (
                                    <div
                                        key={product.id}
                                        className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6 h-[9rem]"
                                    >
                                        <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF] w-36 min-[359px]:w-24 md:w-28">
                                            <img
                                                src={product.image.path}
                                                alt={product.name}
                                                className="w-full h-auto"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-semibold text-[16px] text-[#232323]">
                                                {product.name.split("|")[0]}
                                            </h2>
                                            <p className="text-[12px] text-[#6C728A]">
                                                {product.name
                                                    .split("|")
                                                    .slice(1)
                                                    .join(" | ")}
                                            </p>
                                            <a
                                                href={`/add-cart/${product.id}`}
                                                className="w-fit py-2 px-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full transition-all cursor-pointer"
                                            >
                                                Try for Free 🤩
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available</p>
                            )}
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="assets/images/ourproduct_person.svg"
                                alt="ourproduct_person"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            {freeProducts.length > 3 ? (
                                freeProducts.slice(3, 6).map((product) => (
                                    <div
                                        key={product.id}
                                        className="shadow-xl p-4 rounded-xl bg-[#FFFFFF] flex items-center gap-6 h-[9rem]"
                                    >
                                        <div className="shadow-xl p-6 rounded-2xl bg-[#FFFFFF] w-36 min-[359px]:w-24 md:w-28">
                                            <img
                                                src={product.image.path}
                                                alt={product.name}
                                                className="w-full h-auto"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-semibold text-[16px] text-[#232323]">
                                                {product.name.split("|")[0]}
                                            </h2>
                                            <p className="text-[12px] text-[#6C728A]">
                                                {product.name
                                                    .split("|")
                                                    .slice(1)
                                                    .join(" | ")}
                                            </p>
                                            <a
                                                href={`/add-cart/${product.id}`}
                                                className="w-fit py-2 px-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded-full transition-all cursor-pointer"
                                            >
                                                Try for Free 🤩
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreeproductsSection;
