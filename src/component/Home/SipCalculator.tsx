import { calculateSIP } from "@/utils/emiCalculator";
import React, { useState } from "react";
import Button from "../Button";
import Container from "../Container";
import FormInput from "../FormInput";
import { log } from "console";

const SIPCalculator = () => {
  const [investmentAmount, setLoanAmount] = useState<number | undefined>(100000);
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(10);
  const [emi, setEMI] = useState<number>(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();

  const formatAmountWithCommas = (amount: number): string => {
    return amount.toString().split(".")[0].length > 3
      ? amount
          .toString()
          .substring(0, amount.toString().split(".")[0].length - 3)
          .replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
          "," +
          amount
            .toString()
            .substring(amount.toString().split(".")[0].length - 3)
      : amount.toString();
  };

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investmentAmount !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const emiAmount = calculateSIP(investmentAmount, interestRate, tenure);
      console.log("obj=>", emiAmount);
      // setEMI(Math.round(emiAmount));
      setTotalLoanAmount(Math.round(emiAmount.totalInvestment));
      setTotalInterest(Math.round(emiAmount.totalReturns));
      setTotalLoanAmount(Math.round(emiAmount.maturityValue));
    }
  };

  const handleResetForm = () => {
    setLoanAmount(undefined);
    setInterestRate(undefined);
    setTenure(undefined);
    setTotalLoanAmount(undefined);
    setTotalInterest(undefined);
    setEMI(0);
  };

  const resetStatus = !investmentAmount || !interestRate || !tenure;

  return (
    <section className="py-10 lg:py-16 z-30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div className="lg:mr-[100px]">
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
          </div>

          {/* Result */}
          <div className="relative">
            <div className="w-48 h-48 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10 " />

            <div className="card">
              <div id="chart" className="h-2/4"></div>
              <div className="grid  lg:grid-cols-2 gap-4">
                <div className="lg:p-5 py-3 lg:py-8 text-center">
                  <h1 className="text-2xl xl:text-4xl font-semibold mb-2 lg:mb-5">
                    {investmentAmount
                      ? "₹" + formatAmountWithCommas(investmentAmount)
                      : "-"}
                  </h1>
                  <p className="font-medium">Invested Amount Amount</p>
                </div>
                <div className="lg:p-5 py-3 lg:py-8 text-center">
                  <h1 className="text-2xl xl:text-4xl font-semibold mb-2 lg:mb-5">
                    {totalInterest
                      ? "₹" + formatAmountWithCommas(totalInterest)
                      : "-"}
                  </h1>
                  <p className="font-medium">Est. returns</p>
                </div>
                <div className="lg:p-5 py-3 lg:py-8 text-center">
                  <h1 className="text-2xl xl:text-4xl font-semibold mb-2 lg:mb-5">
                    {totalLoanAmount
                      ? "₹" + formatAmountWithCommas(totalLoanAmount)
                      : "-"}
                  </h1>
                  <p className="font-medium">Total Value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SIPCalculator;
