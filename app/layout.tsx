import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Virtual Renovation AI",
  description: "Virtual Renovation: AI-Powered Interior Design Platform",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "min-h-screen bg-slate-50 dark:bg-black font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ClerkProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col min-h-screen">
              <header className="sm:px-4">
                <Navbar />
              </header>
              <main className="container mx-auto max-w-7xl pt-16 px-4 sm:px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}
