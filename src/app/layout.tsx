import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const siteUrl = "https://wglewis0721.github.io/gme-church-website";
const ogImage = `https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&h=630&fit=crop&fm=webp`;

export const viewport: Viewport = {
  themeColor: "#5B2C83",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greater Mt. Olive AME Zion Church | Hayneville, AL",
    template: "%s | Greater Mt. Olive AME Zion Church",
  },
  description:
    "Rooted in Faith. Growing in Grace. Serving in Love. Join us for worship at Greater Mt. Olive AME Zion Church in Hayneville, Alabama.",
  keywords: [
    "church",
    "AME Zion",
    "Hayneville",
    "Alabama",
    "worship",
    "Greater Mt. Olive",
    "African Methodist Episcopal",
    "Christian",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Greater Mt. Olive AME Zion Church",
    title: "Greater Mt. Olive AME Zion Church | Hayneville, AL",
    description:
      "Rooted in Faith. Growing in Grace. Serving in Love. Join us for worship in Hayneville, Alabama.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Greater Mt. Olive AME Zion Church" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greater Mt. Olive AME Zion Church | Hayneville, AL",
    description:
      "Rooted in Faith. Growing in Grace. Serving in Love. Join us for worship in Hayneville, Alabama.",
    images: [ogImage],
  },
  manifest: "/gme-church-website/manifest.json",
  icons: {
    icon: "/gme-church-website/favicon.ico",
    apple: "/gme-church-website/icons/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Skip to main content for keyboard / screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-purple-deep focus:font-semibold focus:py-2 focus:px-4 focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
