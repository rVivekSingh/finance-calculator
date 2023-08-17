import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  icon,
  ...rest
}) => {
  let classes = "px-4 py-2 rounded-md";
  switch (variant) {
    case "secondary":
      classes += " bg-orange-500 hover:bg-orange-400 text-white";
      break;
    case "outline":
      classes += " border border-blue-500 text-blue-500";
      break;
    default:
      classes += " bg-blue-500 hover:bg-blue-400 text-white";
      break;
  }

  return (
    <button
      className={`${classes} ${className} inline-flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed transition duration-300`}
      {...rest}
    >
      {children} {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
