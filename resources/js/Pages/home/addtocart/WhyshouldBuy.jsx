import { motion } from "framer-motion";
import { useProductContext } from "../../../Context/ProductContext";
import { useState, useEffect } from "react";

const whyshouldBuyList = [
    {
        title: "Great Promotions",
        description:
            "At Buy Followers, we offer amazing promotions that give you the best value for your money. Our deals are designed to help you grow your TikTok presence quickly and affordably, so you can reach your social media goals faster",
    },
    {
        title: "Vast Alternatives",
        description:
            "We understand that every TikTok account is unique, which is why we offer a wide range of options to cater to different needs. Whether you’re looking for a quick follower boost or gradual growth, we’ve got the right solution for you",
    },
    {
        title: "High-Security",
        description:
            "Your privacy and security are our top priority. When you buy TikTok followers from us, rest assured that your information is kept safe. We use the latest encryption methods to protect your data and ensure a secure transaction process",
    },
    {
        title: "Ample Services",
        description:
            "From TikTok followers to engagement services, we offer a comprehensive suite of options to enhance your account’s visibility. Our services are designed to help you not only gain followers but also increase interaction and boost overall growth on your TikTok profile",
    },
    {
        title: "Friendly Assistance",
        description:
            "Our team is always here to support you. Whether you have questions or need assistance with the service, our friendly customer support team is available to ensure a smooth and seamless experience",
    },
    {
        title: "Appreciable Results",
        description:
            "The results speak for themselves! When you buy TikTok followers from us, you can expect visible growth in your follower count and engagement. With our high-quality followers, you’ll gain credibility and boost your online presence in no time",
    },
];

const WhyshouldBuy = () => {

    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    return (
        <div className="w-full flex items-center justify-center py-12 px-2">
            <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                {/* Main Section Header Animation */}
                <motion.div
                    className="flex flex-col items-center gap-2 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#D52E9C] font-semibold text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px] text-center">
                        Why should I Buy {productData?.name.split("|")[0]} From Buy Followers?
                    </span>
                    <span className="text-[14px] text-[#5F5F5F] font-medium text-center">
                        Buy {productData?.name.split("|")[0]} from Buy Followers to build your
                        audience community. Our services are significantly live.
                        Read below to realize <br /> why Buy Followers is the
                        right choice.
                    </span>
                </motion.div>

                {/* Cards Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyshouldBuyList.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-2 border border-[#FFE5F6] p-4 rounded-xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            whileHover={{
                                scale: 1.1,
                                rotateY: 10,
                                rotateX: 10,
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 },
                            }}
                            style={{
                                perspective: "1500px",
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-semibold text-lg">
                                {item.title}
                            </span>
                            <span className="text-sm text-[#5F5F5F]">
                                {item.description}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyshouldBuy;
