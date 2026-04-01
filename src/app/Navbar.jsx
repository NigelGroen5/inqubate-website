"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Ventures", href: "/ventures" },
];

const DiscordIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.007-.12a10.15 10.15 0 0 0 .372-.294a.07.07 0 0 1 .073-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.098.246.198.373.295a.072.072 0 0 1-.006.119a12.901 12.901 0 0 1-1.873.892a.07.07 0 0 0-.037.099a14.85 14.85 0 0 0 1.293 2.1a.07.07 0 0 0 .084.028a19.862 19.862 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.057c.5-4.565-.838-8.628-3.549-12.987a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.931 2.155-2.157 2.155z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.764.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.207 4.288 2.696 6.767 6.984 6.975 1.279.058 1.704.07 4.948.07s3.669-.012 4.948-.07c4.288-.207 6.767-2.696 6.975-6.975.058-1.279.07-1.704.07-4.948s-.012-3.669-.07-4.948c-.207-4.288-2.696-6.767-6.975-6.975C15.669.012 15.244 0 12 0z" />
    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 mx-auto w-[min(1280px,92%)] pt-4 md:pt-5 lg:pt-6">
      <nav className="flex flex-wrap items-center justify-between gap-3 md:gap-4 lg:gap-4 rounded-full border border-white/20 bg-white/5 px-4 md:px-5 py-2 md:py-3 backdrop-blur-md">
        <Link href="/" aria-label="inqubate home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="inqubate logo"
            width={132}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>
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
          <li className="flex items-center">
            <Link
              href="https://www.instagram.com/inqubate.qu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 transition text-white/85 hover:bg-white/10 hover:text-white inline-flex items-center"
            >
              <InstagramIcon />
            </Link>
          </li>
          <li className="flex items-center ml-1">
            <Link
              href="#"
              aria-label="Discord"
              className="rounded-full p-2 transition text-white/85 hover:bg-white/10 hover:text-white inline-flex items-center"
            >
              <DiscordIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
