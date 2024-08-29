"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Contact() {
  const benefits = [
    "Professional, conversion-focused copy",
    "Quick turnaround times",
    "Unlimited revisions",
    "SEO optimization included",
    "30-day money-back guarantee",
  ];

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Boost Your Conversions?
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl">
            Get professional copywriting that drives results. Our words convert
            visitors into customers, guaranteed.
          </p>
          <div className="bg-white border border-stone-200 p-8 mb-12 w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-6">What You&apos;ll Get:</h3>
            <ul className="space-y-4 text-left mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="text-3xl font-bold mb-8">
              $499{" "}
              <span className="text-xl font-normal text-stone-600">
                / project
              </span>
            </div>
            <Button
              className="w-full bg-black text-white hover:bg-stone-800 text-lg py-6 rounded-none"
              onClick={() => {
                // Here you would typically integrate with Stripe
                console.log("Initiating Stripe checkout");
              }}
            >
              Get Started Now
            </Button>
          </div>
          <p className="text-sm text-stone-500">
            By clicking &quot;Get Started Now&quot;, you agree to our Terms of
            Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
