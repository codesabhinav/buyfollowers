const howToBuyList = [
    {
        icon: "assets/addtocart/howtobuy_1.png",
        title: "Go for the Right One!",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant:",
    },
    {
        icon: "assets/addtocart/howtobuy_2.png",
        title: "Information Time",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant:",
    },
    {
        icon: "assets/addtocart/howtobuy_3.png",
        title: "Expeditious Delivery",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant:",
    },
    {
        icon: "assets/addtocart/howtobuy_4.png",
        title: "Perks Are Here!",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant:",
    },
];

const HowToBuy = () => {
    return (
        <>
            <div className="bg-[#FFFAFE] w-full flex items-center justify-center py-28">
                <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-[#D52E9C] font-semibold text-4xl">
                            How To Buy Instagram Likes From Buy Followers?
                        </span>
                        <span className="text-base text-[#5F5F5F] font-medium text-center">
                            Buy Instagram likes from Buy Followers to grow your
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
