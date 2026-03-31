import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";

/** Shared headshot for all team cards (Pobias Steinberg). */
const TEAM_PHOTO_SRC = "/testimonials/pobias-steinberg.png";

const team = [
  { name: "Maya Rodriguez", role: "President" },
  { name: "James Chen", role: "VP Operations" },
  { name: "Zara Okafor", role: "VP Ventures" },
  { name: "Liam Patel", role: "VP Finance" },
  { name: "Sofia Martinez", role: "Director of Events" },
  { name: "Ryan Kim", role: "Director of Marketing" },
  { name: "Nina Desai", role: "Director of Partnerships" },
  { name: "Owen Walsh", role: "Director of Mentorship" },
  { name: "Priya Singh", role: "Community Manager" },
  { name: "Eric Thompson", role: "Tech Lead" },
  { name: "Jasmine Liu", role: "Design Lead" },
  { name: "Kai Anderson", role: "Content Lead" },
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
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-3xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border border-white/20 transition group-hover:border-white/30">
                <Image
                  src={TEAM_PHOTO_SRC}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
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
