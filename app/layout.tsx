import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arpit Jain — AI/ML Engineer & CS Student",
  description: "Personal portfolio website for Arpit Jain, AI/ML engineer and B.Tech CS student at TMU. Specializing in Python, FastAPI, and Deep Learning.",
  keywords: ["Arpit Jain", "AI ML Engineer", "Portfolio", "Teerthanker Mahaveer University", "FastAPI", "PyTorch"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className="bg-[#161513] text-[#EDECE8] font-sans antialiased selection:bg-[#EDECE8] selection:text-[#161513]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
