import Navbar from "../Navbar";
import Footer from "../Footer";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — all venture content lives here; edit this section, not the JSX below
// ─────────────────────────────────────────────────────────────────────────────

const featuredVenture = {
  name: "Paperboy",
  tags: ["Audio", "Productivity"],
  description:
    "A mobile app that transforms your daily newsletters into a single, personalized audio briefing you can listen to on the go.",
  stats: ["In Development"],
  founders: ["Sarah Chen", "David Kim"],
  thumbnail: "/placeholder-phone.png",
  logo: "/placeholder-logo.png",
  ctaLabel: "Learn More",
  ctaHref: "/ventures/paperboy",
};

const currentVentures = [
  {
    name: "Orbit",
    tags: ["Campus", "Matching"],
    description:
      "A centralized digital platform to modernize lost and found. Users can upload lost or found items with location data or drop them at the nearest partnered hub, and a matching algorithm connects them to the most likely results, eliminating the need to search blindly across campus.",
    founders: ["Aisha Patel", "Jordan Lee"],
    stage: "Web Platform",
    thumbnail: "/placeholder-web.png",
    logo: "/placeholder-logo.png",
    imageRight: true,
    ctaLabel: "View Venture",
    ctaHref: "/ventures/orbit",
  },
  {
    name: "Pantri",
    tags: ["Food", "Budgeting"],
    description:
      "A meal-generation app that creates recipes from commonly-used ingredients students already have to help them reduce food waste and stay within a recurring grocery budget.",
    founders: ["Emma Rodriguez", "Tyler Chen"],
    stage: "Mobile App",
    thumbnail: "/placeholder-phone.png",
    logo: "/placeholder-logo.png",
    imageRight: false,
    ctaLabel: "View Venture",
    ctaHref: "/ventures/pantri",
  },
  {
    name: "KDC Management",
    tags: ["Operations", "Scheduling"],
    description:
      "A part-time worker management system to help managers in workflow management and ease of scheduling to increase productivity and employee retention.",
    founders: ["Alex Johnson", "Maria Garcia"],
    stage: "Management Platform",
    thumbnail: "/placeholder-web.png",
    logo: "/placeholder-logo.png",
    imageRight: true,
    ctaLabel: "View Venture",
    ctaHref: "/ventures/kdc-management",
  },
];

const pastVentures = [
  {
    name: "ClassMate",
    tags: ["EdTech"],
    description:
      "Note-sharing platform for university students. Acquired by a larger EdTech company in 2024. Served over 5,000 students across three universities.",
    status: "Acquired",
    statusStyle: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
    // ctaLabel: "Visit",
    // ctaHref: "https://classmate.com",
  },
  {
    name: "SkillSwap",
    tags: ["Marketplace"],
    description:
      "Marketplace for students to trade skills and services. Pivoted to professional networking and absorbed into LinkedIn's campus program.",
    status: "Pivoted",
    statusStyle: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
    // ctaLabel: "Visit",
    // ctaHref: "https://skillswap.com",
  },
  {
    name: "LocalEats",
    tags: ["Foodtech"],
    description:
      "Restaurant discovery app focused on student budgets and dietary preferences. Successfully operated for two years before founders graduated.",
    status: "Alumni",
    statusStyle: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
  },
];

// Edit names, swap src paths, or add href to link a logo to a company page
const companyLogos = [
  { name: "Meta",      src: "/placeholder-company.png" },
  { name: "Tesla",     src: "/placeholder-company.png" },
  { name: "BCG",       src: "/placeholder-company.png" },
  { name: "Microsoft", src: "/placeholder-company.png" },
  { name: "Deloitte",  src: "/placeholder-company.png" },
  { name: "Shopify",   src: "/placeholder-company.png" },
  { name: "Google",    src: "/placeholder-company.png" },
  { name: "Amazon",    src: "/placeholder-company.png" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRESENTATIONAL COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function Tag({ label }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
      {label}
    </span>
  );
}

function FounderAvatars({ founders, size = "sm", label = "" }) {
  const dim = size === "md" ? "h-8 w-8" : "h-7 w-7";
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {founders.map((name, i) => (
          <img
            key={i}
            src="/placeholder-portrait.png"
            alt={name}
            className={`${dim} rounded-full border border-white/20 object-cover`}
          />
        ))}
      </div>
      <p className="text-sm text-white/40">
        {label ? `${label} ${founders.join(", ")}` : founders.join(", ")}
      </p>
    </div>
  );
}

