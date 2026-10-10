import "photoswipe/dist/photoswipe.css";
import "../public/assets/css/styles.css";

import { Plus_Jakarta_Sans } from "next/font/google";
import ClientInit from "@/components/common/ClientInit";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Software Engineering & Technology Consulting`,
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
        alt: "Primo Techworks team working on software, cloud and AI solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@primotechworks",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`no-mobile no-touch ${jakarta.variable}`}>
      <body className="appear-animate body">
        <ClientInit />
        {children}
      </body>
    </html>
  );
}
