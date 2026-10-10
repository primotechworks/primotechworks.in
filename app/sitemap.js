import { SITE_URL } from "@/data/site";
import { services } from "@/data/services";
import { work } from "@/data/work";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
  { path: "/clients", priority: 0.8 },
  ...work.map((w) => ({ path: `/clients/${w.slug}`, priority: 0.7 })),
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacypolicy", priority: 0.2 },
  { path: "/termsandconditions", priority: 0.2 },
  { path: "/refundandcancellationpolicy", priority: 0.2 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
