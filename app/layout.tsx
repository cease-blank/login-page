import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sign in to GitHub",
  description: "GitHub is where people build software.",
  icons: {
    icon: "/favicon.ico", // ← browser tab logo (keep)
  },
  openGraph: {
    title: "Sign in to GitHub",
    description: "GitHub is where people build software.",
    url: "https://login-page-blue-sigma.vercel.app/",
    siteName: "GitHub",
    images: [
      {
        url: "https://login-page-blue-sigma.vercel.app/og-image.png", // ← WhatsApp preview
        width: 1200,
        height: 630,
        alt: "GitHub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign in to GitHub",
    description: "GitHub is where people build software.",
    images: ["https://login-page-blue-sigma.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}