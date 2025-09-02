type IntroStepProps = {
  onNext: () => void;
};

export default function IntroStep({ onNext }: IntroStepProps) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center p-8">
      <h1 className="text-5xl md:text-7xl font-bold text-foreground">
        Go from confused to confident.
      </h1>
      <p className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto">
        This tool is a thinking partner. We&apos;ll guide you through a structured
        process to make brilliant, well-reasoned decisions for life&apos;s
        important crossroads.
      </p>
      <button
        onClick={onNext}
        className="mt-8 px-10 py-4 bg-accent text-background font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.accent)]"
      >
        Get Started
      </button>
    </div>
  );
}