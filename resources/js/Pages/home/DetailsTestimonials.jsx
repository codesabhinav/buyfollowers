import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Dot, Star } from "lucide-react";
import { useRef } from "react";

const detailsTestimonials = [
    {
        title: "What Clients Say About Us 😎",
        description:
            "I was preparing for a major marketing campaign and needed my social media profile to look more professional and appealing to potential clients. This service provided the perfect solution, delivering a quick boost in followers within hours. The increase in followers instantly enhanced my credibility, making my brand appear more established. Since then, I’ve noticed more interactions, inquiries, and genuine interest in my services. This service not only gave my campaign the push it needed but also set me up for long-term success",
    },
    {
        title: "What Clients Say About Us 🤩",
        description:
            "Starting as a new influencer was challenging, as gaining visibility and engagement felt nearly impossible. However, after purchasing followers, everything changed. My content started reaching a wider audience, and more people began engaging with my posts. The increased follower count not only made my profile look more credible but also encouraged organic followers to join in. Now, my engagement has significantly improved, and my account is growing naturally. This service gave me the perfect boost I needed to kickstart my journey as an influencer",
    },
    {
        title: "What Clients Say About Us 😊",
        description:
            "Since increasing my followers, I’ve seen a remarkable improvement in my social media engagement. My posts are getting more likes, comments, and shares than ever before. This service not only provided me with an instant credibility boost but also helped my content become more visible to a larger audience. The engagement increase has led to more organic reach, making my profile much more active and influential. I highly recommend this service to anyone looking to enhance their social media presence and grow their brand",
    },
    {
        title: "What Clients Say About Us 💓",
        description:
            "Investing in followers was one of the best decisions I made for my social media growth. Before using this service, my account struggled to gain traction, and I felt like my efforts weren’t being noticed. After purchasing followers, my profile looked more established, and as a result, I started gaining real, organic followers as well. The credibility boost encouraged more people to follow and engage with my content naturally. This service provided the perfect foundation for building a strong and successful online presence",
    },
];

const DetailsTestimonials = () => {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full flex flex-col items-start gap-3"
            >
                <span className="text-base sm:text-lg font-semibold text-[#D52E9C]">
                    Testimonials
                </span>

                <CarouselContent>
                    {detailsTestimonials.map((item, index) => (
                        <CarouselItem key={index} className="">
                            <div className="relative w-full flex flex-col gap-6">
                                <h1 className="text-xl text-[#151515] font-semibold">
                                    {item.title}
                                </h1>
                                <p className="text-[#6C728A] font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex items-center gap-2">
                    {/* <ChevronLeft className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    <ChevronRight className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" /> */}
                    <CarouselPrevious className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                    <CarouselNext className="bg-[#F2F2F2] p-2 size-9 rounded-full text-[#474747] cursor-pointer" />
                </div>
            </Carousel>
        </>
    );
};

export default DetailsTestimonials;
