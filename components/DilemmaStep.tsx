type DilemmaStepProps = {
  onNext: () => void;
  value: string;
  setValue: (value: string) => void;
};

export default function DilemmaStep({ onNext, value, setValue }: DilemmaStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-primary rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-foreground">
        What&apos;s the decision on your mind?
      </h2>
      <p className="mt-2 text-foreground/80">
        Describe your dilemma. This helps clarify your thinking.
      </p>
      <div className="mt-8">
        <textarea
          className="w-full h-24 p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-start placeholder:text-gray-400"
          placeholder="e.g., Should I take the new job in Mumbai or stay in my current role in Bengaluru?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        onClick={onNext}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105"
      >
        Next: Define Values
      </button>
    </div>
  );
}