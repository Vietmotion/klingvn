"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Section } from "@/components/ui/section";

const productKeys = [
  {
    title: "AI Video",
    titleVi: "Video AI",
    description:
      "Generate cinematic video from text prompts, reference images, and story-driven briefs with richer scene continuity.",
    descriptionVi:
      "Tạo video điện ảnh từ mô tả văn bản, hình ảnh tham chiếu và ý tưởng kể chuyện với sự liền mạch cao hơn giữa các cảnh.",
    highlights: ["Text-to-video", "Image-to-video", "Scene continuity", "Prompt control"],
    highlightsVi: ["Văn bản thành video", "Hình ảnh thành video", "Liền mạch giữa các cảnh", "Kiểm soát câu lệnh"],
  },
  {
    title: "AI Image",
    titleVi: "Hình ảnh AI",
    description:
      "Create polished visuals, concept art, and product imagery with strong composition and style control.",
    descriptionVi:
      "Tạo hình ảnh hoàn thiện, concept art và hình ảnh sản phẩm với bố cục hài hòa cùng khả năng kiểm soát phong cách.",
    highlights: ["Image generation", "Style variation", "Creative ideation", "Brand visuals"],
    highlightsVi: ["Tạo hình ảnh", "Biến thể phong cách", "Phát triển ý tưởng", "Hình ảnh thương hiệu"],
  },
  {
    title: "Motion Control",
    titleVi: "Điều khiển chuyển động",
    description:
      "Shape movement, camera direction, and dynamic pacing to make each shot feel intentional and cinematic.",
    descriptionVi:
      "Điều chỉnh chuyển động, hướng camera và nhịp điệu để mỗi cảnh quay có chủ đích và đậm chất điện ảnh.",
    highlights: ["Camera motion", "Shot control", "Pacing", "Cinematic timing"],
    highlightsVi: ["Chuyển động camera", "Kiểm soát cảnh quay", "Nhịp điệu", "Nhịp phim điện ảnh"],
  },
  {
    title: "Video Editor",
    titleVi: "Trình chỉnh sửa video",
    description:
      "Refine footage, assemble edits, and streamline production workflows from concept to final output.",
    descriptionVi:
      "Tinh chỉnh cảnh quay, dựng video và tối ưu quy trình sản xuất từ ý tưởng đến thành phẩm.",
    highlights: ["Cut & assemble", "Scene refinement", "Workflow simplification", "Publishing-ready output"],
    highlightsVi: ["Cắt ghép", "Tinh chỉnh cảnh quay", "Đơn giản hóa quy trình", "Sẵn sàng xuất bản"],
  },
] as const;

const videoSlides = [
  {
    title: "Audio-Visual Performance for Realistic Results",
    titleVi: "Trải nghiệm nghe nhìn sống động và chân thực",
    description: "Stable dynamic motions and an immersive audio-visual experience, taking video generation to professional-grade production.",
    descriptionVi: "Chuyển động ổn định cùng trải nghiệm nghe nhìn sống động, đưa khả năng tạo video đến chất lượng sản xuất chuyên nghiệp.",
    src: "/footages/footage-01.mp4",
  },
  {
    title: "Omni Reference for Greater Creative Control",
    titleVi: "Omni Reference: Tăng khả năng kiểm soát sáng tạo",
    description: "More reference options and more consistent results, making it easy to recreate creative videos.",
    descriptionVi: "Thêm lựa chọn tham chiếu, kết quả nhất quán hơn và dễ dàng tái tạo những video sáng tạo.",
    src: "/footages/footage-02.mp4",
  },
  {
    title: "Narrative Upgrade for Seamless Storytelling",
    titleVi: "Nâng cấp khả năng kể chuyện liền mạch",
    description: "Native 3.0 generation with precise control over every narrative beat, turning a spark of inspiration into a complete story.",
    descriptionVi: "Tạo nội dung với Native 3.0 và kiểm soát chính xác từng nhịp truyện, biến cảm hứng ban đầu thành câu chuyện hoàn chỉnh.",
    src: "/footages/worker-finds-something_cut.mp4",
  },
  {
    title: "Diverse Content for Creative Freedom",
    titleVi: "Đa dạng nội dung, tự do sáng tạo",
    description: "Greater creative freedom, with no limits to your imagination.",
    descriptionVi: "Tự do sáng tạo hơn để trí tưởng tượng không bị giới hạn.",
    src: "/footages/footage-02-co-gai-dan-toc.mp4",
  },
] as const;

