import React, { ReactNode } from "react";
import Container from "../Container";
import Seo, { ISeoProps } from "../Seo";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
  seo: ISeoProps;
}

const SidebarLayout = ({ children, seo }: Props) => {
  return (
    <>
      <Seo {...seo} />
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Header />
          <Container>
            <div className="sidebar-layout flex max-md:flex-col justify-between">
              <main>{children}</main>
              <Sidebar />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SidebarLayout;
