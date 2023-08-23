import LoanCalculator from "@/component/Calculators/LoanCalculator";
import Layout from "@/component/Layout";
import SidebarLayout from "@/component/Layout/SidebarLayout";

import React from "react";

const homeLoaEmiCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Home Loan EMI Calculator", pathname: "/" }}>
      <LoanCalculator />
    </SidebarLayout>
  );
};

export default homeLoaEmiCalculator