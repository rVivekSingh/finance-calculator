import Container from "@/component/Container";
import LoanCalculator from "@/component/Home/LoanCalculator";
import SipCalculator from "@/component/Home/SipCalculator";
import Layout from "@/component/Layout/Layout";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/" }}>
      <SipCalculator />
    </Layout>
  );
};

export default Home;
