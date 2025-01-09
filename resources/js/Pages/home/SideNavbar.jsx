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
            <Sheet>
                <SheetTrigger asChild>
                    {/* <Button variant="outline">Open</Button> */}
                    <AlignJustify className="size-8 md:size-12 text-center text-white cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-white text-3xl text-center">
                            <Button className="bg-transparent border border-white text-white font-semibold transition-all ease-in-out delay-150 hover:bg-transparent hover:-translate-y-1 hover:scale-110">
                                My Account
                            </Button>
                        </SheetTitle>
                        <SheetDescription className="pt-8 text-white">
                            Make changes to your profile here. Click save when
                            you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="w-full h-[359px]">
                        <div className="flex flex-col items-center py-4">
                            {navbarLinks.map((item, index) => (
                                <div
                                    key={index}
                                    className={`w-full text-white`}
                                >
                                    {item.sub_navbarLinks ? (
                                        <Accordion type="single" collapsible>
                                            <AccordionItem
                                                value={`item-${index + 1}`}
                                            >
                                                <AccordionTrigger className="text-xl font-semibold">
                                                    {item.title}
                                                </AccordionTrigger>
                                                {item.sub_navbarLinks.map(
                                                    (subItem, index) => (
                                                        <AccordionContent
                                                            key={index}
                                                        >
                                                            <a
                                                                href="/about"
                                                                className={`text-base font-medium`}
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
                                            className={`text-xl font-semibold`}
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
