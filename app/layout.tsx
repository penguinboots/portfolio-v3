import "./globals.css";
import type { Metadata } from "next";
import { bodyFont } from "@/lib/fonts";
import ToasterProvider from "@/components/ToasterProvider";
import { cn } from "@/lib/utils";

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
      <body className={cn("bg-base bg-gradient-to-t from-base-grad via-base bg-fixed text-base-text", bodyFont.className)}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
