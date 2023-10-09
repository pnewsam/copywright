import { PencilRuler } from "lucide-react";

export const Navbar = () => (
  <nav className="w-full py-4 bg-white border-b border-stone-100 shadow-sm sticky top-0 z-10">
    <div className="max-w-[1280px] mx-auto w-full flex items-center px-4">
      <a className="inline-flex tracking-tight items-center gap-1" href="/">
        <PencilRuler className="text-stone-700" />
        <span className="font-semibold text-stone-700">CopyWright</span>
      </a>
    </div>
  </nav>
);
