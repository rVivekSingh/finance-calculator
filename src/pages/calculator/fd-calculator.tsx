import FDCalculator from "@/component/Calculators/FDCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import React from "react";

const fdcalculator = () => {
  return (
    <SidebarLayout seo={{ title: "FD Calculator", pathname: "/" }}>
      <FDCalculator />
    </SidebarLayout>
  );
};

export default fdcalculator;
