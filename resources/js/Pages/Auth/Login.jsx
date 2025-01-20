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
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin, login } from "../../Helper/api.js";

import "./login.css";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password is Required.",
    }),
});

const Login = ({ switchTab }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (apiMessage) {
            const timer = setTimeout(() => setApiMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [apiMessage]);



    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleSuccess = async (response) => {
        try {
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }
            const data = await googleLogin(response.credential);
            localStorage.setItem("token", data.token);
            setApiMessage(data.message || "Login Successful!");
            setIsSuccess(true);
            window.location.href = "/";
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An unexpected error occurred.";
            setIsSuccess(false);
            setApiMessage(errorMessage);
        }
    };

    const handleFailure = (response) => {
        console.error(response);
        setApiMessage("Google login failed. Please try again.");
    };

    const handleLogin = async (values) => {
        try {
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }
            const payload = {
                email: values.email,
                password: values.password,
            };
            const response = await login(payload);
            setIsSuccess(true);
            setApiMessage(response.message || "Login Successful!");
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
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                    Login
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
                        className="space-y-6">
                        <div className="flex flex-col gap-4">
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
                            <a
                                href="/forgot"
                                className="text-pink-500 hover:underline"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                        >
                            Login
                        </Button>
                    </form>
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                        cookiePolicy={"single_host_origin"}
                    ></GoogleLogin>

                    {/* New link for existing users to login */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 font-semibold cursor-pointer">
                            Don't have an account?{" "}
                            <span
                                onClick={() => switchTab("signup")}
                                className="text-pink-500 hover:underline"
                            >
                                Click here to Signup
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;
