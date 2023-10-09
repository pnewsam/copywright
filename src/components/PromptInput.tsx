"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";

export const PromptInput = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div>
      <Textarea
        className="text-base mb-4 px-6 py-4 rounded-xl"
        placeholder="Enter a short description of your product."
        rows={2}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Link
        href={`/output?prompt=${prompt}`}
        className={cn(
          buttonVariants({ variant: "default" }),
          "gap-3 py-6 text-lg w-full rounded-xl"
        )}
      >
        Generate
        <Wand2 />
      </Link>
    </div>
  );
};
