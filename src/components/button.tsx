import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-surface-default text-grayscaleText-negative hover:opacity-90",
        destructive:
          "bg-error-surface-default text-grayscaleText-negative hover:opacity-90",
        outline:
          "border border-grayscaleSurface-default bg-background hover:bg-[#F1F5F9]",
        secondary:
          "bg-primary-surface-subtle text-primary-surface-lighter hover:bg-secondary/80",
        ghost:
          "hover:bg-grayscaleSurface-default hover:text-grayscaleText-title",
        link: "bg-yellow-200 text-primary underline-offset-4 hover:underline",
      },
      size: {
        md: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-[52px] w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          icon &&
            "max-w-[52px] !aspect-square rounded-full px-0 py-0 flex items-center justify-center"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
