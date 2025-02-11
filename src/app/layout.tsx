import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils"

import { Sidebar } from "@/components/Sidebar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CT Imperio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistMono.className
        )}
      >
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
