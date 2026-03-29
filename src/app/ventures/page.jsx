import Navbar from "../Navbar";
import Footer from "../Footer";

const featuredVenture = {
  name: "FlowState",
  tags: ["AI", "Productivity"],
  description:
    "A productivity app that uses AI to help students manage their time and stay focused. Trusted by 200+ students across campus, growing fast in beta.",
  stats: ["200+ users", "Beta"],
  founders: ["Sarah Chen", "David Kim"],
};

const alternatingVentures = [
  {
    name: "StudySync",
    tags: ["EdTech", "P2P"],
    description:
      "Peer-to-peer study group matching platform. Connects students based on courses, learning styles, and schedules. Raised $15k in pre-seed funding.",
    founders: ["Marcus Torres"],
    stage: "Pre-seed",
    image: "/placeholder-web.png",
    imageRight: false,
  },
  {
    name: "CampusConnect",
    tags: ["Mobile", "Social"],
    description:
      "Mobile app for discovering campus events, clubs, and communities. Launched at Queen's in January 2025 with over 800 downloads in the first month.",
    founders: ["Aisha Patel", "Jordan Lee"],
    stage: "Live",
    image: "/placeholder-phone.png",
    imageRight: true,
  },
  {
    name: "GreenRoute",
    tags: ["Sustainability", "Logistics"],
    description:
      "Sustainable campus delivery service using electric bikes. Partnered with local restaurants to reduce carbon footprint while delivering food faster.",
    founders: ["Emma Rodriguez", "Tyler Chen"],
    stage: "Pilot",
    image: "/placeholder-web.png",
    imageRight: false,
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
  },
  {
    name: "SkillSwap",
    tags: ["Marketplace"],
    description:
      "Marketplace for students to trade skills and services. Pivoted to professional networking and absorbed into LinkedIn's campus program.",
    status: "Pivoted",
    statusStyle: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
  {
    name: "LocalEats",
    tags: ["Foodtech"],
    description:
      "Restaurant discovery app focused on student budgets and dietary preferences. Successfully operated for two years before founders graduated.",
    status: "Alumni",
    statusStyle: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  },
];

const companyLogos = Array(8).fill("/placeholder-company.png");

export default function VenturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] pb-8 pt-20">
        <div className="animate-fade-in max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            inQUbate Portfolio
          </p>
          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            Our Ventures
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/55">
            From idea to impact, real products built by students at Queen's.
          </p>
        </div>
      </section>

      {/* ── Featured Venture ── */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-10">
        <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:bg-white/[0.07]">
          {/* subtle inner glow on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* — Text — */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-14">
              <div className="flex flex-wrap gap-2">
                {featuredVenture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="mt-5 text-5xl font-bold tracking-tight">
                {featuredVenture.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {featuredVenture.description}
              </p>

              {/* Stat pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {featuredVenture.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-medium text-white/65"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Founders */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {featuredVenture.founders.map((founder, i) => (
                    <img
                      key={i}
                      src="/placeholder-portrait.png"
                      alt={founder}
                      className="h-8 w-8 rounded-full border border-white/20 object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-white/45">
                  By {featuredVenture.founders.join(", ")}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-9">
                <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-white/90 active:scale-100">
                  Learn More
                </button>
              </div>
            </div>

            {/* — Image — */}
            <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
              <img
                src="/placeholder-phone.png"
                alt={featuredVenture.name}
                className="relative z-10 max-h-[380px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternating Venture Sections ── */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] space-y-8 py-10">
        <h2 className="text-3xl font-bold">Current Ventures</h2>

        {alternatingVentures.map((venture) => (
          <div
            key={venture.name}
            className={`group flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] md:flex-row md:items-center md:p-10 ${
              venture.imageRight ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                {venture.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-3xl font-bold">{venture.name}</h3>
              <p className="mt-4 leading-relaxed text-white/55">
                {venture.description}
              </p>

              {/* Founders */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {venture.founders.map((founder, i) => (
                    <img
                      key={i}
                      src="/placeholder-portrait.png"
                      alt={founder}
                      className="h-7 w-7 rounded-full border border-white/20 object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-white/40">{venture.founders.join(", ")}</p>
              </div>

              <button className="mt-7 rounded-full border border-white/20 bg-white/[0.07] px-5 py-2 text-sm font-medium text-white/75 transition-all duration-200 hover:border-white/35 hover:bg-white/15">
                View Venture →
              </button>
            </div>

            {/* Image */}
            <div className="flex flex-1 items-center justify-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={venture.image}
                  alt={venture.name}
                  className="max-h-[260px] w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Past Ventures Grid ── */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Past Ventures</h2>
          <p className="mt-2 text-white/45">
            Alumni ventures that have moved on to new chapters.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {pastVentures.map((venture) => (
            <div
              key={venture.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
            >
              {/* Card image */}
              <div className="relative h-44 overflow-hidden bg-white/5">
                <img
                  src="/placeholder-web.png"
                  alt={venture.name}
                  className="h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <span
                  className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold ${venture.statusStyle}`}
                >
                  {venture.status}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src="/placeholder-logo.png"
                    alt={venture.name}
                    className="h-8 w-8 rounded-lg object-cover"
                  />
                  <h3 className="text-lg font-semibold">{venture.name}</h3>
                </div>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.07] px-2.5 py-0.5 text-xs text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-white/50">
                  {venture.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Alumni Outcomes ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto mb-12 w-[min(1120px,92%)] text-center">
          <h2 className="text-4xl font-bold">Alumni Outcomes</h2>
          <p className="mt-4 text-lg text-white/45">
            inQUbate alumni go on to succeed at top companies and startups.
          </p>
        </div>

        {/* Marquee */}
        <div className="group relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="flex animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
            {[...companyLogos, ...companyLogos, ...companyLogos].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-85 hover:grayscale-0"
              >
                <img
                  src={src}
                  alt="Company"
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
