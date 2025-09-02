// components/ValuesStep.tsx
"use client";

type ValuesStepProps = {
  onNext: () => void;
  values: string[];
  setValues: (values: string[]) => void;
};

export default function ValuesStep({ onNext, values, setValues }: ValuesStepProps) {
  const handleValueChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  const handleAddValue = () => {
    setValues([...values, ""]);
  };

  return (
    <div className="w-full max-w-2xl text-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        What do you value most?
      </h2>
      <div className="mt-8 space-y-4 text-left">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleValue-change(index, e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        ))}
      </div>
      <button onClick={handleAddValue} className="mt-4 text-blue-600">
        + Add another value
      </button>
      <button onClick={onNext} className="mt-8 w-full px-6 py-3 bg-blue-600 text-white rounded-lg">
        Next: Define Options
      </button>
    </div>
  );
}