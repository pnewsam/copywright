import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses just getting started with professional copy.",
    price: "$199",
    features: [
      "1,000 words of copy",
      "1 revision round",
      "3-day delivery",
      "1 content type (e.g., website copy or email)",
      "SEO best practices",
    ],
  },
  {
    name: "Professional",
    description:
      "Ideal for growing businesses needing comprehensive copy solutions.",
    price: "$499",
    features: [
      "3,000 words of copy",
      "2 revision rounds",
      "5-day delivery",
      "2 content types (e.g., website copy and blog post)",
      "SEO optimization",
      "Tone of voice guidelines",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Tailored for large businesses requiring extensive, high-impact copy.",
    price: "$999",
    features: [
      "7,000 words of copy",
      "3 revision rounds",
      "7-day delivery",
      "3 content types (e.g., website copy, email sequence, and whitepaper)",
      "Advanced SEO strategy",
      "Competitor analysis",
      "Dedicated account manager",
    ],
  },
];

export function Services() {
  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="flex flex-col rounded-none bg-white border border-stone-200 transition-all duration-300 hover:border-stone-400"
            >
              <CardHeader className="pb-4 pt-8 px-8 border-b border-stone-200">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <p className="text-3xl font-bold mt-2">{pkg.price}</p>
              </CardHeader>
              <CardContent className="flex-grow p-8">
                <p className="text-stone-600 mb-8 text-lg">{pkg.description}</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-stone-600 mt-0.5 flex-shrink-0" />
                      <span className="text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 border-t border-stone-200">
                <Button className="w-full bg-black text-white hover:bg-stone-800 text-lg py-3">
                  Choose {pkg.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
            Not sure which package is right for you? We offer custom solutions
            tailored to your specific needs.
          </p>
          <Button className="bg-black text-white hover:bg-stone-800 text-lg py-3 px-8">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
