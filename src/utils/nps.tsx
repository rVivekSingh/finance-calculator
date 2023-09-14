export function npscalc(
    investmentPerMonth : number,
    expectedReturns : number,
    ageValue : number,
) : {
    maturityValue : number,
    totalInterest : number,
    annuityInvestment : number,
    totalInvestment : number,
}{ 
    let nps_defined_worth = 0.4;

    let investmentDuration = 60 - ageValue;
    let roiPerMonth = expectedReturns / 1200;
    let timeInMonths = investmentDuration * 12;

    let totalInvestment = investmentPerMonth * investmentDuration * 12;
    let maturityValue = Math.round((investmentPerMonth * (Math.pow(1 + roiPerMonth, timeInMonths) - 1)) / roiPerMonth);
    let totalInterest = maturityValue - totalInvestment;
    let annuityInvestment = Math.round(maturityValue * nps_defined_worth); //min 40%

    return {
        totalInvestment,
        maturityValue,
        totalInterest,
        annuityInvestment
    }
}
//console.log(npscalc(10000, 9, 20));


