import CursorBlob from "@/components/CursorBlob";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CursorBlob />
        <div className="backdrop-blur-[80px] -z-10 fixed left-0 top-0 w-screen h-screen" />
        {children}
      </body>
    </html>
  );
}
