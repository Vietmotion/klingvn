export function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/hero-placeholder.svg"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/footages/hero.mp4" type="video/mp4" />
    </video>
  );
}