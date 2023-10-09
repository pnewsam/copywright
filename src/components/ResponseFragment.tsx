"use client";

import { useState, useEffect } from "react";
import { useCompletion } from "ai/react";
import { Check } from "lucide-react";
import Markdown from "react-markdown";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "usehooks-ts";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

type Props = {
  endpoint: string;
  title: string;
  description: string;
};

export const ResponseFragment = ({ endpoint, title, description }: Props) => {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") as string;

  const [isFinished, setIsFinished] = useState(false);
  const [value, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const { complete, completion, isLoading } = useCompletion({
    api: endpoint,
    onResponse: (res) => {
      // trigger something when the response starts streaming in
      // e.g. if the user is rate limited, you can show a toast
      if (res.status === 429) {
        toast({
          title: "Error",
          description: "You are being rate limited. Please try again later.",
        });
      }
    },
    onFinish: () => {
      toast({
        title: "Success",
        description: "Successfully generated completion!",
      });
    },
  });

  useEffect(() => {
    if (!isFinished) {
      complete(prompt);
      setIsFinished(true);
    }
  }, [complete, prompt, isFinished]);

  const handleCopy = () => {
    setIsCopied(true);
    copy(completion);
    toast({
      title: "Success!",
      description: "Copied raw markdown to clipboard.",
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  if (!prompt) return <>No prompt provided</>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 bg-neutral-100 mb-4">
      <div>
        <h2 className="text-2xl tracking-tight font-semibold text-stone-800">
          {title}
        </h2>
        <p className="text-neutral-500">{description}</p>
      </div>
      <div>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="markdown">Raw Markdown</TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="bg-white shadow-sm border border-stone-200 relative rounded-xl px-8 py-6"
          >
            <Button
              size="sm"
              variant="outline"
              className="absolute -top-12 right-0 text-xs gap-2"
              disabled={true}
            >
              Copy
            </Button>
            <Markdown className="prose max-w-none">{completion}</Markdown>
          </TabsContent>
          <TabsContent
            value="markdown"
            className="bg-white shadow-sm border border-stone-200 relative rounded-lg px-8 py-6"
          >
            <Button
              size="sm"
              variant="outline"
              className="absolute -top-12 right-0 text-xs gap-1 items-center"
              disabled={isLoading}
              onClick={handleCopy}
            >
              {isCopied ? (
                <>
                  <span className="text-green-500">Copied!</span>
                  <Check className="w-4 h-4 -translate-y-[1px] text-green-500" />
                </>
              ) : (
                <>
                  <span>Copy Markdown</span>
                  <Copy className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
            <div className="font-mono">{completion}</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
