"use client";

import { useMemo, useState, useEffect } from "react";
import { Ratings } from "@/app/page";

type ResultStepProps = {
  onStartOver: () => void;
  ratings: Ratings;
  data: {
    dilemma: string;
    optionA: string;
    optionB: string;
    values: string[];
  };
};

export default function ResultStep({
  onStartOver,
  ratings,
  data,
}: ResultStepProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [aiResult, setAiResult] = useState("");

  const scores = useMemo(() => {
    let scoreA = 0;
    let scoreB = 0;
    for (const value of data.values) {
      scoreA += ratings[value]?.a || 0;
      scoreB += ratings[value]?.b || 0;
    }
    return { scoreA, scoreB };
  }, [data, ratings]);

  useEffect(() => {
    // ... (AI fetching logic is the same)
  }, [data, ratings, scores]);

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-primary rounded-xl shadow-lg">
      {isLoading ? (
        <div>
          <h2 className="text-2xl font-bold text-foreground">Clarity is thinking...</h2>
          <p className="mt-2 text-foreground/80">Analyzing your inputs to generate a thoughtful recommendation.</p>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="p-6 bg-background border border-gray-200 rounded-lg text-left whitespace-pre-wrap">
            <p className="text-foreground/90">{aiResult}</p>
          </div>

          <div className="mt-8 text-left p-4 bg-background rounded-lg border border-gray-200">
            <h4 className="font-bold text-lg mb-2 text-center text-foreground">Score Breakdown</h4>
            <div className="flex justify-between items-center text-foreground/90">
              <span className="font-semibold">{data.optionA || "Option A"}</span>
              <span className="font-bold text-xl bg-gradient-to-r from-accent-start to-accent-end text-transparent bg-clip-text">{scores.scoreA}</span>
            </div>
            <div className="flex justify-between items-center mt-2 text-foreground/90">
              <span className="font-semibold">{data.optionB || "Option B"}</span>
              <span className="font-bold text-xl bg-gradient-to-r from-accent-start to-accent-end text-transparent bg-clip-text">{scores.scoreB}</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onStartOver}
        className="mt-8 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all hover:bg-gray-300"
      >
        Start a New Decision
      </button>
    </div>
  );
}