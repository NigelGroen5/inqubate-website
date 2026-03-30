import Image from "next/image";

export default function Tube() {
  return (
    <div className="absolute -z-10 top-18 left-0 right-10 md:right-24">
      <Image
        src="/tube.svg"
        width={0}
        height={0}
        priority
        sizes="(min-width: 768px) calc(100vw - 10rem), calc(100vw - 3rem)"
        style={{ width: "90%", height: "860px" }}
        className="pointer-events-none select-none"
        alt="tube"
      />
    </div>
  );
}
