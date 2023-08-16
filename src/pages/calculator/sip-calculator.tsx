import SipCalculator from "@/component/Calculators/SipCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import { NextPage } from "next";
import React from "react";

const sipcalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Sip Calculator", pathname: "/" }}>
      <SipCalculator />
    </SidebarLayout>
  );
};
export default sipcalculator;
