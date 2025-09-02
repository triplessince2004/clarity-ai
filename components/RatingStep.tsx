"use client";

import { useState } from "react";
import { Ratings } from "@/app/page";

type RatingStepProps = {
  onNext: () => void;
  values: string[];
  optionA: string;
  optionB: string;
  setRatings: (ratings: Ratings) => void;
};

function RatingSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="py-3">
      <label className="block font-semibold text-sm text-foreground/90">
        {label}
      </label>
      <div className="flex items-center gap-4 mt-2">
        <input
          type="range"
          min="-5"
          max="5"
          step="1"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="font-bold text-lg text-foreground w-8 text-center">{value}</span>
      </div>
    </div>
  );
}

export default function RatingStep({
  onNext,
  values,
  optionA,
  optionB,
  setRatings,
}: RatingStepProps) {
  const [internalRatings, setInternalRatings] = useState<Ratings>(
    Object.fromEntries(values.map((v) => [v, { a: 0, b: 0 }]))
  );

  const handleRatingChange = (
    valueKey: string,
    option: "a" | "b",
    newRating: number
  ) => {
    setInternalRatings((prev) => ({
      ...prev,
      [valueKey]: { ...prev[valueKey], [option]: newRating },
    }));
  };

  const handleSubmit = () => {
    setRatings(internalRatings);
    onNext();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-primary rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-foreground text-center">
        Rate Your Values for Each Option
      </h2>
      <p className="mt-2 text-foreground/80 text-center">
        How well does each option satisfy your values? (-5 is very poorly, 5 is very well).
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="p-4 border border-gray-200 rounded-lg bg-background">
          <h3 className="text-lg font-bold text-center mb-4 text-foreground">
            {optionA || "Option A"}
          </h3>
          {values.map((value) => (
            <RatingSlider
              key={`${value}-a`}
              label={value}
              value={internalRatings[value]?.a || 0}
              onChange={(newRating) => handleRatingChange(value, "a", newRating)}
            />
          ))}
        </div>

        <div className="p-4 border border-gray-200 rounded-lg bg-background">
          <h3 className="text-lg font-bold text-center mb-4 text-foreground">
            {optionB || "Option B"}
          </h3>
          {values.map((value) => (
            <RatingSlider
              key={`${value}-b`}
              label={value}
              value={internalRatings[value]?.b || 0}
              onChange={(newRating) => handleRatingChange(value, "b", newRating)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-8 w-full px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105"
      >
        Get My Recommendation
      </button>
    </div>
  );
}