const imageGallery = [
  {
    title: "Image 1",
    src: "/img-gen/product/img1.png",
    prompt: `Bald muscular man in black leather jacket leaping from a speeding black sports car, firing a pistol, muzzle flash. Low-angle, motion blur, sparks, city skyline, golden hour smoke, teal and orange, photorealistic, cinematic.`,
  },
  {
    title: "Image 2",
    src: "/img-gen/product/img2.png",
    prompt: `Wild lily garden in European countryside, cream, pink and apricot lilies of varied sizes among wildflowers, ivy-covered stone cottage, wooden fence, rolling hills. Golden sunlight, soft haze, cottagecore, pastel, photorealistic, bokeh`,
  },
  {
    title: "Image 3",
    src: "/img-gen/product/img3.png",
    prompt: `Editorial fashion portrait of a beautiful young Korean woman, long straight black hair, flawless glowing dewy skin, soft nude lips, confident gaze at camera. Oversized black blazer, wide-leg black trousers, silver necklace and drop earrings. Sitting on a vintage wooden chair, leaning slightly forward. Warm golden-amber studio backdrop, dramatic side lighting. 85mm, ultra-detailed skin, high-end retouched photography`,
  },
  {
    title: "Image 4",
    src: "/img-gen/product/img4.png",
    prompt: `Futuristic white smart room, glossy floor, sunset city window, floating neon blue holographic frames, pink glowing screens, cyberpunk, cinematic, 3D render`,
  },
  {
    title: "Image 5",
    src: "/img-gen/product/img5.png",
    prompt: `Young Vietnamese man in his early 20s, . Six floating glowing glass product cards with "BUY" buttons around him: yellow bean bag, soccer cleat, smartphone, game console, wristwatch, yellow t-shirt.`,
  },
  {
    title: "Image 6",
    src: "/img-gen/product/img6.png",
    prompt: `Vertical snack poster, tilted orange chip bag “FIRE CRUNCH”, “SPICY CHEESE”, “CRUNCHY SQUARE CHIPS”, label “Extra hot! Handle with care”. Lime-green background, flying square chips, chilies, leaves. White text “NEW FLAVOR” top, “CRUNCH” bottom. Realistic, studio lighting`,
  },
  {
    title: "Image 7",
    src: "/img-gen/product/img7.png",
    prompt: `Worm's-eye fisheye view from the ground, three Vietnamese Gen Z models stepping over the camera, giant chunky sneaker soles in foreground. Left: bob hair girl, beige cap, white hoodie, full-length beige wide-leg trousers. Right: guy, black cap, all-black outfit, hand behind head. Center: curly-haired girl, white headphones, black cargo pants, pink sneakers. Blue sky, clouds, power lines, 14mm, high contrast, sneaker campaign`,
  },
  {
    title: "Image 8",
    src: "/img-gen/product/img8.png",
    prompt: `High-angle 24mm shot of four young people (two men, two women) clustered together, looking up at camera, arms pointing to center, strong foreshortening, high-key lighting, terracotta orange floor with concentric circle`,
  },
  {
    title: "Image 9",
    src: "/img-gen/product/img9.png",
    prompt: `3D chrome typography of the word “LOOK”, glossy inflated letters, blue and cyan metallic reflections, bold stacked vertical layout tilted diagonally, light gray background, high detail, studio lighting`,
  },
  {
    title: "Image 10",
    src: "/img-gen/product/img10.png",
    prompt: `korean beauty sale poster, pastel pink background, glossy 3D inflated balloon text “SALE OFF UP TO 60%”, open pink gift box with ribbon bow, mock skincare products inside: pump bottle lotion, tube cream, amber dropper serums, generic minimal labels, soft studio lighting, clean e-commerce ad layout`,
  },
  {
    title: "Image 11",
    src: "/img-gen/product/img11.png",
    prompt: `Editorial food photography, three layered iced coffee drinks in ribbed glass tumblers with salted cream foam, cocoa, matcha and dark coffee layers, rustic dark wooden table, warm moody lighting, shallow depth of field, blurred woven textile background, tangerines as props, vertical composition, empty space at top, realistic, no text`,
  },
  {
    title: "Image 12",
    src: "/img-gen/product/img12.png",
    prompt: `Vertical event poster, giant 3D inflated glossy typography like soft plastic toy blocks, headline stacked on 3 lines: “SAIGON / FLEA / MARKET”. , Green ribbon banner under the headline: “HAPPY PLAYGROUND” with decorations around.Pixar-like 3D render, soft studio lighting, correct spelling`,
  },
  {
    title: "Image 13",
    src: "/img-gen/product/img13.png",
    prompt: `Vogue-style photo of a woman levitating in neon-green sweater, swirling neon liquid and floating headphones, electric cyan backdrop`,
  },
  {
    title: "Image 14",
    src: "/img-gen/product/img14.png",
    prompt: `Giant fluffy orange tabby cat in extreme close-up foreground, paw stretched out like a selfie. Behind it, a Vietnamese woman with long black hair in a red silk áo dài leans forward, hands in cute cat-paw pose, sweet smile, bright eyes. Vietnamese street with old tube houses, motorbikes, tangled power lines, green trees, blue sky, sunny, film grain, fashion editorial`,
  },
  {
    title: "Image 15",
    src: "/img-gen/product/img15.png",
    prompt: `Full body heavy-armored humanoid robot, glossy crimson red armor with black carbon accents, sharp angular plating, glowing blue eyes, clean chest plate with no logo, glowing orange lines along armor seams, rainy neon city street at night, low angle heroic stance, dramatic rim lighting, sparks and mist, cinematic, ultra detailed, photorealistic`,
  },
  {
    title: "Image 16",
    src: "/img-gen/product/img16.png",
    prompt: `Cute 3D style cartoon boy, running pose, holding a magnifying glass in one hand, pointing a finger at the camera with the other (oversized hand in foreground), green knit beanie, blue sweater, ripped jeans, orange sneakers, yellow backpack, big smiling eyes, solid vibrant orange gradient background, soft studio lighting, high detail,`,
  },
  {
    title: "Image 17",
    src: "/img-gen/product/img17.png",
    prompt: `Real-estate ad visual, stylish young Asian woman in sunglasses, cream crop top, red cargo pants, white sneakers, holding a tablet, walking on a globe-like curved street, miniature surreal city with a residential building on the left and a university gate on the right, blue sky, no text or logos`,
  },
  {
    title: "Image 18",
    src: "/img-gen/product/img18.png",
    prompt: `Full-body front view of a stylized 3D young woman, long wavy blonde hair, big eyes, gentle smile. Red oversized knit sweater, cream skinny pants, white sneakers. Light gray background, soft lighting, clean 3D render`,
  },
  {
    title: "Image 19",
    src: "/img-gen/product/img19.png",
    prompt: `Young woman with freckles and wild flowing copper-red hair, oversized camel blazer, chunky gold rings. Low-angle ultra-wide fisheye shot, big foreground hand with strong perspective distortion, glass skyscrapers converging toward a bright blue sky, sun flare. Luxury fashion photography, realistic skin, sharp details. Large thin white serif title “FASHION`,
  },
  {
    title: "Image 20",
    src: "/img-gen/product/img20.png",
    prompt: `Sci-fi poster, astronaut from behind in a cyan-lit spaceship corridor, tall window showing galaxy, planet, moon and sun flare, symmetrical, teal-blue, volumetric light, empty space at bottom.`,
  },
  {
    title: "Image 21",
    src: "/img-gen/product/img21.png",
    prompt: `3D advertising poster, cobalt blue background, metallic claw-machine grabber dropping from top holding a snack box, pile of colorful snack boxes below in red, purple, yellow and navy, each showing only a large bold white number (1-9), no other text or logos, glossy studio lighting, playful surreal product photography, white uppercase headline “TASTE THE PLAY.” at top.`,
  },
  {
    title: "Image 22",
    src: "/img-gen/product/img22.png",
    prompt: `Vintage orange VW camper van on a winding road in the Dolomites, jagged snow-streaked peaks, green alpine meadows, small village in the valley, overcast soft light, travel photography, photorealistic`,
  },
  {
    title: "Image 23",
    src: "/img-gen/product/img23.png",
    prompt: `Cute 3D isometric miniature cozy living room diorama, rounded cream curved wall with arched window, peach-orange armchair and cream loveseat, round wooden coffee table, small shelf with books and succulents, round apricot rug, soft clay texture, pastel palette of peach, orange, butter yellow and cream with small sage-green accents, warm golden background, soft studio lighting`,
  },
  {
    title: "Image 24",
    src: "/img-gen/product/img24.png",
    prompt: `Indochine-style living room with patterned cement floor tiles, rattan armchairs, wooden louvered shutters, ceramic vases from Bát Tràng, indoor plants, soft daylight, interior design magazine photo`,
  },
] as const;

