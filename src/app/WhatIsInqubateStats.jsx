"use client";

const stats = [
  {
    value: "10+",
    label: "Ventures",
    coneSrc: "/partner-logos/Cone1.svg",
    coneClassName: "h-80 w-52 md:h-[26rem] md:w-64",
    textClassName: "md:pl-2",
    titleClassName: "max-w-[13rem]",
  },
  {
    value: "50+",
    label: "Members",
    coneSrc: "/partner-logos/Cone2.svg",
    coneClassName: "h-[22rem] w-56 md:h-[30rem] md:w-72",
    textClassName: "",
    titleClassName: "max-w-[13rem]",
  },
  {
    value: "100K+ in",
    label: "seed funding",
    coneSrc: "/partner-logos/Cone3.svg",
    coneClassName: "h-[24rem] w-56 md:h-[34rem] md:w-80",
    textClassName: "md:-ml-2",
    titleClassName: "w-[13rem] sm:w-[16rem] md:w-[20rem]",
  },
];

export default function WhatIsInqubateStats() {
  return (
    <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-visible px-4 py-8 sm:px-6 md:mt-14 md:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(circle_at_center,rgba(73,192,255,0.16),transparent_62%)] blur-3xl md:h-[24rem]" />

        <div className="absolute inset-x-[-8%] top-[22%] z-0 h-[60%] md:top-[14%] md:h-[68%]">
        <svg
          viewBox="0 0 1200 620"
          className="h-full w-full drop-shadow-[0_30px_70px_rgba(74,152,255,0.18)]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="inqubate-wave-fill" x1="0%" y1="55%" x2="100%" y2="45%">
              <stop offset="0%" stopColor="#6d6ff1" />
              <stop offset="48%" stopColor="#4f86dd" />
              <stop offset="100%" stopColor="#69c8ff" />
            </linearGradient>
            <filter id="inqubate-wave-glow" x="-20%" y="-30%" width="140%" height="160%">
              <feGaussianBlur stdDeviation="26" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 0.32 0"
              />
            </filter>
          </defs>

          <path
            d="M0 188C102 231 224 177 344 127C512 56 695 0 883 0C1006 0 1109 17 1200 50V515C1086 478 983 469 867 489C706 515 561 601 406 620C243 640 110 620 0 601V188Z"
            fill="url(#inqubate-wave-fill)"
            opacity="0.24"
            filter="url(#inqubate-wave-glow)"
          />
          <path
            d="M0 206C102 246 224 191 343 142C507 74 684 24 867 24C993 24 1106 46 1200 82V506C1082 473 978 466 858 487C703 514 566 595 418 616C248 640 113 623 0 600V206Z"
            fill="url(#inqubate-wave-fill)"
          />
        </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-[min(1180px,94%)] flex-col items-center gap-8 md:flex-row md:items-end md:justify-center md:gap-16">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className={`relative flex items-end justify-center text-center text-white ${stat.textClassName}`}
          >
            <img
              src={stat.coneSrc}
              alt=""
              aria-hidden="true"
              className={`object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.24)] ${stat.coneClassName}`}
            />
            <h3 className={`absolute bottom-full left-1/2 z-10 mb-[-0.4rem] -translate-x-1/2 text-3xl font-bold leading-none tracking-tight sm:mb-[-0.55rem] sm:text-4xl md:mb-[-0.8rem] md:text-5xl ${stat.titleClassName}`}>
              {stat.value}
              <span className="mt-2 block">{stat.label}</span>
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
