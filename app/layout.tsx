import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./contexts/LenisContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aleksandar Timic | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with deep expertise in React, Next.js, TypeScript, Three.js, and interactive web experiences.",
  metadataBase: new URL("https://aleksandartimic.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "React Three Fiber",
    "Creative Developer",
    "Web Developer",
    "Aleksandar Timic",
  ],
  authors: [{ name: "Aleksandar Timic" }],
  creator: "Aleksandar Timic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aleksandartimic.com",
    title: "Aleksandar Timic | Senior Frontend Developer",
    description:
      "Senior Frontend Developer crafting immersive, interactive web experiences with React, Next.js, Three.js, and modern animation systems.",
    siteName: "Aleksandar Timic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleksandar Timic | Senior Frontend Developer",
    description:
      "Senior Frontend Developer crafting immersive, interactive web experiences with React, Next.js, Three.js, and modern animation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sourceSans3.variable}`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
