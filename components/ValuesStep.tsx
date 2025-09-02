// components/ValuesStep.tsx
"use client";

import { useState } from "react";

type ValuesStepProps = {
  onNext: () => void;
};

// Make sure "export default" is here
export default function ValuesStep({ onNext }: ValuesStepProps) {
  const [values, setValues] = useState([
    "Work-Life Balance",
    "Career Growth",
    "Salary",
  ]);

  const handleValueChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  const handleAddValue = () => {
    setValues([...values, ""]);
  };

  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What do you value most?
      </h2>
      <p className="mt-2 text-slate-600">
        List the criteria that are most important to you in this decision.
      </p>
      <div className="mt-8 space-y-4 text-left">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleValueChange(index, e.target.value)}
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        ))}
      </div>
      <button
        onClick={handleAddValue}
        className="mt-4 text-blue-600 font-semibold hover:text-blue-800"
      >
        + Add another value
      </button>
      <button
        onClick={onNext}
        className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Next: Define Options
      </button>
    </div>
  );
}