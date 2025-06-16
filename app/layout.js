import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "amon-sharma-3d.vercel.app";

// Centralized image constants
const ogImage = `${siteUrl}/og-image.png`;
const favicon = "/favicon.ico";
const shortcutIcon = "/favicon-32x32.png";
const appleIcon = "/apple-touch-icon.png";

export const metadata = {
  title: "Amon Sharma | Transformer 3D Portfolio",
  description: "Explore the futuristic 3D web portfolio of Amon Sharma, powered by Spline and Three.js.",
  keywords: [
    "Amon Sharma", "3D portfolio", "Transformer website", "Three.js portfolio",
    "Spline", "React developer", "Frontend engineer", "Creative developer", "WebGL"
  ],
  authors: [{ name: "Amon Sharma" }],
  creator: "Amon Sharma",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Amon Sharma | Transformer 3D Portfolio",
    description: "Experience a one-of-a-kind Transformer-themed 3D portfolio built with modern web tech.",
    url: siteUrl,
    siteName: "Amon Sharma",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Amon Sharma Transformer 3D Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amon Sharma | Transformer 3D Portfolio",
    description: "A futuristic 3D portfolio experience using Three.js and Spline.",
    images: [ogImage],
    creator: "@yourhandle", // Optional
  },
  icons: {
    icon: favicon,
    shortcut: shortcutIcon,
    apple: appleIcon,
  },
  themeColor: "#FFFA7F",
};

export default function RootLayout({ children }){
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={siteUrl} />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">
      <Analytics/>
      {children}
      </body>
    </html>
  );
}
