import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enter Your Content",
    description: "Type or paste your URL, text, or other information into the input field.",
  },
  {
    number: "02",
    title: "Customize Design",
    description: "Choose colors, adjust size, and personalize your QR code to match your needs.",
  },
  {
    number: "03",
    title: "Download & Share",
    description: "Download your QR code as PNG or SVG, or share it directly with others.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create professional QR codes in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] -z-10">
                  <ArrowRight className="w-full h-8 text-primary/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
