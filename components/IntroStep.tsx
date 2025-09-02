// components/IntroStep.tsx

type IntroStepProps = {
  onNext: () => void;
};

export default function IntroStep({ onNext }: IntroStepProps) {
  return (
    <div className="text-center p-4 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Go from confused to confident.
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        This tool is a thinking partner. We&apos;ll guide you through a structured process to make brilliant, well-reasoned decisions for life&apos;s important crossroads.
      </p>
      <button
        onClick={onNext}
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Get Started
      </button>
    </div>
  );
}