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
import { z } from "zod";
import { useState, useEffect, useRef } from "react";
import ChangePassword from "./ChangePassword";
import { verifyOtp } from "../../../Helper/api.js";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/Components/ui/input-otp";

// Your schema definition remains the same
const formSchema = z.object({
    otp: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});

const OtpVerify = ({ email }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: "",
        },
    });

    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);
    const [changePassword, setChangePassword] = useState(false);
    const [apiMessage, setApiMessage] = useState(
        "🎉 Check your inbox! We’ve sent an OTP to your email. 📧"
    );
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (apiMessage) {
            const timer = setTimeout(() => setApiMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [apiMessage]);

    const handleVerifyOtp = async (values) => {
        setLoading(true);
        const otp = values.otp;

        try {
            const response = await verifyOtp(email, otp);
            setIsSuccess(true);
            setApiMessage(response.message);
            setChangePassword(true);
            setLoading(false);
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                "❌ Something went wrong. Please try again.";
            setLoading(false);
            setIsSuccess(false);
            setApiMessage(errorMessage);
        }
    };

    return (
        <>
            {changePassword ? (
                <ChangePassword email={email} />
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                        Verify OTP
                    </h2>

                    {apiMessage && (
                        <div
                            className={`text-center p-3 mb-4 rounded-lg ${
                                isSuccess
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {apiMessage}
                        </div>
                    )}

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleVerifyOtp)}
                            className="space-y-6"
                        >
                            <div className="flex flex-row gap-2 justify-center">
                                <FormField
                                    control={form.control}
                                    name="otp"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                One-Time Password
                                            </FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={0}
                                                        />
                                                        <InputOTPSlot
                                                            index={1}
                                                        />
                                                        <InputOTPSlot
                                                            index={2}
                                                        />
                                                        <InputOTPSlot
                                                            index={3}
                                                        />
                                                        <InputOTPSlot
                                                            index={4}
                                                        />
                                                        <InputOTPSlot
                                                            index={5}
                                                        />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Loader */}
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

export default OtpVerify;
