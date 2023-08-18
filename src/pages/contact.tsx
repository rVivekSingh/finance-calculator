import { BannerImage } from "@/component/BannerImage";
import FormSection from "@/component/Contact/FormSection";
import Container from "@/component/Container";
import Layout from "@/component/Layout";
import React from "react";

const contact = () => {
  return (
    <Layout seo={{ title: "Contact | Emi Calculators", pathname: "/contact" }}>
      <Container>
        <BannerImage
          className="mt-8 lg:mt-12"
          imageUrl="/images/contact-banner-image.png"
        />

        <FormSection />
      </Container>
    </Layout>
  );
};

export default contact;
