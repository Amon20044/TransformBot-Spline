import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Initialize Inter font with optimized settings
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter", // CSS variable for better maintainability
});

// Environment variable with fallback
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amon-sharma-3d.vercel.app";

// Centralized image constants
const ogImage = `${siteUrl}/og-image.png`;

// Optimized metadata configuration
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amon Sharma | Transformer 3D Portfolio",
    template: "%s | Amon Sharma",
  },
  description: "Explore Amon Sharma's futuristic 3D web portfolio powered by Spline, showcasing innovative web development.",
  keywords: [
    "Amon Sharma",
    "3D portfolio",
    "Transformer website",
    "Three.js portfolio",
    "Spline",
    "React developer",
    "Frontend engineer",
    "Creative developer",
    "WebGL",
  ],
  authors: [{ name: "Amon Sharma" }],
  creator: "Amon Sharma",
  openGraph: {
    title: "Amon Sharma | Transformer 3D Portfolio",
    description: "Experience a unique Transformer-themed 3D portfolio built with modern web technologies.",
    url: siteUrl,
    siteName: "Amon Sharma",
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: "Amon Sharma Transformer 3D Portfolio",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amon Sharma | Transformer 3D Portfolio",
    description: "A Transformer-themed 3D portfolio experience using Spline.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFA7F" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Preconnect only to critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

// Optional: Enable static rendering for better performance
export const dynamic = "force-static";