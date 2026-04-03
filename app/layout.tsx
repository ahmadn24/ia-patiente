import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IA Patiente — Assistante IA pour infirmières libérales",
  description:
    "Répondez à vos patients 24h/7j grâce à une IA. Essai gratuit 14 jours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body
        style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}
        className="min-h-full bg-[#0A0A0A] text-[#e5e5e5]"
      >
        {children}
      </body>
    </html>
  );
}
