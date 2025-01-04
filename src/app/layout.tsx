import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";

import "./ui/globals.css";

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--body",
});

export const metadata: Metadata = {
  title: "Systematic Chaos by IgnITe",
  description:
    "Annual cultural intercollegiate festival, proudly hosted by the IT department at Colaba campus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserratAlternates.variable}>
      <body className="bg-primaryImg text-white pt-36 xl:pt-56">
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
