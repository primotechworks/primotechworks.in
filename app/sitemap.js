import { SITE_URL } from "@/data/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacypolicy", priority: 0.3 },
  { path: "/termsandconditions", priority: 0.3 },
  { path: "/refundandcancellationpolicy", priority: 0.3 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
