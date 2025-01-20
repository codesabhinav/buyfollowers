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
import { useState , useEffect} from "react";
import { Eye, EyeOff } from "lucide-react";
import { changePassword } from "../../../Helper/api.js";

const formSchema = z.object({
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z
        .string()
        .min(6, { message: "Confirm Password must be at least 6 characters." }),
});

const ChangePassword = ({ email }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [apiMessage, setApiMessage] = useState("✅ OTP verified successfully!");
    const [isSuccess, setIsSuccess] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    useEffect(() => {
        if (apiMessage) {
            const timer = setTimeout(() => setApiMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [apiMessage]);

    const [showOtpPage, setShowOtpPage] = useState(false);

    const handleLogin = async (values) => {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
            return;
        }
        try {
            const payload = {
                email: email,
                password: values.password,
                password_confirmation: values.confirmPassword,
            };
            const response = await changePassword(payload);
            setIsSuccess(true);
            setApiMessage(response.message || "✅ Password changed successfully!");
            window.location.href = "/";
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "❌ Something went wrong. Please try again.";
            setIsSuccess(false);
            setApiMessage(errorMessage);
        }
        setShowOtpPage(true);
    };

    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                    Change Password
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
                        onSubmit={form.handleSubmit(handleLogin)}
                        className="space-y-6"
                    >
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        isPasswordVisible
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="XXXXXXXX"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        isPasswordVisible
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="XXXXXXXX"
                                                    {...field}
                                                />

                                                <div
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                >
                                                    {isPasswordVisible ? (
                                                        <EyeOff
                                                            size={22}
                                                            className="stroke-pink-500"
                                                        />
                                                    ) : (
                                                        <Eye
                                                            size={22}
                                                            className="stroke-pink-500"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                        >
                            Change Password
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
};

export default ChangePassword;
