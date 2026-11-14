// Copy adapted from manastej.com (captured Oct 2026), with English translations.
// Gaps are marked TODO.

export const nav = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#organizations", label: "For HR" },
  { href: "#privacy", label: "Privacy" },
  { href: "#technology", label: "Technology" },
  { href: "#audience", label: "Who It's For" },
  { href: "#team", label: "Team" },
];

export const contactEmail = "info@manastej.com";
export const contactPhone = "9903812807";
export const contactPhoneHref = "tel:+919903812807";

export const hero = {
  eyebrow: "Manastej — Where Science Meets the Soul",
  title: "Mental health support people actually use — for you, your therapist and your team.",
  sub: "Feeling stretched thin? Help shouldn't be hard to find or scary to ask for",
  body: "2-minute daily check-ins, someone to talk to, and real therapists — plus team-level burnout insights for employers that never show anyone's personal data.",
  quote: "Mental health is not a destination, but a process. Manastej gives you the compass.",
  tagline: "When no one else listens, we do.",
  pillars: ["Feel better, daily", "Talk to a therapist", "Someone to listen", "Healthier teams"],
  steps: ["Check in for 2 minutes", "See what drains you", "Get help when you need it", "Fix the cause, not the symptom"],
  ctaPrimary: "See how it works",
  ctaSecondary: "Book a demo for your team",
};

export const problem = {
  label: "The Problem",
  title: "Your best people are running on empty",
  body: "Priorities change before your morning coffee. Meetings fill the afternoon. Messages keep coming late at night. Our minds weren't built for this pace — and the help that exists is hard to reach.",
  // Figures as published on manastej.com. TODO(source): add citations (e.g. WHO) before launch.
  stats: [
    { label: "People affected worldwide", value: "1 in 7", note: "live with a mental health condition" },
    { label: "Lost to the economy yearly", value: "$1T", note: "in lost productivity" },
    { label: "Treated in low-income countries", value: "<10%", note: "receive any care at all" },
    { label: "Mental health workers per 100k", value: "13", note: "even in high-income countries" },
  ],
  failuresLabel: "Why today's help isn't working",
  failures: [
    { who: "For people", title: "The 2 AM gap", body: "Stress doesn't keep office hours. When anxiety hits late at night or before a big day, waiting weeks for an expensive therapy slot isn't an option." },
    { who: "For therapists", title: "Buried in paperwork", body: "Therapists spend hours on notes and scheduling — and have no idea how a client is doing in the long week between sessions." },
    { who: "For employers", title: "Wellness nobody uses", body: "Staff skip company wellness apps because they fear HR is watching. Free webinars don't fix overload, and burnout shows up only when people resign." },
  ],
};

export const about = {
  label: "01 / What is Manastej?",
  title: "One place for everyday mental health — for people, therapists and teams",
  body: "Manastej (Sanskrit: Manas \u201cmind\u201d + Tej \u201cradiance\u201d) puts everyday self-care, real therapy and a healthier workplace in one simple, private app.",
  audiences: [
    { k: "For You", title: "Feel better in 2 minutes a day", body: "Quick daily check-ins show what drains your energy and what restores it — so you can catch stress early, before it becomes burnout." },
    { k: "For Therapists", title: "Less paperwork, more care", body: "See how your client slept, felt and coped between sessions, and keep notes and follow-ups in one place. AI helps; you make every decision." },
    { k: "For Employers", title: "Fix workloads, not just symptoms", body: "See team-level stress trends and what's causing them — never any one person's data — so you can act before good people burn out." },
  ],
  disclaimer: "Manastej is in active development. Features described represent the product vision, not a claim that every feature is live or clinically validated.",
};

