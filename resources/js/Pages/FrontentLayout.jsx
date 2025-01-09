import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
// import HomeComp from "./home/HomeComp";
import FirstSection from "./home/FirstSection";
import FreeproductsSection from "./home/FreeproductsSection";
import PaidProductsSection from "./home/PaidProductsSection";
import BlogSection from "./home/BlogSection";
import MovingWave from "./home/MovingWave";

export default function FrontentLayout({ children }) {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen relative bg-repeat bg-cover bg-center">
                <div className="relative w-full flex justify-center">
                    <div
                        className="absolute inset-0 opacity-100 z-0"
                        style={{
                            backgroundImage:
                                "url('assets/images/buy-followers.avif')",
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            backgroundRepeat: "repeat",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-400 opacity-90 z-0"></div>

                    <div className="relative z-10 mt-8 w-full md:w-[85%] min-h-screen flex flex-col justify-start gap-14">
                        <Navbar />

                        <FirstSection />
                    </div>
                </div>
                {/* <MovingWave /> */}

                <div className="flex flex-col items-center w-full md:w-[85%] mb-12">
                    {/* <HomeComp /> */}
                    <FreeproductsSection />
                    <PaidProductsSection />
                    <BlogSection />
                </div>

                <Footer />
            </div>
        </>
    );
}
