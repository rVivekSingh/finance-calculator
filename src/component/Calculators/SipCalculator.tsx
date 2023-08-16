import { calculateSIP } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import React, { useState } from "react";
import { PieChart } from "chartist";
import Button from "../Button";
import FormInput from "../FormInput";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import Section from "../Section";
import Legend from "../Legend";

const SIPCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number | undefined>(
    100000
  );
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(10);

  const [totalInvestment, setTotalInvestment] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();

  const formatAmountWithCommas = (amount: number): string => {
    return Intl.NumberFormat("en-IN").format(amount);
  };

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investmentAmount !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const sipCalculation = calculateSIP(
        investmentAmount,
        interestRate,
        tenure
      );

      setTotalInvestment(Math.round(sipCalculation.totalInvestment));
      setTotalInterest(Math.round(sipCalculation.totalReturns));
      setTotalValue(Math.round(sipCalculation.maturityValue));

      new PieChart(
        "#chart",
        {
          series: [
            sipCalculation.totalInvestment,
            sipCalculation.totalReturns,
            sipCalculation.maturityValue,
          ],
        },
        {
          donut: true,
          donutWidth: 60,
          startAngle: 270,
          showLabel: true,
        }
      );
    }
  };

  const handleResetForm = () => {
    setInvestmentAmount(undefined);
    setInterestRate(undefined);
    setTenure(undefined);

    setTotalInvestment(0);
    setTotalInterest(0);
    setTotalValue(0);
  };

  const resetStatus = !investmentAmount || !interestRate || !tenure;

  return (
    <Section title="SIP Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Monthly Investment"
                  type="number"
                  labelProps={{ htmlFor: "principal amount" }}
                  value={investmentAmount !== undefined ? investmentAmount : ""}
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) =>
                    setInvestmentAmount(parseFloat(e.target.value))
                  }
                  required
                />

                <FormInput
                  label="Expected Return Rate"
                  optional="(p.a)"
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
                  unit="Yr"
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

            {/* Result */}
            <CardResult>
              <div className="card-result-items">
                <p className="text">Est. Returns</p>
                <h1 className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Invested Amount</p>
                <h1 className="h1">
                  {totalInvestment
                    ? "₹" + formatAmountWithCommas(totalInvestment)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Total Amount</p>
                <h1 className="h1">
                  {totalValue ? "₹" + formatAmountWithCommas(totalValue) : "-"}
                </h1>
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
              {totalInterest && (
                <>
                  <Legend text="Invested amount" type="a" />
                  <Legend text="Est. returns" type="b" />
                  <Legend text="Total amount" type="c" />
                </>
              )}
            </div>
          </CardChart>
        </CardBody>
      </Card>

      <div className="pt-5">
        <h1>SIP Calculator – Systematic Investment Plan Calculator</h1>

        <p>
          Prospective investors may mistakenly conflate SIPs with mutual funds,
          but the former is simply a means of investing in the latter. Lump sum
          investments represent an alternative investment method. A SIP
          calculator serves as a valuable resource for determining the potential
          returns on investments made through such tools. Systematic Investment
          Plans, or SIPs, involve investing a fixed amount of money in mutual
          funds at set intervals. SIPs typically allow for weekly, quarterly, or
          monthly investments.
        </p>

        <h2>What is a SIP Calculator?</h2>

        <p>
          A tool of simplicity, the SIP calculator, grants individuals a glimpse
          into the returns of their mutual fund investments made through SIP. As
          of late, investing in mutual funds through SIP has become a favored
          option amongst the millennial generation. These calculators for mutual
          fund SIPs are designed to provide potential investors with an
          approximation of their mutual fund investments. However, the actual
          returns offered by a mutual fund scheme are subject to variation based
          on a multitude of factors. The SIP calculator fails to offer
          clarification on the exit load and expense ratio, if present. Through
          this calculator, the wealth gain and projected returns for your
          monthly SIP investment will be calculated. Truly, a rough estimation
          of the maturity amount for any monthly SIP, based on a projected
          annual return rate, can be obtained.
        </p>

        <h2>
          Are you curious about the advantages of utilizing a SIP return
          calculator?
        </h2>
        <p>
          According to numerous mutual fund experts, SIPs are a more
          advantageous approach to investing funds compared to a lump sum
          amount. They offer financial discipline and encourage the development
          of savings habits that can benefit your future. An online SIP
          calculator is an incredibly useful tool that provides you with an
          estimate of your future returns after the investment tenure. Consider
          some of the benefits of utilizing a SIP calculator, such as assisting
          you in determining the amount to invest, informing you of your total
          investment amount, and providing an estimated value of your returns.
        </p>

        <h2>How do SIP calculators work?</h2>

        <p className="para">
          A SIP plan calculator employs a fundamental formula that reads as
          follows -
        </p>

        <p className="highlight">
          <code>
            M = P × ({" "}
            <sup>
              {"{"}
              [1 + i]
              <sup>n</sup> – 1 {"}"}
            </sup>{" "}
            / i) × (1 + i)
          </code>
        </p>

        <p>
          In this formula - M signifies the amount you will receive upon
          maturity. P represents the amount you regularly invest. n represents
          the number of payments you have made. i represents the periodic rate
          of interest. For instance, suppose you wish to invest Rs. 1,000 every
          month for 12 months at a periodic rate of interest of 12%. In such a
          case, the monthly rate of return would amount to 12%/12 = 1/100=0.01.
          Thus,
        </p>
        <p className="highlight">
          <code>
            M = 1,000 &#215; &#123;[1 + 0.01 ]&#123;12&#125; &#8211; 1&#125; /
            0.01&#41; &#215; &#40;1 + 0.01&#41;
          </code>
        </p>
        <p>
          This calculation amounts to approximately Rs 12,809 in a year. It is
          essential to note that the rate of interest on a SIP is subject to
          market conditions. It may fluctuate and thereby impact the estimated
          returns.
        </p>
      </div>
    </Section>
  );
};

export default SIPCalculator;
