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
  title: "La Cucina di Giusy",
  description: "Il piano pasti settimanale di Giusy — ricette semplici e buone ogni giorno.",
  manifest: "/meal-planner/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "La Cucina di Giusy",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    type: "website",
    url: "https://lucasammarco.github.io/meal-planner/",
    title: "La Cucina di Giusy",
    description: "Il piano pasti settimanale di Giusy — ricette semplici e buone ogni giorno.",
    siteName: "La Cucina di Giusy",
    images: [
      {
        url: "https://lucasammarco.github.io/meal-planner/og-image.png",
        width: 1200,
        height: 630,
        alt: "La Cucina di Giusy — piano pasti settimanale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cucina di Giusy",
    description: "Il piano pasti settimanale di Giusy — ricette semplici e buone ogni giorno.",
    images: ["https://lucasammarco.github.io/meal-planner/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#E8734A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/meal-planner/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/meal-planner/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/meal-planner/icons/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/meal-planner/favicon.svg" color="#E8734A" />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`} style={{ background: '#FFF8F0' }}>
        <ServiceWorkerRegister />
        <NotificationManager />
        <main className="max-w-2xl mx-auto px-4 pt-4 pb-24">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
