import React from "react";

interface SectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ children, title, className }: SectionProps) => {
  return (
    <section className={`pt-6 lg:pt-14 w-full ${className || ""}`}>
      {title && (
        <h1
          className={`font-medium pb-6 text-slate-800 dark:text-gray-200 text-xl lg:text-3xl`}
        >
          {title}
        </h1>
      )}

      <div>{children}</div>
    </section>
  );
};

export default Section;
