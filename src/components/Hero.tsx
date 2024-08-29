import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white text-black">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight">
            Words That Convert. <span className="block mt-2">On Demand.</span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-stone-600">
            Unlock the power of persuasive copy without the hassle of hiring a
            full-time writer. Get professional, conversion-focused content for
            your business, delivered in just 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-black text-white hover:bg-stone-800 text-lg px-8 py-3 rounded-none">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-stone-100 text-lg px-8 py-3 rounded-none"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
