import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section>
      <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-10 lg:p-14">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to create with Kling?</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact">Get Started</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
