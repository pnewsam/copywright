import { PromptInput } from "@/components/PromptInput";
import Image from "next/image";
import copywriting from "../../public/copywriting.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="max-w-[1280px] w-full mx-auto px-4 flex flex-col justify-center items-center h-[75vh] min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-16 pt-8 mr-8">
              <h1 className="text-5xl font-bold text-stone-800 tracking-tight leading-tight mb-4">
                Marketing copy for your landing page.
              </h1>
              <h2 className="text-3xl font-bold text-stone-800 tracking-tight leading-tight mb-12">
                With just a few clicks.
              </h2>
              <PromptInput />
            </div>
          </div>
          <div className="hidden md:block -mx-12 translate-x-4">
            <Image
              src={copywriting}
              alt="Illustration of a person writing on a piece of paper"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
