import navbarList from "../json/NavbarList.json";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideNavbar from "./SideNavbar";
import { ChevronDown, ChevronUp } from "lucide-react";

const NewNavbar = ({ navbarstyle }) => {
    return (
        <div
            className={`flex justify-between items-center mt-2 w-full h-16 bg-white/45 rounded-full text-black p-9 ${
                navbarstyle && navbarstyle
            }`}
        >
            <div className="mt-2">
                <img
                    src="assets/images/buy_followers_logo.svg"
                    alt="logo-v1"
                    className="w-44 md:w-60 h-auto"
                />
            </div>

            <div className="flex items-center gap-6">
                {navbarList.map((item, index) => (
                    <>
                        <FlyoutLink key={index} item={item} />
                    </>
                ))}
            </div>

            <div className="flex lg:hidden">
                <SideNavbar />
            </div>

            <a
                href="/authentication"
                className="bg-pink-600 hover:bg-pink-500 p-2 rounded-lg text-white font-semibold hidden lg:flex"
            >
                My Account
            </a>
        </div>
    );
};

const FlyoutLink = ({ item }) => {
    const [open, setOpen] = useState(false);

    // Check if the item has sub-navigation links
    const hasSubNav = item?.sub_navbarLinks?.length > 0;

    const showFlyout = hasSubNav && open;

    // Split sub-navigation items into chunks of 10
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

                        {/* Dynamically render sub-navigation links */}
                        {/* {hasSubNav && (
                            <div className="w-64 bg-white p-6 shadow-xl rounded-lg">
                                {item.sub_navbarLinks.map(
                                    (subItem, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="space-y-3 hover:bg-pink-200/25 px-2 py-2 rounded-md"
                                        >
                                            <a
                                                href={subItem.href}
                                                className="block text-sm"
                                            >
                                                {subItem.title}
                                            </a>
                                        </div>
                                    )
                                )}
                            </div>
                        )} */}
                        {hasSubNav && (
                            <div
                                className={`${
                                    item.sub_navbarLinks.length > 10
                                        ? "w-full"
                                        : "w-64"
                                }  bg-white p-6 shadow-xl rounded-lg flex`}
                            >
                                {subNavChunks.map((chunk, chunkIndex) => (
                                    <div
                                        key={chunkIndex}
                                        className={`flex flex-col ${
                                            chunkIndex > 0
                                                ? "ml-6 border-l-2"
                                                : ""
                                        }`}
                                    >
                                        {chunk.map((subItem, subIndex) => (
                                            <>
                                                <div
                                                    key={subIndex}
                                                    className={`space-y-3 hover:bg-pink-200/25 px-2 py-2 rounded-md`}
                                                >
                                                    <a
                                                        href={subItem.href}
                                                        className="block text-sm"
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                </div>
                                            </>
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
