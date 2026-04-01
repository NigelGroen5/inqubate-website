import Image from "next/image";
import Reveal from "./Reveal";

export default function WeProvideSection() {
  return (
    <section className="relative z-10 mx-auto w-[min(1280px,92%)] py-8 md:py-12 lg:py-16">
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">We Provide</h2>
      </Reveal>
      <div className="mt-6 md:mt-8 lg:mt-10 grid gap-6 md:gap-7 lg:gap-8 md:grid-cols-6">
        <Reveal delay={0} className="md:col-span-4">
        <div className="rounded-lg sm:rounded-2xl md:rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#9f163b_0%,#5a0d24_100%)] p-5 sm:p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-white/95">
            01
          </div>
          <h3 className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Venture Funding Opportunities
          </h3>
          <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white/88 md:text-xl">
            Connect with VCs and other industry professionals.
          </p>
        </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-2">
        <div className="rounded-lg sm:rounded-2xl md:rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#2f97e8_0%,#184f82_100%)] p-5 sm:p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-white/95">
            02
          </div>
          <h3 className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Skilled Network
          </h3>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-white/88">
            Join our community of founders and consultants.
          </p>
        </div>
        </Reveal>

        <Reveal delay={0} className="md:col-span-2">
        <div className="rounded-lg sm:rounded-2xl md:rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#2f97e8_0%,#184f82_100%)] p-5 sm:p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-white/95">
            03
          </div>
          <h3 className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Exclusive Resources
          </h3>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-white/88">
            Attend exclusive events, competitions, and trips.
          </p>
        </div>
        </Reveal>

        <Reveal delay={80} className="md:col-span-4">
        <div className="rounded-lg sm:rounded-2xl md:rounded-[30px] border border-white/15 bg-[linear-gradient(180deg,#9f163b_0%,#5a0d24_100%)] p-5 sm:p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.28)]">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-white/95">
            04
          </div>
          <h3 className="mt-3 sm:mt-4 md:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Entrepreneurial Essentials
          </h3>
          <p className="mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white/88">
            Learn how to prepare and pitch your startup.
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
