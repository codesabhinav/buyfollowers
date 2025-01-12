import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

const faqList = [
    {
        title: "Why Is It Vital to Buy Instagram Likes Service?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Will BuyFollowers Help Me Grow If I Buy Instagram Likes?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Is It Possible to Buy Instagram Likes Quickly?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Are You Involving Computer-Generated Services in BuyFollowers?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Do You Provide Customized Services at Buy Followers for All Clients?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Is It Safe to Buy Instagram Likes From Buy Followers?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "Is It Possible for My Account to Get Breached if I Buy Instagram Likes?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
    {
        title: "What Inputs Do I Have to Provide to Buy Instagram Likes From Buy Followers?",
        description:
            "Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms, Safety-focused lubricant: secure facilities, CCTV, alarms, patrols ensuring optimal security. Safety-focused lubricant: secure facilities, CCTV, alarms.",
    },
];

const FrequentlyAnsweredQuestions = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center py-28">
                <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-[#D52E9C] font-semibold text-4xl">
                            Frequently Answered Questions (FAQ)
                        </span>
                        <span className="text-base text-[#5F5F5F] font-medium text-center">
                            Buy Instagram likes from BuyFollowers to increase
                            your ROI and reach. The following FAQs will help you
                            get your doubts clarified <br /> regarding our
                            services.
                        </span>
                    </div>

                    <div className="flex w-full">
                        <Accordion type="single" collapsible className="w-full">
                            {faqList.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                >
                                    <AccordionTrigger className="text-black">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {item.description}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrequentlyAnsweredQuestions;
