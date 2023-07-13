import type { ReactNode, MouseEventHandler, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

function Button({
  children,
  onClick,
  variant = "contained",
  size = "sm",
  color = "primary",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  iconOnly = false,
  ...rest
}: ButtonProps) {
  let paddingClasses, colorClasses;
  const textClasses = iconOnly ? "" : "text-md";

  if (iconOnly) {
    paddingClasses = "p-2";
  } else {
    switch (size) {
      case "md":
        paddingClasses = "px-4 py-2";
        break;
      case "lg":
        paddingClasses = "px-6 py-3";
        break;
      default:
        paddingClasses = "px-2 py-1";
    }
  }

  switch (variant) {
    case "outlined":
      colorClasses = disabled
        ? color === "primary"
          ? "border-2 text-red-300 border-red-300 cursor-not-allowed"
          : "border-2 text-neutral-300 border-neutral-300 cursor-not-allowed"
        : color === "primary"
        ? "border-2 border-red-500 text-red-500 hover:text-neutral-50 focus:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-red-500 shadow dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]"
        : "border-2 border-neutral-50 text-neutral-50 hover:text-red-500 focus:bg-neutral-200 focus:ring-2 focus:ring-neutral-50 focus:ring-opacity-50 hover:bg-neutral-50 shadow-md";
      break;
    case "text":
      colorClasses = disabled
        ? color === "primary"
          ? "text-red-300 cursor-not-allowed"
          : "text-neutral-300 cursor-not-allowed"
        : color === "primary"
        ? "text-red-500 hover:text-red-700 dark:hover:text-red-300"
        : "text-neutral-50 hover:text-neutral-200";
      break;
    default:
      colorClasses = disabled
        ? color === "primary"
          ? "bg-red-200 text-red-300 cursor-not-allowed"
          : "bg-neutral-200 text-neutral-300 cursor-not-allowed"
        : color === "primary"
        ? "bg-red-500 text-neutral-50 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow dark:shadow-[0px_1px_3px_rgba(255,255,255,0.1),0px_1px_2px_-1px_rgba(255,255,255,0.1)]"
        : "bg-neutral-50 text-red-500 hover:bg-neutral-200 focus:ring-2 focus:ring-neutral-50 focus:ring-opacity-50 shadow-md";
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
      {startIcon && (
        <span className={`${iconOnly ? "" : "mr-2"}`}>{startIcon}</span>
      )}
      {!iconOnly && children}
      {endIcon && (
        <span className={`${iconOnly ? "" : "ml-2"}`}>{endIcon}</span>
      )}
    </button>
  );
}

export default Button;
