import NPSCalculator from "@/component/Calculators/NPSCalculator";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import React from "react";

export const npsCalculator = () => {
  return (
    <SidebarLayout seo={{ title: "NPS Calculator", pathname: "/" }}>
      <NPSCalculator />
    </SidebarLayout>
  );
};

export default npsCalculator;
