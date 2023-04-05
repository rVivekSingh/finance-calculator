function calculateSIP(principal, interestRate, investmentPeriod) {
    const monthlyInterestRate = interestRate / 1200; // Convert annual interest rate to monthly
    const totalInvestment = principal * investmentPeriod * 12;
    let futureValue = 0;
  
    for (let i = 1; i <= investmentPeriod * 12; i++) {
      futureValue = (futureValue + principal) * (1 + monthlyInterestRate);
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