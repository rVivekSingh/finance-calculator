import { calculateSIP } from "@/utils/emiCalculator";
import 'chartist/dist/index.css'
import React, { useState } from "react";
import { PieChart } from "chartist";
import Button from "../Button";
import Container from "../Container";
import FormInput from "../FormInput";
import Title from "../Title";

const SIPCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number | undefined>(100000);
  const [interestRate, setInterestRate] = useState<number | undefined>(8.5);
  const [tenure, setTenure] = useState<number | undefined>(10);

  const [totalInvestment, setTotalInvestment] = useState<number>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();

  const formatAmountWithCommas = (amount: number): string => {
      return Intl.NumberFormat('en-IN').format(amount) ;
  };

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investmentAmount !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const sipCalculation = calculateSIP(investmentAmount, interestRate, tenure);
      
      setTotalInvestment(Math.round(sipCalculation.totalInvestment));
      setTotalInterest(Math.round(sipCalculation.totalReturns));
      setTotalValue(Math.round(sipCalculation.maturityValue));
      new PieChart('#chart', {
        series: [sipCalculation.totalInvestment, sipCalculation.totalReturns, sipCalculation.maturityValue]
      }, {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        showLabel: true
      });
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
    <>
      <Title text="SIP Calculator" className="py-10 text-gray-200" />
      <section>
        <div className="card grid gap-10 items-center">
          <div className="flex max-lg:flex-col justify-between">
            
            {/* Form + Result */}
            <div className="xl:mr-16 lg:w-[calc(100%-300px)]">
              {/* Form */}
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
                    onChange={(e) => setInvestmentAmount(parseFloat(e.target.value))}
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
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
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
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl -z-10 " />

                <div className="grid grid-cols-2 gap-10 pt-10 lg:pt-16">
                  <div className="text-center">
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-2 lg:mb-5">
                      {totalInterest
                        ? "₹" + formatAmountWithCommas(totalInterest)
                        : "-"}
                    </h1>
                    <p className="font-medium max-sm:text-sm">Est. Returns</p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-2 lg:mb-5">
                      {totalInvestment
                        ? "₹" + formatAmountWithCommas(totalInvestment)
                        : "-"}
                    </h1>
                    <p className="font-medium max-sm:text-sm">
                      Invested Amount
                    </p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-2 lg:mb-5">
                      {totalValue
                        ? "₹" + formatAmountWithCommas(totalValue)
                        : "-"}
                    </h1>
                    <p className="font-medium max-sm:text-sm">Total Value</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graph */}
            <div className="px-3 mt-10 text-center">
              <h2 className="mb-10 text-2xl font-semibold">Chart</h2>
              <div id="chart" className="w-60 h-60 mx-auto rounded-full font-black text-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SIPCalculator;
