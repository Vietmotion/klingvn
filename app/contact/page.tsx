import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ContactFormAlert } from "@/components/contact-form-alert";
import { Section } from "@/components/ui/section";

const inputBaseClass =
  "mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring";

export default function ContactPage() {

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="relative min-h-[20rem] overflow-hidden bg-gradient-to-br from-foreground/6 via-surface to-accent/10 p-6 sm:min-h-[24rem] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_35%)] opacity-70" />
          <div className="relative flex h-full min-h-[20rem] flex-col justify-end sm:min-h-[24rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Contact</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Contact Kling AI Vietnam</h1>
            <p className="mt-4 max-w-3xl text-base text-foreground/75 sm:text-lg">
              Share your goals and our team will follow up with the right path for your use case.
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Thông tin liên hệ</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Kết nối trực tiếp với chúng tôi</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/70 sm:text-base">
              Nếu bạn cần tư vấn nhanh, hãy liên hệ theo các kênh bên dưới hoặc bấm nút Zalo để chat ngay.
            </p>

            <div className="mt-6 rounded-lg border border-border bg-background/70 p-5">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Địa chỉ</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/80">5/5 Đ. Số 25, An Khánh, Hồ Chí Minh</p>
                </div>

                <div className="border-t border-border/70 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Email</p>
                  <a href="mailto:kimmy@mightystone.vn" className="mt-3 block text-sm leading-6 text-foreground/80 hover:text-foreground">
                    kimmy@mightystone.vn
                  </a>
                </div>

                <div className="border-t border-border/70 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Zalo/WhatsApp</p>
                  <a href="tel:+84938649919" className="mt-3 block text-sm leading-6 text-foreground/80 hover:text-foreground">
                    +84 938 649 919 (chúng tôi)
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button href="https://zalo.me/84938649919" className="rounded-lg px-6">
                Liên hệ ngay qua Zalo
              </Button>
            </div>
          </div>

          <form className="rounded-lg border border-border bg-background/70 p-6 sm:p-8" action="/api/contact" method="post">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Gửi tin nhắn</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Để lại thông tin, chúng tôi sẽ phản hồi sớm</h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-foreground/90">
                Name
                <input type="text" name="name" autoComplete="name" required className={inputBaseClass} />
              </label>

              <label className="block text-sm font-medium text-foreground/90">
                Company
                <input type="text" name="company" autoComplete="organization" className={inputBaseClass} />
              </label>

              <label className="block text-sm font-medium text-foreground/90">
                Email
                <input type="email" name="email" autoComplete="email" required className={inputBaseClass} />
              </label>

              <label className="block text-sm font-medium text-foreground/90">
                Phone
                <input type="tel" name="phone" autoComplete="tel" className={inputBaseClass} />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-foreground/90">
              Message
              <textarea name="message" rows={5} required className={inputBaseClass} />
            </label>

            <div className="mt-6">
              <button type="submit" className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground hover:opacity-90">
                Gửi liên hệ
              </button>
            </div>

            <div className="mt-4">
              <Suspense fallback={null}>
                <ContactFormAlert />
              </Suspense>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
