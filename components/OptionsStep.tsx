// components/OptionsStep.tsx
"use client";

type OptionsStepProps = {
  onNext: () => void;
  optionA: string;
  setOptionA: (value: string) => void;
  optionB: string;
  setOptionB: (value: string) => void;
};

export default function OptionsStep({ onNext, optionA, setOptionA, optionB, setOptionB }: OptionsStepProps) {
  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What are your options?
      </h2>
      <p className="mt-2 text-slate-600">
        Clearly define the two choices you&apos;re weighing.
      </p>
      <div className="mt-8 space-y-6 text-left">
        <div>
          <label className="block font-semibold">Option A</label>
          <input
            type="text"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            className="mt-1 w-full p-3 border rounded-lg"
            placeholder="e.g., Take the new job in Mumbai"
          />
        </div>
        <div>
          <label className="block font-semibold">Option B</label>
          <input
            type="text"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            className="mt-1 w-full p-3 border rounded-lg"
            placeholder="e.g., Stay in my current role in Bengaluru"
          />
        </div>
      </div>
      <button onClick={onNext} className="mt-8 w-full px-6 py-3 bg-blue-600 text-white rounded-lg">
        Next: Rate Your Values
      </button>
    </div>
  );
}