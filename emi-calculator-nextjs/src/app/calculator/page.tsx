"use client"
import React, { useState } from "react";

const EmiCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number | string>(100000);
  const [interestRate, setInterestRate] = useState<number | string>(10);
  const [loanTenure, setLoanTenure] = useState<number | string>(12);
  const [emi, setEmi] = useState<string | null>(null);

  const calculateEmi = () => {
    if (!principal || !interestRate || !loanTenure) {
      // Handle case where any value is empty
      setEmi(null);
      return;
    }

    const principalNum = parseFloat(principal as string);
    const interestRateNum = parseFloat(interestRate as string);
    const loanTenureNum = parseInt(loanTenure as string);

    if (isNaN(principalNum) || isNaN(interestRateNum) || isNaN(loanTenureNum)) {
      // Handle case where values are not valid numbers
      setEmi(null);
      return;
    }

    const emiValue =
      principalNum *
      (interestRateNum / 12 / 100) *
      (Math.pow(1 + interestRateNum / 12 / 100, loanTenureNum) /
        (Math.pow(1 + interestRateNum / 12 / 100, loanTenureNum) - 1));

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">EMI Calculator</h1>

      <label className="block mb-2 text-sm text-gray-600">Principal Amount</label>
      <input
        type="text"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 text-sm text-gray-600">Interest Rate</label>
      <input
        type="text"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        placeholder="Enter interest rate"
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 text-sm text-gray-600">Loan Tenure (in months)</label>
      <input
        type="text"
        value={loanTenure}
        onChange={(e) => setLoanTenure(e.target.value)}
        placeholder="Enter loan tenure"
        className="w-full p-2 mb-4 border rounded-md"
      />

      <button
        onClick={calculateEmi}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Calculate EMI
      </button>

      {emi !== null && (
        <p className="mt-4">EMI: {isNaN(parseFloat(emi)) ? "Invalid input" : emi}</p>
      )}
    </div>
  );
};

export default EmiCalculator;