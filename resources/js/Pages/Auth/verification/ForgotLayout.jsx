import React from "react";
import NewNavbar from "@/Pages/home/NewNavbar";
import Footer from "@/Pages/home/Footer";
import Forgot from "./Forgot";

const ForgotLayout = () => {
    return (
        <>
            <div className="relative z-10 flex flex-col items-center min-h-screen bg-pink-200/45">
                <div className="w-full md:w-[85%] mt-8">
                    <NewNavbar />
                </div>

                <div className="flex items-center justify-center w-full sm:w-[55%] lg:w-[85%] py-12 px-2">
                    {/* Side Image for Larger Screens */}
                    <div className="hidden lg:block w-full">
                        <img
                            src="assets/images/constact-buyfollowers.jpg"
                            alt="Side Image"
                            className="w-[634px] h-[634px] object-contain mix-blend-darken"
                        />
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <Forgot />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default ForgotLayout;
