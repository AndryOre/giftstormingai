import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
}

function Button({
  children,
  onClick,
  variant = "contained",
  size = "md",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  let paddingClasses, textClasses, colorClasses;

  switch (size) {
    case "sm":
      paddingClasses = "px-2 py-1";
      textClasses = "text-base";
      break;
    case "lg":
      paddingClasses = "px-6 py-3";
      textClasses = "text-lg";
      break;
    default:
      paddingClasses = "px-4 py-2";
      textClasses = "text-md";
  }

  switch (variant) {
    case "outlined":
      colorClasses = disabled
        ? "bg-gray-200 cursor-not-allowed"
        : "border-2 border-red-500 text-red-500 hover:bg-red-700 hover:text-neutral-50 dark:hover:bg-red-300 dark:hover:text-neutral-950";
      break;
    case "text":
      colorClasses = disabled
        ? "bg-gray-200 cursor-not-allowed"
        : "text-red-500 hover:text-red-700 dark:hover:text-red-300";
      break;
    default:
      colorClasses = disabled
        ? "bg-gray-200 cursor-not-allowed"
        : "bg-red-500 text-neutral-50 hover:bg-red-700 active:bg-red-900 dark:active:bg-red-200";
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded font-lato ${paddingClasses} ${textClasses} ${colorClasses} ${
        fullWidth ? "w-full" : ""
      } transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
      disabled={disabled}
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}

export default Button;
