import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { navbarLinks } from "./Navbar";
import { Link } from "@inertiajs/react";
import { ScrollArea } from "@/Components/ui/scroll-area";

const SideNavbar = () => {
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
                                src="assets/images/buy_followers_logo.svg"
                                alt="logo-v1"
                                className="w-44 lg:w-48 xl:w-64 h-auto"
                            />

                            <Button className="bg-[#D52E9C] hover:bg-[#D52E9C] border border-white text-white font-semibold transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                My Account
                            </Button>
                        </SheetTitle>
                        <SheetDescription className="pt-8 text-[16px] text-[#D52E9C]"></SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="w-full h-[359px]">
                        <div className="flex flex-col items-center py-4">
                            {navbarLinks.map((item, index) => (
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
                                                                href="/about"
                                                                className={`text-[14px] font-medium`}
                                                            >
                                                                {subItem.title}
                                                            </a>
                                                        </AccordionContent>
                                                    )
                                                )}
                                            </AccordionItem>
                                        </Accordion>
                                    ) : (
                                        <a
                                            href="#"
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
