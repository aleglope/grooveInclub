import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Groove In Club",
  description: "Promotora de eventos, conciertos y DJ`s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta property="og:title" content="Groove In Club" />
        <meta property="og:description" content="Promotora de eventos, conciertos y DJ`s" />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://grooveinclub.es" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        {/* Otros meta tags para Open Graph */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
