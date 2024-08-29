import { Button } from "@/components/ui/button";
export function Navbar() {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">CopyWright</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-stone-600 hover:text-black">
            Work
          </a>
          <a href="#" className="text-stone-600 hover:text-black">
            Services
          </a>
          <a href="#" className="text-stone-600 hover:text-black">
            About
          </a>
          <a href="#" className="text-stone-600 hover:text-black">
            Blog
          </a>
        </div>
        <Button className="bg-black text-white hover:bg-stone-800 rounded-full px-6 py-2">
          Book a call
        </Button>
      </nav>
    </header>
  );
}
