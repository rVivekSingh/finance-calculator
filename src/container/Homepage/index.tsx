import BasePage from "@/component/BasePage";
import Faq from "@/component/Faq";
import SIPCalculator from "../Calculators/SipCalculator";
import React from "react";

const index = () => {
  return (
    <BasePage seo={{ title: "EmiNinja | Emi Calculators", pathname: "/" }}>
      <SIPCalculator></SIPCalculator>
      <Faq></Faq>
    </BasePage>
  );
};

export default index;
