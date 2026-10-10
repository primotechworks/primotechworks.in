// Case studies. Facts come from the products' codebases, docs and live sites.
// Keep claims verifiable: no invented metrics, clients or quotes.

export const work = [
  {
    slug: "hjachi",
    name: "HJachi",
    kind: "Healthcare SaaS",
    region: "Canada",
    tagline: "A privacy-first telehealth platform for psychologists and counsellors",
    summary:
      "Video sessions, on-device transcription and AI-drafted clinical notes, so clinicians spend their energy on the person in front of them, not the paperwork after.",
    url: "https://hjachi.com",
    accent: { bg: "#f1eef8", glow: "rgba(117, 100, 159, 0.35)", dark: false },
    web: "/assets/images/work/hjachi-web.webp",
    webDark: true,
    phone: "/assets/images/work/hjachi-phone.webp",
    logo: { src: "/assets/images/work/logos/hjachi-logo.webp", w: 520, h: 305, height: 60 },
    services: ["Product design", "Web app", "Android app", "Cloud architecture", "AI integration"],
    platforms: "Web, Android, iOS (in progress)",
    stack: ["React", "TypeScript", "Kotlin", "Ktor", "Kotlin Multiplatform", "PostgreSQL", "AWS Lambda", "Terraform", "AWS Bedrock", "Whisper", "WebRTC", "Stripe"],
    metrics: [
      { n: "~11 wks", l: "From first commit to a launch-ready platform" },
      { n: "0 bytes", l: "Of session audio leave the clinician's device" },
      { n: "4", l: "Clinical note formats drafted by AI (SOAP, DAP, BIRP, CBT)" },
    ],
    challenge: [
      "Therapists lose hours every week to clinical documentation, and most AI scribes solve it by uploading session audio to someone else's servers: a hard no for many clinicians and their clients.",
      "HJachi needed to combine telehealth, scheduling, measurement-based care and note-writing in one calm product, without ever compromising client confidentiality.",
    ],
    approach: [
      "We designed the privacy model first. Speech-to-text runs on the device (Whisper via WebAssembly on the web and whisper.cpp on Android), so only clinician-confirmed text is ever sent to the server, and transcripts are deleted once a note is signed.",
      "Note drafting is consent-gated and traceable: the AI drafts SOAP, DAP, BIRP or CBT notes with confidence scores and links back to the evidence, and the clinician reviews and signs.",
      "The platform runs serverless on AWS (Kotlin and Ktor on Lambda, PostgreSQL on RDS), fully defined in Terraform, with a self-hosted TURN server so video calls connect reliably behind strict networks.",
    ],
    highlights: [
      { t: "On-device transcription", d: "Whisper runs in the browser and on Android. Audio never leaves the device." },
      { t: "AI clinical notes", d: "Drafts in four formats with confidence scores and evidence links, signed by the clinician." },
      { t: "Reliable video", d: "WebRTC with a self-hosted TURN server, pre-join network checks and background blur." },
      { t: "Measurement-based care", d: "PHQ-9 and GAD-7 with critical-item flags, mood logs and homework." },
      { t: "Practice operations", d: "Online booking, payments, e-signed consent and secure messaging." },
      { t: "Data rights built in", d: "Export, revocation, a 30-day deletion purge and immutable audit logs." },
    ],
    outcome:
      "HJachi went from first commit to a launch-ready, multi-tenant platform in about eleven weeks, with web, Android and a client portal, and it is live today with paid plans for solo and group practices.",
  },
  {
    slug: "ambimi",
    name: "AmbiMi",
    kind: "Workforce marketplace",
    region: "Vancouver, Canada",
    tagline: "Skills-based job matching and on-demand staffing, on every platform",
    summary:
      "A marketplace that matches vetted workers to organisations by skill, with native apps, three web portals, payroll and AI-assisted hiring.",
    url: "https://www.ambimi.com",
    accent: { bg: "#f2fbe0", glow: "rgba(209, 254, 81, 0.6)", dark: false },
    web: "/assets/images/work/ambimi-web.webp",
    phone: "/assets/images/work/ambimi-phone.webp",
    phone2: "/assets/images/work/ambimi-phone-2.webp",
    logo: { src: "/assets/images/work/logos/ambimi-logo.webp", w: 440, h: 90, height: 30 },
    services: ["Product engineering", "iOS & Android apps", "Web portals", "Serverless backend", "AI features"],
    platforms: "iOS, Android, 3 web portals, public APIs",
    stack: ["Swift", "Kotlin", "Jetpack Compose", "React", "Node.js", "TypeScript", "AWS SAM", "Lambda", "MySQL", "Auth0", "Stripe", "Novu", "Anthropic Claude", "Astro"],
    metrics: [
      { n: "6+ yrs", l: "Of continuous product development and releases" },
      { n: "5", l: "Apps and portals: iOS, Android, admin, agency and public web" },
      { n: "2,400+", l: "Backend commits across five deployment environments" },
    ],
    challenge: [
      "Hiring for shifts, gigs and contracts is slow and keyword-driven. AmbiMi set out to match people on real, tested skills, and to run the whole lifecycle from posting to check-in to payroll.",
      "That meant native mobile apps for workers, portals for organisations and staffing agencies, and a backend that handles money, schedules across timezones and sensitive personal data.",
    ],
    approach: [
      "We built AmbiMi around a proprietary skills taxonomy (field → job title → skill), so matching is structured rather than keyword-based, with vetting, geolocation check-in and ratings closing the loop.",
      "The backend is serverless on AWS: Node.js and TypeScript Lambdas, SQS queues and MySQL, with separate Auth0 tenants for mobile, admin and agency users, and one React bundle that serves three portals by hostname.",
      "AI is used where it's safe and useful. Claude drafts job posts, imports résumés and summarises profiles, but it never touches money or dates: the model proposes skills from the catalogue and the server validates every field.",
    ],
    highlights: [
      { t: "Skills taxonomy matching", d: "Pros are matched on vetted, tested skills, not keywords." },
      { t: "Native iOS & Android", d: "Swift and Kotlin apps with geolocation check-in and check-out." },
      { t: "Lynk for agencies", d: "A white-label, multi-tenant portal for staffing and direct-hire desks." },
      { t: "AI job wizard", d: "Claude drafts job posts and imports résumés, with server-side guardrails." },
      { t: "Payments & payroll", d: "Stripe subscriptions, fee previews, credits and a payroll module." },
      { t: "Safe video intros", d: "Automated moderation and transcoding of candidate video introductions." },
    ],
    outcome:
      "AmbiMi has shipped continuously for more than six years, growing from a single app into a multi-platform marketplace with an agency product and AI-assisted hiring.",
  },
  {
    slug: "zaris",
    name: "Zaris",
    kind: "Fintech · Primo Labs",
    region: "US equities",
    tagline: "A market-intelligence terminal that runs on a zero-dollar infrastructure budget",
    summary:
      "Scores US stocks every five minutes, tracks insider and institutional moves, and sends AI-written briefs, all on free-tier cloud.",
    url: null,
    displayUrl: "zaris.pages.dev",
    logo: { mark: "/assets/images/work/logos/zaris-mark.webp", wordmark: "zaris" },
    accent: { bg: "#0f131b", glow: "rgba(227, 181, 84, 0.35)", dark: true },
    web: "/assets/images/work/zaris-web.webp",
    webDark: true,
    services: ["Product design", "Data engineering", "Web app (PWA)", "AI integration", "DevOps"],
    platforms: "Installable web app (PWA), Telegram & email alerts",
    stack: ["React", "TypeScript", "Tailwind", "Python", "Supabase", "PostgreSQL", "Google Cloud", "Cloudflare Pages", "GitHub Actions", "Anthropic Claude"],
    metrics: [
      { n: "16 days", l: "From idea to a working, tested system" },
      { n: "~100", l: "Stocks ranked on a 0–100 composite score" },
      { n: "$0", l: "Monthly infrastructure: designed around free tiers" },
    ],
    challenge: [
      "Serious market research usually means expensive terminals and data subscriptions. Zaris is an in-house Primo Labs project that asks how far careful engineering can go on a zero-dollar budget.",
    ],
    approach: [
      "A typed Python engine (strict mypy, ruff and 80 test files) runs an intraday scan every five minutes, combining technical and fundamental factors into a single score, plus insider trades from SEC filings, 13F holdings, congressional trades and options gamma exposure.",
      "It runs on a free-tier Google Cloud VM with its own scheduler and health checks, Supabase for data and auth, and Cloudflare Pages for the terminal-style web app. A GitHub Actions watchdog raises an alert if the server goes quiet.",
      "Claude writes the morning and midday briefs with per-call cost tracking, and a paper-trading journal scores the system's own picks so it can learn from them.",
    ],
    highlights: [
      { t: "Live terminal UI", d: "A Bloomberg-style dashboard that installs on a phone as an app." },
      { t: "Composite scoring", d: "Technical and fundamental factors combined into a 0–100 score." },
      { t: "Smart-money tracking", d: "Insider (Form 4), 13F and congressional trading data." },
      { t: "AI market briefs", d: "LLM-written briefs delivered by Telegram and email." },
      { t: "Self-grading", d: "Backtests and a paper-trading journal that score its own picks." },
      { t: "Zero-cost ops", d: "Free-tier cloud, health checks and an automated watchdog." },
    ],
    outcome:
      "Built and tested in 16 days, Zaris shows how we approach cost-sensitive products: clear architecture, strong typing and testing, and infrastructure chosen for the budget, not the hype.",
  },
  {
    slug: "kwoon",
    name: "Kwoon",
    kind: "Open source · Primo Labs",
    region: "Worldwide",
    tagline: "A private PDF editor that runs entirely in your browser",
    summary:
      "Edit, sign, redact and OCR PDFs without uploading a single file. Everything happens on your device.",
    url: "https://kwoon.pages.dev",
    accent: { bg: "#13111c", glow: "rgba(167, 139, 250, 0.45)", dark: true },
    web: "/assets/images/work/kwoon-web.webp",
    webDark: true,
    logo: { mark: "/assets/images/work/logos/kwoon-mark.svg", wordmark: "kwoon" },
    services: ["Product design", "Web app", "WebAssembly", "Testing & CI"],
    platforms: "Web (client-side app)",
    stack: ["React", "TypeScript", "Vite", "MuPDF (WebAssembly)", "Tesseract.js", "Playwright", "Cloudflare Pages"],
    metrics: [
      { n: "0", l: "Files uploaded: all processing happens on-device" },
      { n: "7", l: "Languages supported by in-browser OCR" },
      { n: "6", l: "Modes: view, annotate, edit, organise, sign and protect" },
    ],
    challenge: [
      "Most online PDF tools upload your documents to a server, which is a real risk for contracts, IDs and medical records. Desktop alternatives are expensive or clunky.",
    ],
    approach: [
      "Kwoon compiles the MuPDF engine to WebAssembly and runs OCR with Tesseract.js, so every operation (editing text in place, true redaction, form filling, signatures, page reordering) happens inside the browser tab.",
      "A command bar (Ctrl+K), full undo and redo, and a calm dark-first interface make it fast for power users, while browser-based end-to-end tests guard every feature.",
    ],
    highlights: [
      { t: "True redaction", d: "Permanently removes the underlying content, not just a black box." },
      { t: "Edit text in place", d: "Change existing text directly in the PDF." },
      { t: "In-browser OCR", d: "Make scanned documents searchable in seven languages." },
      { t: "Sign & fill forms", d: "Signatures, text boxes, images, watermarks and AcroForm filling." },
      { t: "Organise pages", d: "Reorder, rotate, merge and extract pages." },
      { t: "Open source", d: "AGPL-licensed and deployed automatically with GitHub Actions." },
    ],
    outcome:
      "Kwoon is live and free to use: a privacy-first alternative to paid PDF editors, and a showcase of what modern browsers and WebAssembly can do.",
  },
  {
    slug: "savile-services",
    name: "Savile Services",
    kind: "Business website",
    region: "Greater Vancouver, Canada",
    tagline: "A premium web presence for a landscape management company",
    summary:
      "A fast, image-led website that presents four service lines to strata councils, property managers and homeowners, and turns visits into enquiries.",
    url: "https://savileservices.ca",
    accent: { bg: "#f6f3ea", glow: "rgba(176, 141, 71, 0.35)", dark: false },
    web: "/assets/images/work/savile-web.webp",
    logo: { src: "/assets/images/work/logos/savile-logo.webp", w: 360, h: 189, height: 50 },
    services: ["Web design", "Website development", "Content & SEO", "Lead capture"],
    platforms: "Website",
    stack: ["Next.js", "React", "Bootstrap", "Nodemailer"],
    metrics: [
      { n: "4", l: "Service lines with dedicated, image-led pages" },
      { n: "24+", l: "Real project photos in a filterable gallery" },
      { n: "1", l: "Simple enquiry flow straight to the team's inbox" },
    ],
    challenge: [
      "Savile Services wins work from strata councils, commercial property managers and high-end homeowners, all buyers who judge quality before they ever pick up the phone.",
    ],
    approach: [
      "We built a clean, photography-first site in Next.js that leads with real project work, explains each service line clearly (strata, commercial, high-end residential and hardscape), and makes it effortless to get in touch.",
      "Client logos, testimonials and a team page build trust, and a lightweight contact flow delivers enquiries straight to the team's inbox.",
    ],
    highlights: [
      { t: "Service-led structure", d: "Clear pages for strata, commercial, residential and hardscape work." },
      { t: "Project gallery", d: "A filterable gallery of real work, with lightbox viewing." },
      { t: "Trust signals", d: "Client logos, testimonials and the people behind the work." },
      { t: "Lead capture", d: "A simple form that emails enquiries directly to the business." },
    ],
    outcome:
      "Savile Services now has a polished, fast website that reflects the quality of its work, built to rank locally and convert visits into conversations.",
  },
];

export const workBySlug = Object.fromEntries(work.map((w) => [w.slug, w]));
