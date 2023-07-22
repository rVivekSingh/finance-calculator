import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="container md:max-w-3xl lg:max-w-6xl xl:max-w-7xl flex items-center flex-wrap justify-between mx-auto px-[15px]">
      {children}
    </div>
  );
};

export default Container;
