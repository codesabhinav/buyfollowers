import DetailsTestimonials from "./DetailsTestimonials";
import UserTestimonials from "./UserTestimonials";

const Testimonials = () => {
    return (
        <>
            <div className="w-full py-20 flex flex-col items-center">
                <div className="w-full md:w-[85%] flex flex-col items-center gap-16 py-20">
                    <div className="flex flex-col gap-2 items-center">
                        <h5 className="text-lg sm:text-2xl font-semibold text-pink-400">
                            Testimonials
                        </h5>
                        <h3 className="text-3xl sm:text-4xl font-semibold text-black">
                            Our Blog
                        </h3>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-full lg:w-[55%]">
                            <UserTestimonials />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <DetailsTestimonials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
