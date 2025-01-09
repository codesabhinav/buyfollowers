import { Gift } from "lucide-react";

const cardContent = [
    {
        icon: <Gift size={48} />,
        title: "Step - 1",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 2",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 3",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 4",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
    {
        icon: <Gift size={48} />,
        title: "Step - 5",
        heading: "Get To Know What We Offer You!",
        description:
            "Trollishly has a wide range of service packages from which you can choose based on your needs",
    },
];

const SecondSection = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-8 mt-8">
                <h3 className="text-2xl font-semibold">
                    Ready for a Purchase Tour? Check Out and Know How
                </h3>

                <div className="flex gap-8 flex-wrap justify-center">
                    {cardContent.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col gap-4 w-72 p-8 bg-white rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 hover:rotate-3d hover:shadow-lg hover:translate-z-10"
                        >
                            <span className="absolute top-0 right-4 shadow-lg p-2 rounded-b-lg bg-gradient-to-r from-[#73c3eb] via-[#c688cd] to-[#dcd5d5]">
                                {item.title}
                            </span>

                            <span className="text-gray-500/60 font-normal">
                                {item.icon}
                            </span>

                            <h1 className="text-lg font-medium">
                                {item.heading}
                            </h1>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SecondSection;
