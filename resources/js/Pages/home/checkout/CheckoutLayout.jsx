import Footer from "../Footer";
import NewNavbar from "../NewNavbar";
import Checkout from "./Checkout";

const CheckoutLayout = () => {
    const customNavbarstyle =
        "bg-[#FFFFFF80] shadow-xl drop-shadow-xl shadow-[#D52E9C33]";

    return (
        <>
            <div className="flex flex-col items-center min-h-screen relative bg-repeat bg-cover bg-center">
                <div className="relative w-full flex flex-col items-center justify-center">
                    <div
                        className="absolute inset-0 opacity-12 z-20 pointer-events-none"
                        style={{
                            backgroundImage:
                                "url('/assets/addtocart/cat_background.png')",
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            backgroundRepeat: "repeat",
                            objectFit: "cover",
                        }}
                    ></div>
                    <div className="relative z-30 mt-4 md:px-2 w-full md:w-[85%] md:min-h-screen flex flex-col justify-start gap-6 px-6 ">
                        <div className="relative z-40">
                            <NewNavbar navbarstyle={customNavbarstyle} />
                        </div>

                        <div className="relative z-30">
                            <Checkout />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CheckoutLayout;
