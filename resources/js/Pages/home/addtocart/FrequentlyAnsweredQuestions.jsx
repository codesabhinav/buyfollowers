import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { useProductContext } from "../../../Context/ProductContext";
import { useState, useEffect } from "react";

const FrequentlyAnsweredQuestions = () => {

  const [productData, setProductData] = useState();
  const { dynamicFields } = useProductContext();

  useEffect(() => {
      setProductData(dynamicFields.data);
  }, [dynamicFields]);


const faqList = [
    {
      "title": `Is It a Perfect Option to Buy ${productData?.name.split("|")[0]} for Engagement?`,
      "description": `Yes, you can buy ${productData?.name.split("|")[0]} service to improve your engagement rate. You can receive a good count of likes to sustain your ${productData?.name.split("|")[0]} profile for a longer time. Using our service makes your ${productData?.name.split("|")[0]} profile get identified on the recognition, where you can beat your competitors instantly. By using our ${productData?.name.split("|")[0]} services, your post gains an engagement rate that goes viral. Try our services now!`
    },
    {
      "title": `Can I Buy ${productData?.name.split("|")[0]} to Boost My Profile?`,
      "description": `Yes, of course! Our Buy Followers is the leading service provider; it provides real likes for your ${productData?.name.split("|")[0]} profile. Ultimately the brand awareness for your business increases with more visibility. Jumpstart your business profile by buying likes for ${productData?.name.split("|")[0]}, where you can accomplish your goals and improve your profile credibility.`
    },
    {
      "title": `Are There Any Benefits for My Profile When I Buy ${productData?.name.split("|")[0]} ?`,
      "description": `Yes! You can enjoy some advantages after buying ${productData?.name.split("|")[0]}. With a reasonable count of likes, your rank on the ${productData?.name.split("|")[0]} platform increases for your brands and business. Benefits include gaining instant results, building trust among followers, achieving a higher engagement rate, and increasing online visibility and organic growth.`
    },
    {
      "title": `Will My Video Become Popular After Purchasing From You?`,
      "description": `Yes, of course! You can buy ${productData?.name.split("|")[0]} for your entertaining content to look popular. Likes on ${productData?.name.split("|")[0]} make your videos go viral, improve your ${productData?.name.split("|")[0]} page and profile, help you compete with opponents, and boost your visibility on the ${productData?.name.split("|")[0]} channel.`
    },
    {
      "title": `As an Influencer, if I Buy ${productData?.name.split("|")[0]} for My Profile by Using Your Service, Will I Have Growth on the Platform?`,
      "description": `If you are an influencer, ${productData?.name.split("|")[0]} are directly connected to the engagement rate. Once you purchase our ${productData?.name.split("|")[0]} service, you can experience improvement, gain more reach, and expose your content to new audiences.`
    },
    {
      "title": `Can I Buy ${productData?.name.split("|")[0]} More Than One Package? Or Is There Any Option to Get Multiple Times?`,
      "description": `Yes, surely, it's your choice to get ${productData?.name.split("|")[0]} multiple times. Always try to select packages depending on your objectives. You can buy real ${productData?.name.split("|")[0]} multiple times for your different posts and profiles to make a successful profit within a short time.`
    },
    {
      "title": `Will My Profile Get Banned When I Buy ${productData?.name.split("|")[0]} From Buy Followers?`,
      "description": `A Big No! Your ${productData?.name.split("|")[0]} account will never get suspended. Our service is legit, safe, and secured. The purchase of ${productData?.name.split("|")[0]}, views, and followers is legal. Hence, you can buy ${productData?.name.split("|")[0]} from Buy Followers and build your reputation without any hesitation.`
    },
    {
      "title": `How to Upgrade My Existing ${productData?.name.split("|")[0]} From Your Service?`,
      "description": `You can upgrade your existing ${productData?.name.split("|")[0]} from our Buy Followers through a very simple process. Choose the package, enter your profile details, make your payment, and within 24 hours, your profile will be upgraded. We also offer guaranteed results to our valuable customers.`
    },
    {
      "title": `Will My Content Get Exposed Online if I Buy ${productData?.name.split("|")[0]} ?`,
      "description": `Using our ${productData?.name.split("|")[0]} services is an efficient method to gain popularity. Buying ${productData?.name.split("|")[0]} increases your profile's exposure on the platform and connects you with your target market.`
    },
    {
      "title": `Can I Buy ${productData?.name.split("|")[0]} to Check My Brand’s Performance?`,
      "description": `Yes, you can get ${productData?.name.split("|")[0]} packages exclusively made to increase your business profile's conversion rate. On purchasing ${productData?.name.split("|")[0]} services, you can enhance your engagement and online visibility simultaneously.`
    },
    {
      "title": `How to Earn More Likes for My ${productData?.name.split("|")[0]} Business Profile?`,
      "description": `You can earn more ${productData?.name.split("|")[0]} to increase your brand reach globally and enhance your ${productData?.name.split("|")[0]} business. The impression of the ${productData?.name.split("|")[0]} profile is calculated by the total number of likes and views, making your posts highly visible.`
    },
    {
      "title": `When Will I Get My Real ${productData?.name.split("|")[0]} From Your Service?`,
      "description": `Our ${productData?.name.split("|")[0]} start to work as soon as possible after payment. Delivery times might vary based on service load, but we always ensure guaranteed delivery at an instant speed.`
    },
    {
      "title": `How to Sustain My Success on the Platform Using Your Service?`,
      "description": `After buying ${productData?.name.split("|")[0]}, you can retain your success rate on the platform. Upgrade your ${productData?.name.split("|")[0]} periodically for the best results and use our services to sky-high your visibility.`
    },
    {
      "title": `Which Package Should I Opt For ${productData?.name.split("|")[0]}?`,
      "description": `The more likes you purchase, the more engaged your ${productData?.name.split("|")[0]} videos become among audiences. Choose the appropriate package for your profile based on your engagement factors.`
    },
    {
      "title": `Will I Get Featured on ${productData?.name.split("|")[0]} Using Your Service?`,
      "description": `Using our service, there’s a chance of 75% getting noticed and featured on ${productData?.name.split("|")[0]}. Buy real ${productData?.name.split("|")[0]} to gain popularity, and maximize your profile growth on the platform.`
    },
    {
      "title": `If I Buy ${productData?.name.split("|")[0]}, Will It Help Me Get to the 'For You' Page?`,
      "description": `Yes, having a massive count of real ${productData?.name.split("|")[0]} enhances credibility, helping ${productData?.name.split("|")[0]}’s algorithm move your content to the 'For You' page, increasing visibility and profile growth.`
    },
    {
      "title": `Why Should I Buy ${productData?.name.split("|")[0]} Instant From You?`,
      "description": `Using our ${productData?.name.split("|")[0]} services helps you grab attention, become more visible, and increase your account's popularity. We offer high-quality services at reasonable prices.`
    },
    {
      "title": `Can I Beat My Competitors by Getting Your Service?`,
      "description": `Yes, your ${productData?.name.split("|")[0]} video likes will increase visibility among competitors. Using our service, you can successfully compete on ${productData?.name.split("|")[0]}, increase engagement rates, and make collaboration content.`
    }
  ];


    return (
        <>
            <div className="w-full flex items-center justify-center py-12 px-2">
                <div className="flex flex-col gap-12 items-center w-full md:w-[85%]">
                    <div className="flex flex-col items-center gap-2 w-full">
                        <span className="text-[#D52E9C] font-semibold text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px] text-center">
                            Frequently Answered Questions (FAQ)
                        </span>
                        <span className="text-[14px] text-[#5F5F5F] font-medium text-center">
                            Buy {productData?.name.split("|")[0]} from BuyFollowers to increase
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
