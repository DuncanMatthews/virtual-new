import "@/styles/globals.css";
import { Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";

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
      <Head>
        <title>Test Title</title>
      </Head>
      <ClerkProvider>
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Navbar />

              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>

              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">Digital Transformations </p>
                </Link>
              </footer>
            </div>
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
