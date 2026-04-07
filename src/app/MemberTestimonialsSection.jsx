"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const memberTestimonials = [
  {
    id: "ruby-wang",
    name: "Ruby Wang",
    role: "Co-founder of Spotlight",
    roleSecondary: "Venture Founder ('24–'25)",
    quote:
      "inQUbate was the catalyst that grew Spotlight from an idea into something real—mentorship, community, and resources I needed as a first-time founder. Trips like our San Francisco visit connected me with founders who still inspire me today.",
    photoSrc: "/testimonials/ruby-wang-headshot.jpg",
  },
  {
    id: "jacob-kranjac",
    name: "Jacob Kranjac",
    role: "Co-founder of SpeakEase",
    roleSecondary: "inQUbate Co-Chair ('24–'25)",
    quote:
      "Joining inQUbate at Queen's was a game-changer—a supportive, creative, professional community that felt like home. With no tech background I built skills, launched a venture, and grew alongside incredible peers. I organized fireside chats, pitch competitions, and led our capstone trip to Silicon Valley. Unmatched experiential learning and a network of driven people—perfect if you're looking to grow.",
    photoSrc: "/testimonials/jacob-kranjac.png",
  },
];

function Chevron({ dir }) {
  const d =
    dir === "left" ? "M15 6 9 12 15 18" : "M9 6 15 12 9 18";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export default function MemberTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = memberTestimonials.length;
  const current = memberTestimonials[index];

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + total) % total);
    },
    [total]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section className="relative z-10 mx-auto w-[min(1280px,92%)] py-8 md:py-12 lg:py-16">
      <Image
        src="/red-gradient.svg"
        width={900}
        height={700}
        alt=""
        className="pointer-events-none absolute -left-1/4 top-1/4 -z-10 opacity-20"
      />
      <Image
        src="/blue-gradient.svg"
        width={1000}
        height={700}
        alt=""
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 opacity-20"
      />

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold md:leading-tight">
          What Our Members Say
        </h2>
      </div>

      <div className="relative mt-8 md:mt-10 lg:mt-12 rounded-xl sm:rounded-2xl md:rounded-[30px] border border-white/15 bg-white/[0.04] p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-0 rounded-[30px] bg-[radial-gradient(ellipse_55%_40%_at_15%_20%,rgba(159,22,59,0.12),transparent_60%),radial-gradient(ellipse_50%_45%_at_90%_80%,rgba(47,151,232,0.1),transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-6 md:gap-8 lg:gap-10 md:flex-row md:items-start">
          <div className="flex shrink-0 flex-col items-center gap-2 md:gap-3 md:items-start">
            <div className="relative h-[7.5rem] w-[7.5rem] sm:h-36 sm:w-36">
              <div
                className="absolute -inset-1 rounded-full bg-[linear-gradient(135deg,#2f97e8_0%,#9f163b_100%)] opacity-80 blur-sm"
                aria-hidden="true"
              />
              <div className="relative h-full w-full overflow-hidden rounded-full ring-[3px] ring-white/20 ring-offset-[3px] ring-offset-black">
                <Image
                  src={current.photoSrc}
                  alt={`Portrait of ${current.name}`}
                  width={288}
                  height={288}
                  className={`h-full w-full object-cover ${current.photoZoomClass ?? ""}`}
                  style={
                    current.photoObjectPosition
                      ? { objectPosition: current.photoObjectPosition }
                      : undefined
                  }
                  sizes="(max-width: 768px) 120px, 144px"
                  priority={index === 0}
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white">{current.name}</p>
              <p className="mt-0.5 text-sm font-medium text-[#7cc9ff]">
                {current.role}
              </p>
              {current.roleSecondary ? (
                <p className="mt-0.5 text-sm text-white/75">
                  {current.roleSecondary}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative min-w-0 flex-1">
            <div
              className="relative min-h-[260px] rounded-lg sm:rounded-xl md:min-h-[320px] md:rounded-2xl lg:rounded-[24px] border border-white/18 bg-black/45 px-4 py-5 sm:px-5 sm:py-6 md:px-7 md:py-7 lg:px-8 lg:py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              aria-live="polite"
            >
              <div
                className="absolute -top-2 left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-white/18 bg-neutral-950 md:hidden"
                aria-hidden="true"
              />
              <div
                className="absolute -left-2 top-11 z-10 hidden h-3.5 w-3.5 rotate-45 border-b border-l border-white/18 bg-neutral-950 md:block"
                aria-hidden="true"
              />

              <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none text-white/25">
                &ldquo;
              </p>
              <blockquote className="-mt-1 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed text-white/90 md:leading-relaxed">
                {current.quote}
              </blockquote>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.12em] text-white/35">
                {current.name.split(" ")[0]} · inQUbate
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-10 lg:mt-12 flex flex-col items-stretch gap-4 md:gap-6 border-t border-white/10 pt-6 md:pt-8 lg:pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition hover:border-white/35 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f97e8]"
              aria-label="Previous testimonial"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 transition hover:border-white/35 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f97e8]"
              aria-label="Next testimonial"
            >
              <Chevron dir="right" />
            </button>
            <span className="ml-2 text-xs tabular-nums text-white/40">
              {index + 1} / {total}
            </span>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:justify-end"
            role="tablist"
            aria-label="Choose a member"
          >
            {memberTestimonials.map((m, i) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-[#080808] transition focus:outline-none focus-visible:ring-[#2f97e8] ${
                  i === index
                    ? "ring-[#69c8ff] opacity-100"
                    : "ring-white/15 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Show testimonial from ${m.name}`}
              >
                <Image
                  src={m.photoSrc}
                  alt={`${m.name} thumbnail`}
                  width={88}
                  height={88}
                  className={`h-full w-full object-cover ${m.photoThumbZoomClass ?? ""}`}
                  style={
                    m.photoObjectPosition
                      ? { objectPosition: m.photoObjectPosition }
                      : undefined
                  }
                  sizes="44px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
