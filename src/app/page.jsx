"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Landing from "./Landing";
import Footer from "./Footer";
import WhatIsInqubateStats from "./WhatIsInqubateStats";

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

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
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

const pastEvents = [
  { title: "Founder Fireside Chat", imageSrc: "/event_1.JPG" },
  { title: "Product Workshop", imageSrc: "/event_2.jpg" },
  { title: "Pitch Night", imageSrc: "/event_3.jpg" },
  { title: "Speaker Panel", imageSrc: "/event_4.png" },
  { title: "Community Showcase", imageSrc: "/event_5.png" },
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
        <Reveal className="mx-auto mb-6 w-[min(1120px,92%)]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Past Partners &amp; Sponsors
          </h2>
        </Reveal>
        <Reveal>
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
        </Reveal>
      </section>



      {/* About Section */}
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-16">
        <Reveal>
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
          <WhatIsInqubateStats />
        </Reveal>
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
        <Reveal>
          <h2 className="text-4xl font-bold">We Provide</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-6">
          <Reveal delay={0} className="md:col-span-4">
          <div className="rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#9f163b_0%,#5a0d24_100%)] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
            <div className="text-5xl font-bold leading-none text-white/95 md:text-6xl">
              01
            </div>
            <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
              Venture Funding Opportunities
            </h3>
            <p className="mt-3 max-w-2xl text-lg text-white/88 md:text-xl">
              Connect with VCs and other industry professionals.
            </p>
          </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-2">
          <div className="rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#2f97e8_0%,#184f82_100%)] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
            <div className="text-5xl font-bold leading-none text-white/95 md:text-6xl">
              02
            </div>
            <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
              Skilled Network
            </h3>
            <p className="mt-3 text-lg text-white/88 md:text-xl">
              Join our community of founders and consultants.
            </p>
          </div>
          </Reveal>

          <Reveal delay={0} className="md:col-span-2">
          <div className="rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#2f97e8_0%,#184f82_100%)] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
            <div className="text-5xl font-bold leading-none text-white/95 md:text-6xl">
              03
            </div>
            <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
              Exclusive Resources
            </h3>
            <p className="mt-3 text-lg text-white/88 md:text-xl">
              Attend exclusive events, competitions, and trips.
            </p>
          </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-4">
          <div className="rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#9f163b_0%,#5a0d24_100%)] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
            <div className="text-5xl font-bold leading-none text-white/95 md:text-6xl">
              04
            </div>
            <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
              Entrepreneurial Essentials
            </h3>
            <p className="mt-3 max-w-2xl text-lg text-white/88 md:text-xl">
              Learn how to prepare and pitch your startup.
            </p>
          </div>
          </Reveal>
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
        <Reveal>
          <h2 className="text-4xl font-bold">What Our Members Say</h2>
        </Reveal>
        <Reveal className="mt-8">
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
        </Reveal>
      </section>

      {/* Past Events Section */}
      <section className="relative z-10 py-16">
        <Image
          src="/red-gradient.svg"
          width={900}
          height={700}
          alt=""
          className="pointer-events-none absolute -right-1/3 top-1/4 -z-10 opacity-25"
        />
        <Reveal className="mx-auto w-[min(1120px,92%)] text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Past Events &amp; Speakers</h2>
          <p className="mt-3 text-lg text-white/70">
            Check out some photos from past InQUbate events.
          </p>
        </Reveal>
        <Reveal className="event-marquee-wrap mt-10 overflow-hidden">
          <div className="event-marquee flex w-max gap-6 px-6 md:gap-8">
          {[...pastEvents, ...pastEvents].map((event, index) => (
            <div
              key={`${event.title}-${index}`}
              className="group w-[78vw] max-w-[560px] flex-none overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:scale-[1.01] hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative h-[360px] overflow-hidden md:h-[420px]">
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.06]"
                />
              </div>
            </div>
          ))}
          </div>
        </Reveal>
      </section>

      <div ref={footerRef}>
        <Footer />
      </div>

      <style jsx>{`
        .partners-marquee {
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }

        .event-marquee-wrap:hover .event-marquee {
          animation-play-state: paused;
        }

        .event-marquee {
          animation: scroll-left 32s linear infinite;
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
