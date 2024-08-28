import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Words That Convert,{" "}
              <span className="text-primary">On Demand</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
              Unlock the power of persuasive copy without the hassle of hiring a
              full-time writer. Get professional, conversion-focused content for
              your business, delivered in just 48 hours.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