export const features = {
  label: "02 / What You Can Do",
  title: "What you can do with Manastej",
  body: "Small, simple tools for everyday life — and a clear path to a professional when you need one.",
  items: [
    { tag: "01 / Check in", title: "A 2-minute daily check-in", body: "Rate your mood, energy, sleep, stress and focus. Over time you see patterns — what wears you down and what helps.", note: "A self-reflection tool, not a diagnosis." },
    { tag: "02 / Therapy", title: "Talk to a real therapist", body: "Find a verified therapist and meet over video or voice inside the app. Your therapist can use an optional AI assistant for notes.", note: "In-app sessions and AI notes are being tested before launch." },
    { tag: "03 / Reset", title: "Quick resets for a stressed mind", body: "Short breathing and grounding exercises when things feel like too much. We're also testing a stress check that uses only your phone's camera — no wearables.", note: "The camera stress check is experimental, opt-in, and needs validation." },
    { tag: "04 / Express", title: "Mind Canvas — draw how you feel", body: "Sometimes it's easier to draw than to talk. Simple drawing prompts help you reflect on what's going on inside.", note: "AI reflections are exploratory, not clinical assessments." },
    { tag: "05 / Connect", title: "Someone to talk to", body: "Feeling alone at midnight? Talk to a trained, caring listener without judgment. When no one else listens, we will.", note: "Not an emergency service. In a crisis, contact local emergency services." },
    { tag: "06 / Grow", title: "Watch yourself grow", body: "An optional character that grows as you keep showing up for yourself — a gentle way to stay consistent.", note: "A motivation feature, not a clinical score." },
  ],
};

export const orgs = {
  label: "03 / For HR & Leaders",
  title: "Fix workloads, not just symptoms",
  subtitle: "without watching anyone",
  body: "Most wellness perks go unused because people fear being tracked. Manastej shows leaders how teams are doing as a group — and why — while keeping every individual private.",
  items: [
    { tag: "01 / Team Pulse", title: "Spot burnout early", body: "See team-level trends in mood, energy and workload over time, so you can step in before stress turns into resignations." },
    { tag: "02 / Root Causes", title: "Find out what's causing the stress", body: "Is it shifting priorities, job worries, too many meetings, or unclear roles? Anonymous check-ins point you to the real cause." },
    { tag: "03 / Privacy Guardrails", title: "No one can be singled out", body: "Results only appear for groups of 5 or more, so no individual can be identified." },
    { tag: "04 / Pulse Surveys", title: "Short, regular check-ins", body: "A quick weekly pulse plus a deeper check every quarter — enough to see what's changing." },
  ],
  causes: ["Shifting priorities", "Job uncertainty", "Too much at once", "Unclear roles"],
};

export const privacy = {
  label: "04 / Privacy & Security",
  title: "Privacy is non-negotiable.",
  body: "What you share about your mind is yours. Your employer never sees your personal check-ins, and people — not AI — make the important calls.",
  items: [
    { title: "Your data stays yours", body: "Each role sees only what it needs. Your personal check-ins are never shown to your employer." },
    { title: "Employers see groups, not people", body: "Team data is combined and anonymised first. Groups smaller than five are hidden." },
    { title: "Humans stay in charge", body: "AI can suggest, but every important recommendation is reviewed by a person." },
    { title: "Personal details protected", body: "Automatic checks help catch personal information shared by mistake." },
  ],
};

export const tech = {
  label: "05 / Technology",
  title: "Science-led. Human-centered.",
  body: "Careful AI, reliable infrastructure and strong privacy practices — built to support people, not replace them.",
  items: [
    { title: "Helpful AI", body: "AI that supports people, with humans in charge" },
    { title: "Stress sensing", body: "Experimental camera-based check; needs validation" },
    { title: "Always available", body: "Cloud infrastructure built to scale" },
    { title: "Data security", body: "Encryption and role-based access" },
    { title: "Clinical standards", body: "Designed around healthcare data standards" },
  ],
};

export const audience = {
  label: "06 / Who It's For",
  title: "Built for people, wherever they are.",
  body: "Whether you're struggling yourself, caring for clients, or leading a team — Manastej meets you where you are.",
  items: [
    { title: "Individuals", body: "Instead of waiting until you hit a wall, check in daily, get support late at night, and reach a therapist when you need one." },
    { title: "Therapists", body: "Instead of flying blind between visits, see how clients are really doing and spend less time on admin." },
    { title: "Organizations", body: "Instead of paying for perks nobody uses, see what's really driving burnout and fix it — privately." },
  ],
};

