import React, { ReactNode } from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return <h1 className={`font-medium ${className} text-3xl`}>{text}</h1>;
};

export default Title;