function PastVentureCard({ venture }) {
  const inner = (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-white/5">
        <img
          src={venture.thumbnail}
          alt={venture.name}
          className="h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
        />
        <span className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold ${venture.statusStyle}`}>
          {venture.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={venture.logo}
            alt={`${venture.name} logo`}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold">{venture.name}</h3>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {venture.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/[0.07] px-2.5 py-0.5 text-xs text-white/55">
              {t}
            </span>
          ))}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-white/50">
          {venture.description}
        </p>

        {venture.ctaHref && (
          <span className="mt-4 text-xs font-medium text-white/40 transition-colors group-hover:text-white/65">
            {venture.ctaLabel ?? "Visit"} →
          </span>
        )}
      </div>
    </div>
  );

  if (venture.ctaHref) {
    return (
      <a href={venture.ctaHref} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

function MarqueeLogos({ logos }) {
  // Triple the list so the seam never shows during the scroll cycle
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="flex animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
        {repeated.map((company, i) => {
          const logo = (
            <img
              src={company.src}
              alt={company.name}
              className="h-10 w-auto object-contain"
            />
          );
          return (
            <div
              key={i}
              className="flex-shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-85 hover:grayscale-0"
            >
              {company.href ? (
                <a href={company.href} target="_blank" rel="noopener noreferrer">
                  {logo}
                </a>
              ) : logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function VenturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] pb-8 pt-20">
        <div className="animate-fade-in max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            inQUbate Portfolio
          </p>
          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            Our Ventures
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/55">
            From idea to impact, real products built by students at Queen&apos;s.
          </p>
        </div>
      </section>

      {/* Featured Venture */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-10">
        <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:bg-white/[0.07]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-14">
              <div className="flex flex-wrap gap-2">
                {featuredVenture.tags.map((t) => <Tag key={t} label={t} />)}
              </div>

              <h2 className="mt-5 text-5xl font-bold tracking-tight">
                {featuredVenture.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {featuredVenture.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredVenture.stats.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-medium text-white/65"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <FounderAvatars
                  founders={featuredVenture.founders}
                  size="md"
                  label="By"
                />
              </div>

              {featuredVenture.ctaHref && (
                <div className="mt-9">
                  <a
                    href={featuredVenture.ctaHref}
                    className="inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-white/90 active:scale-100"
                  >
                    {featuredVenture.ctaLabel ?? "Learn More"}
                  </a>
                </div>
              )}
            </div>

            {/* Thumbnail */}
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
              <img
                src={featuredVenture.thumbnail}
                alt={featuredVenture.name}
                className="relative z-10 max-h-[380px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Ventures (alternating) */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] space-y-8 py-10">
        <h2 className="text-3xl font-bold">Current Ventures</h2>

        {currentVentures.map((venture) => (
          <div
            key={venture.name}
            className={`group flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] md:items-center md:p-10 md:flex-row ${
              venture.imageRight ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {venture.tags.map((t) => <Tag key={t} label={t} />)}
              </div>

              <h3 className="mt-4 text-3xl font-bold">{venture.name}</h3>
              <p className="mt-4 leading-relaxed text-white/55">
                {venture.description}
              </p>

              <div className="mt-6">
                <FounderAvatars founders={venture.founders} />
              </div>

              {venture.ctaHref && (
                <a
                  href={venture.ctaHref}
                  className="mt-7 inline-block rounded-full border border-white/20 bg-white/[0.07] px-5 py-2 text-sm font-medium text-white/75 transition-all duration-200 hover:border-white/35 hover:bg-white/15"
                >
                  {venture.ctaLabel ?? "View Venture"} →
                </a>
              )}
            </div>

            {/* Thumbnail */}
            <div className="flex flex-1 items-center justify-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={venture.thumbnail}
                  alt={venture.name}
                  className="max-h-[260px] w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Past Ventures grid */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Past Ventures</h2>
          <p className="mt-2 text-white/45">
            Alumni ventures that have moved on to new chapters.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {pastVentures.map((venture) => (
            <PastVentureCard key={venture.name} venture={venture} />
          ))}
        </div>
      </section>

      {/* Alumni Outcomes */}
      <section className="relative z-10 py-20">
        <div className="mx-auto mb-12 w-[min(1120px,92%)] text-center">
          <h2 className="text-4xl font-bold">Alumni Outcomes</h2>
          <p className="mt-4 text-lg text-white/45">
            inQUbate alumni go on to succeed at top companies and startups.
          </p>
        </div>

        <MarqueeLogos logos={companyLogos} />
      </section>

      <Footer />
    </main>
  );
}
