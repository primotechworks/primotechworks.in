// Service pages: /services/[slug]. Each targets a distinct search intent.

export const services = [
  {
    slug: "web-app-development",
    icon: "web",
    title: "Web App Development",
    short:
      "Fast, secure web applications and SaaS platforms: dashboards, portals and marketplaces built to scale.",
    h1: "Web app development for products that need to scale",
    metaTitle: "Web App Development Company | SaaS & Custom Web Applications",
    metaDescription:
      "Custom web application and SaaS development with React, Next.js, Node.js and Python. Our team in India builds fast, secure, scalable web apps for clients worldwide.",
    intro:
      "From a first MVP to a multi-tenant SaaS platform, we design and build web applications that are fast, secure and easy to evolve, with clean architecture your future team will thank you for.",
    problems: [
      "You have a validated idea and need a production-quality MVP, fast",
      "Your current app is slow, fragile or hard to change",
      "You need customer, partner or admin portals on top of existing systems",
      "You're scaling from one customer to many and need multi-tenancy, roles and billing",
    ],
    deliverables: [
      "Product discovery and technical scoping",
      "UX/UI design and clickable prototypes",
      "Frontend in React / Next.js with TypeScript",
      "APIs and backends in Node.js, Python or Kotlin",
      "Authentication, roles, payments and notifications",
      "Automated tests, CI/CD and cloud deployment",
      "Documentation and a clean handover",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Kotlin", "PostgreSQL", "MySQL", "AWS", "Google Cloud", "Supabase", "Stripe", "Auth0"],
    faqs: [
      {
        q: "How long does it take to build a web app?",
        a: "A focused MVP typically takes 6–12 weeks. Larger platforms with multiple user roles, integrations and payments usually take 3–6 months. You'll get a clear timeline after a short discovery phase.",
      },
      {
        q: "Which technologies do you use for web apps?",
        a: "Most of our web apps use React or Next.js with TypeScript on the frontend, and Node.js, Python or Kotlin on the backend with PostgreSQL or MySQL. We choose the stack that fits your product, team and budget, not the latest trend.",
      },
      {
        q: "Will we own the code?",
        a: "Yes. You own 100% of the code, designs and IP we create for you. Everything lives in your repositories and cloud accounts from day one.",
      },
      {
        q: "Can you take over an existing web application?",
        a: "Yes. We start with a technical audit to understand the codebase, risks and quick wins, then recommend whether to improve, refactor or rebuild parts of it.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    title: "Mobile App Development",
    short:
      "Native and cross-platform iOS and Android apps that feel fast, look polished and work offline.",
    h1: "iOS and Android app development, done properly",
    metaTitle: "Mobile App Development Company | iOS & Android Apps",
    metaDescription:
      "Native iOS (Swift) and Android (Kotlin) app development, plus cross-platform with Kotlin Multiplatform. From MVP to App Store and Play Store launch.",
    intro:
      "We build native iOS and Android apps, and share logic across platforms where it makes sense, so your app feels at home on every device without doubling your costs.",
    problems: [
      "You need a customer-facing app on both iOS and Android",
      "Your app is slow, crashes or gets poor reviews",
      "You need offline support, location, push notifications or video",
      "You want one team to own mobile, web and backend together",
    ],
    deliverables: [
      "App strategy and platform recommendation",
      "Mobile UX/UI design and prototypes",
      "Native iOS (Swift / SwiftUI) and Android (Kotlin / Compose)",
      "Shared business logic with Kotlin Multiplatform",
      "Push notifications, payments, maps and media",
      "App Store and Google Play submission",
      "Crash reporting, analytics and ongoing releases",
    ],
    stack: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Kotlin Multiplatform", "Firebase", "WebRTC", "Stripe", "Novu"],
    faqs: [
      {
        q: "Native or cross-platform: which is right for us?",
        a: "Native (Swift and Kotlin) gives the best performance and platform feel; sharing core logic with Kotlin Multiplatform keeps costs down without compromising the UI. We'll recommend the right mix for your product and budget.",
      },
      {
        q: "Do you handle App Store and Play Store submission?",
        a: "Yes. We prepare store listings, screenshots, privacy disclosures and builds, and manage the review process through to launch.",
      },
      {
        q: "Can you build the backend and admin panel too?",
        a: "Yes. Most of our mobile projects include the APIs, admin dashboards and cloud infrastructure behind the app, so one team owns the whole product.",
      },
    ],
  },
  {
    slug: "ai-automation",
    icon: "ai",
    title: "AI & Automation",
    short:
      "Practical AI features, LLM integrations and workflow automation that save real time, with guardrails.",
    h1: "AI development and automation that's actually useful",
    metaTitle: "AI Development & Automation Services | LLM Integration",
    metaDescription:
      "Add AI to your product or operations: LLM integrations with Claude and OpenAI, AI assistants, document processing, on-device AI and workflow automation, built with privacy and guardrails.",
    intro:
      "We add AI where it creates real value (drafting, summarising, extracting, matching and automating), and we engineer the guardrails so it's safe, private and cost-controlled in production.",
    problems: [
      "Your team spends hours on repetitive writing, data entry or document review",
      "You want AI features in your product but worry about accuracy and privacy",
      "You've built an AI prototype that isn't reliable enough for production",
      "You want to automate workflows across tools without hiring more people",
    ],
    deliverables: [
      "AI opportunity assessment and ROI estimate",
      "LLM integration (Anthropic Claude, OpenAI, AWS Bedrock)",
      "Retrieval (RAG) over your documents and data",
      "On-device and privacy-preserving AI",
      "Structured extraction, validation and human review flows",
      "Workflow automation and integrations",
      "Cost tracking, evaluation and monitoring",
    ],
    stack: ["Anthropic Claude", "OpenAI", "AWS Bedrock", "Whisper", "Transformers.js", "Python", "Node.js", "Supabase", "PostgreSQL"],
    faqs: [
      {
        q: "How do you keep AI accurate and safe?",
        a: "We constrain what the model is allowed to do, validate its output on the server, keep a human in the loop for important decisions, and test with real examples before launch. For example, an AI can suggest options from a fixed catalogue while the system itself controls anything involving money or dates.",
      },
      {
        q: "Can AI run without sending our data to third parties?",
        a: "Often, yes. We've shipped on-device speech-to-text where audio never leaves the user's device, and we can use private cloud deployments such as AWS Bedrock in your own account.",
      },
      {
        q: "How much does an AI feature cost to run?",
        a: "It depends on volume and model choice. We estimate running costs upfront, track cost per call in production, and pick the smallest model that does the job well.",
      },
    ],
  },
  {
    slug: "software-architecture-consulting",
    icon: "architecture",
    title: "Architecture & Tech Consulting",
    short:
      "System design, cloud architecture, code audits and fractional CTO support to build on solid foundations.",
    h1: "Software architecture and technical consulting",
    metaTitle: "Software Architecture & Technical Consulting | Fractional CTO",
    metaDescription:
      "Software architecture consulting: system design, cloud architecture on AWS and GCP, technical due diligence, code audits, modernisation and fractional CTO services.",
    intro:
      "Experienced architects who've built and run real systems. We help you make the big technical decisions with confidence, and avoid the expensive ones you'll regret in two years.",
    problems: [
      "You're about to build something big and want the architecture right first",
      "Your system is slow, costly to run or keeps breaking",
      "You need an independent technical audit or due diligence",
      "You don't have a CTO, but need CTO-level decisions",
    ],
    deliverables: [
      "Architecture reviews and system design",
      "Cloud architecture and cost optimisation (AWS, GCP)",
      "Code and security audits with a prioritised plan",
      "Legacy modernisation and migration roadmaps",
      "Infrastructure as code and CI/CD setup",
      "Technical due diligence for investors and acquirers",
      "Fractional CTO and ongoing advisory",
    ],
    stack: ["AWS", "Google Cloud", "Cloudflare", "Terraform", "Serverless", "PostgreSQL", "Docker", "GitHub Actions", "Auth0", "Cognito"],
    faqs: [
      {
        q: "What is a fractional CTO?",
        a: "A senior technology leader who works with you part-time: setting technical direction, reviewing architecture, guiding your team and hiring, without the cost of a full-time executive.",
      },
      {
        q: "Do you only advise, or also build?",
        a: "Both. We can deliver a review and roadmap for your team to execute, or stay on to build and lead the work ourselves.",
      },
      {
        q: "How long does an architecture review take?",
        a: "Most reviews and audits take 1–3 weeks, depending on the size of the system, and end with a written report and a prioritised action plan.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "design",
    title: "Product & UX/UI Design",
    short:
      "User research, flows, interfaces and design systems that make complex products feel simple.",
    h1: "Product and UX/UI design for complex software",
    metaTitle: "UI/UX Design Services | Product Design for Web & Mobile Apps",
    metaDescription:
      "Product, UX and UI design for web and mobile apps: user flows, wireframes, prototypes, design systems and usability improvements, by designers who work alongside engineers.",
    intro:
      "We design products that are calm, clear and genuinely easy to use, working right next to engineering so every design is buildable, accessible and consistent.",
    problems: [
      "Users find your product confusing, and support tickets prove it",
      "You need to go from idea to a clickable prototype before building",
      "Your product looks inconsistent after years of quick additions",
      "You need a design system so your team can ship faster",
    ],
    deliverables: [
      "User research and journey mapping",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "Visual UI design for web and mobile",
      "Design systems and component libraries",
      "Accessibility (WCAG) reviews",
      "Usability testing and iteration",
    ],
    stack: ["Figma", "Design systems", "Prototyping", "Accessibility (WCAG)", "React", "Tailwind"],
    faqs: [
      {
        q: "Do you design and build, or just design?",
        a: "Both. Our designers work alongside our engineers, so designs are realistic and get built as intended. We also deliver design-only projects for teams with their own developers.",
      },
      {
        q: "What will we receive at the end?",
        a: "Organised design files, an interactive prototype, a documented component library and specs that developers can build from directly.",
      },
    ],
  },
  {
    slug: "engineering-leadership",
    icon: "team",
    title: "Engineering Leadership & Hiring",
    short:
      "Hiring frameworks, interview loops, mentoring and delivery processes that help teams ship with confidence.",
    h1: "Engineering leadership, hiring and delivery consulting",
    metaTitle: "Engineering Leadership, Tech Hiring & Delivery Consulting",
    metaDescription:
      "Build and scale engineering teams: technical hiring frameworks, interview loops, mentoring, agile delivery and process consulting from experienced engineering leaders.",
    intro:
      "Great products come from great teams. We help you hire the right engineers, grow the ones you have, and build delivery habits that keep work predictable.",
    problems: [
      "You're hiring engineers but struggle to assess them well",
      "Deadlines keep slipping and nobody's sure why",
      "Your team is growing and processes haven't kept up",
      "Junior engineers need senior guidance to level up",
    ],
    deliverables: [
      "Role definitions and career ladders",
      "Structured interview loops and take-home exercises",
      "Technical interviewing on your behalf",
      "Delivery and workflow audits",
      "Agile rituals, planning and estimation that work",
      "Code review and engineering standards",
      "Mentoring and technical coaching",
    ],
    stack: ["Interview loops", "Career ladders", "Agile & Scrum", "Kanban", "Code review", "CI/CD", "Engineering metrics"],
    faqs: [
      {
        q: "Can you interview candidates for us?",
        a: "Yes. We can design your interview process and run technical interviews on your behalf, giving you clear, structured feedback on every candidate.",
      },
      {
        q: "How do you improve delivery without slowing the team down?",
        a: "We start by observing how work actually flows, then make small, measurable changes (clearer scoping, smaller releases, better reviews) rather than imposing heavy process.",
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
