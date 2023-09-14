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
            //updateChart([totalInvestment, maturityValue, totalInterest, annuityInvestment])
        }
    }
  };

  const updateChart = (data: number[]) => {
    
    new PieChart(
      "#nps-chart",
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
                  onChange={(e) => setInterestRate(parseInt(e.target.value))}
                  required
                />
                <FormInput
                  label="Your current age"
                  type="number"
                  labelProps={{ htmlFor: "age" }}
                  value={currentAge !== undefined ? currentAge : ""}
                  id="age"
                  unit="Yrs"
                  placeholder="20"
                  onChange={(e) => setCurrentAge(parseFloat(e.target.value))}
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

        </CardBody>
      </Card>
      <div className="pt-5">
        <p>
          The National Pension System, also known as NPS, is an initiative aimed at providing 
          a certain level of financial stability to retired individuals in India. Formerly referred 
          to as the National Pension Scheme, this program allows individuals who are 60 years of age or 
          older to utilize the accumulated funds from their pension corpus. To determine the exact amount
           of this accumulation, it is necessary to employ an NPS calculator.
        </p>
        <p>
          Individuals residing in the country, between the ages of 18 and 60, 
          are eligible to establish a pension corpus. This corpus serves as both an 
          investment and an asset for individuals post-retirement. Given the limited 
          job security prevalent in India&apos;s private sector, a National Pension Scheme 
          calculator becomes imperative for individuals seeking stability. It is worth
           noting that pension schemes in the country are not subject to market fluctuations 
           and offer reliable returns.
        </p>
        <h2>The NPS pension calculator will provide assistance in the following ways.</h2>
        <p>It will furnish you with the precise amount of funds you are entitled to receive in the future. 
          It is important to note that the pension amount is an investment and not a burden. 
          It is imperative to utilize an NPS calculator online to ascertain the total corpus.</p>
        <p>In accordance with the prevailing legislation, it is not permissible for an individual 
          to withdraw the entire post-retirement amount. Moreover, 40% of the total sum must be allocated 
          to annuities. Additionally, the remaining 60% is subject to taxation. All of these detailed figures 
          will be revealed once you commence utilizing our NPS scheme calculator.</p>
        <p>The calculator is infallible. If you have ever attempted to manually calculate pension amounts, 
          you can appreciate the difficulty of the task. Fortunately, our NPS calculator in India automates 
          the entire process.</p>

        <h2>Formula for calculating Pension amounts</h2>
        <p>
        The National Pension System (NPS), similar to all pension schemes globally, 
        employs the principle of compounding interest in order to compute investment earnings.
        </p>
        <p className="highlight">
          <code>
            A = P 
              ( 1 + r/n)
              <sup>nt</sup>
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
              <td>P</td>
              <td>Principal sum</td>
            </tr>
            <tr>
              <td>r</td>
              <td>Rate of interest per annum</td>
            </tr>
            <tr>
              <td>n</td>
              <td>NUmber of times interest compounds</td>
            </tr>
            <tr>
              <td>t</td>
              <td>Total tenure</td>
            </tr>
          </tbody>
        </table>
        <p>The importance of pension aggregation is exemplified in this scenario.</p>
        <p>
          In the event that an individual is currently 34 years of age, with a monthly contribution of Rs 3000, 
          it will be necessary to contribute to the pension account for an additional 26 years. Assuming an annual 
          interest rate of 10%, the National Pension Plan calculator provides the following details:
        </p>
        <p>
          Total Principal invested = Rs 9.36 Lakh

          Expected Maturity Sum = 44.35 Lakh
        </p>
      </div>
    </Section>
  );
};

export default NPSCalculator;
