import React, { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx"; // optional, for easier class merging

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
   size?: "sm" | "md" | "lg";
   variant?: "primary" | "secondary" | "danger" | "outline"|"ghost"; 
   // optional additional classes
}

export const Button: React.FC<ButtonProps> = ({ children, className,size = "md", variant = "primary", ...props }) => {
   const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
  };
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition-all duration-200",
         sizeClasses[size],
         variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
