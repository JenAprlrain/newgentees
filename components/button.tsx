import { cn } from "@/lib/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "pt-3 uppercase transition-all duration-300 hover:text-matrix-green",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
