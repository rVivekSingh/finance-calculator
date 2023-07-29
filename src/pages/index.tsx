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
            Welcome to EmiNinja Financial Calculators! Empower your financial
            decisions with our suite of easy-to-use and accurate financial
            calculators. Whether you're planning to take a loan, invest in your
            future, or analyze your savings, our calculators are here to help
            you make informed choices.
          </p>
          <h1 className="para">Welcome to eMininja Financial Calculators!</h1>
          <ol className="para"  type="1">
            <li>
              Comprehensive Loan Calculators: Take the guesswork out of loan
              planning. Our loan calculators let you estimate your monthly
              payments, track interest rates, and determine the best repayment
              strategies for your needs.
            </li>
            <li>
              Investment Returns at Your Fingertips: Explore the potential
              returns on your investments with confidence. Our investment
              calculators help you analyze various investment options, plan for
              long-term growth, and stay on top of your financial goals.
            </li>
            <li>
              Savings and SIP Planner: Achieving your financial goals starts
              with a well-structured savings plan. Our SIP (Systematic
              Investment Plan) calculator assists you in understanding the power
              of regular savings and visualizing the growth over time.
            </li>
            <li>
              User-Friendly Interface: Our user-friendly design ensures that you
              can effortlessly input your financial data and instantly receive
              accurate results. No complex formulas or manual calculations
              required.
            </li>
            <li>
              Tailored Solutions for Your Needs: Whether you are a young
              professional, a seasoned investor, or planning for your dream
              home, we have calculators tailored to your unique financial
              requirements.
            </li>
          </ol>
          <p className="para">
            Take the first step towards financial empowerment. Start using our
            financial calculators now and take control of your money with
            eMininja!
          </p>

          <h2 className="para">Ready to Plan Your Financial Future? Get Started Now!</h2>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
