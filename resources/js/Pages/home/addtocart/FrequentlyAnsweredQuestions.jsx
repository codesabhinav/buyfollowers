import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

const faqList = [
    {
      "title": "Is It a Perfect Option to Buy TikTok Likes for Engagement?",
      "description": "Yes, you can buy TikTok likes service to improve your engagement rate. You can receive a good count of likes to sustain your TikTok profile for a longer time. Using our service makes your TikTok profile get identified on the recognition, where you can beat your competitors instantly. By using our TikTok services, your post gains an engagement rate that goes viral. Try our services now!"
    },
    {
      "title": "Can I Buy TikTok Likes to Boost My Profile?",
      "description": "Yes, of course! Our Trollishly is the leading service provider; it provides real likes for your TikTok profile. Ultimately the brand awareness for your business increases with more visibility. Jumpstart your business profile by buying likes for TikTok, where you can accomplish your goals and improve your profile credibility."
    },
    {
      "title": "Are There Any Benefits for My Profile When I Buy TikTok Likes?",
      "description": "Yes! You can enjoy some advantages after buying TikTok likes. With a reasonable count of likes, your rank on the TikTok platform increases for your brands and business. Benefits include gaining instant results, building trust among followers, achieving a higher engagement rate, and increasing online visibility and organic growth."
    },
    {
      "title": "Will My Video Become Popular After Purchasing From You?",
      "description": "Yes, of course! You can buy TikTok likes for your entertaining content to look popular. Likes on TikTok make your videos go viral, improve your TikTok page and profile, help you compete with opponents, and boost your visibility on the TikTok channel."
    },
    {
      "title": "As an Influencer, if I Buy TikTok Likes for My Profile by Using Your Service, Will I Have Growth on the Platform?",
      "description": "If you are an influencer, TikTok likes are directly connected to the engagement rate. Once you purchase our TikTok likes service, you can experience improvement, gain more reach, and expose your content to new audiences."
    },
    {
      "title": "Can I Buy TikTok Likes More Than One Package? Or Is There Any Option to Get Multiple Times?",
      "description": "Yes, surely, it's your choice to get TikTok likes multiple times. Always try to select packages depending on your objectives. You can buy real TikTok likes multiple times for your different posts and profiles to make a successful profit within a short time."
    },
    {
      "title": "Will My Profile Get Banned When I Buy TikTok Likes From Trollishly?",
      "description": "A Big No! Your TikTok account will never get suspended. Our service is legit, safe, and secured. The purchase of TikTok likes, views, and followers is legal. Hence, you can buy TikTok likes from Trollishly and build your reputation without any hesitation."
    },
    {
      "title": "How to Upgrade My Existing TikTok Likes From Your Service?",
      "description": "You can upgrade your existing TikTok likes from our Trollishly through a very simple process. Choose the package, enter your profile details, make your payment, and within 24 hours, your profile will be upgraded. We also offer guaranteed results to our valuable customers."
    },
    {
      "title": "Will My Content Get Exposed Online if I Buy TikTok Likes?",
      "description": "Using our TikTok services is an efficient method to gain popularity. Buying TikTok likes increases your profile's exposure on the platform and connects you with your target market."
    },
    {
      "title": "Can I Buy TikTok Likes to Check My Brand’s Performance?",
      "description": "Yes, you can get TikTok likes packages exclusively made to increase your business profile's conversion rate. On purchasing TikTok services, you can enhance your engagement and online visibility simultaneously."
    },
    {
      "title": "How to Earn More Likes for My TikTok Business Profile?",
      "description": "You can earn more TikTok likes to increase your brand reach globally and enhance your TikTok business. The impression of the TikTok profile is calculated by the total number of likes and views, making your posts highly visible."
    },
    {
      "title": "When Will I Get My Real TikTok Likes From Your Service?",
      "description": "Our TikTok likes start to work as soon as possible after payment. Delivery times might vary based on service load, but we always ensure guaranteed delivery at an instant speed."
    },
    {
      "title": "How to Sustain My Success on the Platform Using Your Service?",
      "description": "After buying TikTok likes, you can retain your success rate on the platform. Upgrade your TikTok likes periodically for the best results and use our services to sky-high your visibility."
    },
    {
      "title": "Which Package Should I Opt For TikTok Likes?",
      "description": "The more likes you purchase, the more engaged your TikTok videos become among audiences. Choose the appropriate package for your profile based on your engagement factors."
    },
    {
      "title": "Will I Get Featured on TikTok Using Your Service?",
      "description": "Using our service, there’s a chance of 75% getting noticed and featured on TikTok. Buy real TikTok likes to gain popularity, and maximize your profile growth on the platform."
    },
    {
      "title": "If I Buy TikTok Likes, Will It Help Me Get to the 'For You' Page?",
      "description": "Yes, having a massive count of real TikTok likes enhances credibility, helping TikTok’s algorithm move your content to the 'For You' page, increasing visibility and profile growth."
    },
    {
      "title": "Why Should I Buy TikTok Likes Instant From You?",
      "description": "Using our TikTok likes services helps you grab attention, become more visible, and increase your account's popularity. We offer high-quality services at reasonable prices."
    },
    {
      "title": "Can I Beat My Competitors by Getting Your Service?",
      "description": "Yes, your TikTok video likes will increase visibility among competitors. Using our service, you can successfully compete on TikTok, increase engagement rates, and make collaboration content."
    }
  ];

const FrequentlyAnsweredQuestions = () => {
    return (
        <>
            <div className="w-full flex items-center justify-center py-12 px-2">
                <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-[#D52E9C] font-semibold text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px] text-center">
                            Frequently Answered Questions (FAQ)
                        </span>
                        <span className="text-[14px] text-[#5F5F5F] font-medium text-center">
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
