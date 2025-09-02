"use client";

type ValuesStepProps = {
  onNext: () => void;
  values: string[];
  setValues: (values: string[]) => void;
};

export default function ValuesStep({
  onNext,
  values,
  setValues,
}: ValuesStepProps) {
  const handleValueChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
  };

  const handleAddValue = () => {
    setValues([...values, ""]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 bg-primary rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-foreground">
        What do you value most?
      </h2>
      <p className="mt-2 text-foreground/80">
        List the criteria that are most important to you in this decision.
      </p>
      <div className="mt-8 space-y-4 text-left">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleValueChange(index, e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-start"
          />
        ))}
      </div>
      <button
        onClick={handleAddValue}
        className="mt-4 text-accent-start font-semibold hover:underline"
      >
        + Add another value
      </button>
      <button
        onClick={onNext}
        className="mt-8 w-full px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105"
      >
        Next: Define Options
      </button>
    </div>
  );
}