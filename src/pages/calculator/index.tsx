import SIPCalculator from "@/component/Calculators/SipCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import React from "react";

const index = () => {
  return (
    <SidebarLayout seo={{ title: "Sip Calculator", pathname: "/" }}>
      <SIPCalculator />
    </SidebarLayout>
  );
};

export default index;
