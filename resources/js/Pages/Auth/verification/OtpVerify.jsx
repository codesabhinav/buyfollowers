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


const formSchema = z.object({
    otp1: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
    otp2: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
    otp3: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
    otp4: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
    otp5: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
    otp6: z
        .string()
        .length(1, { message: "OTP must be exactly 1 digit." })
        .regex(/^\d$/, { message: "OTP must only contain digits." }),
});

const OtpVerify = ({ email }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp1: "",
            otp2: "",
            otp3: "",
            otp4: "",
            otp5: "",
            otp6: "",
        },
    });

    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);
    const [changePassword, setChangePassword] = useState(false);
    const [apiMessage, setApiMessage] = useState("🎉 Check your inbox! We’ve sent an OTP to your email. 📧");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && /^\d$/.test(value)) {
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    useEffect(() => {
        const otpFilled = Object.values(form.getValues()).every(
            (value) => value.length === 1
        );
        if (otpFilled) {
            setLoading(true);
            const timer = setTimeout(() => {
                form.handleSubmit(handleVerifyOtp)();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [form.getValues()]);

    useEffect(() => {
        if (apiMessage) {
            const timer = setTimeout(() => setApiMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [apiMessage]);

    const handleVerifyOtp = async (values) => {
        const otp = Object.values(values).join("");
        try {
            const response = await verifyOtp(email, otp);
            setIsSuccess(true);
            setApiMessage(response.message);
            setLoading(false);
            setChangePassword(true);
        } catch (error) {
            const errorMessage =
            error.response?.data?.message || "❌ Something went wrong. Please try again.";
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
                            onSubmit={form.handleSubmit(handleVerifyOtp)}
                            className="space-y-6"
                        >
                            <div className="flex flex-row gap-2 justify-center">
                                {/* 6 OTP input fields in a row */}
                                {Array.from({ length: 6 }).map((_, index) => {
                                    const fieldName = `otp${index + 1}`;
                                    return (
                                        <FormField
                                            key={fieldName}
                                            control={form.control}
                                            name={fieldName}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl className="flex items-center">
                                                        <Input
                                                            {...field}
                                                            ref={(el) =>
                                                            (inputRefs.current[
                                                                index
                                                            ] = el)
                                                            }
                                                            value={
                                                                field.value ||
                                                                ""
                                                            }
                                                            onChange={(e) => {
                                                                field.onChange(
                                                                    e
                                                                );
                                                                handleChange(
                                                                    e,
                                                                    index
                                                                );
                                                            }}
                                                            onKeyDown={(e) =>
                                                                handleBackspace(
                                                                    e,
                                                                    index
                                                                )
                                                            }
                                                            maxLength={1}
                                                            placeholder="-"
                                                            className="w-12 text-center"
                                                            autoFocus={
                                                                index === 0
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    );
                                })}
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
