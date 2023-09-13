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
      <body
        className={cn(
          `from-base-grad bg-base bg-gradient-to-t via-base
          bg-fixed text-base-text selection:bg-card-alt`,
          bodyFont.className,
        )}
      >
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
