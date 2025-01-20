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
import { Eye, EyeOff } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";
import { signup } from "../../Helper/api.js";


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "Confirm Password must be at least 6 characters.",
    }),
});

const Signup = ({ switchTab }) => {

    const [apiMessage, setApiMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
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

    const [isPasswordVisible, setPasswordVisible] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            password: !prevState.password,
        }));
    };

    const toggleConfirmPasswordVisibility = () => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            confirmPassword: !prevState.confirmPassword,
        }));
    };
    const handleSignup = async (values) => {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
            return;
        }
        try {
            const payload = {
                name: values.name,
                email: values.email,
                password: values.password,
                password_confirmation: values.confirmPassword,
            };
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }

            const response = await signup(payload);
            setIsSuccess(true);
            setApiMessage(response.message);
            window.location.href = "/";
            if (response?.token) {
                localStorage.setItem("token", response.token);
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An unexpected error occurred.";
            setIsSuccess(false);
            setApiMessage(errorMessage);
        }
    };

    return (
        <>
            <div className="bg-white p-7 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-1">
                    Signup
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
                        onSubmit={form.handleSubmit(handleSignup)}
                        className="space-y-6"
                    >
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="buyfollowers@gmail.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
                                                        isPasswordVisible.password
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
                                                    {isPasswordVisible.password ? (
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
                                                        isPasswordVisible.confirmPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="XXXXXXXX"
                                                    {...field}
                                                />
                                                <div
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                    onClick={
                                                        toggleConfirmPasswordVisibility
                                                    }
                                                >
                                                    {isPasswordVisible.confirmPassword ? (
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

                        <div className="flex items-center justify-start text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="rounded-sm ring-0 focus:ring-0 checked:bg-pink-400 hover:checked:bg-pink-500 cursor-pointer"
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="cursor-pointer font-semibold"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                        >
                            Sign-up
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 font-semibold cursor-pointer">
                            Already have an account?{" "}
                            <span
                                onClick={() => switchTab("login")}
                                className="text-pink-500 hover:underline"
                            >
                                Click here to Login
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;
