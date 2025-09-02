import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a clean, neutral font
import "./globals.css";
import Header from "@/components/Header";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const fontSans = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Clarity.ai",
  description: "Your AI Decision Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans`}>
        <BackgroundAnimation />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}