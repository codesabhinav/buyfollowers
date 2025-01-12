import { motion } from "framer-motion";

const whyshouldBuyList = [
    {
        title: "Great Promotions",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Vast Alternatives",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "High-Security",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Ample Services",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Friendly Assistance",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Appreciable Results",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
];

const WhyshouldBuy = () => {
    return (
        <div className="w-full flex items-center justify-center py-28">
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
                    <span className="text-[#D52E9C] font-semibold text-4xl">
                        Why should I Buy Instagram Likes From Buy Followers?
                    </span>
                    <span className="text-base text-[#5F5F5F] font-medium text-center">
                        Buy Instagram likes from Buy Followers to build your
                        audience community. Our services are significantly live.
                        Read below to realize <br /> why Buy Followers is the
                        right choice.
                    </span>
                </motion.div>

                {/* Cards Section */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
