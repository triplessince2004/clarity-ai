// components/OptionsStep.tsx
"use client";

import { useState } from "react";

type OptionsStepProps = {
  onNext: () => void;
};

export default function OptionsStep({ onNext }: OptionsStepProps) {
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");

  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What are your options?
      </h2>
      <p className="mt-2 text-slate-600">
        Clearly define the two choices you're weighing.
      </p>
      <div className="mt-8 space-y-6 text-left">
        <div>
          <label className="block font-semibold text-slate-700">Option A</label>
          <input
            type="text"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Take the new job in Mumbai"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700">Option B</label>
          <input
            type="text"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Stay in my current role in Bengaluru"
          />
        </div>
      </div>
      <button
        onClick={onNext}
        className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        Next: Rate Your Values
      </button>
    </div>
  );
}