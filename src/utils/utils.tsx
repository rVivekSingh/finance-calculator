
export const formatAmountWithCommas = (amount: number): string => {
    return Intl.NumberFormat("en-IN").format(amount);
  };