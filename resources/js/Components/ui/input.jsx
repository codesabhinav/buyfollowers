import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex w-full rounded-md border border-pink-500 bg-transparent px-3 py-2 text-base shadow-sm ring-1 ring-pink-400 focus:ring-1 focus:ring-pink-400 focus:ring-offset-1 focus:ring-offset-pink-400 focus:border-pink-400 focus:outline-none ",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
