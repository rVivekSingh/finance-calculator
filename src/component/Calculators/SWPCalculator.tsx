import { formatAmountWithCommas } from "@/utils/utils";
import { calculateSWP, getTotalWithdrawalAmount } from "@/utils/swpCalculator";
import React, { useState } from "react";
import Button from "../Button";
import FormInput from "../FormInput";
import { Card, CardBody, CardChart, CardForm, CardResult } from "../Card";
import Section from "../Section";

const SWPCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number | undefined>(
    1000000
  );
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | any>(5000);
  const [interestRate, setInterestRate] = useState<number | undefined>(10);
  const [tenure, setTenure] = useState<number | undefined>(5);

  const [totalwithdrawal, setTotalWithdrawal] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();

  const handleCalculate = (e: any) => {
    e.preventDefault();
    if (
      investmentAmount !== undefined &&
      interestRate !== undefined &&
      tenure !== undefined
    ) {
      const swpAmount = calculateSWP(
        investmentAmount,
        withdrawalAmount,
        tenure,
        interestRate
      );
      setTotalWithdrawal(getTotalWithdrawalAmount(withdrawalAmount, tenure));
      //   setTotalInvestment(Math.round(sipCalculation.totalInvestment));
      //   setTotalInterest(Math.round(sipCalculation.totalReturns));
      //   setTotalValue(Math.round(sipCalculation.maturityValue));
    }
  };

  const handleResetForm = () => {
    setInvestmentAmount(undefined);
    setWithdrawalAmount(undefined);
    setInterestRate(undefined);
    setTenure(undefined);

    setTotalWithdrawal(0);
    setTotalValue(0);
  };

  const resetStatus =
    !investmentAmount || !interestRate || !tenure || !withdrawalAmount;

  return (
    <Section title="SWP (Systematic Withdrawal Plan) Calculator">
      <Card>
        <CardBody>
          <CardForm>
            <form autoComplete="off">
              <div>
                <FormInput
                  label="Total Investment"
                  type="number"
                  labelProps={{ htmlFor: "total investment" }}
                  value={investmentAmount !== undefined ? investmentAmount : ""}
                  id="investment"
                  unit="₹"
                  placeholder="10,00,000"
                  onChange={(e) =>
                    setInvestmentAmount(parseFloat(e.target.value))
                  }
                  required
                />

                <FormInput
                  label="Withdrawal Per Month"
                  type="number"
                  labelProps={{ htmlFor: "withdwaral" }}
                  value={withdrawalAmount !== undefined ? withdrawalAmount : ""}
                  id="rate"
                  unit="₹"
                  placeholder="8.5"
                  onChange={(e) =>
                    setWithdrawalAmount(parseFloat(e.target.value))
                  }
                  required
                />
                <FormInput
                  label="Time Period"
                  optional="(in years)"
                  type="number"
                  labelProps={{ htmlFor: "time period" }}
                  value={tenure !== undefined ? tenure : ""}
                  id="tenure"
                  unit="Yrs"
                  placeholder="10"
                  onChange={(e) =>
                    setInterestRate(parseInt(e.target.value, 10))
                  }
                  required
                />

                <FormInput
                  label="Expected Returns"
                  optional="(p.a.)"
                  type="number"
                  labelProps={{ htmlFor: "expected returns" }}
                  value={interestRate !== undefined ? interestRate : ""}
                  id="tenure"
                  unit="%"
                  placeholder="10"
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
                <p className="text">Total Investment</p>
                <h1 className="h1">
                  {investmentAmount
                    ? "₹" + formatAmountWithCommas(investmentAmount)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Total Withdrawal</p>
                <h1 className="h1">
                  {totalwithdrawal
                    ? "₹" + formatAmountWithCommas(totalwithdrawal)
                    : "-"}
                </h1>
              </div>
              <div className="card-result-items">
                <p className="text">Final Value</p>
                <h1 className="h1">
                  {totalValue ? "₹" + formatAmountWithCommas(totalValue) : "-"}
                </h1>
              </div>
            </CardResult>
          </CardForm>
        </CardBody>
      </Card>

      <div className="pt-5">
        <h1>SWP (Systematic Withdrawal Plan) calculator</h1>
        <p>
          A SWP (Systematic Withdrawal Plan) calculator is a powerful financial
          tool designed to assist investors in planning and managing their
          withdrawals from an investment portfolio. It helps individuals
          generate a regular income stream or meet specific financial goals by
          calculating the amount that can be withdrawn periodically while
          preserving the long-term sustainability of their investments.
        </p>
        <p>
          The SWP calculator takes into account several key factors, including
          the initial investment amount, desired withdrawal frequency (e.g.,
          monthly, quarterly, annually), investment period, and, optionally, the
          expected annual growth rate of the investment. By inputting these
          details, investors can gain valuable insights into their investment
          portfolio&apos;s potential to generate income over a specific time
          frame.
        </p>
        <p>
          This tool is especially beneficial for retirees or individuals seeking
          to generate passive income during their retirement years. By
          understanding the sustainable withdrawal amount, investors can make
          informed decisions about their financial well-being, ensuring they
          strike the right balance between maintaining their investment&apos;s
          value and fulfilling their income needs.
        </p>
        <h2>The SWP calculator empowers users to:</h2>
        <p>
          Plan for Retirement: Determine the most appropriate withdrawal
          strategy during retirement, ensuring a comfortable and secure
          post-retirement life.
        </p>
        <p>
          Manage Income Streams: Create a structured approach to generating
          regular income from investments, avoiding over or under withdrawals.
        </p>
        <p>
          Set Financial Goals: Use the calculator to plan for major life events
          such as education expenses, home purchases, or travel plans, while
          considering the impact on investment holdings.
        </p>
        <p>
          Optimize Withdrawals: Assess the impact of different withdrawal
          frequencies or investment periods to identify the most suitable
          strategy.
        </p>
        <p>
          While the SWP calculator provides valuable estimates, it is essential
          to remember that actual investment performance and market fluctuations
          may affect the real-world outcomes. Therefore, investors should
          approach SWP planning holistically, taking into account other
          financial factors and seeking advice from financial professionals if
          needed.
        </p>
        <p>
          In summary, a SWP calculator empowers investors to make informed
          decisions regarding their investments and financial goals. By offering
          a clear picture of the withdrawal process, it serves as a valuable
          tool in achieving long-term financial security and planning for a
          prosperous future.
        </p>

        <h2>How to calculate SWP Amount</h2>

        <p className="highlight">
          <code>
            SWP Amount = (Initial Investment / Withdrawal Frequency) + (Annual
            Growth Rate / 100) * Initial Investment
          </code>
        </p>
        <h2>Explanation:</h2>
        <p>
          <span className="text-red-400">SWP Amount</span> represents the
          periodic amount that can be withdrawn from the investment portfolio.
        </p>
        <p>
          <span className="text-red-400">Initial Investment</span> is the total
          amount initially invested in the portfolio.
        </p>
        <p>
          <span className="text-red-400">Withdrawal Frequency</span> refers to
          how often you plan to make withdrawals (e.g., monthly, quarterly,
          annually).
        </p>
        <p>
          <span className="text-red-400">Annual Growth Rate</span> is the
          expected annual growth rate of the investment. This part is optional
          and can be omitted if no growth rate is considered.
        </p>
      </div>
    </Section>
  );
};
export default SWPCalculator;
