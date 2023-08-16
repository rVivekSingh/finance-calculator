import LoanCalculator from "@/component/Calculators/LoanCalculator";
import Layout from "@/component/Layout/Layout";
import SidebarLayout from "@/component/Layout/SidebarLayout";

import React from "react";

const emiCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Loan Calculator", pathname: "/" }}>
      <LoanCalculator />
    </SidebarLayout>
  );
};
export default emiCalculator;
