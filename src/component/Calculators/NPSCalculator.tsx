import "chartist/dist/index.css";
import { PieChart } from "chartist";
import { formatAmountWithCommas } from "@/utils/utils";
import { npscalc } from "@/utils/nps";
import React, { useState } from "react";
import Button from "../Button";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import FormInput from "../FormInput";
import Section from "../Section";
import Legend from "../Legend";

const NPSCalculator = () => {
  const [investmentPerMonth, setInvestmentPerMonth] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number | undefined>(9);
  const [currentAge, setCurrentAge] = useState<number | undefined>(20);

  const [totalInvestment, setTotalInvestment] = useState<number | any>();
  const [totalInterest, setTotalInterest] = useState<number>();
  const [maturityValue, setMaturityValue] = useState<number | any>();
  const [annuityInvestment, setAnnuityInvestment] = useState<number | any>();

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investmentPerMonth !== undefined &&
      interestRate !== undefined &&
      currentAge !== undefined
    ) {
      
        const npsData = npscalc(investmentPerMonth, interestRate, currentAge);
        console.log("data=",npsData);
        
        if(npsData){
            setTotalInvestment(npsData.totalInvestment);
            setMaturityValue(npsData.maturityValue);
            setTotalInterest(npsData.totalInterest);
            setAnnuityInvestment(npsData.annuityInvestment);
            updateChart([totalInvestment, maturityValue, totalInterest, annuityInvestment])
        }
    }
  };

  const updateChart = (data: number[]) => {
    
    new PieChart(
      "#ppf-chart",
      {
        series: data,
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
    setInterestRate(undefined);
    setCurrentAge(undefined);
    setTotalInterest(0);
  };

  const resetStatus = !investmentPerMonth || !interestRate || !currentAge;

  return (
    <Section title="NPS Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Investment Per Month"
                  type="number"
                  labelProps={{ htmlFor: "invesetment" }}
                  value={investmentPerMonth !== undefined ? investmentPerMonth : ""}
                  id="invesetment"
                  unit="₹"
                  placeholder="10,000"
                  onChange={(e) => setInvestmentPerMonth(parseFloat(e.target.value))}
                  required
                />

                <FormInput
                  label="Expected return"
                  optional="(p.a.)"
                  type="number"
                  labelProps={{ htmlFor: "rate of interest" }}
                  value={interestRate !== undefined ? interestRate : ""}
                  id="interest"
                  unit="%"
                  placeholder="9"
                  onChange={(e) => setCurrentAge(parseInt(e.target.value))}
                  required
                />
                <FormInput
                  label="Your current age"
                  type="number"
                  labelProps={{ htmlFor: "age" }}
                  value={currentAge !== undefined ? currentAge : ""}
                  id="age"
                  unit="Yr"
                  placeholder="20"
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
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
                <p className="text">Total Investment</p>
                <p className="h1">
                  {totalInvestment
                    ? "₹" + formatAmountWithCommas(totalInvestment)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Total Interest Earned</p>
                <p className="h1">
                  {totalInterest
                    ? "₹" + formatAmountWithCommas(totalInterest)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Maturity Amount</p>
                <p className="h1">
                  {maturityValue
                    ? "₹" + formatAmountWithCommas(maturityValue)
                    : "-"}
                </p>
              </div>
              <div className="card-result-items">
                <p className="text">Min. annuity invesement</p>
                <p className="h1">
                  {annuityInvestment
                    ? "₹" + formatAmountWithCommas(annuityInvestment)
                    : "-"}
                </p>
              </div>
            </CardResult>
          </CardForm>

          {/* Graph */}
          <CardChart>
            <h2 className="mb-10 text-2xl font-semibold">Chart</h2>
            <div
              id="ppf-chart"
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
        <p>
          The initial step towards wealth management involves the accumulation
          of savings. Numerous savings account options exist; however, it is
          advisable to seek out those that offer significant returns without
          risk. PPF accounts are one of the most prevalent options available.
          PPF, which stands for Public Provident Fund, is a vehicle designed to
          invest your valuable capital. For new employees or responsible parents
          looking to save for the future, PPF is an ideal choice. Calculating
          interest rates and returns for your PPF account can be challenging.
          Fortunately, a PPF account calculator can simplify these complex
          calculations.
        </p>
        <h2>How can a PPF calculator help you?</h2>
        <p>
          This financial instrument offers a comprehensive solution to address
          all concerns related to the Public Provident Fund account. There are
          certain stipulations that must be strictly adhered to when computing
          the maturity amount after a stipulated period of time. It facilitates
          the monitoring of capital growth. Those who possess a PPF savings
          account are well aware that interest rates are subject to monthly
          revisions. In the present day and age, keeping tabs on the constantly
          fluctuating interest rates has become relatively easier. However, with
          the advent of the public provident fund calculator, account holders
          find it simpler to determine the monthly alterations made to the rate
          of interest. In the market, there are several user-friendly PPF
          calculators available, and for selecting a reliable one, EmiNinja is
          undoubtedly the optimal choice.
        </p>
        <h2>Formula used for calculating PPF</h2>
        <p>
          Emininja employs a comprehensive algorithm to calculate the sum of
          money deposited, interest charges, and other related factors. The
          formula in question is as follows -
        </p>
        <p className="highlight">
          <code>
            F = P &#123;({" "}
            <sup>
              {"("}
              (1+i)
              <sup>n</sup> - 1{")"}
            </sup>{" "}
            / i) &#125;
          </code>
        </p>

        <p className="mb-4">
          This mathematical expression serves to denote the subsequent variables
          -
        </p>

        <table>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Rate of interest</td>
            </tr>
            <tr>
              <td>P</td>
              <td>Annual instalments</td>
            </tr>
            <tr>
              <td>F</td>
              <td>Maturity of PPF</td>
            </tr>
            <tr>
              <td>N</td>
              <td>Total number of years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default NPSCalculator;
