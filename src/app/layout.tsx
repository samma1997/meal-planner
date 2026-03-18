import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import NotificationManager from "@/components/NotificationManager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Piano Pasti Luca",
  description: "Piano alimentare settimanale per Luca — 2400 kcal/giorno per supportare l'allenamento in palestra.",
  manifest: "/meal-planner/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Piano Pasti",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  // Open Graph — used by WhatsApp, Telegram, iMessage link previews
  openGraph: {
    type: "website",
    url: "https://lucasammarco.github.io/meal-planner/",
    title: "Piano Pasti Luca",
    description: "Piano alimentare settimanale — 2400 kcal/giorno per supportare l'allenamento in palestra.",
    siteName: "Piano Pasti Luca",
    images: [
      {
        url: "https://lucasammarco.github.io/meal-planner/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piano Pasti Luca — app per il piano alimentare settimanale",
      },
    ],
  },
  // Twitter card (also used by some messengers)
  twitter: {
    card: "summary_large_image",
    title: "Piano Pasti Luca",
    description: "Piano alimentare settimanale — 2400 kcal/giorno per supportare l'allenamento in palestra.",
    images: ["https://lucasammarco.github.io/meal-planner/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Favicon — SVG for modern browsers */}
        <link rel="icon" href="/meal-planner/favicon.svg" type="image/svg+xml" />
        {/* Fallback ICO for very old browsers */}
        <link rel="icon" href="/meal-planner/favicon.ico" sizes="any" />
        {/* Apple touch icon for iOS home screen */}
        <link rel="apple-touch-icon" href="/meal-planner/icons/apple-touch-icon.svg" />
        {/* Mask icon for Safari pinned tabs */}
        <link rel="mask-icon" href="/meal-planner/favicon.svg" color="#f97316" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 min-h-screen`}>
        {/* PWA: service worker registration + install banner */}
        <ServiceWorkerRegister />
        {/* Daily meal reminder notifications prompt */}
        <NotificationManager />
        <main className="max-w-2xl mx-auto px-4 pt-4 pb-24">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
