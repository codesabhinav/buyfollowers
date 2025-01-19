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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Update the schema without using getValues in refine
const formSchema = z.object({
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z
        .string()
        .min(2, { message: "Confirm Password must be at least 2 characters." }),
});

const ChangePassword = () => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [loginSuccessMessage, setLoginSuccessMessage] = useState("");

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

    const [showOtpPage, setShowOtpPage] = useState(false);

    // Custom validation for matching passwords
    const handleLogin = (values) => {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
            return;
        }
        console.log(values);
        setShowOtpPage(true);
    };

    return (
        <>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
                    Change Password
                </h2>
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
