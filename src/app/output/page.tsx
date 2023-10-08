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
        {/* <h4>Pricing</h4>
        <h4>Testimonials</h4>
        <h4>Frequenty Asked Questions</h4> */}
      </div>
    </div>
  );
}
