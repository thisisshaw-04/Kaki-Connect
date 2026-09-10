import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/data";
import { PhoneFrame } from "@/components/phone-frame";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${brand.name} · ${brand.shortLine}`,
  description: brand.promise,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <PhoneFrame>{children}</PhoneFrame>
      </body>
    </html>
  );
}
