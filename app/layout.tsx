import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "MargShakti Industry Conclave 2025 | Highways, Logistics & Urban Futures",
  description: "Join India's premier infrastructure summit exploring highways, logistics & urban futures in the pathways to Viksit Bharat 2047. IIT (BHU) Varanasi, 21-22 November 2025.",
  keywords: "MargShakti, highways, infrastructure, India, IIT BHU, MoRTH, freight planning, AI, transportation",
  authors: [{ name: "IIT (BHU) Varanasi" }],
  openGraph: {
    title: "MargShakti Industry Conclave 2025",
    description: "Highways, Logistics & Urban Futures in the Pathways to Viksit Bharat 2047",
    url: "https://margshakti.in",
    siteName: "MargShakti",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MargShakti Industry Conclave 2025",
    description: "Highways, Logistics & Urban Futures | 21-22 Nov 2025 | IIT (BHU) Varanasi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
