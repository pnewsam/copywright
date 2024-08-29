export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The copy they delivered increased our conversion rate by 150%. Absolutely worth every penny!",
      author: "Sarah Johnson",
      position: "Marketing Director, TechStart Inc.",
      project: "Landing Page Optimization",
    },
    {
      quote:
        "Their ability to capture our brand voice was uncanny. Our email open rates have never been higher.",
      author: "Michael Chen",
      position: "CEO, GreenEats",
      project: "Email Marketing Campaign",
    },
    {
      quote:
        "We saw a 200% increase in organic traffic after implementing their SEO-optimized website copy.",
      author: "Emma Rodriguez",
      position: "Founder, Yoga Bliss",
      project: "Website Rewrite",
    },
  ];

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 p-8 transition-all duration-300 hover:border-stone-400"
            >
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-stone-200 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-stone-600">{testimonial.position}</p>
                <p className="text-sm mt-2 text-stone-500">
                  Project: {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
