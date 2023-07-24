export const calculateEMI = (
  loanAmount: number,
  interestRate: number,
  tenure: number
) => {
  const monthlyInterestRate = interestRate / 12 / 100;
  const tenureInMonth = tenure * 12;

  const emiAmount =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** tenureInMonth) /
    ((1 + monthlyInterestRate) ** tenureInMonth - 1);

  return emiAmount;
};

export const calculateSIP = (principal: number, interestRate: number, investmentPeriod: number): {
  maturityValue: number,
  totalInvestment: number,
  totalReturns: number,
  annualizedReturns: string,
  sipAmount: string
} => {
  const monthlyInterestRate: number = interestRate / 1200; // Convert annual interest rate to monthly
  const totalInvestment: number = principal * investmentPeriod * 12;
  let futureValue: number = 0;

  for (let i = 1; i <= investmentPeriod * 12; i++) {
    futureValue = (futureValue + principal) * (1 + monthlyInterestRate);
  }

  const maturityValue: string = futureValue.toFixed(0);
  const totalReturns: number = parseInt(maturityValue) - totalInvestment;
  const annualizedReturns: string = ((Math.pow(futureValue / principal, 1 / investmentPeriod) - 1) * 1200).toFixed(2);
  const sipAmount: string = (totalInvestment / (investmentPeriod * 12)).toFixed(2);

  return {
    maturityValue,
    totalInvestment,
    totalReturns,
    annualizedReturns,
    sipAmount
  };
}
