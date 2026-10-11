import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Zunair Shahid, a full-stack AI engineer building scalable web products with MERN, Next.js, RAG, and multi-agent LLM systems.";

export const metadata: Metadata = {
  title: {
    default: "Zunair Shahid | Full-Stack AI Engineer",
    template: "%s | Zunair Shahid",
  },
  description,
  keywords: ["Zunair Shahid", "Full-Stack Developer", "AI Engineer", "MERN", "Next.js", "RAG", "LangGraph", "Lahore"],
  authors: [{ name: "Zunair Shahid" }],
  openGraph: {
    title: "Zunair Shahid | Full-Stack AI Engineer",
    description,
    type: "website",
    images: [{ url: "/Myself/portrait.jpeg", width: 762, height: 1600, alt: "Zunair Shahid" }],
  },
  twitter: {
    card: "summary",
    title: "Zunair Shahid | Full-Stack AI Engineer",
    description,
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
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
