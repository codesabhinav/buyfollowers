import { Slider } from "@/Components/ui/slider";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useProductContext } from "../../../Context/ProductContext";

const Active = () => {
    const [packageQuantity, setPackageQuantity] = useState(500);
    const [productData, setProductData] = useState();
    const { dynamicFields } = useProductContext();

    useEffect(() => {
        setProductData(dynamicFields.data);
    }, [dynamicFields]);

    const handleDecrement = () => {
        if (packageQuantity > 0) {
            setPackageQuantity(packageQuantity - 100);
        }
    };
    const handleIncrement = () => {
        setPackageQuantity(packageQuantity + 100);
    };

    return (
        <>
            <div className="p-6 flex flex-col gap-12 w-full">
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
                            ${Number(productData?.rate).toFixed(2)}{" "}
                            <span className="line-through text-red-500 font-normal">
                                $46.5
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
                <div className="w-full">
                    <Slider
                        value={[packageQuantity]}
                        onValueChange={(value) => setPackageQuantity(value)}
                        max={10000}
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
                        <span
                            className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                            onClick={() => setPackageQuantity(500)}
                        >
                            500
                        </span>
                        <span
                            className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                            onClick={() => setPackageQuantity(1000)}
                        >
                            1000
                        </span>
                        <span
                            className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                            onClick={() => setPackageQuantity(2500)}
                        >
                            2500
                        </span>
                        <span
                            className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                            onClick={() => setPackageQuantity(5000)}
                        >
                            5000
                        </span>
                        <span
                            className="text-[#D52E9C] text-center font-semibold border border-[#D52E9C] hover:bg-[#D52E9C] hover:text-white rounded-md p-1 w-full cursor-pointer"
                            onClick={() => setPackageQuantity(10000)}
                        >
                            10000
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <a
                        href="/checkout"
                        className="bg-[#D52E9C] p-2 w-full rounded-full text-white font-semibold text-center"
                    >
                        Order Now
                    </a>

                    <span className="text-[#82D616] text-[16px] font-semibold">
                        You Save $0.1
                    </span>
                </div>
            </div>
        </>
    );
};

export default Active;
