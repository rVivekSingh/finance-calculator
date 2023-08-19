import Container from "@/component/Container";
import Layout from "@/component/Layout";
import Section from "@/component/Section";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const data = [
  { name: "SIP", color: "b", link: "/calculators/sip-calculator" },
  {
    name: "Lumpsum",
    color: "c",
    link: "/calculators/lumpsum-calculator",
  },
  {
    name: "Mutual Fund",
    color: "d",
    link: "/calculators/mf-calculator",
  },
  {
    name: "PPF",
    color: "e",
    link: "/calculators/ppf-calculator",
  },
  {
    name: "FD",
    color: "d",
    link: "/calculators/fd-calculator",
  },
  {
    name: "Personal Loan",
    color: "c",
    link: "/calculators/personal-loan-emi-calculator",
  },
  {
    name: "Home Loan EMI calculator",
    color: "b",
    link: "/calculators/home-loan-emi-calculator",
  },
  ,
  {
    name: "Car Loan EMI calculator",
    color: "a",
    link: "/calculators/home-loan-emi-calculator",
  },
];

const index = () => {
  return (
    <Layout seo={{ title: "Sip Calculator", pathname: "/" }}>
      <Container>
        <Section>
          <div className="lg:px-16">
            <h1 className="text-3xl">Calculators</h1>
            <p className="text-lg max-w-xl">
              Empower your financial decisions with our suite of easy-to-use and
              accurate financial calculators.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 py-10 lg:px-16">
            {data.map(({ name, color, link }, i) => {
              return (
                <Link
                  key={name}
                  href={link}
                  className="flex justify-center"
                  data-aos="fade-zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div
                    className={`w-48 lg:w-56 xl:w-64 h-48 lg:h-56 xl:h-64 color-${color} shadow-lg !shadow-${color}-600/80 transition rounded-md border border-${color}-500 p-2 lg:p-5 flex items-end relative overflow-hidden group card-after mb-4`}
                  >
                    <h2
                      className={`text-xl lg:text-2xl xl:text-3xl text-color-${color} m-0 w-full`}
                    >
                      {name} <br />{" "}
                      <span className="text-xl font-normal flex items-center gap-5">
                        Calculator{" "}
                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />{" "}
                      </span>
                    </h2>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      </Container>
    </Layout>
  );
};

export default index;
