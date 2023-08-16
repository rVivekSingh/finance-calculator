import React from "react";
import { BannerImage } from "../BannerImage";
import Section from "../Section";

const BannerSection = () => {
  return (
    <Section>
      <BannerImage imageUrl="/images/home-banner-image.jpeg" />
    </Section>
  );
};

export default BannerSection;
