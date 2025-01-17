import Footer from "../Footer";
import Navbar from "../Navbar";
import NewNavbar from "../NewNavbar";
import AddtoCartHero from "./AddtoCartHero";
import BuyFollowers from "./BuyFollowers";
import FrequentlyAnsweredQuestions from "./FrequentlyAnsweredQuestions";
import HowToBuy from "./HowToBuy";
import WhyshouldBuy from "./WhyshouldBuy";

const AddtoCartLayout = () => {
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
                                "url('assets/addtocart/cat_background.png')",
                            backgroundSize: "auto",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            objectFit: "cover",
                        }}
                    ></div>
                    {/* <div className="absolute inset-0 bg-custom-gradient opacity-85"></div> */}

                    <div className="relative z-30 mt-8 md:px-2 w-full md:w-[85%] md:min-h-screen flex flex-col justify-start gap-14 px-6 ">
                        {/* <Navbar navbarstyle={customNavbarstyle} /> */}
                        <NewNavbar navbarstyle={customNavbarstyle} />

                        <AddtoCartHero />
                    </div>
                </div>
                <div className="w-full mt-10 mb-12 flex flex-col items-center gap-12 px-4 md:px-1">
                    <BuyFollowers />
                    <HowToBuy />
                    <WhyshouldBuy />
                    <FrequentlyAnsweredQuestions />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default AddtoCartLayout;
