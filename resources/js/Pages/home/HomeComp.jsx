import BlogSection from "./BlogSection";
import FirstSection from "./FirstSection";
import FreeproductsSection from "./FreeproductsSection";
import PaidProductsSection from "./PaidProductsSection";
// import SecondSection from "./SecondSection";

const HomeComp = () => {
    return (
        <>
            <div className="flex flex-col gap-8">
                <FirstSection />
                {/* <SecondSection /> */}
                <FreeproductsSection />
                <PaidProductsSection />
                <BlogSection />
            </div>
        </>
    );
};

export default HomeComp;
