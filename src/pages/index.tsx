import LoanCalculator from "@/component/Calculators/LoanCalculator";
import Container from "@/component/Container";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import Section from "@/component/Section";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <SidebarLayout seo={{ title: "Loan EMI Calculator", pathname: "" }}>
      <LoanCalculator />
    </SidebarLayout>
  );
};

export default Home;
