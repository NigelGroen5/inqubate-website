"use client";

import Image from "next/image";

const stats = [
  { value: "40+", label: "VENTURES" },
  { value: "50+", label: "MEMBERS" },
  { value: "100K+", label: "SEED FUNDING" },
];

export default function WhatIsInqubateStatsTube() {
  return (
    <div className="relative -mt-16 left-1/2 w-screen -translate-x-1/2 md:-mt-24">
      {/* Reversed tube background */}
      <div className="absolute -left-[10%] -right-[10%] -top-20 -bottom-32 -z-10 md:-top-32 md:-bottom-48">
        <Image
          src="/tube2.png"
          width={0}
          height={0}
          sizes="120vw"
          style={{ width: "100%", height: "auto", objectFit: "contain", objectPosition: "center" }}
          className="pointer-events-none select-none"
          alt=""
        />
      </div>

      {/* Stats text overlay */}
      <div className="relative z-10 flex flex-col items-end pr-[6%] py-24 md:py-32 gap-2 md:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-right">
            <span
              className="block font-bold uppercase leading-none tracking-tight text-transparent"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                WebkitTextStroke: "1.5px rgba(247, 247, 247, 0.85)",
              }}
            >
              {stat.value} {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
