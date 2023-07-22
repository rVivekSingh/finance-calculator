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
