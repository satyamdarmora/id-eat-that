import type { Metadata } from "next";
import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Id Eat That — by Pari Darmora",
  description:
    "A psychology blog by Pari Darmora, Class 12 student at Vasant Valley School, Delhi. Bite-sized psych, deep dives, spicy takes. The id wants what it wants.",
  authors: [{ name: "Pari Darmora" }],
  creator: "Pari Darmora",
  openGraph: {
    title: "Id Eat That — by Pari Darmora",
    description:
      "Psychology served fresh by Chef Pari. The id wants what it wants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-dark font-body">
        {children}
      </body>
    </html>
  );
}
