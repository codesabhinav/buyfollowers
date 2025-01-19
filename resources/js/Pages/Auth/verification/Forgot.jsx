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
import Footer from "../../home/Footer";
import NewNavbar from "../../home/NewNavbar";
import { useState } from "react";
import OtpVerify from "./OtpVerify";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
});

const Forgot = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });
    const [showOtpPage, setShowOtpPage] = useState(false);

    const handleLogin = (values) => {
        console.log(values);
        setShowOtpPage(true);
    };

    return (
        <>
            {showOtpPage ? (
                <OtpVerify />
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                        Forgot Password
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

                            {/* <div className="flex items-center justify-between max-[333px]:text-xs text-sm text-gray-600 font-semibold">
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
                                <a
                                            href="/forget"
                                            className="text-pink-500 hover:underline"
                                        >
                                            Forgot Password?
                                        </a>
                            </div> */}

                            <Button
                                type="submit"
                                className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                            >
                                Send Otp
                            </Button>
                        </form>
                    </Form>
                </div>
            )}
        </>
    );
};

export default Forgot;
