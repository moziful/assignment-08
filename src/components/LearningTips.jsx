import ScrollReveal from "@/components/ScrollReveal";

const tips = [
  {
    title: "Study with a clear goal",
    description:
      "Pick one topic per session so you stay focused and avoid jumping around too much.",
  },
  {
    title: "Use spaced repetition",
    description:
      "Review the same topic after a few days to help your memory stick better.",
  },
  {
    title: "Take short breaks",
    description:
      "A 5 to 10 minute break after focused study keeps your mind fresh and active.",
  },
  {
    title: "Manage your time well",
    description:
      "Break your learning into small blocks and keep a simple schedule you can follow.",
  },
];

const LearningTips = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
            Learning Tips
          </p>
          <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
            Study techniques and time management tips
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((tip, index) => (
            <ScrollReveal key={tip.title} delay={index * 0.08}>
              <div className="rounded-xl border border-base-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-purple-800">
                  Tip {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-base-content">
                  {tip.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {tip.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
