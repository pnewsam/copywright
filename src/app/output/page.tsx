import { ResponseFragment } from "@/components/ResponseFragment";

export default function OutputPage() {
  return (
    <div>
      <div>
        <ResponseFragment
          endpoint={"/api/landing/headline"}
          title="Headline"
          description="A heading and subheading for the top content of your landing page."
        />
        <ResponseFragment
          endpoint={"/api/landing/features"}
          title="Features"
          description="A list of features for your product."
        />
        <ResponseFragment
          endpoint={"/api/landing/pricing"}
          title="Pricing"
          description="A list of pricing options for your product."
        />
      </div>
    </div>
  );
}
