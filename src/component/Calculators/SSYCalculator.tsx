import { calculateSIP } from "@/utils/emiCalculator";
import { calculateSukanyaSamriddhiMaturityAmount } from "@/utils/ssy"
import {formatAmountWithCommas} from "@/utils/utils"
import "chartist/dist/index.css";
import React, { useState } from "react";
import { PieChart } from "chartist";
import Button from "../Button";
import FormInput from "../FormInput";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import Section from "../Section";

const SSY_RATE = 8;
const SSYCalculator = () => {
  const [yearlyInvestment, setYearlyInvestmentAmount] = useState<number | undefined>(
    100000
  );
  const [girlsAge, setGirlsAge] = useState<number | undefined>(8);
  const [maturityYear, setMaturityYear] = useState<number | undefined>(10);
  const [startYear, setStartYear] = useState<number>(2023);

  const [totalInvestment, setTotalInvestment] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();


  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      yearlyInvestment !== undefined &&
      girlsAge !== undefined &&
      maturityYear !== undefined
    ) {
      const finalValye = calculateSukanyaSamriddhiMaturityAmount(
        yearlyInvestment,
        SSY_RATE,
        21
      );
console.log("finalValye", finalValye);

    //   setTotalInvestment(Math.round(sipCalculation.totalInvestment));
    //   setTotalInterest(Math.round(sipCalculation.totalReturns));
    //   setTotalValue(Math.round(sipCalculation.maturityValue));
    //   new PieChart(
    //     "#chart",
    //     {
    //       series: [
    //         sipCalculation.totalInvestment,
    //         sipCalculation.totalReturns,
    //         sipCalculation.maturityValue,
    //       ],
    //     },
    //     {
    //       donut: true,
    //       donutWidth: 60,
    //       startAngle: 270,
    //       showLabel: true,
    //     }
    //   );
    }
  };

  const handleResetForm = () => {
    setYearlyInvestmentAmount(undefined);
    setGirlsAge(undefined);
    setMaturityYear(undefined);

    setTotalInvestment(0);
    setTotalInterest(0);
    setTotalValue(0);
  };

  const resetStatus = !yearlyInvestment || !girlsAge || !maturityYear;

  return (
    <Section title="Sukanya Samriddhi Yojana Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Yearly Investment"
                  type="number"
                  labelProps={{ htmlFor: "yearly investment" }}
                  value={yearlyInvestment !== undefined ? yearlyInvestment : ""}
                  id="investment"
                  unit="₹"
                  placeholder="1,00,000"
                  onChange={(e) =>
                    setYearlyInvestmentAmount(parseFloat(e.target.value))
                  }
                  required
                />

                <FormInput
                  label="Girls Age"
                  type="number"
                  labelProps={{ htmlFor: "age" }}
                  value={girlsAge !== undefined ? girlsAge : ""}
                  id="age"
                  unit="Yr"
                  placeholder="5"
                  onChange={(e) => setGirlsAge(parseFloat(e.target.value))}
                  required
                />

                <FormInput
                  label="Start Period"
                  type="number"
                  labelProps={{ htmlFor: "start year" }}
                  value={startYear !== undefined ? startYear : ""}
                  id="startYear"
                  unit="Yr"
                  placeholder="2023"
                  onChange={(e) => setStartYear(parseInt(e.target.value, 10))}
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
                <p className="text">Total Interest</p>
                <h1 className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Maturity Year</p>
                <h1 className="h1">
                  {startYear + 21}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Maturity Value</p>
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
      </Card> <br />
      
    </Section>
  );
};

export default SSYCalculator