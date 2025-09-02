// components/DilemmaStep.tsx

type DilemmaStepProps = {
  onNext: () => void;
  value: string;
  setValue: (value: string) => void;
};

export default function DilemmaStep({ onNext, value, setValue }: DilemmaStepProps) {
  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What&apos;s the decision on your mind?
      </h2>
      <div className="mt-8">
        <textarea
          className="w-full h-24 p-3 border rounded-lg"
          placeholder="e.g., Should I take the new job in Mumbai or stay in my current role in Bengaluru?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={onNext} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
        Next: Define Values
      </button>
    </div>
  );
}