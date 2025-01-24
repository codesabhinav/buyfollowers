import { Slider } from "@/Components/ui/slider";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useProductContext } from "../../../Context/ProductContext";

const Active = () => {
    const [packageQuantity, setPackageQuantity] = useState(null);
    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    useEffect(() => {
        if (productData) {
            setPackageQuantity(productData?.max / 2);
        }
    }, [productData]);

    const handleDecrement = () => {
        if (packageQuantity > productData?.min) {
            const newQuantity = packageQuantity - 1;
            if (newQuantity < productData?.min) {
                alert(`Quantity cannot be less than the minimum value of ${productData?.min}`);
            } else {
                setPackageQuantity(newQuantity);
            }
        }
    };

    const handleIncrement = () => {
        const newQuantity = packageQuantity + 1;
        if (newQuantity > productData?.max) {
            alert(`Quantity cannot exceed the maximum value of ${productData?.max}`);
        } else {
            setPackageQuantity(newQuantity);
        }
    };

    const boxValues = [];
    const maxValue = productData?.max;
    const boxValue = maxValue / 5;

    for (let i = 1; i <= 5; i++) {
        boxValues.push(boxValue * i);
    }
    const handleOrderNow = () => {
        const token = localStorage.getItem("token");
        const checkoutData = {
            quantity: packageQuantity,
            rate: calculateRate(),
            name: productData?.name.split("|")[0],
            service: productData?.service,
            id: productData?.id,
            service_type: productData?.service_type,
            discount : calculateRate() * 2,
        };

        if (token) {
            const queryParams = new URLSearchParams(checkoutData).toString();
            window.location.href = `/checkout?${queryParams}`;
        } else {
            window.location.href = "/authentication";
        }
    };
    const calculateRate = () => {
        if (!productData || !packageQuantity) return 0;
        return ((productData.active_rate / 1000) * packageQuantity).toFixed(2);
    };
    return (
        <>
            <div className="p-6 flex flex-col gap-8 w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Minus
                                className="size-4 text-[#757070] cursor-pointer"
                                onClick={handleDecrement}
                            />
                            <span className="text-[#474747] text-[16px]">
                                {packageQuantity}
                            </span>
                            <Plus
                                className="size-4 text-[#757070] cursor-pointer"
                                onClick={handleIncrement}
                            />
                        </div>
                        <a
                            href=""
                            className="text-white text-[10px] font-semibold bg-[#D52E9C] p-2 rounded-full"
                        >
                            PREMIUM
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <span className="text-black font-semibold">
                            ${calculateRate()}{" "}
                            <span className="line-through text-red-500 font-normal">
                                ${calculateRate() * 2}
                            </span>
                        </span>
                        <a
                            href="#"
                            className="text-[10px] text-white bg-[#82D616] p-2 rounded-full"
                        >
                            SAVE 9%
                        </a>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <Slider
                        value={[packageQuantity]}
                        onValueChange={(value) => {
                            const newValue = Math.max(productData?.min, Math.min(value[0], productData?.max));
                            setPackageQuantity(newValue);
                        }}
                        max={productData?.max}
                        step={1}
                        className={cn("w-full")}
                    />
                </div>

                <div className="relative p-6 border border-[#FFDEF4] rounded-md flex flex-col gap-2">
                    <div className="absolute -top-3 left-4 bg-white">
                        <span className="text-[#D52E9C] font-bold text-opacity-80">
                            Trending Packages
                        </span>
                    </div>

                    <div className="relative flex items-center gap-2 pt-2 overflow-x-scroll scroll-smooth scrollbar-custom">
                        {boxValues.map((value, index) => (
                            <span
                                key={index}
                                className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                                onClick={() => setPackageQuantity(value)}
                            >
                                {value}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <a
                        onClick={handleOrderNow}
                        className="bg-[#D52E9C] p-2 w-full rounded-full text-white font-semibold text-center cursor-pointer"
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default Active;
