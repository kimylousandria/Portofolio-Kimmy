import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { ContactBar } from "@/components/ContactBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kimmylukito.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.about,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: siteUrl,
    siteName: site.name,
    images: [
      {
        url: site.portraits.formal.src,
        width: 1200,
        height: 630,
        alt: site. portraits.formal.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [site.portraits.formal.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-text antialiased selection:bg-accent selection:text-bg pb-28">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-bg focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Ambient radial vignette & subtle film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-30 bg-wood-vignette opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 film-grain"
        />

        <div id="main-content" className="relative z-10">
          {children}
        </div>

        <ContactBar />
      </body>
    </html>
  );
}