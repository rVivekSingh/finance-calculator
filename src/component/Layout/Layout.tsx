import React, { ReactNode } from "react";
import Container from "../Container";
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
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
