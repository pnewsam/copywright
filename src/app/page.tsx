import { Completions } from "@/components/Completions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-[960px] w-full mx-auto">
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-bold text-stone-800 text-center tracking-tight max-w-[800px] leading-tight">
            Marketing copy for your landing page with just a few clicks.
          </h1>
        </div>
        <Completions />
      </div>
    </main>
  );
}
