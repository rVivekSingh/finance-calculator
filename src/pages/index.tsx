import Container from "@/component/Container";
import BannerSection from "@/component/Home/BannerSection";
import Layout from "@/component/Layout/Layout";
import Section from "@/component/Section";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <Layout seo={{ title: "Home", pathname: "/" }}>
      <Container>
        <BannerSection />
        <Section title="Welcome to the EMI Ninja">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque
            quam hic, qui esse et aliquid iusto illum repellendus incidunt
            voluptatibus. Mollitia optio est blanditiis obcaecati magnam
            explicabo recusandae totam commodi, sed ut dolores cum illum tempore
            molestias expedita rem deserunt eos architecto distinctio labore
            fugit consequatur ipsam? Necessitatibus, facere est molestiae
            consequuntur ad accusantium tenetur consectetur maiores labore
            perferendis illo ut commodi earum neque iure itaque assumenda ipsum
            autem atque! Architecto aliquam in doloribus corrupti molestiae.
            Provident, veritatis iste repudiandae quibusdam unde cupiditate,
            molestias voluptatibus veniam sed pariatur qui tempora harum aut hic
            earum deleniti excepturi, fugit ipsam corporis!
          </p>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
