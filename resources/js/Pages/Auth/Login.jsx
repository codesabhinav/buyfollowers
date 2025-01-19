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
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";
import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../Helper/api.js';
import axios from "axios";

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be a valid Email.",
    }),
    password: z.string().min(2, {
        message: "Password is Required.",
    }),
});

const Login = ({ switchTab }) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [loginSuccessMessage, setLoginSuccessMessage] = useState(""); 

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleSuccess = async (response) => {
        console.log('Google Login Success:', response);
        try {
            const data = await googleLogin(response.credential);
            console.log('Backend Response:', data);
            localStorage.setItem('token', data.token);
            setLoginSuccessMessage("Login Successfull!");
            window.location.href = "/"; 
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    const handleFailure = (response) => {
        console.error(response);
        setLoginSuccessMessage("Google login failed. Please try again.");
    };


    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                    Login
                </h2>

                {loginSuccessMessage && (
                    <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                        {loginSuccessMessage}
                    </div>
                )}

                <Form {...form}>
                    <form

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
                                href="/forget"
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
                        clientId="YOUR_GOOGLE_CLIENT_ID"
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                        render={(renderProps) => (
                            <button
                                className="w-full bg-transparent text-white text-lg bg-black hover:text-white font-semibold h-12 flex items-center justify-center gap-2 mt-4"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <img src="assets/images/google.png" alt="google" width={20} height={20} />
                                <span>Signup With Google</span>
                            </button>
                        )}
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
