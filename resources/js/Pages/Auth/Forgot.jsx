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
            <div className="relative z-10 flex flex-col items-center min-h-screen bg-pink-200/45">
                <div className="w-full md:w-[85%] mt-8">
                    <Navbar />
                </div>

                <div className="flex items-center justify-center w-full lg:w-[85%]">
                    {/* Side Image for Larger Screens */}
                    <div className="hidden lg:block w-full">
                        <img
                            src="assets/images/constact-buyfollowers.jpg"
                            alt="Side Image"
                            className="w-[634px] h-[634px] object-contain mix-blend-darken"
                        />
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                            Login
                        </h2>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleLogin)}
                                className="space-y-6"
                            >
                                <div className="flex flex-col gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
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

                                <div className="flex items-center justify-between max-[333px]:text-xs text-sm text-gray-600 font-semibold">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            className="rounded-sm ring-0 focus:ring-0 checked:bg-pink-400 hover:checked:bg-pink-500 cursor-pointer"
                                        />
                                        <label
                                            htmlFor="rememberMe"
                                            className="cursor-pointer"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <a
                                            href="/forget"
                                            className="text-pink-500 hover:underline"
                                        >
                                            Forgot Password?
                                        </a> */}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                                >
                                    Send Otp
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Forget;
