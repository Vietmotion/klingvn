"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";
import certificateImage from "../../img/certificate.png";
import certificateQrImage from "../../img/Certificate QR_03.png";

export default function AboutPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "ABOUT" : "GIỚI THIỆU"}</p>
        <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          {isEn ? "About Kling AI Vietnam" : "Về Kling AI Việt Nam"}
        </h1>
        <p className="mt-5 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          {isEn ? (
            <>Mighty Stone is <strong>KlingAI’s official distribution partner in Vietnam</strong>, providing KlingAI API solutions for businesses, agencies, and creative teams.</>
          ) : (
            <>Mighty Stone là <strong>Đối tác phân phối chính thức của KlingAI tại thị trường Việt Nam</strong>, cung cấp các giải pháp KlingAI API dành cho doanh nghiệp, agency và đội ngũ sáng tạo.</>
          )}
        </p>
        <p className="mt-4 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          {isEn ? (
            <>We provide <strong>official KlingAI API services at listed prices</strong>, and advise on service plans, usage requirements, and offers suited to each customer’s scale.</>
          ) : (
            <>Chúng tôi phân phối <strong>API Service chính hãng từ KlingAI theo chính sách giá niêm yết</strong>, đồng thời tư vấn gói dịch vụ, nhu cầu sử dụng và mức ưu đãi phù hợp với quy mô của từng khách hàng.</>
          )}
        </p>
        <p className="mt-4 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          {isEn ? (
            <>Mighty Stone supports <strong>full VAT invoicing in Vietnam</strong>, helping businesses simplify administration, accounting, and input cost management.</>
          ) : (
            <>Mighty Stone hỗ trợ <strong>xuất hóa đơn VAT đầy đủ tại Việt Nam</strong>, giúp doanh nghiệp thuận tiện trong việc quản lý, hạch toán và tối ưu chi phí đầu vào.</>
          )}
        </p>

        <div className="mt-8 overflow-hidden rounded-[var(--radius-box)] border border-border bg-surface">
          <Image
            src={certificateImage}
            alt={isEn ? "Mighty Stone's official KlingAI distribution partner certificate" : "Chứng nhận đối tác phân phối chính thức KlingAI của Mighty Stone"}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mx-auto mt-6 w-full max-w-[220px] overflow-hidden rounded-[var(--radius-box)] border border-border bg-surface p-2">
          <Image src={certificateQrImage} alt={isEn ? "Certificate QR code" : "Mã QR chứng nhận"} className="h-auto w-full" />
        </div>
      </div>
    </Section>
  );
}
