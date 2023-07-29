import LoanCalculator from "@/component/Calculators/LoanCalculator";
import Container from "@/component/Container";
import SidebarLayout from "@/component/Layout/SidebarLayout";
import Section from "@/component/Section";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <SidebarLayout seo={{ title: "Loan Calculator", pathname: "/" }}>
      <LoanCalculator />

      <Section
        title="Welcome to eMininja Financial Calculators!"
        className="pb-10"
      >
        <p className="para mb-10">
          Welcome to EmiNinja Financial Calculators! Empower your financial
          decisions with our suite of easy-to-use and accurate financial
          calculators. Whether you&apos;re planning to take a loan, invest in
          your future, or analyze your savings, our calculators are here to help
          you make informed choices.
        </p>

        <div className="text-gray-100 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">
              Comprehensive Loan Calculators
            </h2>
            <p className="para">
              Take the guesswork out of loan planning. Our loan calculators let
              you estimate your monthly payments, track interest rates, and
              determine the best repayment strategies for your needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3">
              Investment Returns at Your Fingertips
            </h2>
            <p className="para">
              Explore the potential returns on your investments with confidence.
              Our investment calculators help you analyze various investment
              options, plan for long-term growth, and stay on top of your
              financial goals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3">
              Savings and SIP Planner
            </h2>
            <p className="para">
              Achieving your financial goals starts with a well-structured
              savings plan. Our SIP (Systematic Investment Plan) calculator
              assists you in understanding the power of regular savings and
              visualizing the growth over time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3">
              User-Friendly Interface
            </h2>
            <p className="para">
              Our user-friendly design ensures that you can effortlessly input
              your financial data and instantly receive accurate results. No
              complex formulas or manual calculations required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-3">
              Tailored Solutions for Your Needs
            </h2>
            <p className="para">
              Whether you are a young professional, a seasoned investor, or
              planning for your dream home, we have calculators tailored to your
              unique financial requirements.
            </p>
          </div>

          <p className="para">
            Take the first step towards financial empowerment. Start using our
            financial calculators now and take control of your money with
            eMininja!
          </p>
        </div>
      </Section>
    </SidebarLayout>
  );
};

export default Home;
