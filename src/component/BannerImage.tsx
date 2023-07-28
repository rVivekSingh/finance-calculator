import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  className?: string;
}

export const BannerImage: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div
      className={`p-10 h-36  md:h-72 rounded-xl bg-cover bg-center bg-no-repeat ${
        className || ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};