const galleryRowHeight = 220;
const galleryImageSizes: Record<(typeof imageGallery)[number]["src"], readonly [number, number]> = {
  "/img-gen/product/img1.png": [242, 182],
  "/img-gen/product/img2.png": [239, 317],
  "/img-gen/product/img3.png": [241, 427],
  "/img-gen/product/img4.png": [476, 269],
  "/img-gen/product/img5.png": [424, 319],
  "/img-gen/product/img6.png": [386, 512],
  "/img-gen/product/img7.png": [387, 513],
  "/img-gen/product/img8.png": [294, 222],
  "/img-gen/product/img9.png": [283, 283],
  "/img-gen/product/img10.png": [272, 361],
  "/img-gen/product/img11.png": [272, 361],
  "/img-gen/product/img12.png": [254, 191],
  "/img-gen/product/img13.png": [280, 496],
  "/img-gen/product/img14.png": [308, 409],
  "/img-gen/product/img15.png": [284, 426],
  "/img-gen/product/img16.png": [294, 521],
  "/img-gen/product/img17.png": [294, 390],
  "/img-gen/product/img18.png": [262, 464],
  "/img-gen/product/img19.png": [268, 202],
  "/img-gen/product/img20.png": [398, 300],
  "/img-gen/product/img21.png": [426, 426],
  "/img-gen/product/img22.png": [433, 433],
  "/img-gen/product/img23.png": [424, 319],
  "/img-gen/product/img24.png": [439, 583],
};

