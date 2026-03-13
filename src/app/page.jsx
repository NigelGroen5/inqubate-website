"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Landing from "./Landing";
import Footer from "./Footer";

const sponsors = [
  "TechVentures",
  "StartupLabs",
  "InnovateNow",
  "VentureHub",
  "SeedFund",
  "GrowthPartners",
  "NextGen Capital",
  "FutureBuilders",
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

      {/* Sponsors Ticker */}
      <section className="relative z-10 overflow-hidden py-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
            <div
              key={i}
              className="mx-6 inline-flex items-center justify-center rounded-3xl border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-md"
            >
              <span className="text-lg font-semibold text-white/85">
                {sponsor}
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
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-lg leading-relaxed text-white/85">
              &ldquo;inqubate gave me the confidence and resources to take my
              idea from a napkin sketch to a working prototype. The mentorship
              here is unmatched.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-sm text-white/60">Co-founder, FlowState</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-lg leading-relaxed text-white/85">
              &ldquo;The community at inqubate is incredible. I&apos;ve met
              co-founders, advisors, and lifelong friends—all while building
              something I&apos;m proud of.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold">Marcus Torres</p>
              <p className="text-sm text-white/60">Founder, StudySync</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-lg leading-relaxed text-white/85">
              &ldquo;I joined with zero business experience. Now I&apos;m
              pitching to investors and shipping features every week. inqubate
              made that possible.&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-semibold">Aisha Patel</p>
              <p className="text-sm text-white/60">
                Founder, CampusConnect
              </p>
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
    </>
  );
}
