"use client";

type OptionsStepProps = {
  onNext: () => void;
  optionA: string;
  setOptionA: (value: string) => void;
  optionB: string;
  setOptionB: (value: string) => void;
};

export default function OptionsStep({
  onNext,
  optionA,
  setOptionA,
  optionB,
  setOptionB,
}: OptionsStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-primary rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-foreground">
        What are your options?
      </h2>
      <p className="mt-2 text-foreground/80">
        Clearly define the two choices you&apos;re weighing.
      </p>
      <div className="mt-8 space-y-6 text-left">
        <div>
          <label className="block font-semibold text-foreground/90 mb-1">
            Option A
          </label>
          <input
            type="text"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-start"
            placeholder="e.g., Take the new job in Mumbai"
          />
        </div>
        <div>
          <label className="block font-semibold text-foreground/90 mb-1">
            Option B
          </label>
          <input
            type="text"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-start"
            placeholder="e.g., Stay in my current role in Bengaluru"
          />
        </div>
      </div>
      <button
        onClick={onNext}
        className="mt-8 w-full px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105"
      >
        Next: Rate Your Values
      </button>
    </div>
  );
}