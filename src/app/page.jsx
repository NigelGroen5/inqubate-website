"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Landing from "./Landing";
import Footer from "./Footer";

const pastPartnersAndSponsors = [
  { name: "webapp.io" },
  { name: "AWS", logoSrc: "/partner-logos/aws.webp", logoScale: "scale-[1.1]" },
  { name: "TD", logoSrc: "/partner-logos/td.png", logoScale: "scale-[1.08]" },
  { name: "IBM", logoSrc: "/partner-logos/ibm.png", logoScale: "scale-[1.18]" },
  {
    name: "Lucky Iron Fish",
    logoSrc: "/partner-logos/lucky_iron_fish.png",
    logoScale: "scale-[1.12]",
  },
  {
    name: "Dunin-Deshpande Queen's Innovation Centre",
    logoSrc: "/partner-logos/dunin.png",
    logoScale: "scale-[1.14]",
  },
  {
    name: "Women's Equity Lab",
    logoSrc: "/partner-logos/womens_equity_lab.png",
    logoScale: "scale-[1.08]",
  },
  { name: "Google", logoSrc: "/partner-logos/google.png", logoScale: "scale-[1.06]" },
  {
    name: "Forbes Technology Council",
    logoSrc: "/partner-logos/forbes.png",
    logoScale: "scale-[1.08]",
  },
  { name: "MESHAI.io", logoSrc: "/partner-logos/meshai.jpeg", logoScale: "scale-[1.14]" },
  {
    name: "Smith School of Business",
    logoSrc: "/partner-logos/smith.png",
    logoScale: "scale-[1.06]",
  },
  {
    name: "1 Million Teachers",
    logoSrc: "/partner-logos/million_teachers.png",
    logoScale: "scale-[1.12]",
  },
  { name: "Amazon", logoSrc: "/partner-logos/amazon.png", logoScale: "scale-[1.04]" },
  { name: "AJL", logoSrc: "/partner-logos/ajl.png", logoScale: "scale-[1.08]" },
  {
    name: "Ripple Ventures",
    logoSrc: "/partner-logos/ripple.png",
    logoScale: "scale-[1.12]",
    logoClassName: "object-cover",
  },
  { name: "PureFacts", logoSrc: "/partner-logos/purefacts.png", logoScale: "scale-[1.08]" },
  {
    name: "Creative Destruction Lab",
    logoSrc: "/partner-logos/creative_destruction.png",
    logoScale: "scale-[1.08]",
  },
  {
    name: "Smith Engineering",
    logoSrc: "/partner-logos/smith_eng.png",
    logoScale: "scale-[1.06]",
  },
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
          className={`h-14 w-40 ${sponsor.logoClassName ?? "object-contain"} transition-transform ${sponsor.logoScale ?? ""}`}
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



      {/* About Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold">What is InQUbate?</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            We are Canada&apos;s first AI startup incubator dedicated to
            empowering student entrepreneurs to build and scale pre-seed
            ventures in the disruptive technology space. Throughout the
            program, teams refine their business models and develop technical
            products with real market validation. We provide 360° support,
            combining hands-on guidance, educational resources, and access to a
            strong professional network. Our focus is on helping students
            create commercially viable technologies while securing the funding
            needed to bring their ideas to life. Participants gain valuable
            experience through mentorship, speakers, and structured product and
            project support to keep their ventures on track. The program
            culminates in a demo day event, where teams pitch their startups
            and showcase their progress.
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
          className="pointer-events-none absolute -left-1/4 top-0 -z-10 opacity-25"
        />
        <Image
          src="/blue-gradient.svg"
          width={1000}
          height={700}
          alt=""
          className="pointer-events-none absolute -right-1/4 top-0 -z-10 opacity-20"
        />
        <h2 className="text-4xl font-bold">What We Provide</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-7 backdrop-blur-md">
            <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ff4e6e] to-[#52c7ff]" />
            <h3 className="text-2xl font-semibold">
              Venture Funding Opportunities
            </h3>
            <p className="mt-3 text-white/85">
              Connect with VCs and other industry professionals.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-7 backdrop-blur-md">
            <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ff4e6e] to-[#52c7ff]" />
            <h3 className="text-2xl font-semibold">Skilled Network</h3>
            <p className="mt-3 text-white/85">
              Join our community of founders and consultants.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-7 backdrop-blur-md">
            <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ff4e6e] to-[#52c7ff]" />
            <h3 className="text-2xl font-semibold">Exclusive Resources</h3>
            <p className="mt-3 text-white/85">
              Attend exclusive events, competitions, and trips.
            </p>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/5 p-7 backdrop-blur-md">
            <div className="mb-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#ff4e6e] to-[#52c7ff]" />
            <h3 className="text-2xl font-semibold">
              Entrepreneurial Essentials
            </h3>
            <p className="mt-3 text-white/85">
              Learn how to prepare and pitch your startup.
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
