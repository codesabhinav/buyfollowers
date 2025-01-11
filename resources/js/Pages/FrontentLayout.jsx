import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
// import HomeComp from "./home/HomeComp";
import FirstSection from "./home/FirstSection";
import FreeproductsSection from "./home/FreeproductsSection";
import PaidProductsSection from "./home/PaidProductsSection";
import BlogSection from "./home/BlogSection";
import MovingWave from "./home/MovingWave";
import WhyBuyFollwers from "./home/WhyBuyFollwers";
import Testimonials from "./home/Testimonials";

export default function FrontentLayout({ children }) {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen relative bg-repeat bg-cover bg-center">
                <div className="relative w-full flex justify-center">
                    <div
                        className="absolute inset-0 opacity-100 z-20"
                        style={{
                            backgroundImage:
                                "url('assets/images/herorobgimg.png')",
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-custom-gradient opacity-85"></div>

                    <div className="relative z-30 mt-8 w-full md:w-[85%] min-h-screen flex flex-col justify-start gap-14">
                        <Navbar />

                        <FirstSection />
                    </div>
                </div>
                {/* <MovingWave /> */}

                <div className="w-full mb-12 flex flex-col items-center gap-12">
                    {/* <HomeComp /> */}
                    <PaidProductsSection />
                    <FreeproductsSection />
                    <Testimonials />
                    <BlogSection />
                    <WhyBuyFollwers />
                </div>

                <Footer />
            </div>
        </>
    );
}
