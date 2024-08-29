import { CheckCircle, FileText, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Choose Your Package",
      description:
        "Select the type and amount of copy you need from our straightforward pricing tiers.",
    },
    {
      icon: FileText,
      title: "Provide Details",
      description:
        "Fill out a brief questionnaire about your project and target audience.",
    },
    {
      icon: Zap,
      title: "Receive Your Copy",
      description:
        "Get your professionally crafted, conversion-focused copy delivered within 48 hours.",
    },
  ];

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 border border-stone-200">
                <step.icon className="w-8 h-8 text-stone-400 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
            Our streamlined process ensures you get high-quality, tailored copy
            without the hassle. Ready to boost your conversions?
          </p>
          <button className="bg-black text-white font-semibold py-3 px-8 rounded-none hover:bg-stone-800 transition duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
