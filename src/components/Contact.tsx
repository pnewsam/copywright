import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-stone-600" />
                <p>info@copywritingpro.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-stone-600" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-stone-600" />
                <p>123 Copywriting Lane, Word City, TX 12345</p>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Office Hours</h3>
              <p className="mb-2">Monday - Friday: 9am - 5pm EST</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-stone-900"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-stone-900"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-stone-900"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="w-full px-3 py-2 border border-stone-300 rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-black text-white hover:bg-stone-800 rounded-none">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
