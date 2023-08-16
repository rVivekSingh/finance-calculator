export function calculateSukanyaSamriddhiMaturityAmount(
    principal: number, // Initial deposit amount
    annualInterestRate: number, // Annual interest rate (in percentage)
    investmentPeriod: number // Investment period in years
  ): number {
    const r: number = annualInterestRate / 100;
    const n: number = 12; // Compounded quarterly for Sukanya Samriddhi Yojana
    const t: number = investmentPeriod;
    const maturityAmount: number =
      principal * Math.pow(1 + r / n, n * t);
    return parseFloat(maturityAmount.toFixed(2));
  }

const initialDeposit = 50000; // Replace with your desired initial deposit amount
const annualInterestRate = 7.6; // 7.6% annual interest rate
const investmentPeriod = 15; // 15 years investment period

const maturityAmount = calculateSukanyaSamriddhiMaturityAmount(
  initialDeposit,
  annualInterestRate,
  investmentPeriod
);
console.log(`Maturity Amount: ${maturityAmount}`);

  