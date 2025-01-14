import DetailsTestimonials from "./DetailsTestimonials";
import UserTestimonials from "./UserTestimonials";

const Testimonials = () => {
    return (
        <>
            <div className="w-full py-20 flex flex-col items-center">
                <div className="w-full md:w-[85%] flex flex-col items-center gap-16">
                    <div className="w-full flex flex-col xl:flex-row items-start gap-8">
                        <div className="w-full xl:w-[65%]">
                            <UserTestimonials />
                        </div>
                        <div className="w-full">
                            <DetailsTestimonials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
