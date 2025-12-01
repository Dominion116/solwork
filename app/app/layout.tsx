import type { Metadata } from "next";
import "./globals.css";
import { AppKitProvider } from "@/contexts/AppKitProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SolWork - Decentralized Freelance Marketplace",
  description: "A trustless, blockchain-powered platform connecting clients and freelancers on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        <AppKitProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AppKitProvider>
      </body>
    </html>
  );
}
