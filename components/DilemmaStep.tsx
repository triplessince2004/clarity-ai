// components/DilemmaStep.tsx

type DilemmaStepProps = {
  onNext: () => void;
};

// Make sure "export default" is here!
export default function DilemmaStep({ onNext }: DilemmaStepProps) {
  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What's the decision on your mind?
      </h2>
      <p className="mt-2 text-slate-600">
        Describe your dilemma in a sentence or two. This helps clarify your thinking.
      </p>
      <div className="mt-8">
        <textarea
          className="w-full h-24 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          placeholder="e.g., Should I take the new job in Mumbai or stay in my current role in Bengaluru?"
        />
      </div>
      <button
        onClick={onNext}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Next: Define Values
      </button>
    </div>
  );
}