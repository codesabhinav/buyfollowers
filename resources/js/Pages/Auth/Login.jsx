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
    email: z.string().min(2, {
        message: "Email must be a valid Email.",
    }),
    password: z.string().min(2, {
        message: "Password is Required.",
    }),
});

const Login = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleLogin = (values) => {
        console.log(values);
    };

    return (
        <>
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
                    <Button className="w-full bg-transparent text-white text-lg bg-black hover:text-white font-semibold h-12 flex items-center justify-center gap-2 mt-4">
                        <img
                            src="assets/images/google.png"
                            alt="google"
                            width={20}
                            height={20}
                        />
                        <span>Signup With Google</span>
                    </Button>
                    {/* New link for existing users to login */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600 font-semibold">
                            Don't have an account?{" "}
                            <a
                                href="/authentication"
                                className="text-pink-500 hover:underline"
                            >
                                Click here to Signup
                            </a>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Login;
