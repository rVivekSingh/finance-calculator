import { useState } from 'react';
import calculateSIP from '../../utils/util';

export default function SIPCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    //const interest = (principal * rate * time) / 100;
    //const totalAmount = parseInt(principal) + interest;
    console.log(principal, rate, time);
    const data = calculateSIP(principal, rate, time);
    console.log('sip data', data);
    setResult(`Your total amount after ${time} years will be Rs. 12122`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="principal" className="block mb-2 text-sm font-medium text-green-500 ">Principal Amount:</label>
            <input type="number" value={principal} id="principal" className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPrincipal(e.target.value)} required/>
        </div>
        <div className="mb-6">
            <label htmlFor="interest" className="block mb-2 text-sm font-medium text-green-500 ">Rate of Interest</label>
            <input type="number" value={rate} id="interest" className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setRate(e.target.value)} required/>
        </div>
        <div className="mb-6">
            <label htmlFor="time" className="block mb-2 text-sm font-medium text-green-500 ">Investment Time(in Years):</label>
            <input type="number" value={time} id="interest" className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setTime(e.target.value)} required/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate</button>
      </form>
      {result && <div>{result}</div>}
    </div>
  );
}
