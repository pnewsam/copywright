import { PromptInput } from "@/components/PromptInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="max-w-[960px] w-full mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-stone-800 text-center tracking-tight leading-tight">
            Marketing copy for your landing page with just a few clicks.
          </h1>
        </div>
        <PromptInput />
      </div>
    </main>
  );
}
