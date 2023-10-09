import { ResponseFragment } from "@/components/ResponseFragment";

export default function OutputPage() {
  return (
    <div className="py-20">
      <ResponseFragment
        endpoint={"/api/landing/headline"}
        title="Headline"
        description="A heading and subheading for the top content of your landing page."
      />
      <hr className="block py-8" />
      <ResponseFragment
        endpoint={"/api/landing/features"}
        title="Features"
        description="A list of features for your product."
      />
      <hr className="block py-8" />
      <ResponseFragment
        endpoint={"/api/landing/pricing"}
        title="Pricing"
        description="A list of pricing options for your product."
      />
    </div>
  );
}
