import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import React, { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { ScrollArea } from "@/Components/ui/scroll-area";
import {
    getSettingByKey,
    getUserDetails,
    logout,
    navbar,
} from "../../Helper/api";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const SideNavbar = () => {
    const [logo, setLogo] = useState("/assets/images/buy_followers_logo.svg");
    const [navbarData, setNavbarData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [productNames, setProductNames] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    const fetchData = async () => {
        try {
            const logoPath = await getSettingByKey("logo");
            if (logoPath) {
                setLogo(logoPath);
            }
            const fetchedNavbarData = await navbar();
            if (fetchedNavbarData?.data) {
                setNavbarData(fetchedNavbarData.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleLogout = async () => {
        await logout();
        localStorage.removeItem("token");
        setUserDetails(null);
        window.location.href = "/authentication";
    };

    const fetchUserDetails = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const response = await getUserDetails(token);
                if (response && response.data && response.data.name) {
                    setUserDetails(response.data);
                } else {
                    console.error("User details do not contain a name");
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        fetchUserDetails();
    }, []);
    return (
        <>
            <Sheet key={"left"}>
                <SheetTrigger asChild>
                    {/* <Button variant="outline">Open</Button> */}
                    <AlignJustify className="size-8 md:size-12 text-center text-[#D52E9C] cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle className="text-white text-[14px] text-center flex flex-col min-[532px]:flex-row justify-between items-center gap-8">
                            <img
                                src={logo}
                                alt="logo-v1"
                                className="w-44 lg:w-48 xl:w-64 h-auto"
                            />

                            {/* <a
                                href="/authentication"
                                className="bg-[#D52E9C] hover:bg-[#D52E9C] p-2 rounded-lg border border-white text-white font-semibold transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                            >
                                My Account
                            </a> */}

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <a
                                        href="/authentication"
                                        className="bg-[#D52E9C] hover:bg-[#f23bb5] p-2 rounded-lg text-white text-[14px] font-semibold flex"
                                    >
                                        {isLoading
                                            ? "Loading..."
                                            : userDetails?.name
                                            ? `Hello, ${userDetails.name}`
                                            : "My Account"}
                                    </a>
                                </DropdownMenuTrigger>
                                {token && (
                                    <DropdownMenuContent className="">
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem>
                                            <a
                                                href="/order-history"
                                                className="font-semibold cursor-pointer"
                                            >
                                                Order History
                                            </a>
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            <a
                                                href="/forgot"
                                                className="font-semibold cursor-pointer"
                                            >
                                                Forgot Password
                                            </a>
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            onClick={handleLogout}
                                            className="font-semibold cursor-pointer"
                                        >
                                            Logout
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                )}
                            </DropdownMenu>
                        </SheetTitle>
                        <SheetDescription className="pt-8 text-[16px] text-[#D52E9C]"></SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="w-full h-[359px]">
                        <div className="flex flex-col items-center py-4">
                            {navbarData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-full text-[#D52E9C]`}
                                >
                                    {item.sub_navbarLinks ? (
                                        <Accordion type="single" collapsible>
                                            <AccordionItem
                                                value={`item-${index + 1}`}
                                            >
                                                <AccordionTrigger className="text-[16px] font-semibold text-[#D52E9C]">
                                                    {item.title}
                                                </AccordionTrigger>
                                                {item.sub_navbarLinks.map(
                                                    (subItem, index) => (
                                                        <AccordionContent
                                                            key={index}
                                                        >
                                                            <a
                                                                href={
                                                                    subItem.href
                                                                }
                                                                className={`text-[14px] font-medium`}
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                            <hr className="mt-2" />
                                                        </AccordionContent>
                                                    )
                                                )}
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`text-[16px] font-semibold`}
                                        >
                                            {item.title}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default SideNavbar;
