import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...rest }) => {
  let classes = "px-4 py-3 rounded-md font-semibold";
  switch (variant) {
    case "secondary":
      classes += " bg-orange-500 text-white";
      break;
    case "outline":
      classes += " border border-blue-500 text-blue-500";
      break;
    default:
      classes += " bg-blue-500 text-white";
      break;
  }

  return <button className={`${classes} ${className} disabled:opacity-30 disabled:cursor-not-allowed`} {...rest} />;
};

export default Button;
