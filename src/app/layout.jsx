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
        <div className="absolute -z-50 top-0 left-0 right-6 md:right-20">
          <img src="/landing-morph-lines.svg" alt="webs" className="w-full" />
        </div>
        {children}
      </body>
    </html>
  );
}
