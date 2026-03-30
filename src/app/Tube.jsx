import Image from "next/image";

export default function Tube() {
  return (
    <div className="absolute -z-10 top-20 left-0 right-6 md:right-20">
      <Image
        src="/tube.svg"
        width={0}
        height={0}
        priority
        sizes="(min-width: 768px) calc(100vw - 10rem), calc(100vw - 3rem)"
        style={{ width: "95%", height: "1000px" }}
        className="pointer-events-none select-none"
        alt="tube"
      />
    </div>
  );
}
