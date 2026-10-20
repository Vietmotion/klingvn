"use client";

import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

const errorMessageMap: Record<string, { vi: string; en: string }> = {
  missing: {
    vi: "Thiếu thông tin bắt buộc. Vui lòng điền họ tên, email và nội dung.",
    en: "Required information is missing. Please enter your name, email, and message.",
  },
  email: {
    vi: "Email chưa đúng định dạng. Vui lòng kiểm tra lại.",
    en: "The email address is invalid. Please check it and try again.",
  },
  config: {
    vi: "Cấu hình SMTP chưa sẵn sàng. Vui lòng kiểm tra biến môi trường mail.",
    en: "SMTP is not configured. Please check the mail environment variables.",
  },
  server: {
    vi: "Máy chủ chưa gửi được email. Vui lòng thử lại sau.",
    en: "The server could not send your email. Please try again later.",
  },
};

export function ContactFormAlert() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const isSent = searchParams.get("sent") === "1";
  const errorType = searchParams.get("error");
  const errorMessage = errorType
    ? (errorMessageMap[errorType] ?? errorMessageMap.server)[language]
    : null;

  if (!isSent && !errorMessage) {
    return null;
  }

  return (
    <>
      {isSent ? (
        <div
          role="alert"
          className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 shadow-sm dark:text-emerald-300"
        >
          <div className="font-semibold">
            {language === "vi" ? "Email đã được gửi thành công." : "Your message was sent successfully."}
          </div>
          <div className="mt-1">
            {language === "vi" ? "Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm nhất." : "Thank you. We’ll be in touch soon."}
          </div>
        </div>
      ) : null}

      {errorMessage ? (
        <div className="mb-6 rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground/80">
          {errorMessage}
        </div>
      ) : null}
    </>
  );
}