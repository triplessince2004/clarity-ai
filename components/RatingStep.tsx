// components/RatingStep.tsx
"use client";

import { useState } from "react";

type RatingStepProps = {
  onNext: () => void;
  values: string[];
  optionA: string;
  optionB: string;
};

// Helper component for our sliders
function RatingSlider({ label, value, onChange }: { label: string, value: number, onChange: (value: number) => void }) {
  return (
    <div className="py-2">
      <label className="block font-semibold text-sm">{label}</label>
      <input
        type="range"
        min="-5"
        max="5"
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>Less Important</span>
        <span className="font-bold text-lg">{value}</span>
        <span>More Important</span>
      </div>
    </div>
  );
}

export default function RatingStep({ onNext, values, optionA, optionB }: RatingStepProps) {
  // Create a state to hold all ratings, initialized to 0
  const [ratings, setRatings] = useState<Record<string, { a: number; b: number }>>(
    Object.fromEntries(values.map(v => [v, { a: 0, b: 0 }]))
  );

  const handleRatingChange = (valueKey: string, option: 'a' | 'b', newRating: number) => {
    setRatings(prev => ({
      ...prev,
      [valueKey]: { ...prev[valueKey], [option]: newRating }
    }));
  };

  return (
    <div className="w-full max-w-3xl animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
        Rate Your Values for Each Option
      </h2>
      <p className="mt-2 text-slate-600 text-center">
        For each value, how well does the option satisfy it? (-5 is very poorly, 5 is very well).
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Option A Column */}
        <div className="p-4 border rounded-lg bg-white">
          <h3 className="text-lg font-bold text-center">{optionA || "Option A"}</h3>
          {values.map(value => (
            <RatingSlider
              key={`${value}-a`}
              label={value}
              value={ratings[value]?.a || 0}
              onChange={(newRating) => handleRatingChange(value, 'a', newRating)}
            />
          ))}
        </div>

        {/* Option B Column */}
        <div className="p-4 border rounded-lg bg-white">
          <h3 className="text-lg font-bold text-center">{optionB || "Option B"}</h3>
          {values.map(value => (
            <RatingSlider
              key={`${value}-b`}
              label={value}
              value={ratings[value]?.b || 0}
              onChange={(newRating) => handleRatingChange(value, 'b', newRating)}
            />
          ))}
        </div>
      </div>
      <button onClick={onNext} className="mt-8 w-full px-6 py-3 bg-blue-600 text-white rounded-lg">
        Get My Recommendation
      </button>
    </div>
  );
}