"use client";

import { useState } from "react";
import Reveal from "./Reveal";

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

export default function PartnersAndSponsors() {
  return (
    <section className="relative z-10 my-20 md:my-32 lg:my-40 overflow-hidden py-10">
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
  );
}
