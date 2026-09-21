import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const inputBaseClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring";

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Contact Kling AI Vietnam</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Share your goals and our team will follow up with the right path for your use case.
        </p>
      </div>

      <form className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-8" action="#" method="post">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-foreground/90">
            Name
            <input type="text" name="name" autoComplete="name" className={inputBaseClass} />
          </label>

          <label className="block text-sm font-medium text-foreground/90">
            Company
            <input type="text" name="company" autoComplete="organization" className={inputBaseClass} />
          </label>

          <label className="block text-sm font-medium text-foreground/90">
            Email
            <input type="email" name="email" autoComplete="email" className={inputBaseClass} />
          </label>

          <label className="block text-sm font-medium text-foreground/90">
            Phone
            <input type="tel" name="phone" autoComplete="tel" className={inputBaseClass} />
          </label>
        </div>

        <label className="mt-5 block text-sm font-medium text-foreground/90">
          Message
          <textarea name="message" rows={5} className={inputBaseClass} />
        </label>

        <div className="mt-6">
          <button type="submit" className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90">
            Submit
          </button>
        </div>
      </form>
    </Section>
  );
}
