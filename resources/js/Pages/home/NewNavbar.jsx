import navbarList from "../json/NavbarList.json";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideNavbar from "./SideNavbar";
import { ChevronDown, ChevronUp, CircleUser } from "lucide-react";
import {
    getSettingByKey,
    products,
    navbar,
    getUserDetails,
    logout,
} from "../../Helper/api";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";

const NewNavbar = ({ navbarstyle }) => {
    const [logo, setLogo] = useState("assets/images/buy_followers_logo.svg");
    const [navbarData, setNavbarData] = useState([]);
    const [productNames, setProductNames] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token"));

    const fetchData = async () => {
        try {
            const logoPath = await getSettingByKey("logo");
            if (logoPath) {
                setLogo(logoPath);
            }
            const fetchedProducts = await products([2, 3]);
            if (fetchedProducts) {
                setProductNames(fetchedProducts.data);
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
        <div
            className={`flex justify-between items-center mt-2 w-full h-16 bg-white/45 rounded-full text-black p-9 ${
                navbarstyle && navbarstyle
            }`}
        >
            <div className="mt-2">
                <img
                    src={logo}
                    alt="logo-v1"
                    className="w-44 lg:w-48 xl:w-64 h-auto"
                />
            </div>

            <div className="hidden lg:flex items-center gap-4">
                {navbarData.map((item) => (
                    <FlyoutLink key={item.id} item={item} />
                ))}
            </div>

            <div className="flex lg:hidden">
                <SideNavbar />
            </div>

            <div className="hidden lg:flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {/* <Button variant="outline">Open</Button> */}
                        {/* <CircleUser className="text-[#D52E9C]" /> */}
                        <a
                            href="/authentication"
                            className="bg-[#D52E9C] hover:bg-[#f23bb5] p-2 rounded-lg text-white text-[14px] font-semibold hidden lg:flex"
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
                            {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem>
                                <a href="/forgot" className="font-semibold cursor-pointer">Forgot Password</a>
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem onClick={handleLogout} className="font-semibold cursor-pointer">
                                Logout
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    )}
                </DropdownMenu>

                {/* {token && (
                    <button
                        onClick={handleLogout}
                        className="bg-[#D52E9C] hover:bg-[#f23bb5] p-2 rounded-lg text-white text-[14px] font-semibold"
                    >
                        Logout
                    </button>
                )}

               */}
            </div>
        </div>
    );
};

const FlyoutLink = ({ item }) => {
    const [open, setOpen] = useState(false);
    const hasSubNav = item?.sub_navbarLinks?.length > 0;
    const showFlyout = hasSubNav && open;
    const chunkSize = 10;
    const subNavChunks = hasSubNav
        ? item.sub_navbarLinks.reduce((result, value, index) => {
              const chunkIndex = Math.floor(index / chunkSize);
              if (!result[chunkIndex]) {
                  result[chunkIndex] = [];
              }
              result[chunkIndex].push(value);
              return result;
          }, [])
        : [];

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <a href={item.href} className="relative text-[#474747]">
                <span className="flex items-center gap-0.5">
                    {item.title}
                    {item.sub_navbarLinks && (
                        <>{open === true ? <ChevronUp /> : <ChevronDown />}</>
                    )}
                </span>
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </a>

            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 bg-white text-black rounded-lg z-30"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                        {hasSubNav && (
                            <div
                                className={`${
                                    item.sub_navbarLinks.length > 10
                                        ? "w-full"
                                        : "w-full"
                                }  bg-white p-6 shadow-xl rounded-lg flex`}
                                style={{
                                    maxHeight: "550px",
                                    overflowY: "auto",
                                    scrollbarWidth: "thin",
                                    scrollbarColor: "#f099bf transparent",
                                }}
                            >
                                {subNavChunks.map((chunk, chunkIndex) => (
                                    <div
                                        key={`chunk-${chunkIndex}`}
                                        className={`flex flex-col ${
                                            chunkIndex > 0
                                                ? "ml-6 border-l-2"
                                                : ""
                                        }`}
                                    >
                                        {chunk.map((subItem, index) => (
                                            <div
                                                key={subItem.id}
                                                className={`space-y-3 hover:bg-pink-200/25 px-2 py-2 rounded-md`}
                                            >
                                                <a
                                                    href={subItem.href}
                                                    className="block text-sm w-[300px] max-w-fit min-w-fit"
                                                >
                                                    {subItem.title}
                                                    {index <
                                                        chunk.length - 1 && (
                                                        <hr className="mt-2" />
                                                    )}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NewNavbar;
