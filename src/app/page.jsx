"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Landing from "./Landing";
import Footer from "./Footer";

const pastPartnersAndSponsors = [
  { name: "webapp.io" },
  { name: "AWS", logoSrc: "/partner-logos/aws.webp" },
  { name: "TD", logoSrc: "/partner-logos/td.png" },
  { name: "IBM", logoSrc: "/partner-logos/ibm.png" },
  { name: "Lucky Iron Fish", logoSrc: "/partner-logos/lucky_iron_fish.png" },
  {
    name: "Dunin-Deshpande Queen's Innovation Centre",
    logoSrc: "/partner-logos/dunin.png",
  },
  {
    name: "Women's Equity Lab",
    logoSrc: "/partner-logos/womens_equity_lab.png",
  },
  { name: "Google", logoSrc: "/partner-logos/google.jpeg" },
  {
    name: "Forbes Technology Council",
    logoSrc: "/partner-logos/forbes.png",
  },
  { name: "MESHAI.io", logoSrc: "/partner-logos/meshai.jpeg" },
  { name: "Smith School of Business", logoSrc: "/partner-logos/smith.png" },
  { name: "1 Million Teachers", logoSrc: "/partner-logos/million_teachers.png" },
  { name: "Amazon", logoSrc: "/partner-logos/amazon.png" },
  { name: "AJL", logoSrc: "/partner-logos/ajl.png" },
  { name: "Ripple Ventures", logoSrc: "/partner-logos/ripple.png" },
  { name: "PureFacts", logoSrc: "/partner-logos/purefacts.png" },
  {
    name: "Creative Destruction Lab",
    logoSrc: "/partner-logos/creative_destruction.png",
  },
  { name: "Smith Engineering", logoSrc: "/partner-logos/smith_eng.png" },
];

function PartnerLogo({ sponsor }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900">
        {sponsor.name}
      </span>
    );
  }

  return (
    sponsor.logoSrc ? (
      <div className="flex h-14 w-40 items-center justify-center">
        <img
          src={sponsor.logoSrc}
          alt={`${sponsor.name} logo`}
          loading="lazy"
          className="h-14 w-40 object-contain"
          onError={() => setHasError(true)}
        />
      </div>
    ) : (
      <span className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900">
        {sponsor.name}
      </span>
    )
  );
}

const alumniPlacements = [
  "Meta",
  "BCG",
  "IBM",
  "CLEARCO",
  "Accenture",
  "RBC",
  "CIBC",
  "P&G",
  "BMO",
  "Scotiabank",
  "Deloitte",
  "Microsoft",
  "Tesla",
  "AWS",
  "Dell",
  "Bain & Company",
  "Wave",
];

const currentProjects = [
  {
    name: "Paperboy",
    type: "Mobile App",
    description:
      "Transforms the newsletters you receive each morning into a single, personalized audio briefing. Press play and stay informed during your commute or morning routine.",
  },
  {
    name: "Orbit",
    type: "Web Platform",
    description:
      "A centralized digital platform to modernize lost and found. Users upload or drop items at partnered hubs, and a matching algorithm connects them to the most likely results.",
  },
  {
    name: "Pantri",
    type: "Mobile App",
    description:
      "A meal-generation app that creates recipes from commonly-used ingredients students already have to help reduce food waste and stay within a grocery budget.",
  },
  {
    name: "KDC Management",
    type: "Management Platform",
    description:
      "A part-time worker management system to help managers in workflow management and ease of scheduling to increase productivity and employee retention.",
  },
];

