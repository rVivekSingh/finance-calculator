import BannerSection from "@/component/About/BannerSection";
import Container from "@/component/Container";
import Layout from "@/component/Layout/Layout";
import Section from "@/component/Section";
import React from "react";

const about = () => {
  return (
    <Layout seo={{ title: "EmiNinja | Emi Calculators", pathname: "/about" }}>
      <Container>
        <BannerSection />

        <Section title="About Us">
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            officiis, cumque soluta porro commodi incidunt quidem facere. Sit
            asperiores at suscipit, dolores commodi saepe quasi aut amet autem
            ad corporis quidem tempore incidunt minima optio, voluptatibus
            repellendus alias! Quia ipsam magni unde voluptatum. Vel veritatis
            quo quia, debitis fuga explicabo placeat expedita fugit repellendus
            officia laboriosam adipisci harum officiis facere sit cupiditate
            aliquid consequuntur ex rem sequi? Labore, modi tenetur cupiditate
            rem eius dicta cum ipsum expedita magnam inventore quaerat illo
            nihil distinctio delectus assumenda eum suscipit, minima sint sed.
            Hic recusandae omnis consequuntur natus quidem libero perspiciatis
            eaque animi, at harum illo magni deserunt assumenda magnam vel sint
            esse veniam? Voluptatum, aliquid quas. Doloremque minima, atque,
            beatae aspernatur vel pariatur explicabo accusantium quia,
            cupiditate esse molestiae consequatur quos. Quidem praesentium quas
            pariatur. Non perferendis nobis quia commodi optio, blanditiis
            molestias consequatur. Ducimus porro at vitae ullam quos laudantium
            pariatur.
          </p>
        </Section>
      </Container>
    </Layout>
  );
};

export default about;
