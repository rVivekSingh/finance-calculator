import React, { ReactNode } from "react";
import Seo, { ISeoProps } from "../Seo";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
  seo: ISeoProps;
}

const Layout = ({ children, seo }: Props) => {
  return (
    <>
      <Seo {...seo} />
      <div className="flex flex-col justify-between min-h-screen">
        <div className="w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10 " />

        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
