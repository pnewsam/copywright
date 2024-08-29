import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const gambarino = localFont({
  src: "./Gambarino-Regular.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Copywriting Services",
  description: "Copywriting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(gambarino.className, "text-stone-800")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
