import { Slider } from "@/Components/ui/slider";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const CheckoutSlider = () => {
    const [packageQuantity, setPackageQuantity] = useState(500);

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
                            className="text-[#474747] text-[10px] font-semibold bg-[#F8F8F8] p-2 rounded-full"
                        >
                            STANDARD
                        </a>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <span className="text-black font-semibold">
                            ${packageQuantity}
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
            </div>
        </>
    );
};

export default CheckoutSlider;
