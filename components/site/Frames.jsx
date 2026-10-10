import Image from "next/image";

export function BrowserFrame({ src, alt, url, dark = false, width = 1440, height = 900, priority = false, sizes }) {
  return (
    <div className={`pt-browser ${dark ? "dark" : ""}`}>
      <div className="pt-browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <b>{url}</b>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, 900px"}
      />
    </div>
  );
}

export function PhoneFrame({ src, alt, width = 620, height = 1227, framed = true, sizes = "260px" }) {
  if (!framed) {
    return (
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} style={{ width: "100%", height: "auto", filter: "drop-shadow(0 30px 40px rgba(11,18,32,.25))" }} />
    );
  }
  return (
    <div className="pt-phone">
      <div>
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />
      </div>
    </div>
  );
}
