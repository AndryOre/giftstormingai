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
  size = "sm",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  let paddingClasses, textClasses, colorClasses;

  switch (size) {
    case "md":
      paddingClasses = "px-4 py-2";
      textClasses = "text-lg";
      break;
    case "lg":
      paddingClasses = "px-6 py-3";
      textClasses = "text-xl";
      break;
    default:
      paddingClasses = "px-2 py-1";
      textClasses = "text-base";
  }

  switch (variant) {
    case "outlined":
      colorClasses = disabled
        ? "border-2 text-red-300 border-red-300 cursor-not-allowed"
        : "border-2 border-red-500 text-red-500 hover:text-neutral-50 focus:bg-red-700 focus:text-neutral-50 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-red-500 shadow dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]";
      break;
    case "text":
      colorClasses = disabled
        ? "text-red-300 cursor-not-allowed"
        : "text-red-500 hover:text-red-700 dark:hover:text-red-300";
      break;
    default:
      colorClasses = disabled
        ? "bg-red-200 text-red-300 cursor-not-allowed"
        : "bg-red-500 text-neutral-50 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]";
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded font-lato ${paddingClasses} ${textClasses} ${colorClasses} ${
        fullWidth ? "w-full" : ""
      } transition duration-200 ease-in-out focus:outline-none`}
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
