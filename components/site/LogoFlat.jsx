// Alternative flat logo (saved for later, not currently used): the Primo mark (upward chevron + circuit traces) with a clean wordmark.
export default function LogoFlat({ size = 34 }) {
  return (
    <>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="pt-logo-g" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3B9BFF" />
            <stop offset="1" stopColor="#1257D6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#pt-logo-g)" />
        <path d="M18 27 32 14l14 13" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M32 24v12M32 36l-8 6v5M32 36l8 6v5M32 36v11"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".92"
        />
        <circle cx="24" cy="49.5" r="2.6" fill="#fff" />
        <circle cx="32" cy="49.5" r="2.6" fill="#fff" />
        <circle cx="40" cy="49.5" r="2.6" fill="#fff" />
      </svg>
      <span className="pt-logo-text">
        Primo <span>Techworks</span>
      </span>
    </>
  );
}
