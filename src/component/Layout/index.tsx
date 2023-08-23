import React, { ReactNode, useEffect } from "react";
import Seo, { ISeoProps } from "../Seo";
import Footer from "./Footer";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";



interface Props {
  children: ReactNode;
  seo: ISeoProps;
}

const Layout = ({ children, seo }: Props) => {
  useEffect(() => {

    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: true,
      });
    }

  }, [])

  return (
    <>
      <Seo {...seo} />
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
      {/* <div className="w-full h-40 bg-footer-bg bg-no-repeat bg-bottom sticky -z-10 bottom-0"></div> */}
    </>
  );
};

export default Layout;
