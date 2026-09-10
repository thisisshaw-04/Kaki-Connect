import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/data";
import { PhoneFrame } from "@/components/phone-frame";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${brand.name} · ${brand.shortLine}`,
  description: brand.promise,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <PhoneFrame>{children}</PhoneFrame>
      </body>
    </html>
  );
}
