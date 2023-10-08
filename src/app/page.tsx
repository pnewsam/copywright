import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-[960px] w-full mx-auto">
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-bold text-stone-800 text-center tracking-tight max-w-[800px] leading-tight">
            Generate copy for your landing page with just a few clicks.
          </h1>
        </div>
        <div>
          <Textarea
            className="text-lg mb-4 px-6 py-4"
            placeholder="Enter a short description of your product."
            rows={2}
          />
          <Button
            className={cn(
              buttonVariants({ variant: "default" }),
              "gap-3 py-6 text-lg w-full"
            )}
          >
            Generate
            <Wand2 />
          </Button>
        </div>
      </div>
    </main>
  );
}
