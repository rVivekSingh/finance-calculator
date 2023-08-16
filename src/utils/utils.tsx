import { log } from "console";

export const formatAmountWithCommas = (amount: number): string => {
    return Intl.NumberFormat("en-IN").format(amount);
  };

  export function calculateFDMaturityAmount(
    principal: number, // Initial deposit amount
    annualInterestRate: number, // Annual interest rate (in percentage)
    compoundingFrequency: number, // Number of times interest is compounded per year
    investmentPeriod: number // Investment period in years
  ): number {
    const r: number = annualInterestRate / 100;
  const n: number = compoundingFrequency;
  const t: number = investmentPeriod;
  
  const maturityAmount: number = principal * Math.pow(1 + r / n, n * t);
  const compoundInterest: number = maturityAmount - principal;
  const roi: number = (compoundInterest / principal) * 100;
  return  parseFloat(maturityAmount.toFixed(2)) ;
  }
  