import { PencilRuler } from "lucide-react";

export const Navbar = () => (
  <nav className="w-full flex py-6">
    <div className="max-w-[1280px] mx-auto w-full px-4">
      <div>
        <a
          className="font-bold text-neutral-800 inline-flex tracking-tight items-center gap-1"
          href="/"
        >
          <PencilRuler />
          CopyWright
        </a>
      </div>
    </div>
  </nav>
);
