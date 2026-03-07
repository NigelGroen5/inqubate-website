import Image from "next/image";
import Tube from "./Tube";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="relative mb-36">
      <Tube />
      <Navbar />
      <Image
        src="/red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-0"
      />
      <Image
        src="/blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0"
      />
      <div className="relative h-[80vh] px-6 md:px-10">
        <div className="animate-fade-in pt-28 md:absolute md:left-[1.5%] md:top-[56%] md:w-[420px] md:-translate-y-1/2 md:pt-0">
          <h1 className="w-96 text-6xl font-bold leading-snug">
            Queen&apos;s <br /> #1 Incubator
          </h1>
          <p className="mt-3 text-3xl">🚀 Innovate, Collaborate, & Succeed</p>
        </div>

        <div className="animate-fade-in mt-14 md:absolute md:right-[20%] md:top-[50%] md:mt-0 md:w-[48vw] md:max-w-[680px]">
          <Image
            className="h-auto w-full"
            src="/innovate-disrupt-create.svg"
            width={680}
            height={460}
            alt="INNOVATE DISRUPT CREATE"
          />
        </div>
      </div>
    </div>
  );
}
