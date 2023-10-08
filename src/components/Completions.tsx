"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Completion } from "@/components/Completion";

export const Completions = () => {
  const [prompt, setPrompt] = useState("");
  const [completedPrompt, setCompletedPrompt] = useState("");

  return (
    <div>
      <Textarea
        className="text-lg mb-4 px-6 py-4"
        placeholder="Enter a short description of your product."
        rows={2}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button
        className={cn("gap-3 py-6 text-lg w-full")}
        onClick={(e) => setCompletedPrompt(prompt)}
      >
        Generate
        <Wand2 />
      </Button>
      {completedPrompt && (
        <div>
          <h4>Headline</h4>
          <Completion
            prompt={completedPrompt}
            endpoint={"/api/landing/headline"}
          />
          <h4>Features</h4>
          <Completion
            prompt={completedPrompt}
            endpoint={"/api/landing/features"}
          />
          <h4>Pricing</h4>
          <h4>Testimonials</h4>
          <h4>Frequenty Asked Questions</h4>
        </div>
      )}
    </div>
  );
};
