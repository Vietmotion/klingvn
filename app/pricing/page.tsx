"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";

const CNY_TO_USD = 0.14;

function toUsd(amountInCny: number): string {
  return (amountInCny * CNY_TO_USD).toFixed(2);
}

function perSecondPrice(points: number): string {
  return `${points} điểm (USD ${toUsd(points)})/giây`;
}

function perRequestPrice(points: number): string {
  return `${points} điểm (USD ${toUsd(points)})/lượt`;
}

function perFiveSecondPrice(points: number): string {
  return `${points} điểm (USD ${toUsd(points)})/5 giây`;
}

type PricingRow = {
  model: string;
  billing: string;
  feature: string;
  price720: string;
  price1080: string;
  price4k: string;
};

const videoPricingRows: PricingRow[] = [
  {
    model: "Kling 3.0 Turbo",
    billing: "Theo giây",
    feature: "Có âm thanh",
    price720: perSecondPrice(0.8),
    price1080: perSecondPrice(1.0),
    price4k: "-",
  },
  {
    model: "Kling 3.0",
    billing: "Theo giây",
    feature: "Không âm thanh",
    price720: perSecondPrice(0.6),
    price1080: perSecondPrice(0.8),
    price4k: perSecondPrice(3.0),
  },
  {
    model: "Kling 3.0",
    billing: "Theo giây",
    feature: "Có âm thanh x chưa chỉ định giọng",
    price720: perSecondPrice(0.9),
    price1080: perSecondPrice(1.2),
    price4k: perSecondPrice(3.0),
  },
  {
    model: "Kling 3.0",
    billing: "Theo giây",
    feature: "Điều khiển chuyển động",
    price720: perSecondPrice(0.9),
    price1080: perSecondPrice(1.2),
    price4k: "-",
  },
  {
    model: "Kling 3.0 Omni",
    billing: "Theo giây",
    feature: "Không video tham chiếu x không âm thanh",
    price720: perSecondPrice(0.6),
    price1080: perSecondPrice(0.8),
    price4k: perSecondPrice(3.0),
  },
  {
    model: "Kling 3.0 Omni",
    billing: "Theo giây",
    feature: "Không video tham chiếu x có âm thanh",
    price720: perSecondPrice(0.8),
    price1080: perSecondPrice(1.0),
    price4k: perSecondPrice(3.0),
  },
  {
    model: "Kling 3.0 Omni",
    billing: "Theo giây",
    feature: "Có video tham chiếu x không âm thanh",
    price720: perSecondPrice(0.9),
    price1080: perSecondPrice(1.2),
    price4k: perSecondPrice(3.0),
  },
  {
    model: "Kling O1",
    billing: "Theo giây",
    feature: "Không video tham chiếu",
    price720: perSecondPrice(0.6),
    price1080: perSecondPrice(0.8),
    price4k: "-",
  },
  {
    model: "Kling O1",
    billing: "Theo giây",
    feature: "Có video tham chiếu",
    price720: perSecondPrice(0.9),
    price1080: perSecondPrice(1.2),
    price4k: "-",
  },
  {
    model: "Kling 2.6",
    billing: "Theo giây",
    feature: "Không âm thanh",
    price720: perSecondPrice(0.3),
    price1080: perSecondPrice(0.5),
    price4k: "-",
  },
  {
    model: "Kling 2.6",
    billing: "Theo giây",
    feature: "Có âm thanh x chưa chỉ định giọng",
    price720: "-",
    price1080: perSecondPrice(1.0),
    price4k: "-",
  },
  {
    model: "Kling 2.6",
    billing: "Theo giây",
    feature: "Có âm thanh x có chỉ định giọng",
    price720: "-",
    price1080: perSecondPrice(1.2),
    price4k: "-",
  },
  {
    model: "Kling 2.6",
    billing: "Theo giây",
    feature: "Điều khiển chuyển động",
    price720: perSecondPrice(0.5),
    price1080: perSecondPrice(0.8),
    price4k: "-",
  },
  {
    model: "Kling 2.5 Turbo",
    billing: "Theo giây",
    feature: "Không âm thanh",
    price720: perSecondPrice(0.3),
    price1080: perSecondPrice(0.5),
    price4k: "-",
  },
  {
    model: "Digital Human",
    billing: "Theo giây",
    feature: "Digital Human",
    price720: perSecondPrice(0.4),
    price1080: perSecondPrice(0.8),
    price4k: "-",
  },
];

type ExtraService = {
  service: string;
  billing: string;
  price: string;
};

type ImagePricingRow = {
  model: string;
  feature: string;
  quality: string;
  price: string;
};

const extraServices: ExtraService[] = [
  { service: "Speech Synthesis", billing: "Theo lượt", price: perRequestPrice(0.05) },
  { service: "Lip Sync", billing: "Mỗi 5 giây", price: perFiveSecondPrice(0.5) },
  { service: "Face Recognition", billing: "Theo lượt", price: perRequestPrice(0.05) },
  { service: "Text-to-Sound", billing: "Theo lượt", price: perRequestPrice(0.25) },
  { service: "Video-to-Sound", billing: "Theo lượt", price: perRequestPrice(0.25) },
  { service: "Voice Customization", billing: "Theo lượt", price: perRequestPrice(0.05) },
  { service: "Image Recognition", billing: "Theo lượt", price: perRequestPrice(0.1) },
];

