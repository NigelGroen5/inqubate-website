"use client";

import { useEffect, useRef } from "react";
import Landing from "./Landing";
import PartnersAndSponsors from "./PartnersAndSponsors";
import AboutSection from "./AboutSection";
import WeProvideSection from "./WeProvideSection";
import TestimonialsSection from "./TestimonialsSection";
import PastEventsSection from "./PastEventsSection";
import Footer from "./Footer";

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
      <PartnersAndSponsors />
      <AboutSection />
      <WeProvideSection />
      <TestimonialsSection />
      <PastEventsSection />

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
