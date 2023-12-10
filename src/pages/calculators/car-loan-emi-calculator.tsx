import CarLoanEmiCalculator from "@/component/Calculators/CarLoanEmiCalculator";
import Layout from "@/component/Layout";
import SidebarLayout from "@/component/Layout/SidebarLayout";

import React from "react";

const homeLoaEmiCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "Car Loan EMI Calculator", pathname: "/" }}>
      <CarLoanEmiCalculator />
    </SidebarLayout>
  );
};

export default homeLoaEmiCalculator