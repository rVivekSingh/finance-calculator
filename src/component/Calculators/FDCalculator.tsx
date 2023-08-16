import {
  formatAmountWithCommas,
  calculateFDMaturityAmount,
} from "@/utils/utils";
import React, { useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";
import { PieChart } from "chartist";
import "chartist/dist/index.css";
import Legend from "../Legend";

const FDCalculator = () => {
  const [totalInvestment, setTotalInvestment] = useState<number | undefined>(
    100000
  );
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(10);

  const [totalLoanAmount, setTotalLoanAmount] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      totalInvestment !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const fdReturns = calculateFDMaturityAmount(
        totalInvestment,
        interestRate,
        1,
        tenure
      );

      const totalPayableAmount = fdReturns;
      const totalInterest = totalPayableAmount - totalInvestment;
      setTotalLoanAmount(Math.round(totalPayableAmount));
      setTotalInterest(Math.round(totalInterest));
      updateChart(totalInvestment, Math.floor(totalPayableAmount));
    }
  };
  const updateChart = (principal: number, interest: number) => {
    new PieChart(
      "#fd-chart",
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
    setTotalInvestment(undefined);
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalLoanAmount(undefined);
    setTotalInterest(undefined);
  };

  const resetStatus = !totalInvestment || !interestRate || !tenure;

  return (
    <Section title="FD Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Principal Amount"
                  type="number"
                  labelProps={{ htmlFor: "principal amount" }}
                  value={totalInvestment !== undefined ? totalInvestment : ""}
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) =>
                    setTotalInvestment(parseFloat(e.target.value))
                  }
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

            <CardResult>
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
                  {totalInvestment
                    ? "₹" + formatAmountWithCommas(totalInvestment)
                    : "-"}
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
              id="fd-chart"
              className="w-60 h-60 mx-auto rounded-full font-black text-white"
            ></div>
            <div className="mt-10 lg:pl-5">
              {totalInterest && (
                <>
                  <Legend text="Principal amount" type="a" />
                  <Legend text="Total amount" type="b" />
                </>
              )}
            </div>
          </CardChart>
        </CardBody>
      </Card>

      <div className="pt-5">
        <p>
          A fixed deposit, a term investment option, is provided by various
          banks and NBFCs. These deposits generally propose a higher interest
          rate, subject to specific terms and conditions. The sum that is
          deposited in these accounts is held for a fixed duration, which can
          range from 7 days to 10 years. To ascertain the interest and the total
          amount that will be acquired at maturity, an FD calculator can be
          utilized. This user-friendly tool is easily accessible on the Emininja
          website.
        </p>
        <h2>How can an FD calculator help you?</h2>
        <p>
          Calculating the maturity amount of a Fixed Deposit (FD) can prove to
          be a convoluted and arduous process. However, an online FD calculator
          is a convenient tool that can simplify this process effortlessly. The
          complexity of FD maturity calculations lies in the involvement of
          multiple variables. A Fixed Deposit calculator, on the other hand, is
          designed to handle these intricacies and provide accurate figures with
          just a single click. Its ability to simplify complex calculations can
          save you a significant amount of time. Furthermore, a fixed deposit
          return calculator can prove to be invaluable when comparing the
          maturity amount and interest rates of FDs offered by different
          financial institutions. Armed with all the relevant figures, you can
          make an informed decision.
        </p>
        <h2>The formula to determine FD maturity amount</h2>
        <p>
          The methodology to ascertain the maturity amount of a fixed deposit
          (FD) is of paramount importance. It is noteworthy that there are two
          types of FDs available, namely simple interest FD and compound
          interest FD. For both of these types, Emininja has designed
          calculators to facilitate the calculation process. In the case of a
          fixed deposit calculator for simple interest FD, the formula employed
          is:
        </p>
        <p className="highlight">
          <code>M = P + (P x r x t/100)</code>
        </p>
        <p>
          where P denotes the principal amount deposited, r signifies the rate
          of interest per annum, and t represents the tenure in years.
        </p>
      </div>
    </Section>
  );
};

export default FDCalculator;
