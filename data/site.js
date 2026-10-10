export const SITE_URL = "https://www.primotechworks.in";
export const SITE_NAME = "Primo Techworks";
export const SITE_DESCRIPTION =
  "Primo Techworks is a senior product engineering studio in Ahmedabad, India. We design and build web apps, mobile apps and AI-powered software for startups, growing businesses and enterprise teams worldwide.";

export const CONTACT = {
  email: "info@primotechworks.in",
  phone: "+91 98490 21468",
  phoneHref: "tel:+919849021468",
  address: "Panchgini Apartments, Ramdevnagar, Satellite, Ahmedabad, Gujarat 380015, India",
  city: "Ahmedabad",
  region: "Gujarat",
  postalCode: "380015",
  country: "IN",
  mapUrl: "https://maps.app.goo.gl/nxr9GAkcRHFpXmZD6",
};

export const SOCIALS = [
  { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/PrimoTechworks" },
  { name: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/@PrimoTechworks" },
  { name: "Twitter", icon: "fa-x-twitter", url: "https://x.com/primotechworks" },
  { name: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com/company/primotechworks" },
];

export const NAV = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/clients", text: "Clients" },
  { href: "/contact", text: "Contact" },
];

export const STATS = [
  { n: 12, suffix: "+", l: "Years of engineering and leadership experience" },
  { n: 50, suffix: "+", l: "Applications, platforms and systems delivered or improved" },
  { n: 10, suffix: "+", l: "Industries served, from healthcare to fintech" },
  { n: 100, suffix: "%", l: "On-time project delivery" },
];

export const PROCESS = [
  {
    t: "Discover",
    d: "We dig into your goals, users and constraints, then agree on scope, priorities and what success looks like.",
    items: ["Discovery call & workshop", "Scope, risks and estimate", "Roadmap you can act on"],
  },
  {
    t: "Design",
    d: "Flows, prototypes and architecture are designed together, so what we design is what we can build.",
    items: ["User flows & prototypes", "UI design system", "Technical architecture"],
  },
  {
    t: "Build",
    d: "Short iterations with working software you can try every week, and code reviews and tests on every change.",
    items: ["Weekly demos", "Automated tests & CI/CD", "Transparent progress"],
  },
  {
    t: "Launch & grow",
    d: "We ship, monitor and keep improving, or hand over cleanly with documentation your team can own.",
    items: ["Launch & monitoring", "Iteration on real data", "Support or clean handover"],
  },
];

export const WHY = [
  {
    icon: "senior",
    t: "Senior people, start to finish",
    d: "You work directly with experienced engineers and designers, not account managers and a rotating bench of juniors.",
  },
  {
    icon: "product",
    t: "We think like product owners",
    d: "We've built and run our own products, so we care about outcomes, users and budgets, not just tickets closed.",
  },
  {
    icon: "eye",
    t: "Radical transparency",
    d: "Weekly demos, shared boards and honest estimates. You always know what's done, what's next and what it costs.",
  },
  {
    icon: "globe",
    t: "Built for global teams",
    d: "Based in India and working with clients across North America and beyond, with overlap hours that suit your timezone.",
  },
  {
    icon: "lock",
    t: "Security & privacy by design",
    d: "Least-privilege access, encrypted data, audit trails and privacy-first architecture from day one.",
  },
  {
    icon: "key",
    t: "You own everything",
    d: "Your code, your cloud accounts, your IP. Clean documentation means you're never locked in to us.",
  },
];

export const MODELS = [
  {
    t: "Project",
    best: "Best for MVPs & defined builds",
    d: "A fixed scope, timeline and price for a clearly defined product or feature set.",
    items: ["Fixed price & timeline", "Discovery included", "Weekly demos", "Warranty period after launch"],
  },
  {
    t: "Dedicated team",
    best: "Best for growing products",
    d: "A senior, cross-functional team that works as an extension of yours, month to month.",
    items: ["Engineers, designer & lead", "Flexible monthly capacity", "Your tools & rituals", "Scale up or down any time"],
    featured: true,
  },
  {
    t: "Advisory",
    best: "Best for big technical decisions",
    d: "Architecture reviews, audits, hiring support or a fractional CTO, on a retainer or per engagement.",
    items: ["Architecture & code audits", "Fractional CTO", "Hiring & interview loops", "Clear written recommendations"],
  },
];

// Add real client quotes here (name, role, company). The section stays hidden while empty.
export const TESTIMONIALS = [];

export const HOME_FAQS = [
  {
    q: "How much does it cost to build an app or software product?",
    a: "It depends on scope. A focused MVP is often a few weeks of work, while larger platforms take a few months. After a free discovery call we'll give you a clear estimate, and we offer both fixed-price and monthly team options.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. Most of the products we've built serve users in Canada and the US, and we work comfortably across timezones with scheduled overlap hours, async updates and weekly demos.",
  },
  {
    q: "Do you work with startups or established companies?",
    a: "Both. We help founders validate ideas and launch MVPs, help growing businesses modernise and scale, and support enterprise teams with architecture, senior engineering and hiring.",
  },
  {
    q: "Will we own the source code and IP?",
    a: "Yes, 100%. Everything we build lives in your repositories and cloud accounts, and all IP transfers to you.",
  },
  {
    q: "Can you work with our existing codebase or team?",
    a: "Absolutely. We start with a short technical audit, then either improve what's there or embed alongside your team to add senior capacity.",
  },
  {
    q: "How soon can we start?",
    a: "Usually within 1–3 weeks of agreeing scope. If something is urgent, tell us and we'll do our best to accommodate it.",
  },
];

// Founder / team profiles for the About page. The section stays hidden while empty.
// Shape: { name, role, photo: "/assets/images/team/name.jpg", bio, linkedin }
export const TEAM = [
  { name: "Pradyut Modi", role: "President", linkedin: "https://www.linkedin.com/in/pradyutmodi1961/" },
  { name: "Jay Modi", role: "Founder & CTO", linkedin: "https://www.linkedin.com/in/jaymodi27/" },
  { name: "Nidhi Karia", role: "Chief HR", linkedin: "https://www.linkedin.com/in/nidhi-karia-37442453/" },
];

export const VALUES = [
  { t: "Clarity over cleverness", d: "Simple architecture, plain-English updates and honest estimates. If it's complicated, we explain why." },
  { t: "Craft in the details", d: "Fast load times, accessible interfaces, tested code. The details users never notice until they're missing." },
  { t: "Own the outcome", d: "We measure success by what your product achieves, not by hours billed or tickets closed." },
  { t: "Privacy is a feature", d: "From on-device AI to least-privilege access, we design for trust from the very first commit." },
];

export const INDUSTRIES = [
  { icon: "shield", t: "Healthcare & wellness", d: "Privacy-first platforms for clinicians, practices and patients." },
  { icon: "team", t: "Workforce & HR tech", d: "Marketplaces, staffing tools and hiring workflows." },
  { icon: "product", t: "Fintech & data", d: "Dashboards, analytics and data pipelines that people trust." },
  { icon: "web", t: "SaaS & productivity", d: "Multi-tenant products, portals and tools teams use every day." },
  { icon: "pin", t: "Local & professional services", d: "Fast, credible websites that turn visitors into enquiries." },
  { icon: "spark", t: "Startups & new ventures", d: "MVPs and first products, built on foundations that scale." },
];
