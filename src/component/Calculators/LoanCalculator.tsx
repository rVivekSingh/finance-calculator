import { calculateEMI } from "@/utils/emiCalculator";
import "chartist/dist/index.css";
import { PieChart } from "chartist";
import { formatAmountWithCommas } from "@/utils/utils"
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";

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
    setLoanAmount(undefined);
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalLoanAmount(undefined);
    setTotalInterest(undefined);
    setEMI(0);
  };

  const resetStatus = !loanAmount || !interestRate || !tenure;

  return (
    <Section title="Personal Loan Calculator">
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
                <p className="text">Monthly EMI</p>
                <h1 className="h1">
                  {emi ? "₹" + formatAmountWithCommas(emi) : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Total Interest Payable</p>
                <h1 className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Principal Amount</p>
                <h1 className="h1">
                  {loanAmount ? "₹" + formatAmountWithCommas(loanAmount) : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Total Payable Amount</p>
                <h1 className="h1">
                  {totalLoanAmount
                    ? "₹" + formatAmountWithCommas(totalLoanAmount)
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

export default LoanCalculator;
