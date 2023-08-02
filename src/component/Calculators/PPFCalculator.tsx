import { calculatePPFMaturityAmount } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import { PieChart } from "chartist";
import { formatAmountWithCommas } from "@/utils/utils"
import React, { useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";

const PPFCalculator = () => {
  const [investment, setInvestment] = useState<number | undefined>(10000);
  const [interestRate, setInterestRate] = useState<number | undefined>(7.1);
  const [tenure, setTenure] = useState<number | undefined>(15);


  const [totalInvestment, setTotalInvestment] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [maturityValue, setMaturityValue] = useState<number>();


  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investment !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const ppfReturns = calculatePPFMaturityAmount(investment, interestRate, 12, tenure);
      
      const totalPayableAmount = ppfReturns * tenure * 12;
      const totalInterest = totalPayableAmount - investment;
      
      setTotalInvestment(investment*tenure);
      setTotalInterest(Math.round(ppfReturns - investment * tenure));
      setMaturityValue(Math.ceil(ppfReturns));
      updateChart(totalInvestment, maturityValue);
    }
  };

  const updateChart = (principal : number, interest : number) =>{
    new PieChart(
      "#chart",
      {
        series: [
          principal,
          interest
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

  const handleResetForm = () => {
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalInterest(undefined);
  };

  const resetStatus = !investment || !interestRate || !tenure;

  return (
    <Section title="PPF Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Principal Amount"
                  type="number"
                  labelProps={{ htmlFor: "principal amount" }}
                  value={investment !== undefined ? investment : ""}
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) => setInvestment(parseFloat(e.target.value))}
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
                  disabled={true}
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
                <p className="text">Total Invested Amount</p>
                <h1 className="h1">
                  {totalInvestment ? "₹" + formatAmountWithCommas(totalInvestment) : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Total Interest</p>
                <h1 className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Maturity Value</p>
                <h1 className="h1">
                  {maturityValue
                    ? "₹" + formatAmountWithCommas(maturityValue)
                    : "-"}
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
          </CardChart>
        </CardBody>
      </Card>
    </Section>
  );
};

export default PPFCalculator;