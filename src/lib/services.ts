import cinematics from "@/assets/concept-cinematics.jpg";
import digital from "@/assets/concept-digital.jpg";
import podcast from "@/assets/concept-podcast.jpg";
import events from "@/assets/concept-events.jpg";
import webApps from "@/assets/concept-web-apps.jpg";
import security from "@/assets/concept-software-security.jpg";
import ai from "@/assets/concept-ai-automation.jpg";

export type Accent = "cyan" | "amber" | "violet" | "emerald" | "ember";

export interface SubService {
  slug: string;
  name: string;
  summary: string;
  deliverables: string[];
}

export interface Division {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  accent: Accent;
  image: { src: string; width: number; height: number; alt: string };
  provides: string[];
  benefits: string[];
  process: { title: string; text: string }[];
  services: SubService[];
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Compact source: "Name | summary | deliverable; deliverable; deliverable" */
const parse = (rows: string[]): SubService[] =>
  rows.map((row) => {
    const [name = "", summary = "", deliverables = ""] = row.split("|").map((p) => p.trim());
    return {
      slug: slugify(name),
      name,
      summary,
      deliverables: deliverables.split(";").map((d) => d.trim()).filter(Boolean),
    };
  });

const IMG = (src: string, alt: string) => ({ src, width: 1536, height: 1024, alt });

export const DIVISIONS: Division[] = [
  {
    slug: "creative-media-production",
    name: "Creative Media & Production",
    tagline: "Films, imagery and visual effects crafted for the big screen and every feed.",
    intro:
      "From a single product photo to a full commercial with VFX, our production team plans, shoots and finishes visual stories that look premium and perform everywhere.",
    accent: "cyan",
    image: IMG(cinematics, "Cinema camera on a dolly at night — concept visual"),
    provides: [
      "Creative concept, scripting and storyboarding",
      "Professional crew, cinema cameras, lighting and drones",
      "Post-production: editing, VFX, motion graphics and colour",
      "Delivery in every format your channels need",
    ],
    benefits: [
      "A consistent, premium look across every touchpoint",
      "Content that stops the scroll and holds attention",
      "One accountable team from idea to final export",
      "Assets you can repurpose across ads, social and web",
    ],
    process: [
      { title: "Discover", text: "We clarify the goal, audience, message and budget." },
      { title: "Pre-production", text: "Concept, script, storyboard, locations, casting and schedule." },
      { title: "Production", text: "Shoot days with a professional crew and the right equipment." },
      { title: "Post-production", text: "Edit, VFX, sound, colour and review rounds." },
      { title: "Delivery", text: "Final masters and cut-downs for every platform." },
    ],
    services: parse([
      "Photography | Product, portrait, lifestyle and commercial photography with a cinematic finish. | Shot list & art direction; Retouched high-resolution images; Web and social exports",
      "Cinematography | Cinema-grade camera work, lighting and composition for any production. | Director of photography; Cinema camera & lighting package; Graded footage",
      "Drone Cinematography | Licensed aerial filming that adds scale and drama to your story. | Flight planning & permissions; 4K aerial footage; Edited aerial sequences",
      "Commercial Films | Advertising films that sell — for TV, digital and social placements. | Concept & script; Full production; Ad cut-downs (30s, 15s, 6s)",
      "Corporate Films | Company profiles, culture videos and leadership messages that build trust. | Interview planning; On-site filming; Branded final film",
      "Product Films | Close-up, detail-rich videos that show what makes your product special. | Studio or lifestyle shoot; Macro & motion shots; E-commerce and ad versions",
      "Music Videos | Bold, story-driven music videos from concept to final grade. | Treatment & storyboard; Performance and narrative shoot; Edited and graded video",
      "Short Films | Narrative short films with professional crew, cast and post-production. | Script development; Production management; Festival-ready master",
      "Documentary Production | Real stories told with research, interviews and cinematic visuals. | Research & interviews; Field production; Documentary edit",
      "Brand Films | Emotional films that capture who you are and why you matter. | Brand story workshop; Hero film; Social teasers",
      "VFX | Compositing, clean-ups and visual effects that make the impossible look real. | VFX breakdown; Compositing & tracking; Final VFX shots",
      "CGI | Photoreal computer-generated imagery for products, scenes and campaigns. | 3D modelling & texturing; Lighting & rendering; Still and animated CGI",
      "3D Visualization | Architectural, product and concept visualizations in stunning 3D. | 3D models; Photoreal renders; Walkthrough animations",
      "Motion Graphics | Animated graphics, explainers and kinetic typography for any screen. | Style frames; Animated sequences; Social-ready formats",
      "Video Editing | Story-first editing with pacing, sound and graphics that keep viewers watching. | Rough & final cuts; Sound mix; Platform versions",
      "Color Grading | Professional colour correction and grading for a distinctive cinematic look. | Look development; Shot-by-shot grade; Graded masters",
      "Green Screen Production | Studio chroma-key shoots composited into any environment. | Green screen studio; Keying & compositing; Final composited video",
      "Title Sequences | Memorable opening titles and credits for films, shows and events. | Title design; Animation; Delivery in all formats",
      "Audio Production | Voice-overs, music, sound design and mixing for films and campaigns. | Voice-over recording; Sound design & music; Final mix and master",
    ]),
  },
  {
    slug: "digital-marketing-brand-growth",
    name: "Digital Marketing & Brand Growth",
    tagline: "Strategy, content and campaigns that turn attention into revenue.",
    intro:
      "We combine creative content with data-driven marketing to grow your brand, your audience and your sales — with clear reporting on what's working.",
    accent: "amber",
    image: IMG(digital, "Laptop and phone showing a digital campaign — concept visual"),
    provides: [
      "Brand and marketing strategy built around your goals",
      "Content creation for social, search and ads",
      "Campaign setup, management and optimization",
      "Transparent analytics and monthly reporting",
    ],
    benefits: [
      "More qualified leads and measurable sales growth",
      "A stronger, more recognisable brand",
      "Lower cost per acquisition through ongoing optimization",
      "Clear visibility on every rupee you spend",
    ],
    process: [
      { title: "Audit", text: "We review your brand, channels, competitors and data." },
      { title: "Strategy", text: "Goals, audiences, channels, content plan and KPIs." },
      { title: "Launch", text: "Content production and campaign setup across channels." },
      { title: "Optimize", text: "Testing, tuning and scaling what performs best." },
      { title: "Report", text: "Clear reports and recommendations every month." },
    ],
    services: parse([
      "Social Media Management | End-to-end management of your social channels — planning, posting and community. | Content calendar; Posting & community management; Monthly insights report",
      "Social Media Marketing | Paid and organic social campaigns that grow reach and engagement. | Campaign strategy; Creative assets; Performance reporting",
      "Instagram Marketing | Reels, carousels, stories and creator collaborations built for Instagram growth. | Instagram strategy; Reels & post production; Growth tracking",
      "YouTube Marketing | Channel strategy, video SEO and YouTube Ads to grow subscribers and views. | Channel audit & optimization; Video SEO; YouTube Ads management",
      "SEO | Technical, on-page and content SEO that earns lasting organic traffic. | SEO audit; On-page & technical fixes; Content and link plan",
      "Local SEO | Rank higher in local searches and Google Maps where your customers are. | Google Business Profile optimization; Local citations; Review strategy",
      "Google Ads | Search, display, shopping and video campaigns built for return on ad spend. | Account setup & keyword research; Ad creation; Bid and budget optimization",
      "Meta Ads | Facebook and Instagram ad campaigns with sharp targeting and strong creative. | Audience strategy; Ad creatives; Campaign optimization",
      "Performance Marketing | Full-funnel, ROI-focused campaigns across paid channels. | Funnel strategy; Multi-channel campaigns; ROAS reporting",
      "Brand Strategy | Positioning, messaging and brand architecture that set you apart. | Brand workshop; Positioning & messaging; Brand strategy document",
      "Brand Identity | Visual identity systems — logo usage, colour, typography and guidelines. | Identity design; Brand guidelines; Ready-to-use brand assets",
      "Content Marketing | Content strategy that educates, builds trust and drives demand. | Content strategy; Articles, guides & videos; Distribution plan",
      "Content Creation | Photos, videos, graphics and copy produced for every platform. | Monthly content production; Platform-specific formats; Copywriting",
      "Influencer Marketing | Creator partnerships that put your brand in front of the right audiences. | Influencer shortlisting; Campaign management; Results reporting",
      "Lead Generation | Campaigns and funnels designed to deliver qualified enquiries. | Lead funnel & landing pages; Lead campaigns; Lead quality tracking",
      "Email Marketing | Newsletters and email campaigns that nurture leads and drive repeat sales. | Email strategy; Template design; Campaign sends & reporting",
      "Marketing Automation | Automated journeys that follow up, nurture and convert at scale. | Journey mapping; Automation setup; Performance monitoring",
      "Conversion Optimization | Testing and UX improvements that turn more visitors into customers. | Conversion audit; A/B tests; Implementation roadmap",
      "Campaign Management | Planning, launch and day-to-day management of integrated campaigns. | Campaign plan; Cross-channel execution; Campaign reports",
      "Marketing Analytics | Tracking, dashboards and insights that show what really drives growth. | Analytics & tracking setup; Live dashboards; Insight reports",
      "Online Reputation Management | Monitor, protect and improve how your brand is seen online. | Brand monitoring; Review management; Reputation response plan",
    ]),
  },
  {
    slug: "podcast-production",
    name: "Podcast Production",
    tagline: "From first idea to published episodes — audio and video podcasts done properly.",
    intro:
      "We plan, record, edit, brand and promote podcasts that sound professional, look great on video and grow a loyal audience.",
    accent: "violet",
    image: IMG(podcast, "Podcast studio with two microphones — concept visual"),
    provides: [
      "Show strategy, format and episode planning",
      "Studio or on-location audio and multi-camera video recording",
      "Editing, sound design, branding and graphics",
      "Publishing, distribution and promotion",
    ],
    benefits: [
      "A professional show without the production headache",
      "Consistent publishing that builds a loyal audience",
      "Every episode repurposed into shorts and reels",
      "Authority and trust in your industry",
    ],
    process: [
      { title: "Plan", text: "Show concept, format, branding and episode roadmap." },
      { title: "Record", text: "Audio and multi-camera video sessions with guests." },
      { title: "Edit", text: "Clean edit, sound enhancement, graphics and intros." },
      { title: "Publish", text: "Upload and distribute to every major platform." },
      { title: "Promote", text: "Shorts, reels and campaigns to grow listeners." },
    ],
    services: parse([
      "Podcast Strategy | Define your show's concept, audience, format and growth plan. | Show concept & positioning; Format and episode plan; Launch strategy",
      "Podcast Studio Setup | Design and set up a professional podcast studio at your office or home. | Equipment recommendations; Acoustic setup; Studio installation",
      "Audio Recording | Broadcast-quality audio recording in studio or on location. | Professional microphones; Recording engineer; Clean multitrack audio",
      "Video Podcast Production | Full video podcasts with lighting, set design and direction. | Set & lighting design; Video recording; Edited video episode",
      "Multi-Camera Recording | Multi-angle recording that makes conversations dynamic to watch. | 3+ camera setup; Synced recordings; Multicam edit",
      "Podcast Editing | Tight, clean edits that remove mistakes and keep episodes engaging. | Audio & video edit; Filler and noise removal; Final episode files",
      "Audio Enhancement | Noise reduction, levelling and mastering for crisp, consistent sound. | Noise & echo cleanup; Loudness mastering; Broadcast-ready audio",
      "Sound Design | Music beds, transitions and sound effects that give your show character. | Music selection; Stingers & transitions; Mixed soundscape",
      "Intro & Outro Creation | Signature intros and outros with voice, music and animation. | Script & voice-over; Music and sound; Animated intro/outro",
      "Podcast Branding | Show name support, cover art, colours and on-screen graphics. | Cover art; Visual identity; Lower thirds & templates",
      "Shorts & Reels Creation | Turn every episode into scroll-stopping short-form clips. | Clip selection; Captioned vertical edits; Platform-ready exports",
      "YouTube Publishing | Optimized uploads with titles, thumbnails, chapters and descriptions. | Thumbnail design; SEO titles & descriptions; Scheduled publishing",
      "Podcast Distribution | Publish to Spotify, Apple Podcasts, YouTube and more. | Hosting setup; Platform submissions; RSS management",
      "Guest Coordination | Guest research, outreach, scheduling and briefing handled for you. | Guest shortlist; Outreach & scheduling; Guest briefs",
      "Podcast Promotion | Campaigns that grow downloads, views and subscribers. | Promotion plan; Social & paid promotion; Growth reports",
    ]),
  },
  {
    slug: "event-management-experiences",
    name: "Event Management & Experiences",
    tagline: "Events, launches and live experiences people remember and share.",
    intro:
      "We plan, design, produce and capture events of every scale — handling logistics, stage, visuals and promotion so you can focus on your guests.",
    accent: "emerald",
    image: IMG(events, "Event stage with dramatic lighting — concept visual"),
    provides: [
      "End-to-end event planning and vendor management",
      "Stage design, LED, lighting and sound production",
      "Event branding, promotion and guest experience",
      "Photography and cinematography coverage",
    ],
    benefits: [
      "Stress-free events delivered on time and on budget",
      "Memorable experiences that reflect your brand",
      "Content captured for marketing long after the event",
      "One partner for planning, production and promotion",
    ],
    process: [
      { title: "Brief", text: "Objectives, audience, venue, date and budget." },
      { title: "Plan", text: "Concept, run-of-show, vendors and logistics." },
      { title: "Design", text: "Stage, branding, visuals and guest journey." },
      { title: "Execute", text: "On-ground management and live production." },
      { title: "Wrap", text: "Photo and video delivery plus event report." },
    ],
    services: parse([
      "Corporate Events | Annual meets, offsites, town halls and celebrations managed end to end. | Event concept & planning; Venue and vendor management; On-site coordination",
      "Product Launches | High-impact launches that build buzz and media attention. | Launch concept; Stage & reveal production; Press and social coverage",
      "Brand Activations | Interactive experiences that let people engage with your brand. | Activation concept; Fabrication & setup; Staffing and engagement tracking",
      "Conferences | Professional conferences with seamless agenda, speakers and production. | Agenda & speaker management; Registration support; AV production",
      "College Events | Fests, cultural nights and campus events with energy and polish. | Event planning; Stage & sound; Artist and sponsor coordination",
      "Workshops | Well-organised workshops and training sessions, in person or online. | Logistics & materials; Facilitation support; Recording and follow-up",
      "Award Ceremonies | Elegant award nights with stage design, show flow and coverage. | Show flow & scripting; Stage and trophy production; Photo & video coverage",
      "Exhibitions | Exhibition stalls and pavilions that attract and convert visitors. | Stall design; Fabrication & setup; Visitor engagement",
      "Live Entertainment | Artists, performers and entertainment programming for any audience. | Artist sourcing; Technical rider management; Show production",
      "Influencer Events | Curated events and meetups with creators to amplify your brand. | Influencer guest list; Experience design; Content amplification",
      "Hybrid Events | Events that connect in-person and online audiences seamlessly. | Live streaming setup; Virtual engagement tools; Hybrid production crew",
      "Event Planning | Complete planning — timelines, budgets, vendors and logistics. | Event plan & budget; Vendor contracts; Run-of-show",
      "Stage Design | Stage concepts and builds that make every moment look spectacular. | 3D stage concept; Fabrication; Stage installation",
      "LED & Visual Production | LED walls, projection, lighting and show visuals. | LED & lighting design; Show visuals; Technical operation",
      "Event Branding | Consistent branding across invites, signage, stage and digital. | Event identity; Signage & collateral; Digital assets",
      "Event Photography | Professional photography capturing every key moment. | Event photographer(s); Edited photo gallery; Same-day highlights",
      "Event Cinematography | Cinematic event films, highlights and live coverage. | Multi-camera coverage; Highlight film; Social cut-downs",
      "Event Promotion | Campaigns that drive registrations, footfall and buzz. | Promotion strategy; Social & paid campaigns; Registration tracking",
    ]),
  },
  {
    slug: "website-app-development",
    name: "Website & App Development",
    tagline: "Fast, beautiful websites and apps built to grow your business.",
    intro:
      "We design and build websites, web applications and mobile apps that look premium, load fast and are easy for your team to manage.",
    accent: "ember",
    image: IMG(webApps, "Website and mobile app designs on screens — concept visual"),
    provides: [
      "UX research, wireframes and premium UI design",
      "Responsive websites and web applications",
      "Native and cross-platform mobile apps",
      "Launch, hosting guidance and ongoing support",
    ],
    benefits: [
      "A professional digital presence that builds trust",
      "Faster load times and better search rankings",
      "Systems that save your team time",
      "Technology that scales as your business grows",
    ],
    process: [
      { title: "Discover", text: "Goals, users, features and technical requirements." },
      { title: "Design", text: "Wireframes, UI design and interactive prototypes." },
      { title: "Build", text: "Development in sprints with regular demos." },
      { title: "Test", text: "Quality, speed, security and device testing." },
      { title: "Launch", text: "Go-live, training and ongoing support." },
    ],
    services: parse([
      "Business Websites | Professional websites that present your business and generate enquiries. | Custom design; Responsive development; Contact & enquiry forms",
      "Corporate Websites | Multi-page corporate sites with strong brand presence and structure. | Information architecture; Premium UI; CMS integration",
      "Startup Websites | Launch-ready websites that help startups win customers and investors. | Messaging & layout; Fast build; Analytics setup",
      "Portfolio Websites | Visual portfolios that showcase your work beautifully. | Gallery & project pages; Custom design; Easy updates",
      "Landing Pages | High-converting landing pages for campaigns and launches. | Conversion-focused design; A/B-ready build; Lead capture",
      "E-commerce Websites | Online stores with secure checkout, payments and inventory. | Store design; Payment integration; Product management",
      "Booking Websites | Websites with appointment, table or service booking built in. | Booking system; Calendar & notifications; Payment options",
      "Custom Web Applications | Tailor-made web apps that run your unique business processes. | Requirements & architecture; Custom development; User roles & security",
      "CMS Websites | Websites your team can update easily without developers. | CMS setup; Editable templates; Team training",
      "Website Redesign | Modernise an outdated website for better looks, speed and results. | Website audit; Redesign; Content migration",
      "Android Applications | Native Android apps built for performance and Play Store success. | Android development; Play Store publishing; Analytics",
      "iOS Applications | Polished iPhone and iPad apps that meet App Store standards. | iOS development; App Store publishing; Crash monitoring",
      "Cross-Platform Applications | One codebase for Android and iOS — faster to build and maintain. | Cross-platform development; Shared UI; Both store releases",
      "Business Applications | Internal apps that streamline operations, sales and teams. | Workflow mapping; App development; Integrations",
      "Customer Applications | Customer-facing apps for ordering, loyalty, bookings and service. | Customer UX; App development; Push notifications",
      "Admin Dashboards | Dashboards to manage data, users, orders and reports in one place. | Dashboard design; Data visualisation; Role-based access",
      "MVP Development | Launch a minimum viable product quickly to validate your idea. | Scope definition; Rapid build; Launch & feedback loop",
      "UI/UX Design | Research-led interface design that is beautiful and easy to use. | User research; Wireframes & prototypes; Design system",
    ]),
  },
  {
    slug: "software-technology-cybersecurity",
    name: "Software, Technology & Cybersecurity",
    tagline: "Reliable software, secure systems and support you can count on.",
    intro:
      "We build custom software, connect your systems, move you to the cloud and keep your websites and applications secure and running smoothly.",
    accent: "cyan",
    image: IMG(security, "Server room with security shield — concept visual"),
    provides: [
      "Custom software and integration development",
      "Cloud architecture, deployment and databases",
      "Security assessments, audits and consulting",
      "Ongoing maintenance and technical support",
    ],
    benefits: [
      "Systems built around how your business works",
      "Reduced risk of breaches and downtime",
      "Scalable, cost-efficient cloud infrastructure",
      "Peace of mind with dependable support",
    ],
    process: [
      { title: "Assess", text: "Current systems, risks and requirements." },
      { title: "Architect", text: "Solution design, security and roadmap." },
      { title: "Implement", text: "Development, integration and deployment." },
      { title: "Secure", text: "Testing, hardening and audit." },
      { title: "Support", text: "Monitoring, maintenance and help desk." },
    ],
    services: parse([
      "Custom Software Development | Software built specifically for your workflows and goals. | Requirements analysis; Custom development; Documentation & handover",
      "API Integrations | Connect your apps, payment gateways, CRMs and third-party tools. | Integration design; API development; Testing & monitoring",
      "Database Development | Well-structured, secure and fast databases for your applications. | Data modelling; Database setup; Performance tuning",
      "Cloud Solutions & Deployment | Cloud architecture, migration and deployment that scales with you. | Cloud architecture; Migration & deployment; Cost optimization",
      "Website Security Assessment | Find and fix vulnerabilities on your website before attackers do. | Vulnerability scan; Risk report; Fix recommendations",
      "Cybersecurity Consulting | Expert guidance on policies, tools and practices to protect your business. | Security posture review; Policy recommendations; Team awareness guidance",
      "Application Security | Secure coding, testing and hardening for web and mobile apps. | Security code review; Penetration testing; Hardening fixes",
      "Security Audits | Structured audits of your systems, access and data protection. | Audit plan; Detailed findings; Remediation roadmap",
      "Website Maintenance | Updates, backups, monitoring and fixes to keep your site healthy. | Regular updates; Backups & uptime monitoring; Monthly report",
      "Application Maintenance | Bug fixes, updates and improvements for your apps over time. | Bug fixing; OS & library updates; Performance improvements",
      "Technical Support | Responsive support when your team needs technical help. | Support channel; Issue resolution; Support reports",
    ]),
  },
  {
    slug: "ai-business-automation",
    name: "AI & Business Automation",
    tagline: "AI and automation that save time, cut costs and never miss a lead.",
    intro:
      "We design and deploy AI assistants and automated workflows that handle repetitive work, respond to customers instantly and keep your business moving 24/7.",
    accent: "emerald",
    image: IMG(ai, "Abstract AI automation network — concept visual"),
    provides: [
      "Automation opportunity mapping for your business",
      "AI chatbots, agents and calling systems",
      "Workflow, CRM and WhatsApp automations",
      "Integration, training and ongoing optimization",
    ],
    benefits: [
      "Hours saved every week on repetitive tasks",
      "Instant responses to customers, day and night",
      "Fewer errors and more consistent processes",
      "More leads followed up and converted",
    ],
    process: [
      { title: "Map", text: "Identify processes that AI and automation can improve." },
      { title: "Design", text: "Plan flows, data, tools and success metrics." },
      { title: "Build", text: "Develop, connect and test the automation." },
      { title: "Launch", text: "Go live with training and monitoring." },
      { title: "Improve", text: "Measure results and refine continuously." },
    ],
    services: parse([
      "AI Chatbots | Smart chatbots for your website and apps that answer questions and capture leads. | Chatbot design & training; Website integration; Conversation analytics",
      "AI Agents | AI agents that complete multi-step tasks across your tools. | Agent design; Tool integrations; Monitoring & guardrails",
      "WhatsApp Automation | Automated WhatsApp replies, notifications, catalogues and follow-ups. | WhatsApp Business setup; Automated flows; Broadcast & reminders",
      "CRM Automation | Automate lead capture, assignment, follow-ups and pipeline updates. | CRM setup & cleanup; Automated pipelines; Reporting",
      "Workflow Automation | Connect your tools and remove manual steps from daily operations. | Process mapping; Automated workflows; Error alerts",
      "AI Calling Systems | AI voice agents that make and answer calls for bookings, reminders and support. | Voice agent setup; Call scripts; Call logs & analytics",
      "Lead Qualification | Automatically score and qualify leads so your team focuses on the best ones. | Qualification criteria; Automated scoring; Sales handoff",
      "Customer Support Automation | Resolve common customer queries instantly across channels. | Knowledge base setup; Automated responses; Human handoff rules",
      "Business Process Automation | End-to-end automation of approvals, documents, billing and more. | Process redesign; Automation build; Performance tracking",
      "AI Integrations | Add AI features — summaries, search, content and insights — to your existing systems. | Use-case design; AI integration; Testing & tuning",
      "Automation Consulting | Expert advice on where AI and automation will pay off most. | Automation audit; Opportunity roadmap; ROI estimates",
    ]),
  },
];

export const findDivision = (slug: string) => DIVISIONS.find((d) => d.slug === slug);

export const findService = (divisionSlug: string, serviceSlug: string) => {
  const division = findDivision(divisionSlug);
  const service = division?.services.find((s) => s.slug === serviceSlug);
  return division && service ? { division, service } : undefined;
};

/** Resolve an enquiry `service` value (a division or subservice slug) to its display label. */
export const serviceLabel = (slug: string | undefined): string | undefined => {
  if (!slug) return undefined;
  for (const d of DIVISIONS) {
    if (d.slug === slug) return d.name;
    const s = d.services.find((x) => x.slug === slug);
    if (s) return `${s.name} — ${d.name}`;
  }
  return undefined;
};

export const relatedServices = (division: Division, current: SubService, count = 4) => {
  const i = division.services.findIndex((s) => s.slug === current.slug);
  const out: SubService[] = [];
  for (let k = 1; out.length < Math.min(count, division.services.length - 1); k++) {
    const next = division.services[(i + k) % division.services.length];
    if (next) out.push(next);
  }
  return out;
};

export const ACCENT_TEXT: Record<Accent, string> = {
  cyan: "text-cyan",
  amber: "text-amber",
  violet: "text-violet",
  emerald: "text-emerald",
  ember: "text-ember",
};
export const ACCENT_BG: Record<Accent, string> = {
  cyan: "bg-cyan",
  amber: "bg-amber",
  violet: "bg-violet",
  emerald: "bg-emerald",
  ember: "bg-ember",
};
