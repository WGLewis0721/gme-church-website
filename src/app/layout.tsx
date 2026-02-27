import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Greater Mt. Olive AME Zion Church | Hayneville, AL",
  description: "Rooted in Faith. Growing in Grace. Serving in Love. Join us for worship at Greater Mt. Olive AME Zion Church in Hayneville, Alabama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
