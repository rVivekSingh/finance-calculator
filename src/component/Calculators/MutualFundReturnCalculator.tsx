import { calculateSIP } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import React, { useState } from "react";
import { PieChart } from "chartist";
import Button from "../Button";
import FormInput from "../FormInput";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import Section from "../Section";
import Legend from "../Legend";

const MutualFundReturnCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<
    number | undefined
  >(100000);
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
      monthlyInvestment !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const sipCalculation = calculateSIP(
        monthlyInvestment,
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
    setMonthlyInvestment(undefined);
    setInterestRate(undefined);
    setTenure(undefined);

    setTotalInvestment(0);
    setTotalInterest(0);
    setTotalValue(0);
  };

  const resetStatus = !monthlyInvestment || !interestRate || !tenure;

  return (
    <Section title="Mutual Funds Returns Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Monthly Investment"
                  type="number"
                  labelProps={{ htmlFor: "principal amount" }}
                  value={
                    monthlyInvestment !== undefined ? monthlyInvestment : ""
                  }
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) =>
                    setMonthlyInvestment(parseFloat(e.target.value))
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

            {/* Result */}
            <CardResult>
              <div className="card-result-items">
                <p className="text">Est. Returns</p>
                <p className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Invested Amount</p>
                <p className="h1">
                  {totalInvestment
                    ? "₹" + formatAmountWithCommas(totalInvestment)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Total Amount</p>
                <p className="h1">
                  {totalValue ? "₹" + formatAmountWithCommas(totalValue) : "-"}
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
              {totalValue && (
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
        <p>
          Mutual funds stand tall as one of the most favored avenues of
          investment in the Indian financial landscape. The mind-boggling
          statistics from June 2019 bear witness to this fact, with the average
          assets under management (AuM) of the entire MF industry towering at a
          staggering Rs. 24.25 trillion - a phenomenal increase of over four
          times from Rs. 5.83 trillion back in 2009. Granted, mutual fund
          investments are exposed to market risks, but the prospective returns
          can be estimated fairly accurately. To gauge the anticipated returns,
          one can easily employ the free mutual fund return calculator from
          Groww and arrive at the expected amount.
        </p>

        <h2>How Can an Online Mutual Fund Return Calculator Assist You?</h2>

        <p>
          An investor should acquaint themselves with the diverse types of
          mutual fund returns, including absolute return, annualised return,
          total return, trailing return, point-to-point return, and rolling
          return. It can be a daunting task for a potential investor to keep
          track of so many variables, which is where an online mutual fund
          return calculator can prove to be a valuable asset. The calculator
          offers a comprehensive estimate for investment periods of 1 year, 3
          years, and 5 years. Additionally, it allows you to plan for future
          financial endeavors based on these estimated returns. Fortunately, you
          do not need to be an expert in the field to navigate the calculator.
          It&apos;s user-friendly, and even those unfamiliar with it will not
          find it difficult to use.
        </p>

        <h3>
          The utilization of EmiNnja&apos;s online mutual funds calculator
          presents numerous benefits that simplify the lives of investors.
        </h3>

        <p>
          This tool offers a relatively precise estimation of the returns on
          your mutual fund investments, ensuring that you can make informed
          decisions. By eliminating manual calculations, this calculator
          preserves your valuable time, freeing you to focus on other financial
          tasks. Furthermore, since it is an online tool, you can access it from
          any location, providing an incredibly convenient means of performing
          financial planning on-the-go. In India, mutual funds are a steadily
          growing investment instrument, and despite the inherent risks, the
          returns are proportionately higher.
        </p>
      </div>
    </Section>
  );
};

export default MutualFundReturnCalculator;
