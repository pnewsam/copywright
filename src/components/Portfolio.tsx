import Image from "next/image";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "E-commerce Product Descriptions",
    client: "TechGadgets Inc.",
    description:
      "Crafted compelling product descriptions that increased conversion rates by 25%.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "SaaS Landing Page Overhaul",
    client: "CloudSolutions Ltd.",
    description:
      "Revamped landing page copy, resulting in a 40% boost in sign-ups.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Email Marketing Campaign",
    client: "FitnessPro Gym",
    description:
      "Developed a 5-email sequence that improved customer retention by 30%.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Brand Storytelling",
    client: "EcoFriendly Co.",
    description:
      "Created an engaging brand story that increased social media engagement by 50%.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export function Portfolio() {
  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 transition-all duration-300 hover:border-stone-400"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-600 mb-4">Client: {item.client}</p>
                <p className="text-stone-800 mb-6">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-black hover:text-stone-600 transition-colors duration-300"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center text-lg font-semibold text-black hover:text-stone-600 transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