export const join = {
  label: "07 / Get Started",
  title: "Let's make support easy to reach.",
  body: "Want peace of mind for yourself, an easier practice, or a less burned-out team? Talk to us — Manastej is in development, and early partners help shape it.",
  cta: "Book a demo",
  ctaSecondary: "Join early access",
  closing: "The radiance of the mind.",
};

export const team = {
  label: "Our Team",
  title: "The people behind Manastej",
  members: [
    {
      name: "Daliya Chakraborty",
      role: "Founder & CEO",
      photo: "/team/daliya.webp",
      bio: "Before founding Manastej, Daliya Chakraborty spent five years on the frontlines of Indian education and institutional systems - where she witnessed firsthand how traditional organizations fail the human mind. Surrounded by silent burnout, lagging indicators, and one-size-fits-all interventions, she realized that the mental wellness crisis wasn’t just a clinical problem; it was an infrastructure failure.\n\nRefusing to wait for a legacy industry to modernize, Daliya became a self-taught systems architect. Leveraging Python, Firebase, and Gemini AI, she single-handedly engineered Manastej’s foundational stack - from its proprietary Cognitive Flow Tracker to its clinical access architecture and billing engine. By approaching mental health through the lens of a geographer, educator, and data technologist - rather than traditional clinical orthodoxy - she designed what institutions were missing: a shift from reactive crisis management to proactive, predictive care.\n\nThat relentless bias for action defines her career. A Republic Day NCC representative, Governor’s Silver Medalist, and author of How I Built the Hiring Velocity Method™, Daliya combines military-grade discipline with deep human empathy - building the next generation of behavioural infrastructure where every mind is seen, supported, and valued.",
    },
    {
      name: "Haresh Sainaath",
      role: "Technical Lead",
      photo: "/team/haresh.webp",
      bio: "In an industry obsessed with quick patches, Haresh Sainaath operates on a foundational truth: hacks don’t scale; systems do. Bridging AI & ML studies at Sri Krishna College of Technology with relentless production execution, he engineers infrastructure where performance is the ultimate user experience. Moving effortlessly across Rust, Tauri, Next.js, Python, and LangGraph, he pairs telemetry-first backends with 60fps motion-led interfaces. From shipping Nexa Ride to the Apple App Store at Dendo to building voice-driven industrial automation at Tenneco, his bias for action is unmistakable. With 27 architected builds - including real-time AI flood rescue engines (ReliefStream) and hybrid RAG pipelines - Haresh doesn’t just write code. Blending systems-level precision with AI innovation, he builds resilient digital infrastructure designed to perform when it matters most.",
    },
    {
      name: "Ashwath Srinivasan",
      role: "AI & ML Lead",
      photo: "/team/ashwath.webp",
      bio: "Building intelligence beyond algorithms, Ashwath Srinivasan specialises in Agentic AI, LLM fine-tuning, and advanced RAG architectures. With hands-on experience at Hexaware Technologies and expertise in LangGraph, Python, and neural networks, he transforms complex AI concepts into reliable, measurable solutions. From improving model accuracy to engineering intelligent automation, he brings research-driven innovation to the forefront.\n\nAt Manastej, he drives the intelligence powering human-centred innovation.",
    },
    {
      name: "Yash Bannur",
      role: "Full-Stack Development Lead",
      photo: "/team/yash.webp",
      bio: "Yash Bannur transforms ideas into functional digital experiences through modern full-stack engineering. With expertise in Java, Spring Boot, React, JavaScript, and SQL, he builds responsive applications, robust APIs, and seamless backend systems. Driven by problem-solving and product innovation, he bridges technology and usability to create solutions that make a difference.\n\nAt Manastej, he strengthens the digital foundation, turning complex ideas into seamless user experiences.",
    },
  ],
};
