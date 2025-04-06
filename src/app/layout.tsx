import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UmamiScript from "@/components/UmamiScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Spoof - QR Code Security Awareness",
  description: "Learn about QR code security and protect yourself from quishing attacks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <UmamiScript />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 