const galleryRows = [imageGallery.slice(0, 12), imageGallery.slice(12)].map((row) =>
  row.map((item) => {
    const [imageWidth, imageHeight] = galleryImageSizes[item.src];
    return {
      ...item,
      frameWidth: Math.round((galleryRowHeight * imageWidth) / imageHeight),
    };
  }),
);

const galleryTrackRows = galleryRows.map((row) => [...row, ...row]);

export default function ProductsPage() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<(typeof imageGallery)[number] | null>(null);
  const { language } = useLanguage();
  const isEn = language === "en";
  const currentVideo = videoSlides[videoIndex];

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const handlePrev = () => {
    setVideoIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setVideoIndex((prev) => (prev + 1) % videoSlides.length);
  };

  return (
    <Section className="pt-12 sm:pt-16">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "PRODUCTS" : "SẢN PHẨM"}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {isEn ? "The Kling product ecosystem" : "Hệ sinh thái sản phẩm Kling"}
        </h1>
        <p className="mt-4 text-base text-foreground/75 sm:text-lg">
          {isEn
            ? "Core product pillars for modern creative workflows: AI video and image generation, motion control, and editing tools for creators and teams."
            : "Các sản phẩm cốt lõi cho quy trình sáng tạo hiện đại: tạo video và hình ảnh bằng AI, điều khiển chuyển động cùng công cụ chỉnh sửa dành cho nhà sáng tạo và đội nhóm."}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {productKeys.map((product) => (
          <div key={product.title} className="rounded-[var(--radius-box)] border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-muted"
            >
              {product.title !== "AI Image" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source
                    src={
                      product.title === "Motion Control"
                        ? "/footages/motion-control.mp4"
                        : product.title === "Video Editor"
                          ? "/footages/market.mp4"
                          : "/footages/worker-finds-something_cut.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              ) : product.title === "AI Image" ? (
                <Image
                  src="/img-gen/product/img14.png"
                  alt={isEn ? "A woman in a red áo dài posing with a cat" : "Người phụ nữ mặc áo dài đỏ tạo dáng cùng chú mèo"}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-[center_42%]"
                />
              ) : null}
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">{isEn ? product.title : product.titleVi}</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/72">{isEn ? product.description : product.descriptionVi}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-8">
        <section className="rounded-[1.25rem] border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-black">
              <div className="relative h-[35rem] w-full overflow-hidden bg-black">
                <video
                  key={currentVideo.src}
                  src={currentVideo.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={isEn ? "Previous slide" : "Trang chiếu trước"}
                    onClick={handlePrev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d1b2a]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-[#122334]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-white" aria-hidden="true">
                      <path d="M15 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label={isEn ? "Next slide" : "Trang chiếu tiếp theo"}
                    onClick={handleNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d1b2a]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:bg-[#122334]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-white" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{isEn ? currentVideo.title : currentVideo.titleVi}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">{isEn ? currentVideo.description : currentVideo.descriptionVi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "AI VIDEO" : "VIDEO AI"}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {isEn ? "Kling v4 brings the next era of AI video" : "Kling v4 mở ra kỷ nguyên video AI mới"}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/72">
                  {isEn
                    ? "The latest Kling update brings sharper motion, richer detail, and more cinematic storytelling for creative teams and solo creators."
                    : "Bản cập nhật Kling mới nhất mang đến chuyển động sắc nét, chi tiết phong phú và khả năng kể chuyện điện ảnh hơn cho đội ngũ sáng tạo và nhà sáng tạo độc lập."}
                </p>
              </div>

              <a
                href="https://kling.ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-muted px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground/30 hover:bg-surface"
              >
                {isEn ? "Create now" : "Sáng tạo ngay"}
              </a>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {videoSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`${isEn ? "Go to slide" : "Đến trang chiếu"} ${index + 1}`}
                  onClick={() => setVideoIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === videoIndex ? "w-8 bg-foreground" : "w-2.5 bg-foreground/30 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-border bg-surface p-4 shadow-sm sm:p-5">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[clamp(2.5rem,5vw,6rem)] font-semibold tracking-[-0.06em] text-white">Kling Image 3.0</h3>

            <div className="mt-10 grid w-full gap-8 text-left md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  {isEn ? "Enhanced Cinematic Storytelling" : "Kể chuyện điện ảnh nâng cao"}
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  {isEn
                    ? "Understands cinematic language with precision, giving every still image the narrative power of film."
                    : "Thấu hiểu ngôn ngữ điện ảnh để mỗi hình ảnh tĩnh đều có sức kể chuyện như một thước phim."}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  {isEn ? "Native 4K Ultra-HD Generation" : "Tạo hình ảnh 4K Ultra-HD gốc"}
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  {isEn
                    ? "Generates stunning native 4K visuals with fine textures and sharp, lifelike details."
                    : "Tạo hình ảnh 4K gốc ấn tượng với chất liệu tinh tế và chi tiết sắc nét, chân thực."}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[clamp(1.1rem,2vw,2rem)] font-semibold tracking-tight text-white">
                  {isEn ? "New Series Image Generation" : "Tạo chuỗi hình ảnh mới"}
                </h4>
                <p className="text-base leading-relaxed text-foreground/75">
                  {isEn
                    ? "Supports multiple ways to generate image series, with coherent storytelling and a consistent visual style."
                    : "Hỗ trợ nhiều cách tạo chuỗi hình ảnh với câu chuyện liền mạch và phong cách hình ảnh nhất quán."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden px-2 pb-2 sm:px-3">
            <div className="flex w-full flex-col gap-[6px]">
              {galleryTrackRows.map((row, rowIndex) => (
                <div key={`gallery-row-${rowIndex}`} className="marquee-track flex w-max gap-[6px]">
                  {row.map((item, index) => (
                    <button
                      key={`${item.title}-${rowIndex}-${index}`}
                      type="button"
                      aria-label={`${isEn ? "Preview" : "Xem trước"} ${item.title}`}
                      aria-haspopup="dialog"
                      onClick={() => setSelectedImage(item)}
                      className="group relative h-[220px] shrink-0 overflow-hidden rounded-[4px] border border-white/10 bg-black/40 p-0 text-left"
                      style={{ width: item.frameWidth }}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes={`${item.frameWidth}px`}
                        className="object-contain"
                      />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-2 opacity-0 transition duration-300 group-hover:opacity-100">
                        <div className="rounded-md border border-white/10 bg-black/55 p-2 text-[10px] leading-relaxed text-white/80 backdrop-blur-sm">
                          {item.prompt}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .marquee-track {
              animation: marquee 28s linear infinite;
              will-change: transform;
            }

            .marquee-track:hover {
              animation-play-state: paused;
            }

            @keyframes marquee {
              from {
                transform: translate3d(0, 0, 0);
              }
              to {
                transform: translate3d(-50%, 0, 0);
              }
            }
          `}</style>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
            >
              {isEn ? "Try Now" : "Dùng thử ngay"}
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {selectedImage && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedImage.title} ${isEn ? "preview" : "xem trước"}`}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
              onClick={(event) => {
                if (event.target === event.currentTarget) setSelectedImage(null);
              }}
            >
              <button
                type="button"
                aria-label={isEn ? "Close image preview" : "Đóng xem trước hình ảnh"}
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white/15"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="relative h-full max-h-[90vh] w-full max-w-6xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </section>

        {productKeys
          .filter((product) => product.title !== "AI Video" && product.title !== "AI Image")
          .map((product) => (
            <section key={`${product.title}-detail`} className="rounded-[var(--radius-box)] border border-border bg-surface p-4 shadow-sm sm:p-6">
              <div className={`grid gap-6 lg:items-center ${product.title === "Motion Control" ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1.1fr_1.9fr]"}`}>
                <div
                  className={`relative overflow-hidden rounded-lg border border-border bg-surface-muted ${
                    product.title === "Motion Control" ? "aspect-video" : "aspect-[16/10] border-dashed"
                  }`}
                >
                  {product.title === "Motion Control" && (
                    <video
                      src="/footages/motion-control.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">{isEn ? "PRODUCT" : "SẢN PHẨM"}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{isEn ? product.title : product.titleVi}</h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/72">{isEn ? product.description : product.descriptionVi}</p>

                  <ul className="mt-5 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
                    {(isEn ? product.highlights : product.highlightsVi).map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
      </div>
    </Section>
  );
}
