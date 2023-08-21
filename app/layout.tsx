import "./globals.css";
import type { Metadata } from "next";
import { bodyFont } from "@/lib/fonts";
import ToasterProvider from "@/components/ToasterProvider";

export const metadata: Metadata = {
  title: `Sabrina's Portfolio`,
  description: `Sabrina's Portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
