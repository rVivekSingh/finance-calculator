import SipCalculator from "@/component/Home/SipCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <SidebarLayout seo={{ title: "Sip Calculator", pathname: "/" }}>
      <SipCalculator />
    </SidebarLayout>
  );
};
export default Home;
