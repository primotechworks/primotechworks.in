import "../public/assets/css/styles.css";
import "./site.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import ClientInit from "@/components/common/ClientInit";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT, SOCIALS } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Web, Mobile & AI Product Engineering Studio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "./",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Primo Techworks: web, mobile and AI product engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@primotechworks",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/brand/primo-emblem.svg`,
  image: `${SITE_URL}/assets/images/og-image.jpg`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Panchgini Apartments, Ramdevnagar, Satellite",
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.region,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.country,
  },
  areaServed: "Worldwide",
  sameAs: SOCIALS.map((s) => s.url),
  knowsAbout: [
    "Web application development",
    "Mobile app development",
    "Artificial intelligence",
    "Software architecture",
    "UX/UI design",
    "Cloud computing",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`no-mobile no-touch ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal-on-scroll styles only when JS runs, so content never stays hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('pt-js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="body">
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
