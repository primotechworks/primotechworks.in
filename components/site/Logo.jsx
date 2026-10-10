import Image from "next/image";

// Primary brand logo: a vector redraw of the original emblem (sharp at any size)
// paired with the original "Primo Techworks" lettering.
// An alternative flat logo lives in LogoFlat.jsx.
export default function Logo({ height = 40, priority = false }) {
  const wordH = Math.round(height * 0.83);
  const wordW = Math.round((wordH * 962) / 303);
  return (
    <span className="pt-brandlogo" style={{ gap: Math.round(height * 0.16) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/images/brand/primo-emblem.svg" alt="" width={height} height={height} />
      <Image
        src="/assets/images/brand/primo-wordmark.webp"
        alt="Primo Techworks"
        width={962}
        height={303}
        priority={priority}
        sizes={`${wordW}px`}
        style={{ height: wordH, width: "auto" }}
      />
    </span>
  );
}
