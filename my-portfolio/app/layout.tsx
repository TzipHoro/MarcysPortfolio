import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcella Lehman - UX/UI Designer",
  description: "UX/UI Designer specializing in user-centered design, digital interfaces, and seamless user experiences.",
  keywords: ["UX designer", "UI designer", "product design", "interface design", "user experience", "portfolio"],
  authors: [{ name: "Marcella Lehman" }],
  openGraph: {
    title: "Marcella Lehman - UX/UI Designer",
    description: "Crafting intuitive and beautiful digital experiences",
    url: "https://Marcella Lehman-portfolio.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
