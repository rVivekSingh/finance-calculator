import { useState } from "react";

export default function SIPCalculator() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState("");
  const [totalReturns, setTotalReturns] = useState("");

  const formatOutputAmout = (amount) => {
    return amount.toString().split('.')[0].length > 3 ? amount.toString().substring(0,amount.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + amount.toString().substring(amount.toString().split('.')[0].length-3): amount.toString();
  }

  const sipCalc = (principal, interestRate, investmentPeriod) => {
    const monthlyInterestRate = parseInt(interestRate) / 1200; // Convert annual interest rate to monthly
    const totalInvestment = parseInt(principal) * investmentPeriod * 12;
    let futureValue = 0;
    for (let i = 1; i <= parseInt(investmentPeriod * 12); i++) {
      let temp  = 0;
      futureValue = (futureValue + parseInt(principal)) * (1 + monthlyInterestRate);
      //futureValue = futureValue + temp;
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //const interest = (principal * rate * time) / 100;
    //const totalAmount = parseInt(principal) + interest;
    console.log(principal, rate, time);
    const data = sipCalc(principal, rate, time);
    console.log("sip data", data);
    setResult("₹"+data.maturityValue);
    setTotalReturns("₹"+data.totalReturns);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="principal"
            className="block mb-2 text-sm font-medium text-green-500 "
          >
            Principal Amount:
          </label>
          <input
            type="number"
            value={principal}
            id="principal"
            className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setPrincipal(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="interest"
            className="block mb-2 text-sm font-medium text-green-500 "
          >
            Rate of Interest
          </label>
          <input
            type="number"
            value={rate}
            id="interest"
            className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-green-500 "
          >
            Investment Time(in Years):
          </label>
          <input
            type="number"
            value={time}
            id="interest"
            className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Calculate
        </button>
      </form>
      <div className="px-6 py-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500"
                >
                  Invested amount
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500">{"₹"} {formatOutputAmout(principal * time * 12)}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500"
                >
                  Est. returns
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500">{formatOutputAmout(totalReturns)}</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500"
                >
                  Total value
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:bg-teal-500 bg-teal-500">{formatOutputAmout(result)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
