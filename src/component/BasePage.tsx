import React from "react";
import Footer from "./Footer";
import Header, { IHeaderProps } from "./Header";
import Seo, { ISeoProps } from "./Seo";

interface IProps {
  children?: React.ReactNode;
  headerProps?: IHeaderProps;
  isHomepage?: boolean;
  seo: ISeoProps;
}

const BasePage: React.FC<IProps> = ({
  children,
  headerProps,
  isHomepage,
  seo,
}) => {
  return (
    <>
      <Seo {...seo} />
      <div className="min-h-screen flex flex-col justify-between">
        <Header {...headerProps} />
        <div className={"mt-12 container p-2 "}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default BasePage;
