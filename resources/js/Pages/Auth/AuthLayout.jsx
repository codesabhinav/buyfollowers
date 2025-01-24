import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";
import NewNavbar from "../home/NewNavbar";
import { useState } from "react";

const AuthLayout = () => {
    const [value, setValue] = useState("login");
    return (
        // <div className="flex flex-col items-center min-h-screen relative">
        //     <div
        //         className="absolute inset-0 bg-cover bg-center z-0"
        //         style={{
        //             backgroundImage: "url('assets/images/buy-followers.avif')",
        //             backgroundSize: "auto",
        //             backgroundPosition: "center",
        //             backgroundRepeat: "repeat",
        //             filter: "blur(2px)", // Apply blur only to background image
        //         }}
        //     ></div>
        //     <div className="absolute inset-0 bg-pink-200/65 opacity-95"></div>

        <div className="relative z-10 flex flex-col items-center min-h-screen bg-pink-200/45">
            <div className="w-full md:w-[85%] mt-8">
                <NewNavbar />
            </div>
            <div className="flex-1 w-full md:w-[85%] px-2 md:px-0 py-12 flex items-center justify-center mt-12">
                <div className="flex items-center justify-center w-full min-[449px]:w-[434px] lg:w-full">
                    {/* Side Image for Larger Screens */}
                    <div className="hidden lg:block w-full">
                        <img
                            src="assets/images/constact-buyfollowers.jpg"
                            alt="Side Image"
                            className="w-[634px] h-[634px] object-contain mix-blend-darken"
                        />
                    </div>

                    {/* Tabs for Login/Signup */}
                    <Tabs
                        value={value}
                        onValueChange={setValue}
                        className="w-full lg:w-[840px]"
                    >
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login" className="text-xl">
                                Login
                            </TabsTrigger>
                            <TabsTrigger value="signup" className="text-xl">
                                Signup
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Login switchTab={(tab) => setValue(tab)} />
                        </TabsContent>
                        <TabsContent value="signup">
                            <Signup switchTab={(tab) => setValue(tab)} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default AuthLayout;
