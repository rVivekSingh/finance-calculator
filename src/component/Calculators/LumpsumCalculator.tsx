import { calculateEMI, calculateLumpSumInvestment } from "@/utils/emiCalculator";
import {formatAmountWithCommas} from "@/utils/utils"
import React, { useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";
import { PieChart } from "chartist";

const LumpsumCalculator = () => {
  const [totalInvestment, setTotalInvestment] = useState<number | undefined>(100000);
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(10);


  const [totalInterest, setTotalInterest] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();


  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
        totalInvestment !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const lumpsumAmount = calculateLumpSumInvestment(totalInvestment, interestRate, tenure);
       
      setTotalInterest(Math.round(lumpsumAmount - totalInvestment));
      setTotalValue(lumpsumAmount);
      updateChart(totalInvestment, Math.ceil(lumpsumAmount));
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
    setTotalInvestment(undefined);
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalInterest(undefined);
  };

  const resetStatus = !totalInvestment || !interestRate || !tenure;

  return (
    <Section title="Lumpsum Investment Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Total Investment"
                  type="number"
                  labelProps={{ htmlFor: "total investment" }}
                  value={totalInvestment !== undefined ? totalInvestment : ""}
                  id="principal"
                  unit="₹"
                  placeholder="20,00,000"
                  onChange={(e) => setTotalInvestment(parseFloat(e.target.value))}
                  required
                />

                <FormInput
                  label="Expected Return rate"
                  optional="(p.a.)"
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
                  label="Time Period"
                  optional="(in years)"
                  type="number"
                  labelProps={{ htmlFor: "time period" }}
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
                <p className="text">Invested Amount</p>
                <h1 className="h1">
                  {totalInvestment
                    ? "₹" + formatAmountWithCommas(totalInvestment)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Est. Returns</p>
                <h1 className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
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


export default LumpsumCalculator