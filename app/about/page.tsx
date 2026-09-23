import Image from "next/image";
import { Section } from "@/components/ui/section";
import certificateImage from "../../img/certificate.png";
import certificateQrImage from "../../img/Certificate QR_03.png";

export default function AboutPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">About</p>
        <h1 className="mt-3 text-center text-4xl font-semibold tracking-tight sm:text-5xl">About Kling AI Vietnam</h1>
        <p className="mt-5 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          Mighty Stone là <strong>Đối tác phân phối chính thức của KlingAI tại thị trường Việt Nam</strong>, cung cấp các
          giải pháp KlingAI API dành cho doanh nghiệp, agency và đội ngũ sáng tạo.
        </p>
        <p className="mt-4 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          Chúng tôi phân phối <strong>API Service chính hãng từ KlingAI theo chính sách giá niêm yết</strong>, đồng thời
          tư vấn gói dịch vụ, nhu cầu sử dụng và mức ưu đãi phù hợp với quy mô của từng khách hàng.
        </p>
        <p className="mt-4 text-justify text-base leading-relaxed text-foreground/75 [text-align-last:left] sm:text-lg">
          Mighty Stone hỗ trợ <strong>xuất hóa đơn VAT đầy đủ tại Việt Nam</strong>, giúp doanh nghiệp thuận tiện trong
          việc quản lý, hạch toán và tối ưu chi phí đầu vào.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <Image
            src={certificateImage}
            alt="Chung nhan doi tac phan phoi chinh thuc KlingAI cua Mighty Stone"
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mx-auto mt-6 w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-surface p-2">
          <Image src={certificateQrImage} alt="QR code certificate" className="h-auto w-full" />
        </div>
      </div>
    </Section>
  );
}
