// components/ResultStep.tsx
"use client";

import { useMemo } from "react";
import { Ratings } from "@/app/page";

type ResultStepProps = {
  onStartOver: () => void;
  ratings: Ratings;
  data: {
    optionA: string;
    optionB: string;
    values: string[];
  };
};

export default function ResultStep({ onStartOver, ratings, data }: ResultStepProps) {
  const scores = useMemo(() => {
    let scoreA = 0;
    let scoreB = 0;
    for (const value of data.values) {
      scoreA += ratings[value]?.a || 0;
      scoreB += ratings[value]?.b || 0;
    }
    return { scoreA, scoreB };
  }, [data, ratings]);

  const winner = scores.scoreA > scores.scoreB ? data.optionA : data.optionB;
  const isTie = scores.scoreA === scores.scoreB;

  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        Based on your values, here&apos;s our recommendation:
      </h2>
      
      <div className="mt-8 p-6 bg-white border-2 border-blue-500 rounded-lg shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold text-blue-600">
          {isTie ? "It's a Tie!" : winner}
        </h3>
        {!isTie && (
          <p className="mt-2 text-slate-600">
            This option aligns better with the values you prioritized.
          </p>
        )}
      </div>

      <div className="mt-8 text-left p-6 bg-slate-100 rounded-lg">
        <h4 className="font-bold text-lg mb-4 text-center">Score Breakdown</h4>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">{data.optionA || "Option A"}</span>
          <span className="font-bold text-2xl text-blue-600">{scores.scoreA}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">{data.optionB || "Option B"}</span>
          <span className="font-bold text-2xl text-blue-600">{scores.scoreB}</span>
        </div>
      </div>

      <button
        onClick={onStartOver}
        className="mt-8 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700"
      >
        Start a New Decision
      </button>
    </div>
  );
}