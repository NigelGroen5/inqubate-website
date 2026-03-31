import Image from "next/image";
import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
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
  );
}
