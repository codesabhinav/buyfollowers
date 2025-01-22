import { motion, useTime, useTransform } from "framer-motion";
import CustomCardTabs from "./CustomCardTabs";
import { useProductContext } from "../../../Context/ProductContext";
import { useState, useEffect } from "react";

const BuyFollowers = () => {

    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    const time = useTime();

    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false,
    });
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
    });
    
const buyFollowersList = [
    {
        image: "/assets/addtocart/cart-peppols.png",
        title: "cart-peppols",
        description:
            `✅ 2000+ Influencers ordered our top-rated ${productData?.name.split("|")[0]} within 24 hours`,
    },
    {
        image: "/assets/addtocart/cart-star.png",
        title: "cart-peppols",
        description:
            `✅ 2000+ Influencers ordered our top-rated ${productData?.name.split("|")[0]} within 24 hours`,
    },
    {
        image: "/assets/addtocart/cart-delivery.png",
        title: "cart-peppols",
        description:
            `✅ 2000+ Influencers ordered our top-rated ${productData?.name.split("|")[0]} within 24 hours`,
    },
];



    return (
        <>
            <div className="bg-[#FFFAFE] w-full flex items-center justify-center px-2 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-8 w-full">
                        <div className=" flex flex-col gap-2">
                            <span className="text-[#151515] font-semibold text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px]">
                                Buy Followers - Check out Our Top-notch {productData?.name.split("|")[0]}  Services!
                            </span>
                            <span className="text-[14px] text-[#5F5F5F] font-medium text-start">
                                Buy {productData?.name.split("|")[0]} Services! To Gain Instant Engagement.
                                Check Our Top-Quality Packages!
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {buyFollowersList.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-[#EDEDED] px-4 py-4 rounded-xl flex flex-col justify-center items-center gap-6"
                                >
                                    <div className="w-33 h-33">
                                        <img
                                            src={item.image}
                                            alt="logo of card"
                                        />
                                    </div>

                                    <span className="text-[#6C728A] text-[11px]">
                                        {item.description}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="relative w-full">
                            <motion.div
                                className="absolute -inset-[1.5px] rounded-md"
                                style={{
                                    background: rotatingBg,
                                }}
                            />

                            <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full bg-white rounded-lg p-6">
                                <span className="text-[#232323] text-[18px]">
                                    Explore our low-cost packages
                                </span>

                                <a
                                    href="#"
                                    className="bg-[#D52E9C] text-white text-center rounded-full p-3 w-1/2"
                                >
                                    Start@0.9
                                </a>
                            </div>
                        </div>
                    </div>

                    <CustomCardTabs />
                </div>
            </div>
        </>
    );
};

export default BuyFollowers;
