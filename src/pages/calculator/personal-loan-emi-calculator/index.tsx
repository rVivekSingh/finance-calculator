import LoanCalculator from "@/component/Home/LoanCalculator";
import Layout from "@/component/Layout/Layout";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import { NextPage } from "next";
import React from "react";

const EmiCalculator: NextPage = () => {
  return (
    <SidebarLayout seo={{ title: "Loan Calculator", pathname: "/" }}>
      <LoanCalculator />
    </SidebarLayout>
  );
};
export default EmiCalculator;