const imagePricingRows: ImagePricingRow[] = [
  {
    model: "Kling Image 3.0",
    feature: "Văn bản thành ảnh, ảnh thành ảnh",
    quality: "1K, 2K",
    price: "8 điểm (USD 0.03)/ảnh",
  },
  {
    model: "Kling Image 3.0 Omni",
    feature: "Văn bản thành ảnh, ảnh thành ảnh",
    quality: "1K, 2K",
    price: "8 điểm (USD 0.03)/ảnh",
  },
  {
    model: "Kling Image 3.0 Omni",
    feature: "Văn bản thành ảnh, ảnh thành ảnh",
    quality: "4K",
    price: "16 điểm (USD 0.06)/ảnh",
  },
  {
    model: "Kling Image O1",
    feature: "Văn bản thành ảnh, ảnh thành ảnh",
    quality: "1K, 2K",
    price: "8 điểm (USD 0.03)/ảnh",
  },
  {
    model: "Kling Image 2.1",
    feature: "Văn bản thành ảnh",
    quality: "1K, 2K",
    price: "4 điểm (USD 0.01)/ảnh",
  },
  {
    model: "Kling Image 2.1",
    feature: "Ảnh thành ảnh",
    quality: "1K, 2K",
    price: "8 điểm (USD 0.03)/ảnh",
  },
  {
    model: "Kling Image 2.1",
    feature: "Tham chiếu nhiều ảnh",
    quality: "1K, 2K",
    price: "16 điểm (USD 0.06)/ảnh",
  },
  {
    model: "Công cụ chung",
    feature: "Bổ toàn thể chủ thể",
    quality: "1K",
    price: "20 điểm (USD 0.07)/lượt",
  },
  {
    model: "Công cụ chung",
    feature: "Mở rộng ảnh",
    quality: "1K",
    price: "8 điểm (USD 0.03)/ảnh",
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"video" | "image">("video");

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">Pricing</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Bảng giá Kling API Video</h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          Bảng giá dưới đây được cập nhật theo trang pricing chính thức của Kling cho nhóm Video API. Mighty Stone tư
          vấn gói sử dụng phù hợp và hỗ trợ xuất hóa đơn VAT tại Việt Nam.
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          Nguồn tham chiếu: https://klingai.com/document-api/pricing/base/video
        </p>
        <p className="mt-1 text-sm text-foreground/60">
          Quy đổi tham chiếu: 1 CNY = {CNY_TO_USD.toFixed(2)} USD
        </p>
      </div>

      <div className="mt-8 inline-flex rounded-full border border-border bg-surface p-1">
        <button
          type="button"
          onClick={() => setActiveTab("video")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeTab === "video" ? "bg-foreground text-background" : "text-foreground/75 hover:bg-surface-muted"
          }`}
          aria-pressed={activeTab === "video"}
        >
          Video API
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("image")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeTab === "image" ? "bg-foreground text-background" : "text-foreground/75 hover:bg-surface-muted"
          }`}
          aria-pressed={activeTab === "image"}
        >
          Image API
        </button>
      </div>

      {activeTab === "video" ? (
        <>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="min-w-[980px] w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-muted/65 text-left">
                    <th className="px-4 py-3 font-semibold">Model</th>
                    <th className="px-4 py-3 font-semibold">Hình thức tính phí</th>
                    <th className="px-4 py-3 font-semibold">Tính năng</th>
                    <th className="px-4 py-3 font-semibold">720P (USD)</th>
                    <th className="px-4 py-3 font-semibold">1080P (USD)</th>
                    <th className="px-4 py-3 font-semibold">4K (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {videoPricingRows.map((row) => (
                    <tr key={`${row.model}-${row.feature}`} className="border-b border-border/70 align-top">
                      <td className="px-4 py-3 font-medium text-foreground/90">{row.model}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.billing}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.feature}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.price720}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.price1080}</td>
                      <td className="px-4 py-3 text-foreground/80">{row.price4k}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Dịch vụ bổ sung</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-[640px] w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-muted/65 text-left">
                    <th className="px-4 py-3 font-semibold">Dịch vụ</th>
                    <th className="px-4 py-3 font-semibold">Hình thức tính phí</th>
                    <th className="px-4 py-3 font-semibold">Đơn giá (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {extraServices.map((item) => (
                    <tr key={item.service} className="border-b border-border/70">
                      <td className="px-4 py-3 font-medium text-foreground/90">{item.service}</td>
                      <td className="px-4 py-3 text-foreground/80">{item.billing}</td>
                      <td className="px-4 py-3 text-foreground/80">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-foreground/65">
              Lưu ý: giá và model có thể được Kling điều chỉnh theo từng thời điểm. Mighty Stone sẽ cập nhật nhanh nhất
              khi có thay đổi và tư vấn phương án tối ưu theo nhu cầu sử dụng của bạn.
            </p>
          </div>
        </>
      ) : null}

      {activeTab === "image" ? (
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-muted/65 text-left">
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Tính năng</th>
                  <th className="px-4 py-3 font-semibold">Chất lượng</th>
                  <th className="px-4 py-3 font-semibold">Đơn giá (USD)</th>
                </tr>
              </thead>
              <tbody>
                {imagePricingRows.map((row) => (
                  <tr key={`${row.model}-${row.feature}-${row.quality}`} className="border-b border-border/70 align-top">
                    <td className="px-4 py-3 font-medium text-foreground/90">{row.model}</td>
                    <td className="px-4 py-3 text-foreground/80">{row.feature}</td>
                    <td className="px-4 py-3 text-foreground/80">{row.quality}</td>
                    <td className="px-4 py-3 text-foreground/80">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border p-4 text-sm text-foreground/65 sm:p-6">
            Lưu ý: bảng này được đối chiếu từ mục Image trong trang Pricing chính thức của Kling. Giá thực tế có thể thay
            đổi theo cập nhật từ Kling.
          </div>
        </div>
      ) : null}
    </Section>
  );
}
