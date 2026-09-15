import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andesshiprepair.com"),
  title: {
    default: "Andes Ship Repair Services | Ship Repair & Marine Engineering Philippines",
    template: "%s | Andes Ship Repair Services",
  },
  description:
    "Andes Ship Repair Services provides ship repair, marine engineering, hull and steel fabrication, machining, piping, mechanical, electrical, preservation and marine maintenance services in the Philippines.",
  openGraph: {
    type: "website",
    siteName: "Andes Ship Repair Services",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-text-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="min-w-0 flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0"
        >
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
