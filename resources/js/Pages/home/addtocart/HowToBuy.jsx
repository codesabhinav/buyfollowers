
import { useProductContext } from "../../../Context/ProductContext";
import { useState, useEffect } from "react";

const howToBuyList = [
    {
        icon: "/assets/addtocart/howtobuy_1.png",
        title: "Go for the Right One!",
        description:
            "Boost your social media with real, high-quality followers. Increase credibility, engagement, and organic growth instantly. Choose the best and watch your profile thrive",
    },
    {
        icon: "/assets/addtocart/howtobuy_2.png",
        title: "Information Time",
        description:
            "Don’t waste time—boost your social media with real followers today. Gain credibility, engagement, and organic growth instantly. Take action now for faster success",
    },
    {
        icon: "/assets/addtocart/howtobuy_3.png",
        title: "Expeditious Delivery",
        description:
            "Boost your social media fast! With quick follower delivery, gain increased engagement and visibility in no time. Enhance your profile efficiently and watch it grow",
    },
    {
        icon: "/assets/addtocart/howtobuy_4.png",
        title: "Perks Are Here!",
        description:
            "Unlock the benefits of a stronger social media presence today! With our service, you’ll enjoy a boost in followers, increased engagement, and enhanced credibility",
    },
];

const HowToBuy = () => {

    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    return (
        <>
            <div className="bg-[#FFFAFE] w-full flex items-center justify-center py-12 px-2">
                <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-[#D52E9C] font-semibold text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px] text-center">
                            How To Buy {productData?.name.split("|")[0]} From Buy Followers?
                        </span>
                        <span className="text-[14px] text-[#5F5F5F] font-medium text-center">
                            Buy {productData?.name.split("|")[0]} from Buy Followers to grow your
                            engagement. Our services are authentic and safe.
                            Take a look at the <br /> following steps to walk
                            through the process.
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {howToBuyList.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-xl shadow-md relative mt-12"
                            >
                                <div className="w-32 h-32 absolute -top-8 left-4">
                                    <img src={item.icon} alt="howtobuy_1" />
                                </div>
                                <div className="mt-12 flex flex-col gap-2">
                                    <span className="text-[#232323] text-lg font-semibold">
                                        {item.title}
                                    </span>
                                    <span className="text-[#6C728A] text-base">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToBuy;
