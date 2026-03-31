import Reveal from "./Reveal";
import WhatIsInqubateStatsTube from "./WhatIsInqubateStatsTube";

export default function AboutSection() {
  return (
    <>
      <section className="relative z-10 mx-auto w-[min(1120px,92%)] py-8 md:py-12 lg:py-16">
        <Reveal>
          <h2 className="text-4xl font-bold">What is InQUbate?</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            We are Canada&apos;s first AI startup incubator dedicated to
            empowering student entrepreneurs to build and scale pre-seed
            ventures in the disruptive technology space. Throughout the
            program, teams refine their business models and develop technical
            products with real market validation. We provide 360° support,
            combining hands-on guidance, educational resources, and access to a
            strong professional network. Our focus is on helping students
            create commercially viable technologies while securing the funding
            needed to bring their ideas to life. Participants gain valuable
            experience through mentorship, speakers, and structured product and
            project support to keep their ventures on track. The program
            culminates in a demo day event, where teams pitch their startups
            and showcase their progress.
          </p>
        </Reveal>
      </section>
      <WhatIsInqubateStatsTube />
    </>
  );
}
