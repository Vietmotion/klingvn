"use client";

import { useSearchParams } from "next/navigation";

const errorMessageMap: Record<string, string> = {
  missing: "Thiếu thông tin bắt buộc. Vui lòng điền Name, Email và Message.",
  email: "Email chưa đúng định dạng. Vui lòng kiểm tra lại.",
  config: "Cấu hình SMTP chưa sẵn sàng. Vui lòng kiểm tra biến môi trường mail.",
  server: "Máy chủ chưa gửi được email. Vui lòng thử lại sau.",
};

export function ContactFormAlert() {
  const searchParams = useSearchParams();
  const isSent = searchParams.get("sent") === "1";
  const errorType = searchParams.get("error");
  const errorMessage = errorType ? errorMessageMap[errorType] ?? errorMessageMap.server : null;

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
          <div className="font-semibold">Email đã được gửi thành công.</div>
          <div className="mt-1">Cảm ơn bạn. Chúng tôi sẽ liên hệ lại sớm nhất.</div>
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