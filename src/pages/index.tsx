import Container from "@/component/Container";
import SipCalculator from "@/component/Home/SipCalculator";
import TitleSection from "@/component/Home/TitleSection";
import Layout from "@/component/Layout/Layout";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/" }}>
      <TitleSection />
      <SipCalculator />
    </Layout>
  );
};

export default Home;
