const whyBuyfollowers = [
    {
        img: "assets/images/fastdelivery.svg",
        title: "Fast Delivery",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        img: "assets/images/quality.svg",
        title: "Quality",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
    {
        img: "assets/images/247support.svg",
        title: "24*7 Support",
        heading: "Safety-focused lubricant:",
        description:
            "secure facilities, CCTV, alarms, patrols ensuring optimal security.",
    },
];

const WhyBuyFollwers = () => {
    return (
        <>
            <div className="w-full py-20 md:w-[85%] flex flex-col items-center gap-16">
                <div className="flex flex-col gap-2 items-center">
                    <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                        Why Buy Followers
                    </h5>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                        Why Buy Followers
                    </h3>
                </div>

                <div className="flex items-center justify-center gap-6">
                    {whyBuyfollowers.map((item, index) => (
                        <div
                            className="shadow-sm px-20 py-8 border border-[#EDEDED] rounded-xl bg-[#FFFFFF] flex flex-col items-center gap-8"
                            key={index}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-20"
                            />

                            <div className="flex flex-col items-center justify-center gap-2">
                                <h2 className="font-semibold text-[18px] text-[#232323] text-center">
                                    {item.title}
                                </h2>

                                <span className="text-[13px] text-[#6C728A] text-center">
                                    {item.heading}
                                </span>
                                <span className="text-[13px] text-[#6C728A] text-center">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WhyBuyFollwers;
