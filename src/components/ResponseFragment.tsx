"use client";

import { useState, useEffect } from "react";
import { useCompletion } from "ai/react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "./ui/use-toast";

type Props = {
  endpoint: string;
  title: string;
  description: string;
};

export const ResponseFragment = ({ endpoint, title, description }: Props) => {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") as string;

  const [isFinished, setIsFinished] = useState(false);
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

  if (!prompt) return <>No prompt provided</>;

  return (
    <Card>
      <CardHeader className="bg-stone-50 flex flex-row justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div>{isLoading ? <>Generating...</> : <>Complete</>}</div>
      </CardHeader>
      {isLoading && (
        <CardContent>
          <Skeleton className="w-full h-4 mb-4" />
        </CardContent>
      )}
      {completion && <CardContent>{completion}</CardContent>}
    </Card>
  );
};
