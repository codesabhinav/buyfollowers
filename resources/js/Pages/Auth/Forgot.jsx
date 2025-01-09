import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
});

const Forget = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const handleLogin = (values) => {
        console.log(values);
    };

    return (
        <>
            <div
                className="flex flex-col items-center min-h-screen relative bg-repeat bg-cover bg-center"
                style={{
                    backgroundImage: "url('assets/images/buy-followers.avif')",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-white/95 opacity-95"></div>

                <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen pt-4">
                    <Navbar />

                    <div className="flex-1 w-full md:w-[85%] px-2 md:px-0 flex items-center justify-center mt-12">
                        <div className="flex items-center justify-center w-full min-[449px]:w-[434px] lg:w-full">
                            <div className="hidden lg:block w-full">
                                <img
                                    src="assets/images/constact-buyfollowers.jpg"
                                    alt="Side Image"
                                    className="w-[534px] h-[634px] object-contain mix-blend-darken"
                                />
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                                <h2 className="text-2xl font-semibold text-center text-pink-500 mb-6">
                                    Reset Password
                                </h2>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(
                                            handleLogin
                                        )}
                                        className="space-y-6"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Email
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="example@gmail.com"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="flex items-center justify-end max-[333px]:text-xs text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="rememberMe"
                                                />
                                                <label htmlFor="rememberMe">
                                                    Remember me
                                                </label>
                                            </div>
                                            {/* <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                login?
                            </a> */}
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-transparent border border-pink-500 text-black font-semibold text-lg hover:bg-pink-600 hover:text-white h-12"
                                        >
                                            Send Otp
                                        </Button>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Forget;
