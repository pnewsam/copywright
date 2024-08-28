import { CheckCircle, FileText, Zap } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              1. Choose Your Package
            </h3>
            <p className="text-muted-foreground">
              Select the type and amount of copy you need from our
              straightforward pricing tiers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FileText className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">2. Provide Details</h3>
            <p className="text-muted-foreground">
              Fill out a brief questionnaire about your project and target
              audience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">3. Receive Your Copy</h3>
            <p className="text-muted-foreground">
              Get your professionally crafted, conversion-focused copy delivered
              within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
