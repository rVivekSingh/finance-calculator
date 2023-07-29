import { calculateSIP } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import React, { useState } from "react";
import { PieChart } from "chartist";
import Button from "../Button";
import FormInput from "../FormInput";
import Title from "../Section";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import Section from "../Section";

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
                  label="Principal Amount"
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
                  <Button className="w-full mt-6" onClick={handleCalculate}>
                    Calculate
                  </Button>

                  <Button
                    className="w-full mt-6"
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
                <p className="text">Total Value</p>
                <h1 className="h1">
                  {totalValue ? "₹" + formatAmountWithCommas(totalValue) : "-"}
                </h1>
              </div>
            </CardResult>

            <p className="text-gray-200/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              accusantium repellat expedita ad quam numquam, doloribus
              reiciendis voluptate magni at in itaque exercitationem est fugiat
              sed soluta incidunt assumenda nobis!
            </p>
          </CardForm>

          {/* Graph */}
          <CardChart>
            <h2 className="mb-10 text-2xl font-semibold">Chart</h2>
            <div
              id="chart"
              className="w-60 h-60 mx-auto rounded-full font-black text-white"
            ></div>
          </CardChart>
        </CardBody>
      </Card>
    </Section>
  );
};

export default SIPCalculator;
