import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import React, { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

type ModifiedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

interface InputProps extends ModifiedInputProps {
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

function Input({
  value,
  onChange,
  type = "text",
  placeholder = "",
  disabled = false,
  startIcon,
  endIcon,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`relative flex w-full items-center gap-2 rounded border px-3 py-2 ${
        isFocused
          ? "border-red-500"
          : disabled
          ? "border-neutral-400 dark:border-neutral-600"
          : "border-neutral-800 dark:border-neutral-200"
      } ${
        disabled
          ? "bg-neutral-400 text-neutral-800 dark:bg-neutral-600 dark:text-neutral-200"
          : "bg-neutral-200 dark:bg-neutral-800"
      }`}
    >
      {startIcon && (
        <div
          className={`flex items-center ${
            isFocused ? "text-red-500" : "text-neutral-500"
          }`}
        >
          {React.cloneElement(startIcon, { size: 24 })}
        </div>
      )}
      <input
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeholder}
        className={`w-full rounded bg-transparent font-lato text-base 
          transition duration-200 ease-in-out placeholder:text-neutral-500 focus:outline-none`}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {isPassword && (
        <button onClick={handleShowPassword}>
          {showPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
        </button>
      )}
      {endIcon && (
        <div
          className={`flex items-center ${
            isFocused ? "text-red-500" : "text-neutral-500"
          }`}
        >
          {React.cloneElement(endIcon, { size: 24 })}
        </div>
      )}
    </div>
  );
}

export default Input;
