export const calculateSWP = (
    principal: number, // Initial Investment Amount
    withdrawalFrequency: number, // Withdrawal Frequency (e.g., 12 for monthly, 4 for quarterly, 1 for annual)
    investmentPeriod: number, // Investment Period (in years)
    annualGrowthRate: number = 0 // Annual Growth Rate (default value is 0 if not provided)
  ): number  => {
    // Calculate the number of withdrawal periods
    const totalWithdrawalPeriods = withdrawalFrequency * investmentPeriod;
    const monthlyInterestRate: number = annualGrowthRate / 1200; // Convert annual interest rate to monthly

    // Calculate the SWP amount for each period
    let swpAmount = 0;
    for (let i = 1; i <= totalWithdrawalPeriods; i++) {
      swpAmount += (principal / withdrawalFrequency) + (annualGrowthRate / 100) * principal;
      principal -= (principal / withdrawalFrequency);
    }
  
    return swpAmount;
  }


export const getTotalWithdrawalAmount = (
    withdrawalAmount: number, //withdrawal amount per month
    investmentYears: number
): number => {
    return (withdrawalAmount * (investmentYears * 12));
}

  