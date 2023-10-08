import { PencilRuler } from "lucide-react";

export const Navbar = () => (
  <nav className="w-full flex py-6">
    <div className="max-w-[960px] mx-auto w-full">
      <div>
        <a className="font-bold text-stone-800 inline-flex gap-1" href="/">
          <PencilRuler />
          CopyWright
        </a>
      </div>
    </div>
  </nav>
);
