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
import { useState, useEffect } from "react";
import OtpVerify from "./OtpVerify";
import { forgotPassword } from "../../../Helper/api.js";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

const Forgot = () => {
    const [apiMessage, setApiMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(""); 

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    useEffect(() => {
        if (apiMessage) {
            const timer = setTimeout(() => setApiMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [apiMessage]);


    const handleForgot = async (values) => {
        setLoading(true)
        setTimeout(async () => {
            try {
                const response = await forgotPassword(values.email);
                setIsSuccess(true);
                setApiMessage(response.message || "🎉 Check your inbox! We’ve sent an OTP to your email. 📧");
                setEmail(values.email);
                setShowOtpPage(true);
            } catch (error) {
                const errorMessage =
                    error.response?.data?.message || "❌ Something went wrong. Please try again.";
                setIsSuccess(false);
                setApiMessage(errorMessage);
            } finally {
                setLoading(false);
            }
        }, 5000);
    };

    return (
        <>
            {showOtpPage ? (
                <OtpVerify email={email} />
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                        Forgot Password
                    </h2>
                    {apiMessage && (
                        <div
                            className={`text-center p-3 mb-4 rounded-lg ${isSuccess
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                                }`}
                        >
                            {apiMessage}
                        </div>
                    )}
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleForgot)}
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
                            {loading ? (
                                <div className="flex justify-center items-center py-4">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                                </div>
                            ) : (
                                <Button
                                    type="submit"
                                    className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                                >
                                    Send OTP
                                </Button>
                            )}
                        </form>
                    </Form>
                </div>
            )}
        </>
    );
};

export default Forgot;
