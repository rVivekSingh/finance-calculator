import Container from "@/component/Container";
import Layout from "@/component/Layout/Layout";
import React from "react";

const about = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/about" }}>
      <Container>About</Container>
    </Layout>
  );
};

export default about;
