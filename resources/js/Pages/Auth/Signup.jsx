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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
        message: "Confirm Password must be at least 2 characters.",
    }),
});

const Signup = ({switchTab}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

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
    const handleSignup = (values) => {
        console.log(values);
    };

    return (
        <>
            <div className="bg-white p-7 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-1">
                    Signup
                </h2>
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
                            {/* <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Forget Password?
                            </a> */}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-transparent border border-pink-500 font-semibold text-lg bg-pink-600 hover:bg-pink-500 text-white h-12"
                        >
                            Sign-up
                        </Button>
                    </form>
                    {/* <Button className="w-full bg-transparent border border-pink-500 text-black text-lg hover:bg-pink-600 hover:text-white font-semibold h-12 flex items-center justify-center gap-2 mt-4">
                        <img
                            src="assets/images/google.png"
                            alt="google"
                            width={20}
                            height={20}
                        />
                        <span>Signup With Google</span>
                    </Button> */}
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
