// Prepare a team headshot so it matches the others on the About page:
// black & white, tones matched to the reference photo, soft vignette, 640x640 WebP.
//
// Usage:
//   node scripts/team-photo.mjs <input> <output-name> [left top size] [soften]
//   e.g. node scripts/team-photo.mjs "../../resources/Team/Nidhi Karia.png" nidhi-karia 251 176 362 soften
//
// "soften" blurs the edges of busy backgrounds (keeping the face sharp) so photos
// taken in offices or venues sit alongside plain-wall portraits.
//
// The optional crop (in source pixels) should frame head and shoulders like the
// reference: eyes about a third of the way down, head roughly 45% of the height.
import sharp from "sharp";

const REFERENCE = "public/assets/images/team/jay-modi.webp";
const SIZE = 640;

const [input, name, left, top, size, soften] = process.argv.slice(2);
if (!input || !name) {
  console.error("Usage: node scripts/team-photo.mjs <input> <output-name> [left top size]");
  process.exit(1);
}

async function percentiles(buf, ps) {
  const { data } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const sorted = Array.from(data).sort((a, b) => a - b);
  return ps.map((p) => sorted[Math.floor(p * (sorted.length - 1))]);
}

let img = sharp(input).flatten({ background: "#ffffff" });
if (size) img = img.extract({ left: +left, top: +top, width: +size, height: +size });
else {
  const m = await sharp(input).metadata();
  const s = Math.min(m.width, m.height);
  img = img.extract({ left: Math.round((m.width - s) / 2), top: 0, width: s, height: s });
}
const gray = await img.grayscale().toBuffer();

// Match the 2nd/98th percentile tones of the reference photo.
const [r2, r98] = await percentiles(await sharp(REFERENCE).grayscale().toBuffer(), [0.02, 0.98]);
const [s2, s98] = await percentiles(gray, [0.02, 0.98]);
const a = (r98 - r2) / (s98 - s2);
const b = r2 - a * s2;

const vignette = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}"><defs><radialGradient id="g" cx="50%" cy="42%" r="75%"><stop offset="0.35" stop-color="#fff"/><stop offset="1" stop-color="#b9b9b9"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`
);

let resized = await sharp(gray).linear(a, b).resize(SIZE, SIZE, { kernel: "lanczos3" }).toBuffer();

if (soften === "soften") {
  // Sharp subject in the middle, progressively blurred background towards the edges.
  const blurred = await sharp(resized).blur(9).toBuffer();
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}"><defs><radialGradient id="m" cx="50%" cy="48%" r="58%"><stop offset="0.5" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#m)"/></svg>`
  );
  const alpha = await sharp(mask).grayscale().raw().toBuffer();
  const sharpLayer = await sharp(resized).grayscale().joinChannel(alpha, { raw: { width: SIZE, height: SIZE, channels: 1 } }).png().toBuffer();
  resized = await sharp(blurred).composite([{ input: sharpLayer }]).toBuffer();
}
const out = `public/assets/images/team/${name}.webp`;
await sharp(resized)
  .composite([{ input: vignette, blend: "multiply" }])
  .linear(1.08, -14)
  .grayscale()
  .sharpen({ sigma: 0.7 })
  .webp({ quality: 86 })
  .toFile(out);
console.log(`Saved ${out}`);