export default function Home() {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If footer bottom is at or above the viewport bottom, lock scroll
      if (footerRect.bottom <= windowHeight) {
        const scrollTop = window.scrollY;
        window.scrollTo({
          top: scrollTop,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Landing />

      {/* Past Partners and Sponsors Ticker */}
      <section className="relative z-10 -mt-6 overflow-hidden py-10">
        <div className="mx-auto mb-6 w-[min(1120px,92%)]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Past Partners &amp; Sponsors
          </h2>
        </div>
        <div className="border-y border-black/10 bg-white py-7 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
        <div className="partners-marquee flex items-center whitespace-nowrap">
          {[...pastPartnersAndSponsors, ...pastPartnersAndSponsors].map(
            (sponsor, i) => (
            <div
              key={`${sponsor.name}-${i}`}
              className="mx-6 inline-flex h-14 w-40 items-center justify-center"
            >
              <PartnerLogo sponsor={sponsor} />
            </div>
            )
          )}
        </div>
        </div>
      </section>

      {/* Alumni Placements */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <h2 className="text-4xl font-bold">Where Our Alumni Work</h2>
        <p className="mt-2 text-white/60">
          inQUbate alumni have gone on to top companies worldwide.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {alumniPlacements.map((company, i) => (
            <div
              key={i}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md transition hover:bg-white/10"
            >
              <span className="text-sm font-semibold text-white/85">
                {company}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold">About inqubate</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            We&apos;re a student-led incubator dedicated to turning ideas into
            reality. Whether you&apos;re building your first startup, launching
            a side project, or just exploring entrepreneurship, inqubate
            provides the resources, mentorship, and community you need to
            succeed. From ideation to execution, we&apos;re here to help you
            grow.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <Image
          src="/red-gradient.svg"
          width={900}
          height={700}
          alt=""
          className="pointer-events-none absolute -left-1/4 top-0 -z-10 opacity-30"
        />
        <h2 className="text-4xl font-bold">Our Mission</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Innovate</h3>
            <p className="mt-3 text-white/85">
              Push boundaries and challenge the status quo. We support bold
              ideas that solve real problems.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Collaborate</h3>
            <p className="mt-3 text-white/85">
              Work alongside passionate students, mentors, and industry
              professionals who share your drive.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold">Succeed</h3>
            <p className="mt-3 text-white/85">
              Turn your vision into a viable venture with our support, funding
              opportunities, and network.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <Image
          src="/blue-gradient.svg"
          width={1000}
          height={700}
          alt=""
          className="pointer-events-none absolute -right-1/4 top-0 -z-10 opacity-20"
        />
        <h2 className="text-4xl font-bold">What Our Members Say</h2>
        <div className="mt-8">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md md:p-10">
            <p className="text-lg leading-relaxed text-white/85">
              &ldquo;As a Commerce student with intersecting interests in
              business problem-solving and venture, inQUbate taught me the
              necessary community and foundation to design, build, and scale
              meaningful solutions tackling urgent real-world challenges. I left
              inQUbate with a deeper understanding about emerging tech,
              hypothesis validation through data, shipping products, and the
              operating skills to bring something from 0 to 1. It also connected
              me to a rich network of ambitious peers and successful alumni
              across tech, consulting, and venture around the world. My journey
              across tech strategy, consulting, and venture building
              wouldn&apos;t have been possible without the leadership experience
              and foundation I gained through inQUbate!&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                SK
              </div>
              <div>
                <p className="font-semibold">Sunghoon Kim</p>
                <p className="text-sm text-white/60">
                  Commerce Student | Tesla, Tenstorrent, OTPP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <Image
          src="/red-gradient.svg"
          width={900}
          height={700}
          alt=""
          className="pointer-events-none absolute -left-1/3 top-0 -z-10 opacity-25"
        />
        <h2 className="text-4xl font-bold">Current Projects</h2>
        <p className="mt-2 text-white/60">
          Ventures currently being built at inQUbate.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {currentProjects.map((project, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                  {project.type}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-white/85">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <Image
          src="/red-gradient.svg"
          width={900}
          height={700}
          alt=""
          className="pointer-events-none absolute -right-1/3 top-1/4 -z-10 opacity-25"
        />
        <h2 className="text-4xl font-bold">Upcoming Events</h2>
        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Pitch Night</h3>
              <p className="mt-2 text-white/85">
                Watch founders pitch their latest ventures to a panel of judges
                and investors.
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">March 24, 2025</p>
              <p className="text-sm text-white/60">6:00 PM • Goodes Hall</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Workshop: Building MVPs</h3>
              <p className="mt-2 text-white/85">
                Learn how to build and ship a minimum viable product in under
                two weeks.
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">April 3, 2025</p>
              <p className="text-sm text-white/60">5:30 PM • Mitchell Hall</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Founder Fireside Chat
              </h3>
              <p className="mt-2 text-white/85">
                Hear from local founders about their journey from idea to
                launch.
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">April 15, 2025</p>
              <p className="text-sm text-white/60">7:00 PM • Virtual</p>
            </div>
          </div>
        </div>
      </section>

      <div ref={footerRef}>
        <Footer />
      </div>

      <style jsx>{`
        .partners-marquee {
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
