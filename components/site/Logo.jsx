// Primary brand logo: the original artwork, pre-rendered at the exact sizes it is
// displayed at (1x/2x/3x) so it stays sharp without browser or optimizer resampling.
// Alternatives: LogoFlat.jsx (flat mark) and /assets/images/brand/primo-emblem.svg (vector emblem redraw).
const SIZES = {
  44: [44, 88, 132],
  64: [64, 128, 192],
};
const RATIO = 1423 / 367;

export default function Logo({ height = 44, priority = false }) {
  const [x1, x2, x3] = SIZES[height] || SIZES[44];
  const src = (h) => `/assets/images/brand/logo-${h}.png`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src(x1)}
      srcSet={`${src(x1)} 1x, ${src(x2)} 2x, ${src(x3)} 3x`}
      alt="Primo Techworks"
      width={Math.round(height * RATIO)}
      height={height}
      fetchPriority={priority ? "high" : undefined}
      style={{ display: "block", height, width: "auto" }}
    />
  );
}
