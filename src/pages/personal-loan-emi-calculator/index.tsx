import LoanCalculator from "@/component/Home/LoanCalculator";
import Layout from "@/component/Layout/Layout";
import { NextPage } from "next";
import React from "react";

const EmiCalculator: NextPage = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/" }}>
      <LoanCalculator />
    </Layout>
  );
};
export default EmiCalculator;