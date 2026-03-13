import Navbar from "../Navbar";
import Footer from "../Footer";

const currentVentures = [
  {
    name: "FlowState",
    description:
      "A productivity app that uses AI to help students manage their time and stay focused. Currently in beta with 200+ active users across campus.",
    founders: "Sarah Chen, David Kim",
    stage: "Beta",
  },
  {
    name: "StudySync",
    description:
      "Peer-to-peer study group matching platform. Connects students based on courses, learning styles, and schedules. Raised $15k in pre-seed funding.",
    founders: "Marcus Torres",
    stage: "Pre-seed",
  },
  {
    name: "CampusConnect",
    description:
      "Mobile app for discovering campus events, clubs, and communities. Launched at Queen's in January 2025 with over 800 downloads in the first month.",
    founders: "Aisha Patel, Jordan Lee",
    stage: "Live",
  },
  {
    name: "GreenRoute",
    description:
      "Sustainable campus delivery service using electric bikes. Partnered with local restaurants to reduce carbon footprint while delivering food faster.",
    founders: "Emma Rodriguez, Tyler Chen",
    stage: "Pilot",
  },
];

const pastVentures = [
  {
    name: "ClassMate",
    description:
      "Note-sharing platform for university students. Acquired by a larger EdTech company in 2024. Served over 5,000 students across three universities.",
    founders: "Alex Thompson, Jamie Wu",
    outcome: "Acquired 2024",
  },
  {
    name: "SkillSwap",
    description:
      "Marketplace for students to trade skills and services. Pivoted to focus on professional networking and was absorbed into LinkedIn's campus program.",
    founders: "Priya Singh",
    outcome: "Pivoted 2023",
  },
  {
    name: "LocalEats",
    description:
      "Restaurant discovery app focused on student budgets and dietary preferences. Successfully operated for two years before founders graduated and moved on.",
    founders: "Chris Anderson, Maya Patel, Sam Johnson",
    outcome: "Sunset 2023",
  },
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold">Our Ventures</h1>
          <p className="mt-4 text-lg text-white/85">
            Real projects built by real students. From early-stage ideas to
            launched products, these are the ventures being built at inqubate.
          </p>
        </div>
      </section>

      {/* Current Ventures */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-8">
        <h2 className="text-3xl font-bold">Current Ventures</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {currentVentures.map((venture, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">{venture.name}</h3>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                  {venture.stage}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-white/85">
                {venture.description}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm text-white/60">
                  Founded by {venture.founders}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Ventures */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <h2 className="text-3xl font-bold">Past Ventures</h2>
        <p className="mt-2 text-white/60">
          Alumni ventures that have moved on to new chapters.
        </p>
        <div className="mt-8 space-y-6">
          {pastVentures.map((venture, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{venture.name}</h3>
                <span className="text-sm text-white/60">{venture.outcome}</span>
              </div>
              <p className="mt-3 leading-relaxed text-white/85">
                {venture.description}
              </p>
              <div className="mt-4">
                <p className="text-sm text-white/60">
                  Founded by {venture.founders}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
