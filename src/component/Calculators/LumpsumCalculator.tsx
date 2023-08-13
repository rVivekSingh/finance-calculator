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
      <Card>

        <div>
          <p className="para">
            Investments made in Mutual Funds can be broadly categorized into two types - 
            the first one being a lump sum investment and the second one being Systematic Investment Plan or SIP. 
            A lump sum investment refers to a situation where an investor invests a considerable amount of money in a specific mutual fund scheme. On the other hand, SIP involves investing smaller amounts of money on a monthly basis.

            Both of these strategies have their own set of benefits.
            A majority of investors prefer lump sum investments because of lesser variables involved, and generally higher returns.
            You can calculate the estimated returns on your lump sum mutual fund investment by using an online mutual fund lump sum calculator.
          </p>
        </div>
        <div>
        How can a Lump sum Calculator Help You?
          <p>
            Mutual fund enthusiasts can avail the services of this calculator to calculate the projected returns on their investments.
            However, prior to delving into the advantages that this calculator offers,
             it is essential to acquaint oneself with the various types of return on a lumpsum investment.

            The diverse types of return include Absolute return, Total return, Annualised return, Point to point return, Trailing return, Rolling return.
          </p>
        </div>

        <div>
           <p className="para">
            It is of utmost importance for an investor to possess a detailed understanding of all the aforementioned types of returns 
            in order to reap the maximum benefits from their mutual fund investments.

            Having familiarized oneself with the various types of returns, it is now time to explore the advantages of employing a lumpsum return calculator.

            This particular calculator furnishes an estimation of the returns that can be expected for the entire investment tenure. 
            One can easily calculate the returns for 1-year, 3-year and 5-year investment periods using this tool.

            Furthermore, it is remarkably convenient and user-friendly, even for those lacking expertise in this field.

            It provides a reasonably accurate prediction of the returns, keeping in mind the fact that mutual fund investments are exposed to 
            market risks and thus, cannot be precisely anticipated.

            An MF lumpsum calculator empowers an investor with the ability to plan their finances more effectively by 
            relying on the estimated returns they are likely to receive upon completion of their investment period.
           </p>

           Formula to Calculate MF returns
           <p>
              The mechanism utilized by all lumpsum calculator mutual funds to determine the anticipated return on investment is based on a distinct approach. This method is essentially a compound interest formula that involves one of the variables being the frequency of times the interest is compounded within a given year.

              The formula for computing the returns is as follows:

              A = P (1 + r/n) ^ nt
           </p>
           Variables for Investment Calculation
            <table>
                <tr>
                    <th>Variable</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>A</td>
                    <td>Estimated return</td>
                </tr>
                <tr>
                    <td>P</td>
                    <td>Present value</td>
                </tr>
                <tr>
                    <td>r</td>
                    <td>Rate of return</td>
                </tr>
                <tr>
                    <td>t</td>
                    <td>Duration of investment</td>
                </tr>
                <tr>
                    <td>n</td>
                    <td>Number of compounded interests in a year</td>
                </tr>
            </table>
        </div>
        <div>
           <p>
              One may utilize the ensuing formula to accurately compute the returns on their mutual funds. 
              For instance, consider an investment of Rs. 15 Lakh in a fund that yields 12% over a period of five years, compounded biannually.

              The anticipated return in this particular scenario may be calculated as follows:

              A = Rs. 15, 00,000 (1 + 12%) ^ 5

              Owing to its complexity, this equation may seem daunting to most investors. However, a lumpsum MF calculator may provide instantaneous calculations. 
              In this case, one's estimated return at the culmination of a five-year period would amount to Rs. 26, 43, 513.
            </p>

        </div>
      </Card>
    </Section>
  );
};


export default LumpsumCalculator