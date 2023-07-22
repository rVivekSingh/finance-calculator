function calculateSIP(principal, interestRate, investmentPeriod) {
  const monthlyInterestRate = parseInt(interestRate) / 1200; // Convert annual interest rate to monthly
  const totalInvestment = parseInt(principal) * investmentPeriod * 12;
  let futureValue = 0;
  debugger;
  for (let i = 1; i <= parseInt(investmentPeriod); i++) {
    let temp = 0;
    temp = (futureValue + parseInt(principal)) * (1 + monthlyInterestRate);
    futureValue = futureValue + temp;
  }

  const maturityValue = futureValue.toFixed(0);
  const totalReturns = (maturityValue - totalInvestment);
  const annualizedReturns = ((Math.pow(futureValue / principal, 1 / investmentPeriod) - 1) * 1200).toFixed(2);
  const sipAmount = (totalInvestment / (investmentPeriod * 12)).toFixed(2);

  return {
    maturityValue,
    totalInvestment,
    totalReturns,
    annualizedReturns,
    sipAmount
  };
}

export default calculateSIP;