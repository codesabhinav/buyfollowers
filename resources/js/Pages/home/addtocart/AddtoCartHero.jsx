import { useProductContext } from "../../../Context/ProductContext";
import { useState, useEffect } from "react";
const AddtoCartHero = () => {

    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-36">
                <div className="flex flex-col gap-4 w-full lg:w-[45%]">
                    <span className="text-[28px] sm:text-[33px] lg:text-[38px] xl:text-[42px] text-[#D52E9C] font-semibold">
                        Buy Followers – Your #1 Authentic {productData?.name.split("|")[0]}
                        Provider
                    </span>
                    <span className="text-[#474747] text-[14px] font-medium">
                        Buy Followers is the one-stop destination for 100%
                        high-quality <br /> social media services. We ensure to
                        boost your online presence <br /> through genuine and
                        authentic services.
                    </span>
                </div>
                <div className="relative hidden sm:block    ">
                    {/* <img
                        src="assets/addtocart/girl_instagram.png"
                        alt="girl_instagram"
                        className="absolute -left-44 top-20"
                    /> */}
                    <div className=" w-[283px] lg:w-[434px]">
                        <img
                            src="/assets/addtocart/cart_girl.png"
                            alt="cart_girl"
                            className="w-full h-auto"
                        />
                    </div>
                    <img
                        src="/assets/addtocart/gitl_backgroung.png"
                        alt="girl_wifi"
                        className=" absolute right-0 lg:-right-20 top-[162px]"
                    />
                </div>
            </div>
        </>
    );
};

export default AddtoCartHero;
