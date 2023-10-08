"use client";

import { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  prompt: string;
  endpoint: string;
};

export const Completion = ({ prompt, endpoint }: Props) => {
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

  return (
    <div>
      <p>Current state: {isLoading ? "Generating..." : "Idle"}</p>
      <p>{completion}</p>
    </div>
  );
};
