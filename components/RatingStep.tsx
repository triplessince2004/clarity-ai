// components/RatingStep.tsx
"use client";

import { useState } from "react";
import { Ratings } from "@/app/page"; // Import the type from our main page

type RatingStepProps = {
  onNext: () => void;
  values: string[];
  optionA: string;
  optionB: string;
  setRatings: (ratings: Ratings) => void; // Expect the setter function
};

// ... (The RatingSlider helper component remains the same)
function RatingSlider({ label, value, onChange }: { label: string, value: number, onChange: (value: number) => void }) {
  // ... no changes here
  return (
    <div className="py-2">
      <label className="block font-semibold text-sm">{label}</label>
      <input type="range" min="-5" max="5" step="1" value={value} onChange={(e) => onChange(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
      <div className="flex justify-between text-xs text-gray-500">
        <span>Very Poorly</span>
        <span className="font-bold text-lg text-slate-700">{value}</span>
        <span>Very Well</span>
      </div>
    </div>
  );
}


export default function RatingStep({ onNext, values, optionA, optionB, setRatings }: RatingStepProps) {
  const [internalRatings, setInternalRatings] = useState<Ratings>(
    Object.fromEntries(values.map(v => [v, { a: 0, b: 0 }]))
  );

  const handleRatingChange = (valueKey: string, option: 'a' | 'b', newRating: number) => {
    setInternalRatings(prev => ({
      ...prev,
      [valueKey]: { ...prev[valueKey], [option]: newRating }
    }));
  };

  const handleSubmit = () => {
    setRatings(internalRatings); // Send the final ratings up to the main page
    onNext(); // Move to the next step
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
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="text-lg font-bold text-center mb-4">{optionA || "Option A"}</h3>
          {values.map(value => (
            <RatingSlider
              key={`${value}-a`}
              label={value}
              value={internalRatings[value]?.a || 0}
              onChange={(newRating) => handleRatingChange(value, 'a', newRating)}
            />
          ))}
        </div>

        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="text-lg font-bold text-center mb-4">{optionB || "Option B"}</h3>
          {values.map(value => (
            <RatingSlider
              key={`${value}-b`}
              label={value}
              value={internalRatings[value]?.b || 0}
              onChange={(newRating) => handleRatingChange(value, 'b', newRating)}
            />
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} className="mt-8 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
        Get My Recommendation
      </button>
    </div>
  );
}