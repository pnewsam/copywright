import { useSearchParams } from "next/navigation";

export default function OutputPage() {
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt");

  return (
    <div>
      <h1>Output Page</h1>
    </div>
  );
}
