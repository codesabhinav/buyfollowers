import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/Components/ui/navigation-menu";
import React, { useState } from "react";
import SideNavbar from "./SideNavbar";

export const navbarLinks = [
    {
        title: "Home ",
        href: "/",
        description: "Home.",
    },
    {
        title: "Paid Products ",
        href: "#",
        description: "Paid Products.",
        sub_navbarLinks: [
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
        ],
    },
    {
        title: "Free trial ",
        href: "#",
        description: "Free trial.",
        sub_navbarLinks: [
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
        ],
    },
    {
        title: "Blog",
        href: "#",
        description: "Blog.",
        sub_navbarLinks: [
            { title: "Instagram ", href: "#", description: "Instagram." },
            { title: "Facebook", href: "#", description: "Facebook" },
            { title: "Twitter", href: "#", description: "Twitter" },
        ],
    },
    {
        title: "About-us",
        href: "#",
        description: "About us",
    },
];

const Navbar = ({ navbarstyle }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            {/* bg-gradient-to-r from-[#73c3eb] via-[#c688cd] to-[#dcd5d5] bg-clip-text text-transparent */}
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

                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex gap-4 items-center">
                        {navbarLinks.map((item, index) =>
                            item.sub_navbarLinks ? (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger className="text-black/50 font-medium">
                                        {item.title}
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul
                                            className={`p-4 w-full grid md:w-[500px] gap-4 ${
                                                item.sub_navbarLinks.length > 4
                                                    ? "md:grid-cols-[.75fr_1fr]"
                                                    : "md:grid-cols-[.11fr]"
                                            }`}
                                        >
                                            {item.sub_navbarLinks.map(
                                                (subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="flex flex-col"
                                                    >
                                                        <NavigationMenuLink
                                                            asChild
                                                            href={item.href}
                                                            className="text-lg text-black/50 font-medium"
                                                        >
                                                            {subItem.title}
                                                        </NavigationMenuLink>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="text-lg text-black/50 font-medium"
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        )}
                    </NavigationMenuList>
                </NavigationMenu>

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
        </>
    );
};

export default Navbar;
