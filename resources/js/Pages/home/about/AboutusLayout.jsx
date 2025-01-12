import Footer from "../Footer";
import NewNavbar from "../NewNavbar";
import AboutUs from "./Aboutus";

const AboutusLayout = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen relative bg-pink-100">
                <div className="relative w-full flex justify-center">
                    {/* <div
                        className="absolute inset-0 opacity-100 z-20"
                        style={{
                            backgroundImage:
                                "url('assets/images/herorobgimg.png')",
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-custom-gradient opacity-85"></div> */}

                    <div className="relative z-30 mt-8 w-full md:w-[85%] flex flex-col justify-start gap-14">
                        {/* <Navbar /> */}
                        <NewNavbar />

                        {/* <FirstSection /> */}
                    </div>
                </div>
                {/* <MovingWave /> */}

                <div className="w-full mb-12 flex flex-col items-center gap-12">
                    <AboutUs />
                    {/* <h1>about section</h1> */}
                </div>

                <Footer />
            </div>
        </>
    );
};

export default AboutusLayout;
