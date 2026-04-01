import Image from "next/image";

export default function Tube() {
  return (
    <div
      className="pointer-events-none absolute z-0 hidden min-[1200px]:block"
      style={{
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        width: "90vw",
      }}
    >
      <Image
        src="/tube.svg"
        width={1920}
        height={860}
        priority
        sizes="95vw"
        className="pointer-events-none select-none h-auto w-full opacity-85"
        alt="tube"
      />
    </div>
  );
}
