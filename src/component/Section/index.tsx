import React, { ReactNode } from "react";

interface SectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ children, title, className }: SectionProps) => {
  return (
    <section className="pt-10 lg:pt-14 w-full">
      {title && (
        <h1 className={`font-medium pb-6 text-gray-200 ${className} text-3xl`}>
          {title}
        </h1>
      )}

      <div>{children}</div>
    </section>
  );
};

export default Section;
