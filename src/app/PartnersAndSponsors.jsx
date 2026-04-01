"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const pastPartnersAndSponsors = [
  { name: "webapp.io", logoSrc: "/partner-logos/webapp-white.png", logoScale: "scale-[2]" },
  { name: "AWS", logoSrc: "/partner-logos/aws-white.png", logoScale: "scale-[0.78]" },
  { name: "TD", logoSrc: "/partner-logos/td-white.png", logoScale: "scale-100" },
  { name: "IBM", logoSrc: "/partner-logos/ibm-white.png", logoScale: "scale-100" },
  { name: "Lucky Iron Fish", logoSrc: "/partner-logos/lucky_iron_fish-white.png", logoScale: "scale-100" },
  { name: "Dunin-Deshpande Queen's Innovation Centre", logoSrc: "/partner-logos/dunin-white.png", logoScale: "scale-[1.42]" },
  { name: "Women's Equity Lab", logoSrc: "/partner-logos/womens_equity_lab-white.png", logoScale: "scale-[0.78]" },
  { name: "Google", logoSrc: "/partner-logos/google-white.png", logoScale: "scale-[0.92]" },
  { name: "Forbes Technology Council", logoSrc: "/partner-logos/forbes-white.png", logoScale: "scale-100" },
  { name: "MESHAI.io", logoSrc: "/partner-logos/meshai-white.png", logoScale: "scale-[1.42]" },
  { name: "Smith School of Business", logoSrc: "/partner-logos/smith-white.png", logoScale: "scale-100" },
  { name: "1 Million Teachers", logoSrc: "/partner-logos/million_teachers-white.png", logoScale: "scale-[2]" },
  { name: "Amazon", logoSrc: "/partner-logos/amazon-white.png", logoScale: "scale-[0.76]" },
  { name: "AJL", logoSrc: "/partner-logos/ajl-white.png", logoScale: "scale-100" },
  { name: "Ripple Ventures", logoSrc: "/partner-logos/ripple-white.png", logoScale: "scale-[3]" },
  { name: "PureFacts", logoSrc: "/partner-logos/purefacts-white.png", logoScale: "scale-100" },
  { name: "Creative Destruction Lab", logoSrc: "/partner-logos/creative_destruction-white.png", logoScale: "scale-[1.42]" },
  { name: "Smith Engineering", logoSrc: "/partner-logos/smith_eng-white.png", logoScale: "scale-100" },
];

function PartnerLogo({ sponsor }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !sponsor.logoSrc) {
    return (
      <span className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-white/50">
        {sponsor.name}
      </span>
    );
  }

  return (
    <img
      src={sponsor.logoSrc}
      alt={`${sponsor.name} logo`}
      loading="lazy"
          className={`h-14 w-40 ${sponsor.logoClassName ?? "object-contain"} transition-transform ${sponsor.logoScale ?? ""} grayscale brightness-[1.6] opacity-55 !transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100`}
      onError={() => setHasError(true)}
    />
  );
}

export default function PartnersAndSponsors() {
  return (
    <section className="relative z-10 my-20 md:my-32 lg:my-40 overflow-hidden py-10">
      <Reveal className="mx-auto mb-6 w-[min(1120px,92%)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Past Partners &amp; Sponsors
        </h2>
      </Reveal>
      <Reveal>
        <div
          className="relative overflow-hidden border-y border-white/10 py-7"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="partners-marquee flex items-center whitespace-nowrap">
            {[...pastPartnersAndSponsors, ...pastPartnersAndSponsors].map(
              (sponsor, i) => (
                <div
                  key={`${sponsor.name}-${i}`}
                  className="group mx-8 inline-flex h-16 w-44 flex-shrink-0 items-center justify-center overflow-hidden"
                >
                  <PartnerLogo sponsor={sponsor} />
                </div>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
