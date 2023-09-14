import { calculateEMI } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import { PieChart } from "chartist";
import { formatAmountWithCommas } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";
import Legend from "../Legend";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number | undefined>(1000000);
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(5);
  const [emi, setEMI] = useState<number>(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      loanAmount !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const emiAmount = calculateEMI(loanAmount, interestRate, tenure);
      const totalPayableAmount = emiAmount * tenure * 12;
      const totalInterest = totalPayableAmount - loanAmount;
      setEMI(Math.round(emiAmount));
      setTotalLoanAmount(Math.round(totalPayableAmount));
      setTotalInterest(Math.round(totalInterest));
      updateChart(loanAmount, Math.ceil(totalInterest));
    }
  };

  const updateChart = (principal: number, interest: number) => {
    new PieChart(
      "#chart",
      {
        series: [principal, interest],
      },
      {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        showLabel: true,
      }
    );
  };

  const handleResetForm = () => {
    setLoanAmount(undefined);
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalLoanAmount(undefined);
    setTotalInterest(undefined);
    setEMI(0);
  };

  const resetStatus = !loanAmount || !interestRate || !tenure;

  return (
    <Section title="Loan EMI Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Principal Amount"
                  type="number"
                  labelProps={{ htmlFor: "principal amount" }}
                  value={loanAmount !== undefined ? loanAmount : ""}
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                  required
                />

                <FormInput
                  label="Rate of Interest"
                  type="number"
                  labelProps={{ htmlFor: "interest" }}
                  value={interestRate !== undefined ? interestRate : ""}
                  id="rate"
                  unit="%"
                  placeholder="8.5"
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  required
                />

                <FormInput
                  label="Investment Time"
                  optional="(in years)"
                  type="number"
                  labelProps={{ htmlFor: "rate of interest" }}
                  value={tenure !== undefined ? tenure : ""}
                  id="tenure"
                  unit="Yrs"
                  placeholder="20"
                  onChange={(e) => setTenure(parseInt(e.target.value, 10))}
                  required
                />

                <div className="grid grid-cols-2 gap-8">
                  <Button
                    className="w-full mt-3 lg:mt-6"
                    onClick={handleCalculate}
                  >
                    Calculate
                  </Button>

                  <Button
                    className="w-full mt-3 lg:mt-6"
                    variant="secondary"
                    type="button"
                    onClick={handleResetForm}
                    disabled={resetStatus}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </form>

            <CardResult>
              <div className="card-result-items">
                <p className="text">Monthly EMI</p>
                <p className="h1">
                  {emi ? "₹" + formatAmountWithCommas(emi) : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Total Interest Payable</p>
                <p className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Principal Amount</p>
                <p className="h1">
                  {loanAmount ? "₹" + formatAmountWithCommas(loanAmount) : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Total Payable Amount</p>
                <p className="h1">
                  {totalLoanAmount
                    ? "₹" + formatAmountWithCommas(totalLoanAmount)
                    : "-"}
                </p>
              </div>
            </CardResult>
          </CardForm>

          {/* Graph */}
          <CardChart>
            <h2 className="mb-10 text-2xl font-semibold">Chart</h2>
            <div
              id="chart"
              className="w-60 h-60 mx-auto rounded-full font-black text-white"
            ></div>

            <div className="mt-10 lg:pl-5">
              {totalLoanAmount && (
                <>
                  <Legend text="Principal amount" type="a" />
                  <Legend text="Total interest" type="b" />
                </>
              )}
            </div>
          </CardChart>
        </CardBody>
      </Card>

      <div className="pt-5">
        <h2 >Welcome to eMininja Financial Calculators!</h2>
        <p>
          Welcome to EmiNinja Financial Calculators! Empower your financial
          decisions with our suite of easy-to-use and accurate financial
          calculators. Whether you&apos;re planning to take a loan, invest in
          your future, or analyze your savings, our calculators are here to help
          you make informed choices.
        </p>

        <h2>Comprehensive Loan Calculators</h2>
        <p>
          Take the guesswork out of loan planning. Our loan calculators let you
          estimate your monthly payments, track interest rates, and determine
          the best repayment strategies for your needs.
        </p>

        <h2>Investment Returns at Your Fingertips</h2>
        <p>
          Explore the potential returns on your investments with confidence. Our
          investment calculators help you analyze various investment options,
          plan for long-term growth, and stay on top of your financial goals.
        </p>

        <h2>Savings and SIP Planner</h2>
        <p>
          Achieving your financial goals starts with a well-structured savings
          plan. Our SIP (Systematic Investment Plan) calculator assists you in
          understanding the power of regular savings and visualizing the growth
          over time.
        </p>

        <h2>User-Friendly Interface</h2>
        <p>
          Our user-friendly design ensures that you can effortlessly input your
          financial data and instantly receive accurate results. No complex
          formulas or manual calculations required.
        </p>

        <h2>Tailored Solutions for Your Needs</h2>
        <p>
          Whether you are a young professional, a seasoned investor, or planning
          for your dream home, we have calculators tailored to your unique
          financial requirements.
        </p>

        <p>
          Take the first step towards financial empowerment. Start using our
          financial calculators now and take control of your money with
          eMininja!
        </p>
      </div>
    </Section>
  );
};

export default LoanCalculator;
