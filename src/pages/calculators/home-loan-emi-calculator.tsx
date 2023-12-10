import HomeLoanEmiCalculator from "@/component/Calculators/HomeLoanEmiCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";

import React from "react";

const homeLoaEmiCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Home Loan EMI Calculator", pathname: "/" }}>
      <HomeLoanEmiCalculator />
    </SidebarLayout>
  );
};

export default homeLoaEmiCalculator