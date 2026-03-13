import Navbar from "../Navbar";
import Footer from "../Footer";

const team = [
  { name: "Maya Rodriguez", role: "President", initials: "MR" },
  { name: "James Chen", role: "VP Operations", initials: "JC" },
  { name: "Zara Okafor", role: "VP Ventures", initials: "ZO" },
  { name: "Liam Patel", role: "VP Finance", initials: "LP" },
  { name: "Sofia Martinez", role: "Director of Events", initials: "SM" },
  { name: "Ryan Kim", role: "Director of Marketing", initials: "RK" },
  { name: "Nina Desai", role: "Director of Partnerships", initials: "ND" },
  { name: "Owen Walsh", role: "Director of Mentorship", initials: "OW" },
  { name: "Priya Singh", role: "Community Manager", initials: "PS" },
  { name: "Eric Thompson", role: "Tech Lead", initials: "ET" },
  { name: "Jasmine Liu", role: "Design Lead", initials: "JL" },
  { name: "Kai Anderson", role: "Content Lead", initials: "KA" },
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold">Our Team</h1>
          <p className="mt-4 text-lg text-white/85">
            Meet the students building the future of entrepreneurship at
            Queen&apos;s.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-8 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl font-bold text-white/60 transition group-hover:border-white/30 group-hover:bg-white/20">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-white/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
