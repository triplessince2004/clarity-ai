// app/page.tsx
"use client";

import { useState } from "react";
import IntroStep from "@/components/IntroStep";
import DilemmaStep from "@/components/DilemmaStep";
import ValuesStep from "@/components/ValuesStep";
import OptionsStep from "@/components/OptionsStep";
import RatingStep from "@/components/RatingStep";
import ResultStep from "@/components/ResultStep"; // 1. Make sure this import is here

// Define the shape of our ratings object
export type Ratings = Record<string, { a: number; b: number }>;

export default function Home() {
  const [currentStep, setCurrentStep] = useState("intro");

  const [decisionData, setDecisionData] = useState({
    dilemma: "",
    values: ["Work-Life Balance", "Career Growth", "Salary"],
    optionA: "Take the new job in Mumbai",
    optionB: "Stay in my current role in Bengaluru",
  });

  const [ratings, setRatings] = useState<Ratings>({});

  const handleNext = () => {
    if (currentStep === "intro") setCurrentStep("dilemma");
    if (currentStep === "dilemma") setCurrentStep("values");
    if (currentStep === "values") setCurrentStep("options");
    if (currentStep === "options") setCurrentStep("rating");
    if (currentStep === "rating") setCurrentStep("result");
  };
  
  const handleStartOver = () => {
    setCurrentStep("intro");
  }

  const updateData = (key: keyof typeof decisionData, value: any) => {
    setDecisionData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-8">
      {/* ... other steps are the same ... */}
      
      {currentStep === "intro" && <IntroStep onNext={handleNext} />}
      {currentStep === "dilemma" && <DilemmaStep onNext={handleNext} value={decisionData.dilemma} setValue={(val) => updateData("dilemma", val)} />}
      {currentStep === "values" && <ValuesStep onNext={handleNext} values={decisionData.values} setValues={(val) => updateData("values", val)} />}
      {currentStep === "options" && <OptionsStep onNext={handleNext} optionA={decisionData.optionA} setOptionA={(val) => updateData("optionA", val)} optionB={decisionData.optionB} setOptionB={(val) => updateData("optionB", val)} />}
      {currentStep === "rating" && <RatingStep onNext={handleNext} values={decisionData.values} optionA={decisionData.optionA} optionB={decisionData.optionB} setRatings={setRatings} />}

      {/* 2. This is the part to check. The placeholder div is replaced by the ResultStep component. */}
      {currentStep === "result" && (
        <ResultStep
          onStartOver={handleStartOver}
          data={decisionData}
          ratings={ratings}
        />
      )}
    </main>
  );
}