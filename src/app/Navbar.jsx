"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Past Projects", href: "/past-projects" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 mx-auto w-[min(1120px,92%)] pt-6">
      <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-md">
        <p className="text-lg font-semibold tracking-wide">inqubate</p>
        <ul className="flex flex-wrap items-center gap-2 text-sm md:text-base">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <Link
                href={tab.href}
                aria-current={pathname === tab.href ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition ${
                  pathname === tab.href
                    ? "bg-white text-black"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
