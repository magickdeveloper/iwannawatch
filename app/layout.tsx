import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            defaultTheme: "dark",
            themes: ["dark"],
            forcedTheme: "dark",
          }}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
