import React from "react";
import { BannerImage } from "../BannerImage";
import Section from "../Section";

const BannerSection = () => {
  return (
    <Section>
      <BannerImage imageUrl="/images/about-banner-image.webp" />
    </Section>
  );
};

export default BannerSection;
