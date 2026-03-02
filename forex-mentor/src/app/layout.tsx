import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Forex Mentorship | Institutional SMC Strategies",
  description: "Join the Inner Circle and master Forex trading with institutional SMC strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brandDark text-foreground min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
