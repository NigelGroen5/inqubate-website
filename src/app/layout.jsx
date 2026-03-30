import "./globals.css";

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
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <div className="pointer-events-none absolute inset-0 -z-50 overflow-hidden">
          <div className="absolute inset-y-0 left-3 w-px bg-white/10 md:left-6" />
          <div className="absolute inset-y-0 right-3 w-px bg-white/10 md:right-6" />
          <div className="absolute left-[11%] top-24 h-3 w-3 rounded-full bg-[#ff4e6e]" />
          <div className="absolute left-[56%] top-12 h-3 w-3 rounded-full bg-white/90" />
          <div className="absolute right-[13%] top-20 h-5 w-5 rounded-full bg-[#ff365f]" />
          <div className="absolute left-[3%] top-[42%] h-4 w-4 rounded-full bg-[#ff4e6e]" />
          <div className="absolute right-[10%] top-[47%] h-3 w-3 rounded-full bg-[#ff4e6e]" />
          <div className="absolute right-[13%] top-[62%] h-3 w-3 rounded-full bg-[#ff4e6e]" />
          <div className="absolute left-[12%] bottom-20 h-8 w-8 rounded-full bg-white/95" />
          <div className="absolute left-[33%] bottom-24 h-5 w-5 rounded-full bg-[#ff4e6e]" />
          <div className="absolute -left-8 top-[36%] h-12 w-12 rounded-full bg-[#ff4e6e]" />
          <div className="absolute -right-10 top-[28%] h-24 w-24 rounded-full bg-[#c22647]" />
          <div className="absolute right-[-3.5rem] bottom-[18%] h-32 w-32 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ff4e6e_0%,#ff003c_52%,#8b0f28_100%)] opacity-95 blur-[1px]" />
          <div className="absolute left-[28%] bottom-[-4rem] h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,96,126,0.9)_0%,rgba(179,31,68,0.92)_70%,rgba(110,13,39,0.95)_100%)]" />
        </div>
        <div className="absolute -z-50 top-0 left-0 right-6 md:right-20">
          <img src="/landing-morph-lines.svg" alt="webs" className="w-full" />
        </div>
        {children}
      </body>
    </html>
  );
}
