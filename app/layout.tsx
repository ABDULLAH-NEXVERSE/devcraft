import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Megamenu } from "@/components/navigation/Megamenu";
import { Footer } from "@/components/navigation/Footer";
import { ScrollProgressBar } from "@/components/motion/ScrollReveal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devcraft.systems"),
  title: "DevCraft | Web, Mobile & AI Software Development",
  description:
    "DevCraft is a full-stack software development company building web, mobile, custom software, e-commerce and AI/ML-powered products for logistics, procurement, compliance, e-commerce, fintech and healthcare businesses, delivered by two teams across the UK and Pakistan.",
  icons: {
    icon: "/newlogo.png",
  },
  openGraph: {
    title: "DevCraft | Web, Mobile & AI Software Development",
    description:
      "Software, Crafted With Intent — Built by Two Teams, Delivered Around the Clock across the UK and Pakistan.",
    images: ["/newlogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://devcraft.systems/#organization",
        "name": "DevCraft",
        "url": "https://devcraft.systems",
        "logo": "https://devcraft.systems/newlogo.png",
        "description":
          "DevCraft is a full-stack software development company building web, mobile, custom software, e-commerce and AI/ML-powered products.",
        "email": "contact@nexverse.co.uk",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "contact@nexverse.co.uk",
            "areaServed": ["GB", "PK", "US", "AE"],
            "availableLanguage": ["English", "Urdu"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://devcraft.systems/#website",
        "url": "https://devcraft.systems",
        "name": "DevCraft",
        "publisher": {
          "@id": "https://devcraft.systems/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0B0B10] text-[#F6F6F8] selection:bg-[#18CB96] selection:text-[#0B0B10] antialiased">
        <ScrollProgressBar />
        <LenisProvider>
          <Megamenu />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
