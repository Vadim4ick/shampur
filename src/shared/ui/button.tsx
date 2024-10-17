import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center w-full gap-2 rounded-[10px] text-[14px] font-[700] leading-[19px] transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#D13A3A] text-white gap-2",
        revert: "bg-transparent border border-[#D13A3A] text-[#D13A3A]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      addonLeft,
      addonRight,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {addonLeft && <span>{addonLeft}</span>}

        {children}

        {addonRight && <span>{addonRight}</span>}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/shared/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center relative justify-center z-10 whitespace-nowrap rounded-md transition-all outline-none disabled:pointer-events-none disabled:opacity-20",
//   {
//     variants: {
//       variant: {
//         fill: "bg-violet-secondary body-xl-bold before:transition-all before:absolute before:z-[-1] before:rounded-md before:top-0 before:left-0 before:w-full before:h-full before:violet-primary before:opacity-0 [@media(any-hover:hover){&:hover}]:before:opacity-100 text-white",
//         inverted:
//           "bg-violet-secondary body-xl-bold before:transition-all before:absolute before:z-[-1] before:rounded-md before:top-0 before:left-0 before:w-full before:h-full before:violet-primary before:opacity-100 [@media(any-hover:hover){&:hover}]:before:opacity-0 text-white",
//         reset: "",
//       },

//       size: {
//         "very-small": "h-[29px]",
//         small: "h-[40px]",
//         large: "h-[54px] w-full",
//         reset: "",
//       },
//     },
//     defaultVariants: {
//       variant: "fill",
//       size: "large",
//     },
//   },
// );
