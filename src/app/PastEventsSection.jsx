import Image from "next/image";
import Reveal from "./Reveal";

const pastEvents = [
  { title: "Founder Fireside Chat", imageSrc: "/event_1.JPG" },
  { title: "Product Workshop", imageSrc: "/event_2.jpg" },
  { title: "Pitch Night", imageSrc: "/event_3.jpg" },
  { title: "Speaker Panel", imageSrc: "/event_4.png" },
  { title: "Community Showcase", imageSrc: "/event_5.png" },
];

export default function PastEventsSection() {
  return (
    <section className="relative z-10 py-8 md:py-12 lg:py-16">
      <Image
        src="/red-gradient.svg"
        width={900}
        height={700}
        alt=""
        className="pointer-events-none absolute -right-1/3 top-1/4 -z-10 opacity-25"
      />
      <Reveal className="mx-auto w-[min(1280px,92%)] text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Past Events &amp; Speakers</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/70">
          Check out some photos from past InQUbate events.
        </p>
      </Reveal>
      <Reveal className="event-marquee-wrap mt-8 md:mt-10 lg:mt-12 overflow-hidden">
        <div className="event-marquee flex w-max gap-6 md:gap-7 lg:gap-8 px-6 md:px-8">
        {[...pastEvents, ...pastEvents].map((event, index) => (
          <div
            key={`${event.title}-${index}`}
            className="group w-[78vw] max-w-[560px] flex-none overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-[34px] border border-white/15 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:scale-[1.01] hover:border-white/25 hover:bg-white/[0.06]"
          >
            <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden">
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
  );
}
