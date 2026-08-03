import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Uzi | UI Designer & Scripter",
  description:
    "Portfolio of Uzi, Roblox UI Designer and Scripter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] border-border/[var(--color-border)]" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
