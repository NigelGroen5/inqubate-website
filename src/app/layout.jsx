import { Inter, Rubik, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], weight: "700", variable: "--font-rubik" });
const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-syne" });

export const metadata = {
  title: "InQUbate",
  description: "Landing hero",
  icons: {
    icon: "/logo_2.png",
    shortcut: "/logo_2.png",
    apple: "/logo_2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <body className={`${inter.className} ${rubik.variable} ${syne.variable} relative min-h-screen overflow-x-hidden bg-black text-white`}>
        <div className="pointer-events-none absolute inset-0 -z-50 overflow-hidden">
          <div className="absolute inset-y-0 left-3 w-px bg-white/10 md:left-6" />
          <div className="absolute inset-y-0 right-3 w-px bg-white/10 md:right-6" />
        </div>
        <div className="absolute -z-50 top-0 left-0 right-6 md:right-20">
          <img src="/landing-morph-lines.svg" alt="webs" className="w-full" />
        </div>
        {children}
      </body>
    </html>
  );
}
