import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // Import next/head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skodelabs - AI & Software Agency",
  description:
    "Skodelabs is an AI-driven software agency providing cutting-edge technology solutions.",
  keywords:
    "AI, Software Development, Machine Learning, Web Development, Custom Solutions",
  robots: "index, follow", // Let search engines index the site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />{" "}
        {/* Fallback for PNG */}
        {/* Additional SEO Metadata */}
        <meta
          name="description"
          content="Skodelabs is an AI-driven software agency providing cutting-edge technology solutions."
        />
        <meta
          name="keywords"
          content="AI, Software Development, Machine Learning, Web Development, Custom Solutions"
        />
        <meta name="author" content="Skodelabs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Skodelabs - AI & Software Agency" />
        <meta
          property="og:description"
          content="Skodelabs provides advanced AI solutions for your business needs."
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
